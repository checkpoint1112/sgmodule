// bilibili-cdn-switcher.js
(function () {
    // 目標 CDN 地址
    const TARGET_CDN = "https://cn-jssz-cm-02-07.bilivideo.com/";

    // 處理響應數據
    let body = $response.body;

    if (!body) {
        console.log("[Bilibili CDN Switcher] 響應數據為空");
        $done({ body });
    }

    try {
        // 解析 JSON 響應
        const playInfo = JSON.parse(body);

        // 檢查是否有錯誤
        if (playInfo.code !== undefined && playInfo.code !== 0) {
            console.log("[Bilibili CDN Switcher] 獲取 playInfo 失敗:", playInfo.message);
            $done({ body });
        }

        // 處理 video_info
        let video_info;
        if (playInfo.result) {
            // 番劇頁面
            video_info = playInfo.result.dash === undefined ? playInfo.result.video_info : playInfo.result;
            if (!video_info?.dash) {
                if (playInfo.result.durl && playInfo.result.durls) {
                    video_info = playInfo.result;
                } else {
                    console.log("[Bilibili CDN Switcher] 無法獲取 video_info:", playInfo.result.play_check?.limit_play_reason);
                }

                // 處理 durl 和 durls（試看模式）
                if (video_info?.durl) {
                    video_info.durl.forEach(item => {
                        item.url = item.url.replace(/https:\/\/.*?\//, TARGET_CDN);
                    });
                }
                if (video_info?.durls) {
                    video_info.durls.forEach(durl => {
                        if (durl.durl) {
                            durl.durl.forEach(item => {
                                item.url = item.url.replace(/https:\/\/.*?\//, TARGET_CDN);
                            });
                        }
                    });
                }
                // 更新響應
                $done({ body: JSON.stringify(playInfo) });
            }
        } else {
            // 普通視頻頁面
            video_info = playInfo.data;
        }

        // 處理 DASH 格式（video 和 audio）
        if (video_info.dash) {
            if (video_info.dash.video) {
                video_info.dash.video.forEach(item => {
                    item.base_url = item.base_url.replace(/https:\/\/.*?\//, TARGET_CDN);
                    item.baseUrl = item.base_url; // 同步 baseUrl
                });
            }
            if (video_info.dash.audio) {
                video_info.dash.audio.forEach(item => {
                    item.base_url = item.base_url.replace(/https:\/\/.*?\//, TARGET_CDN);
                    item.baseUrl = item.base_url; // 同步 baseUrl
                });
            }
        } else if (video_info.durl) {
            // 處理非 DASH 格式（例如充電專屬視頻）
            video_info.durl.forEach(item => {
                item.url = item.url.replace(/https:\/\/.*?\//, TARGET_CDN);
            });
        } else {
            console.log("[Bilibili CDN Switcher] 無法處理 video_info:", video_info);
        }

        // 更新響應數據
        $done({ body: JSON.stringify(playInfo) });
    } catch (err) {
        console.log("[Bilibili CDN Switcher] 處理響應時出錯:", err);
        $done({ body });
    }
})();
