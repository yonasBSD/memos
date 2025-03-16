System.register([],(function(e,o){"use strict";return{execute:function(){const o=e("about",{blogs:"部落格",description:"以隱私為核心的輕量化筆記服務，輕鬆記錄並分享您的好點子。",documents:"文件","github-repository":"GitHub 儲存庫","official-website":"官方網站"}),t=e("auth",{"create-your-account":"建立您的帳號","host-tip":"您註冊為此站台之管理員。","new-password":"新密碼","repeat-new-password":"再次輸入新密碼","sign-in-tip":"已經有帳戶了嗎？","sign-up-tip":"還沒有帳戶？"}),a=e("common",{about:"關於",add:"新增",admin:"管理",archive:"封存",archived:"封存",avatar:"頭像",basic:"基礎",beta:"測試版",cancel:"取消",change:"變更",clear:"清除",close:"關閉",collapse:"摺疊",confirm:"確認",create:"建立",database:"資料庫",day:"日",days:"日子",delete:"刪除",description:"說明",edit:"編輯",email:"信箱",expand:"展開",explore:"探索",file:"檔案",filter:"過濾器",home:"首頁",image:"圖片",in:"在",inbox:"通知",language:"語言","learn-more":"了解",link:"連結",mark:"Mark",memo:"Memo",memos:"備忘錄",name:"名稱",new:"新增",nickname:"暱稱",null:"空",or:"或",password:"密碼",pin:"釘選",pinned:"固定在最前面",preview:"預覽",profile:"個人專頁","remember-me":"記住我",rename:"更名",reset:"重設",resources:"資源庫",restore:"還原",role:"身份",save:"儲存",search:"搜尋",select:"選擇",settings:"設定",share:"分享","sign-in":"登入","sign-in-with":"使用 {{provider}} 登入","sign-out":"登出","sign-up":"註冊",statistics:"統計",tags:"標籤",title:"標題",type:"類型",unpin:"解除釘選",update:"更新",upload:"上傳",username:"帳號",version:"版本",visibility:"可見度",yourself:"你自己"}),s=e("days",{fri:"五",mon:"一",sat:"六",sun:"日",thu:"四",tue:"二",wed:"三"}),i=e("editor",{"add-your-comment-here":"在這裡添加您的評論...","any-thoughts":"任何想法...",save:"儲存"}),n=e("inbox",{"memo-comment":"{{user}} 對您的 {{memo}} 發表了評論。","version-update":"新版本 {{version}} 現已推出！"}),r=e("markdown",{checkbox:"核取方塊","code-block":"程式碼區塊","content-syntax":"內容語法"}),l=e("memo",{"archived-at":"封存於","click-to-hide-nsfw-content":"點擊隱藏 NSFW 內容","click-to-show-nsfw-content":"點擊顯示 NSFW 內容",code:"程式碼",comment:{self:"評論","write-a-comment":"寫下留言"},"copy-link":"複製連結","count-memos-in-date":"{{date}}的{{count}}個備忘錄","delete-confirm":"您確定要刪除此 Memo？\n\n此操作無法逆轉",direction:"方向","direction-asc":"升序","direction-desc":"降序","display-time":"顯示時間",filters:"篩選",links:"連結","load-more":"載入更多","no-archived-memos":"無封存的 Memos","no-memos":"沒有備忘錄","order-by":"按照排序","remove-completed-task-list-items":"移除已完成","remove-completed-task-list-items-confirm":"您確定要移除所有完成的待辦嗎？（此操作不可逆）","search-placeholder":"搜尋 Memos","show-less":"顯示較少","show-more":"查看更多","to-do":"待辦","view-detail":"查看詳情",visibility:{disabled:"公共 Memo 已停用",private:"私人",protected:"成員可見",public:"公開給所有人"}}),c=e("message",{"archived-successfully":"封存成功","change-memo-created-time":"變更 Memo 建立時間",copied:"已複製","deleted-successfully":"已成功刪除","description-is-required":"需要描述","failed-to-embed-memo":"嵌入備忘錄失敗","fill-all":"請填寫所有欄位。","fill-all-required-fields":"請填寫所有必填欄位","maximum-upload-size-is":"最大允許檔案上傳大小 {{size}} MiB","memo-not-found":"找不到 Memo","new-password-not-match":"新密碼不一致。","no-data":"或許尋覓虛空，或者改換選擇之軌跡。","password-changed":"密碼變更完成","password-not-match":"密碼不一致。","remove-completed-task-list-items-successfully":"移除成功！","restored-successfully":"還原成功","succeed-copy-link":"複製連結到剪貼簿成功。","update-succeed":"更新成功","user-not-found":"查無該使用者"}),d=e("reference",{"add-references":"添加參考資料","embedded-usage":"作為嵌入式內容使用","no-memos-found":"未找到任何備忘錄","search-placeholder":"搜尋內容"}),m=e("resource",{clear:"清除","copy-link":"複製連結","create-dialog":{"external-link":{"file-name":"檔案名稱","file-name-placeholder":"檔案名稱",link:"連結","link-placeholder":"https://the.link.to/your/resource",option:"外部連結",type:"類型","type-placeholder":"檔案類型"},"local-file":{choose:"選擇檔案…",option:"本機檔案"},title:"新增資源","upload-method":"上傳方式"},"delete-resource":"刪除資源","delete-selected-resources":"刪除所選的資源","fetching-data":"抓取資料…","file-drag-drop-prompt":"拖曳您的檔案到此處以上傳檔案","linked-amount":"連結的數量","no-files-selected":"沒有選取檔案","no-resources":"沒有資源。","no-unused-resources":"無未使用的資源","reset-link":"重設連結","reset-link-prompt":"您確定要重設鏈接嗎？\n這將中斷所有當前的鏈接用法。\n\n此操作是不可逆的。","reset-resource-link":"重設資源連結"}),p=e("router",{"back-to-top":"回到頂部","go-to-home":"回到首頁"}),u=e("setting",{"access-token-section":{"access-token-copied-to-clipboard":"存取令牌已複製到剪貼簿","access-token-deletion":"您確定要刪除存取令牌 {{accessToken}} 嗎？此操作無法恢復。","create-dialog":{"create-access-token":"建立存取令牌","created-at":"建立時間",description:"描述","duration-1m":"1 個月","duration-8h":"8 小時","duration-never":"永不過期",expiration:"過期時間","expires-at":"過期時間","some-description":"請輸入描述..."},description:"此處列出您帳號的所有存取令牌。",title:"存取令牌",token:"令牌"},"account-section":{"change-password":"變更密碼","email-note":"非必須的","export-memos":"導出 Memos","nickname-note":"顯示於橫幅","openapi-reset":"重設 OpenAPI 密鑰（Key）","openapi-sample-post":"哈囉 來自 {{url}} 的 #memos","openapi-title":"OpenAPI","reset-api":"重設 API",title:"帳號資訊","update-information":"更新個人資訊","username-note":"為登入用途"},"appearance-option":{dark:"總是深色",light:"總是淺色",system:"跟隨系統"},member:"使用者","member-list":"使用者列表","member-section":{"archive-member":"封存使用者","archive-warning":"您確定要封存 {{username}}?","create-a-member":"新增使用者","delete-member":"刪除使用者","delete-warning":"您確定要刪除 {{username}}?\n\n此操作無法逆轉"},"memo-related":"Memo","memo-related-settings":{"content-lenght-limit":"內容長度限制（位元組）","enable-blur-nsfw-content":"啟用 NSFW 內容模糊化（在下方添加 NSFW 標籤）","enable-link-preview":"啟用連結預覽","enable-memo-comments":"啟用備忘評論","enable-memo-location":"啟用備忘位置",reactions:"表情回應",title:"備忘相關設定"},"my-account":"我的帳號",preference:"偏好設定","preference-section":{"default-memo-sort-option":"Memo 顯示時間","default-memo-visibility":"Memo 預設之能見度",theme:"主題"},sso:"SSO","sso-section":{"authorization-endpoint":"驗證端點（Authorization Endpoint）","client-id":"客戶端 ID（Client ID）","client-secret":"客戶端金鑰（Client Secret）","confirm-delete":'您確定要刪除 "{{name}}" 的單點登錄 (SSO) 配置嗎？\n\n此操作是不可逆的。',"create-sso":"新增 SSO",custom:"自訂","delete-sso":"確認刪除","disabled-password-login-warning":"已停用密碼登入，删除身份提供程式時，請格外小心","display-name":"顯示名稱",identifier:"識別碼（Identifier）","identifier-filter":"識別碼過濾器（Identifier Filter）","no-sso-found":"沒有設定 SSO","redirect-url":"重新導向網址",scopes:"範圍","single-sign-on":"設定單一登入 SSO 進行身份驗證","sso-created":"SSO {{name}} 新增成功","sso-list":"SSO 列表","sso-updated":"SSO {{name}} 更新成功",template:"範本","token-endpoint":"權杖端點（Token Endpoint）","update-sso":"更新 SSO","user-endpoint":"使用者端點（User Endpoint）"},storage:"儲存空間","storage-section":{accesskey:"存取金鑰（Access key）","accesskey-placeholder":"存取金鑰 / 存取 ID",bucket:"Bucket","bucket-placeholder":"Bucket 名稱","create-a-service":"建立服務","create-storage":"新增儲存空間","current-storage":"目前的儲存空間","delete-storage":"刪除儲存",endpoint:"端點（Endpoint）","local-storage-path":"本機儲存空間路徑",path:"儲存空間路徑","path-description":"您可以使用與本機儲存空間相同的動態變數，如 {filename}","path-placeholder":"custom/path","presign-placeholder":"預簽名 URL（可選）",region:"地區","region-placeholder":"地區名稱","s3-compatible-url":"S3 相容網址",secretkey:"金鑰","secretkey-placeholder":"金鑰 / 存取金鑰","storage-services":"儲存服務列表","type-database":"資料庫","type-local":"本機","update-a-service":"更新服務","update-local-path":"更新本機儲存空間路徑","update-local-path-description":"本機儲存空間路徑為資料庫檔案的相對路徑","update-storage":"更新儲存空間","url-prefix":"網址前綴","url-prefix-placeholder":"自訂網址前綴，選填","url-suffix":"網址後綴","url-suffix-placeholder":"自訂網址後綴，選填","warning-text":'您確定要刪除存儲服務 "{{name}}" 嗎？\n\n此操作是不可逆的。'},system:"系統","system-section":{"additional-script":"自訂腳本","additional-script-placeholder":"自訂 JavaScript 代碼","additional-style":"自訂樣式","additional-style-placeholder":"自訂 CSS 代碼","allow-user-signup":"允許使用者註冊","customize-server":{appearance:"伺服器外觀",description:"描述","icon-url":"圖示網址",locale:"伺服器語言",title:"自訂伺服器"},"disable-markdown-shortcuts-in-editor":"停用編輯器 Markdown 快捷鍵","disable-password-login":"禁用密碼登入","disable-password-login-final-warning":"如果你知道自己在做什麼，請輸入「CONFIRM」。","disable-password-login-warning":"所有使用者將無法使用密碼登入。如果設定的身份識別提供者失效，不在資料庫中恢復此設定將無法登入。刪除身分識別提供者時也要特別小心❗","disable-public-memos":"停用公共 Memo","display-with-updated-time":"顯示更新時間","enable-auto-compact":"啟用摺疊顯示","enable-double-click-to-edit":"啟用雙擊後編輯","enable-password-login":"啟用密碼登入","enable-password-login-warning":"啟用所有使用者的密碼登入。如果希望使用者同時使用 SSO 和密碼登入，請開啟密碼登入","max-upload-size":"最大上傳檔案大小 (MiB)","max-upload-size-hint":"建議值為 32 MiB。","removed-completed-task-list-items":"啟用移除已完成","server-name":"伺服器名稱"},version:"版本","webhook-section":{"create-dialog":{"an-easy-to-remember-name":"一個容易記住的名稱","create-webhook":"建立 Webhook","edit-webhook":"編輯 Webhook","payload-url":"負載網址",title:"標題","url-example-post-receive":"https://example.com/postreceive"},"no-webhooks-found":"尚未建立任何 Webhook。",title:"Webhook",url:"網址"},"workspace-section":{"disallow-change-nickname":"禁止更改暱稱","disallow-change-username":"禁止更改用戶名稱","disallow-password-auth":"禁止使用密碼驗證","disallow-user-registration":"禁止用戶註冊",monday:"星期一",saturday:"星期六",sunday:"星期日","week-start-day":"每週起始日"}}),h=e("tag",{"all-tags":"所有標籤","create-tag":"建立標籤","create-tags-guide":"您可以通過輸入`#標籤`來創建標籤。","delete-confirm":"您確定要刪除此標籤嗎？所有關聯的memos將會被封存","delete-tag":"刪除標籤","no-tag-found":"找不到標籤"});e("default",{about:o,auth:t,common:a,days:s,editor:i,inbox:n,markdown:r,memo:l,message:c,reference:d,resource:m,router:p,setting:u,tag:h})}}}));
