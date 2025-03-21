// bilibili-cdn-switcher.js
(function () {
    const TARGET_CDN = "cn-gdsz-twsx-bcache-04.bilivideo.com";

    let body = $response.body;
    if (!body) {
        console.log("[Bilibili CDN Switcher] 響應數據為空");
        $done({ body });
    }

    try {
        const playInfo = JSON.parse(body);
        if (playInfo.code !== undefined && playInfo.code !== 0) {
            console.log("[Bilibili CDN Switcher] 獲取 playInfo 失敗:", playInfo.message);
            $done({ body });
        }

        let video_info;
        if (playInfo.result) {
            video_info = playInfo.result.dash === undefined ? playInfo.result.video_info : playInfo.result;
            if (!video_info?.dash) {
                if (playInfo.result.durl && playInfo.result.durls) {
                    video_info = playInfo.result;
                } else {
                    console.log("[Bilibili CDN Switcher] 無法獲取 video_info:", playInfo.result.play_check?.limit_play_reason);
                }

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
                $done({ body: JSON.stringify(playInfo) });
            }
        } else {
            video_info = playInfo.data;
        }

        if (video_info.dash) {
            if (video_info.dash.video) {
                video_info.dash.video.forEach(item => {
                    item.base_url = item.base_url.replace(/https:\/\/.*?\//, TARGET_CDN);
                    item.baseUrl = item.base_url;
                });
            }
            if (video_info.dash.audio) {
                video_info.dash.audio.forEach(item => {
                    item.base_url = item.base_url.replace(/https:\/\/.*?\//, TARGET_CDN);
                    item.baseUrl = item.base_url;
                });
            }
        } else if (video_info.durl) {
            video_info.durl.forEach(item => {
                item.url = item.url.replace(/https:\/\/.*?\//, TARGET_CDN);
            });
        } else {
            console.log("[Bilibili CDN Switcher] 無法處理 video_info:", video_info);
        }

        $done({ body: JSON.stringify(playInfo) });
    } catch (err) {
        console.log("[Bilibili CDN Switcher] 處理響應時出錯:", err);
        $done({ body });
    }
})();
