System.register([],(function(e,a){"use strict";return{execute:function(){const a=e("about",{blogs:"Bloglar",description:"Gizlilik öncelikli, hafif bir not alma servisi. Harika düşüncelerinizi kolayca yakalayın ve paylaşın.",documents:"Belgeler","github-repository":"GitHub Deposu","official-website":"Resmi Web Sitesi"}),i=e("auth",{"create-your-account":"Hesabınızı oluşturun","host-tip":"Site Yöneticisi olarak kayıt oluyorsunuz.","new-password":"Yeni şifre","repeat-new-password":"Yeni şifreyi tekrar girin","sign-in-tip":"Zaten hesabınız var mı?","sign-up-tip":"Henüz hesabınız yok mu?"}),l=e("common",{about:"Hakkında",add:"Ekle",admin:"Yönetici",archive:"Arşiv",archived:"Arşivlendi",avatar:"Profil Resmi",basic:"Temel",beta:"Beta",cancel:"İptal",change:"Değiştir",clear:"Temizle",close:"Kapat",collapse:"Daralt",confirm:"Onayla",create:"Oluştur",database:"Veritabanı",day:"Gün",days:"Gün",delete:"Sil",description:"Açıklama",edit:"Düzenle",email:"E-posta",expand:"Genişlet",explore:"Keşfet",file:"Dosya",filter:"Filtrele",home:"Ana Sayfa",image:"Görsel",in:"İçinde",inbox:"Gelen Kutusu",language:"Dil","learn-more":"Daha fazla bilgi",link:"Bağlantı",mark:"İşaretle",memo:"Not",memos:"Notlar",name:"İsim",new:"Yeni",nickname:"Takma Ad",null:"Boş",or:"veya",password:"Şifre",pin:"Sabitle",pinned:"Sabitlendi",preview:"Önizleme",profile:"Profil","remember-me":"Beni hatırla",rename:"Yeniden adlandır",reset:"Sıfırla",resources:"Kaynaklar",restore:"Geri yükle",role:"Rol",save:"Kaydet",search:"Ara",select:"Seç",settings:"Ayarlar",share:"Paylaş",shortcuts:"Kısayollar","sign-in":"Giriş yap","sign-in-with":"{{provider}} ile giriş yap","sign-out":"Çıkış yap","sign-up":"Kayıt ol",statistics:"İstatistikler",tags:"Etiketler",title:"Başlık",type:"Tür",unpin:"Sabitlemeyi kaldır",update:"Güncelle",upload:"Yükle",username:"Kullanıcı adı",version:"Sürüm",visibility:"Görünürlük",yourself:"Kendiniz"}),r=e("days",{fri:"Cum",mon:"Pzt",sat:"Cmt",sun:"Paz",thu:"Per",tue:"Sal",wed:"Çar"}),n=e("editor",{"add-your-comment-here":"Yorumunuzu buraya ekleyin...","any-thoughts":"Düşünceleriniz...",save:"Kaydet"}),t=e("inbox",{"memo-comment":"{{user}} {{memo}} notunuza yorum yaptı.","version-update":"Yeni sürüm {{version}} kullanıma hazır!"}),o=e("markdown",{checkbox:"Onay kutusu","code-block":"Kod bloğu","content-syntax":"İçerik sözdizimi"}),s=e("memo",{"archived-at":"Arşivlenme tarihi",code:"Kod",comment:{self:"Yorumlar","write-a-comment":"Yorum yaz"},"copy-link":"Bağlantıyı Kopyala","count-memos-in-date":"{{date}} tarihinde {{count}} {{memos}}","delete-confirm":"Bu notu silmek istediğinizden emin misiniz? BU İŞLEM GERİ ALINAMAZ",direction:"Yön","direction-asc":"Artan","direction-desc":"Azalan","display-time":"Görüntüleme Zamanı",filters:"Filtreler",links:"Bağlantılar","load-more":"Daha fazla yükle","no-archived-memos":"Arşivlenmiş not yok.","no-memos":"Not yok.","order-by":"Sıralama Ölçütü","remove-completed-task-list-items":"Tamamlananları kaldır","remove-completed-task-list-items-confirm":"Tamamlanan tüm görevleri kaldırmak istediğinizden emin misiniz? BU İŞLEM GERİ ALINAMAZ","search-placeholder":"Notlarda ara","show-less":"Daha az göster","show-more":"Daha fazla göster","to-do":"Yapılacaklar","view-detail":"Detayları Görüntüle",visibility:{disabled:"Herkese açık notlar devre dışı",private:"Özel",protected:"Çalışma Alanı",public:"Herkese Açık"}}),m=e("message",{"archived-successfully":"Başarıyla arşivlendi","change-memo-created-time":"Not oluşturma zamanını değiştir",copied:"Kopyalandı","deleted-successfully":"Başarıyla silindi","description-is-required":"Açıklama gerekli","failed-to-embed-memo":"Not gömme işlemi başarısız","fill-all":"Lütfen tüm alanları doldurun.","fill-all-required-fields":"Lütfen tüm gerekli alanları doldurun","maximum-upload-size-is":"Maksimum yükleme boyutu {{size}} MiB","memo-not-found":"Not bulunamadı.","new-password-not-match":"Yeni şifreler eşleşmiyor.","no-data":"Veri bulunamadı.","password-changed":"Şifre Değiştirildi","password-not-match":"Şifreler eşleşmiyor.","remove-completed-task-list-items-successfully":"Kaldırma işlemi başarılı","restored-successfully":"Başarıyla geri yüklendi","succeed-copy-link":"Bağlantı başarıyla kopyalandı.","update-succeed":"Güncelleme başarılı","user-not-found":"Kullanıcı bulunamadı"}),d=e("reference",{"add-references":"Referans ekle","embedded-usage":"Gömülü İçerik Olarak Kullan","no-memos-found":"Not bulunamadı","search-placeholder":"İçerik ara"}),u=e("resource",{clear:"Temizle","copy-link":"Bağlantıyı Kopyala","create-dialog":{"external-link":{"file-name":"Dosya adı","file-name-placeholder":"Dosya adı",link:"Bağlantı","link-placeholder":"https://kaynaginizin.baglantisi/dosyaniza",option:"Harici bağlantı",type:"Tür","type-placeholder":"Dosya türü"},"local-file":{choose:"Bir dosya seçin...",option:"Yerel dosya"},title:"Kaynak Oluştur","upload-method":"Yükleme yöntemi"},"delete-resource":"Kaynağı Sil","delete-selected-resources":"Seçili Kaynakları Sil","fetching-data":"Veriler alınıyor…","file-drag-drop-prompt":"Dosya yüklemek için dosyanızı buraya sürükleyip bırakın","linked-amount":"Bağlantı sayısı","no-files-selected":"Dosya seçilmedi","no-resources":"Kaynak yok.","no-unused-resources":"Kullanılmayan kaynak yok","reset-link":"Bağlantıyı Sıfırla","reset-link-prompt":"Bağlantıyı sıfırlamak istediğinizden emin misiniz? Bu işlem mevcut tüm bağlantı kullanımlarını bozacaktır. BU İŞLEM GERİ ALINAMAZ","reset-resource-link":"Kaynak Bağlantısını Sıfırla"}),c=e("router",{"back-to-top":"Başa Dön","go-to-home":"Ana Sayfaya Git"}),k=e("setting",{"access-token-section":{"access-token-copied-to-clipboard":"Erişim tokeni panoya kopyalandı","access-token-deletion":"{{accessToken}} erişim tokenini silmek istediğinizden emin misiniz? BU İŞLEM GERİ ALINAMAZ.","create-dialog":{"create-access-token":"Erişim Tokeni Oluştur","created-at":"Oluşturulma Tarihi",description:"Açıklama","duration-1m":"1 Ay","duration-8h":"8 Saat","duration-never":"Asla",expiration:"Son Kullanma Tarihi","expires-at":"Sona Erme Tarihi","some-description":"Bir açıklama..."},description:"Hesabınız için tüm erişim tokenlerinin listesi.",title:"Erişim Tokenleri",token:"Token"},"account-section":{"change-password":"Şifre değiştir","email-note":"İsteğe bağlı","export-memos":"Notları Dışa Aktar","nickname-note":"Banner'da görüntülenir","openapi-reset":"OpenAPI Anahtarını Sıfırla","openapi-sample-post":"Merhaba #memos, {{url}} adresinden","openapi-title":"OpenAPI","reset-api":"API'yi Sıfırla",title:"Hesap Bilgileri","update-information":"Bilgileri Güncelle","username-note":"Giriş yapmak için kullanılır"},"appearance-option":{dark:"Her zaman koyu",light:"Her zaman açık",system:"Sistemi takip et"},member:"Üye","member-list":"Üye listesi","member-section":{"archive-member":"Üyeyi arşivle","archive-warning":"{{username}} kullanıcısını arşivlemek istediğinizden emin misiniz?","create-a-member":"Üye oluştur","delete-member":"Üyeyi Sil","delete-warning":"{{username}} kullanıcısını silmek istediğinizden emin misiniz? BU İŞLEM GERİ ALINAMAZ"},"memo-related":"Not","memo-related-settings":{"content-lenght-limit":"İçerik uzunluğu sınırı (Bayt)","enable-link-preview":"Bağlantı önizlemeyi etkinleştir","enable-memo-comments":"Not yorumlarını etkinleştir","enable-memo-location":"Not konumunu etkinleştir",reactions:"Tepkiler",title:"Not ile ilgili ayarlar"},"my-account":"Hesabım",preference:"Tercihler","preference-section":{"default-memo-sort-option":"Not görüntüleme zamanı","default-memo-visibility":"Varsayılan not görünürlüğü",theme:"Tema"},sso:"SSO","sso-section":{"authorization-endpoint":"Yetkilendirme uç noktası","client-id":"İstemci Kimliği","client-secret":"İstemci Gizli Anahtarı","confirm-delete":'"{{name}}" SSO yapılandırmasını silmek istediğinizden emin misiniz? BU İŞLEM GERİ ALINAMAZ',"create-sso":"SSO Oluştur",custom:"Özel","delete-sso":"Silmeyi onayla","disabled-password-login-warning":"Şifre ile giriş devre dışı bırakıldı, kimlik sağlayıcıları kaldırırken çok dikkatli olun","display-name":"Görünen Ad",identifier:"Tanımlayıcı","identifier-filter":"Tanımlayıcı Filtresi","no-sso-found":"SSO bulunamadı.","redirect-url":"Yönlendirme URL'si",scopes:"Kapsamlar","single-sign-on":"Kimlik Doğrulama için Tek Oturum Açma (SSO) Yapılandırması","sso-created":"SSO {{name}} oluşturuldu","sso-list":"SSO Listesi","sso-updated":"SSO {{name}} güncellendi",template:"Şablon","token-endpoint":"Token uç noktası","update-sso":"SSO'yu Güncelle","user-endpoint":"Kullanıcı uç noktası"},storage:"Depolama","storage-section":{accesskey:"Erişim anahtarı","accesskey-placeholder":"Erişim anahtarı / Erişim Kimliği",bucket:"Bucket","bucket-placeholder":"Bucket adı","create-a-service":"Servis oluştur","create-storage":"Depolama Oluştur","current-storage":"Mevcut nesne depolama","delete-storage":"Depolamayı Sil",endpoint:"Uç nokta","local-storage-path":"Yerel depolama yolu",path:"Depolama Yolu","path-description":"Yerel depolamadaki gibi {filename} gibi aynı dinamik değişkenleri kullanabilirsiniz","path-placeholder":"özel/yol","presign-placeholder":"Ön imzalı URL, isteğe bağlı",region:"Bölge","region-placeholder":"Bölge adı","s3-compatible-url":"S3 Uyumlu URL",secretkey:"Gizli anahtar","secretkey-placeholder":"Gizli anahtar / Erişim Anahtarı","storage-services":"Depolama servisleri","type-database":"Veritabanı","type-local":"Yerel dosya sistemi","update-a-service":"Servisi güncelle","update-local-path":"Yerel Depolama Yolunu Güncelle","update-local-path-description":"Yerel depolama yolu, veritabanı dosyanıza göre göreceli bir yoldur","update-storage":"Depolamayı Güncelle","url-prefix":"URL öneki","url-prefix-placeholder":"Özel URL öneki, isteğe bağlı","url-suffix":"URL soneki","url-suffix-placeholder":"Özel URL soneki, isteğe bağlı","warning-text":'"{{name}}" depolama servisini silmek istediğinizden emin misiniz? BU İŞLEM GERİ ALINAMAZ'},system:"Sistem","system-section":{"additional-script":"Ek script","additional-script-placeholder":"Ek JavaScript kodu","additional-style":"Ek stil","additional-style-placeholder":"Ek CSS kodu","allow-user-signup":"Kullanıcı kaydına izin ver","customize-server":{appearance:"Sunucu Görünümü",description:"Açıklama","icon-url":"İkon URL'si",locale:"Sunucu Yerel Ayarı",title:"Sunucuyu Özelleştir"},"disable-markdown-shortcuts-in-editor":"Editörde Markdown kısayollarını devre dışı bırak","disable-password-login":"Şifre ile girişi devre dışı bırak","disable-password-login-final-warning":'Ne yaptığınızı biliyorsanız lütfen "CONFIRM" yazın.',"disable-password-login-warning":"Bu, tüm kullanıcılar için şifre ile girişi devre dışı bırakacaktır. Yapılandırılmış kimlik sağlayıcılarınız başarısız olursa, veritabanında bu ayarı geri almadan giriş yapmak mümkün olmayacaktır. Ayrıca bir kimlik sağlayıcıyı kaldırırken çok dikkatli olmanız gerekecektir","disable-public-memos":"Herkese açık notları devre dışı bırak","display-with-updated-time":"Güncellenme zamanıyla görüntüle","enable-auto-compact":"Otomatik sıkıştırmayı etkinleştir","enable-double-click-to-edit":"Düzenlemek için çift tıklamayı etkinleştir","enable-password-login":"Şifre ile girişi etkinleştir","enable-password-login-warning":"Bu, tüm kullanıcılar için şifre ile girişi etkinleştirecektir. Yalnızca kullanıcıların hem SSO hem de şifre kullanarak giriş yapmasını istiyorsanız devam edin","max-upload-size":"Maksimum yükleme boyutu (MiB)","max-upload-size-hint":"Önerilen değer 32 MiB'dir.","removed-completed-task-list-items":"Tamamlanan görev listesi öğelerinin kaldırılmasını etkinleştir","server-name":"Sunucu Adı"},version:"Sürüm","webhook-section":{"create-dialog":{"an-easy-to-remember-name":"Hatırlaması kolay bir isim","create-webhook":"Webhook oluştur","edit-webhook":"Webhook düzenle","payload-url":"Payload URL'si",title:"Başlık","url-example-post-receive":"https://example.com/postreceive"},"no-webhooks-found":"Webhook bulunamadı.",title:"Webhook'lar",url:"URL"},"workspace-section":{"disallow-change-nickname":"Takma ad değiştirmeyi yasakla","disallow-change-username":"Kullanıcı adı değiştirmeyi yasakla","disallow-password-auth":"Şifre ile kimlik doğrulamayı yasakla","disallow-user-registration":"Kullanıcı kaydını yasakla",monday:"Pazartesi",saturday:"Cumartesi",sunday:"Pazar","week-start-day":"Haftanın başlangıç günü"}}),p=e("tag",{"all-tags":"Tüm Etiketler","create-tag":"Etiket Oluştur","create-tags-guide":"`#etiket` yazarak etiket oluşturabilirsiniz.","delete-confirm":"Bu etiketi silmek istediğinizden emin misiniz? İlgili tüm notlar arşivlenecektir.","delete-tag":"Etiketi Sil","no-tag-found":"Etiket bulunamadı"});e("default",{about:a,auth:i,common:l,days:r,editor:n,inbox:t,markdown:o,memo:s,message:m,reference:d,resource:u,router:c,setting:k,tag:p})}}}));
