/*! For license information please see main.js.LICENSE.txt */
(() => {
    "use strict";
    var t, e, n = {
        985: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap);"]), o.push([t.id, '*{padding:0;margin:0}body{font-family:"Source Sans Pro",sans-serif;background:#141332;color:#fff}.AnalyticsCard-module_analyticsCardContainer-rWlFW{margin-left:20px;padding:10px;background:#1d1d41;border-radius:15px;height:470px;width:670px}h2{color:#fff;font-size:24px;margin-bottom:20px}canvas{width:100% !important;height:420px !important}', "", {
                version: 3,
                sources: ["webpack://./shared/styles/_global.sass", "webpack://./shared/styles/_variables.sass", "webpack://./entities/analytics-card/ui/AnalyticsCard.module.sass"],
                names: [],
                mappings: "AAGA,EACE,SAAA,CACA,QAAA,CAEF,KACE,wCAAA,CACA,kBCRoB,CDSpB,UCNM,CCFR,mDACE,gBAAA,CACA,YAAA,CACA,kBDLkB,CCMlB,kBAAA,CACA,YAAA,CACA,WAAA,CAEF,GACE,UDPM,CCQN,cAAA,CACA,kBAAA,CAEF,OACE,qBAAA,CACA,uBAAA",
                sourcesContent: ["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap')\n@import './variables'\n\n*\n  padding: 0\n  margin: 0\n\nbody\n  font-family: 'Source Sans Pro', sans-serif\n  background: $secondary-blue-dark\n  color: $white\n\n", "$primary-blue-dark: #1D1D41\n$secondary-blue-dark: #141332\n$main-blue-dark: #6359E9\n$main-blue-light: #64CFF6\n$white: #fff", "@import 'src/shared/styles/global'\n\n.analyticsCardContainer\n  margin-left: 20px\n  padding: 10px\n  background: $primary-blue-dark\n  border-radius: 15px\n  height: 470px\n  width: 670px\n\nh2\n  color: $white\n  font-size: 24px\n  margin-bottom: 20px\n\ncanvas\n  width: 100% !important\n  height: 420px !important"],
                sourceRoot: ""
            }]), o.locals = {analyticsCardContainer: "AnalyticsCard-module_analyticsCardContainer-rWlFW"};
            const s = o
        }, 865: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap);"]), o.push([t.id, '*{padding:0;margin:0}body{font-family:"Source Sans Pro",sans-serif;background:#141332;color:#fff}.ExpenseDisplay-module_expenseDisplay-VnDvs{display:flex;flex-direction:column;align-items:center;width:300px;height:100px;background:#1d1d41;border-radius:15px}.ExpenseDisplay-module_amount-Dv7iK{font-size:24px;font-weight:bold;color:#fff}.ExpenseDisplay-module_text-mixD3{font-size:16px;color:#000}', "", {
                version: 3,
                sources: ["webpack://./shared/styles/_global.sass", "webpack://./shared/styles/_variables.sass", "webpack://./entities/expense-display/ui/ExpenseDisplay.module.sass"],
                names: [],
                mappings: "AAGA,EACE,SAAA,CACA,QAAA,CAEF,KACE,wCAAA,CACA,kBCRoB,CDSpB,UCNM,CCHR,4CACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA,CACA,kBDPkB,CCQlB,kBAAA,CAEF,oCACE,cAAA,CACA,gBAAA,CACA,UDTM,CCWR,kCACE,cAAA,CACA,UAAA",
                sourcesContent: ["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap')\n@import './variables'\n\n*\n  padding: 0\n  margin: 0\n\nbody\n  font-family: 'Source Sans Pro', sans-serif\n  background: $secondary-blue-dark\n  color: $white\n\n", "$primary-blue-dark: #1D1D41\n$secondary-blue-dark: #141332\n$main-blue-dark: #6359E9\n$main-blue-light: #64CFF6\n$white: #fff", "@import 'src/shared/styles/global'\n.expenseDisplay\n  display: flex\n  flex-direction: column\n  align-items: center\n  width: 300px\n  height: 100px\n  background: $primary-blue-dark\n  border-radius: 15px\n\n.amount\n  font-size: 24px\n  font-weight: bold\n  color: $white\n\n.text\n  font-size: 16px\n  color: #000000"],
                sourceRoot: ""
            }]), o.locals = {
                expenseDisplay: "ExpenseDisplay-module_expenseDisplay-VnDvs",
                amount: "ExpenseDisplay-module_amount-Dv7iK",
                text: "ExpenseDisplay-module_text-mixD3"
            };
            const s = o
        }, 481: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, ".UserAvatar-module_userAvatarContainer-StO0n{display:flex;align-items:center;position:relative;color:#fff}.UserAvatar-module_avatar-A_Rwc{width:70px;height:70px;border-radius:50%;border:1px #fff solid}.UserAvatar-module_userInfo-iHrUA{margin-left:10px}.UserAvatar-module_name-ILiJ7{font-weight:bold;font-size:24px}.UserAvatar-module_position-oYLVv{font-size:16px;font-weight:lighter}.UserAvatar-module_menuIcon-HCtw1{margin-left:auto;cursor:pointer}", "", {
                version: 3,
                sources: ["webpack://./entities/user/ui/UserAvatar.module.sass"],
                names: [],
                mappings: "AAAA,6CACE,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,UAAA,CAGF,gCACE,UAAA,CACA,WAAA,CACA,iBAAA,CACA,qBAAA,CAEF,kCACE,gBAAA,CAEF,8BACE,gBAAA,CACA,cAAA,CAEF,kCACE,cAAA,CACA,mBAAA,CAGF,kCACE,gBAAA,CACA,cAAA",
                sourcesContent: [".userAvatarContainer\n  display: flex\n  align-items: center\n  position: relative\n  color: white\n\n\n.avatar\n  width: 70px\n  height: 70px\n  border-radius: 50%\n  border: 1px white solid\n\n.userInfo\n  margin-left: 10px\n\n.name\n  font-weight: bold\n  font-size: 24px\n\n.position\n  font-size: 16px\n  font-weight: lighter\n\n\n.menuIcon\n  margin-left: auto\n  cursor: pointer"],
                sourceRoot: ""
            }]), o.locals = {
                userAvatarContainer: "UserAvatar-module_userAvatarContainer-StO0n",
                avatar: "UserAvatar-module_avatar-A_Rwc",
                userInfo: "UserAvatar-module_userInfo-iHrUA",
                name: "UserAvatar-module_name-ILiJ7",
                position: "UserAvatar-module_position-oYLVv",
                menuIcon: "UserAvatar-module_menuIcon-HCtw1"
            };
            const s = o
        }, 159: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap);"]), o.push([t.id, '*{padding:0;margin:0}body{font-family:"Source Sans Pro",sans-serif;background:#141332;color:#fff}.CategoryChart-module_categoryContainer-_7yQl{width:374px;height:440px;background:#1d1d41;border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px}.CategoryChart-module_categoryContainer-_7yQl canvas{width:200px;height:200px}', "", {
                version: 3,
                sources: ["webpack://./shared/styles/_global.sass", "webpack://./shared/styles/_variables.sass", "webpack://./features/category/CategoryChart.module.sass"],
                names: [],
                mappings: "AAGA,EACE,SAAA,CACA,QAAA,CAEF,KACE,wCAAA,CACA,kBCRoB,CDSpB,UCNM,CCFR,8CACE,WAAA,CACA,YAAA,CACA,kBDLkB,CCMlB,kBAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA,CACA,YAAA,CAEA,qDACE,WAAA,CACA,YAAA",
                sourcesContent: ["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap')\n@import './variables'\n\n*\n  padding: 0\n  margin: 0\n\nbody\n  font-family: 'Source Sans Pro', sans-serif\n  background: $secondary-blue-dark\n  color: $white\n\n", "$primary-blue-dark: #1D1D41\n$secondary-blue-dark: #141332\n$main-blue-dark: #6359E9\n$main-blue-light: #64CFF6\n$white: #fff", "@import 'src/shared/styles/global'\n\n.categoryContainer\n  width: 374px\n  height: 440px\n  background: $primary-blue-dark\n  border-radius: 20px\n  display: flex\n  flex-direction: column\n  align-items: center\n  justify-content: center\n  padding: 20px\n\n  canvas\n    width: 200px\n    height: 200px\n"],
                sourceRoot: ""
            }]), o.locals = {categoryContainer: "CategoryChart-module_categoryContainer-_7yQl"};
            const s = o
        }, 356: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap);"]), o.push([t.id, '*{padding:0;margin:0}body{font-family:"Source Sans Pro",sans-serif;background:#141332;color:#fff}.FullReportButton-module_fullReportContainer-vUoud{display:flex;align-items:center;justify-content:center}.FullReportButton-module_fullReportBtn-KNna7{width:300px;height:48px;border:1px #fff solid;color:#fff;background:#1d1d41;border-radius:20px;cursor:pointer}img{height:32px;width:32px;color:#fff}', "", {
                version: 3,
                sources: ["webpack://./shared/styles/_global.sass", "webpack://./shared/styles/_variables.sass", "webpack://./features/category/full-report-button/FullReportButton.module.sass"],
                names: [],
                mappings: "AAGA,EACE,SAAA,CACA,QAAA,CAEF,KACE,wCAAA,CACA,kBCRoB,CDSpB,UCNM,CCFR,mDACE,YAAA,CACA,kBAAA,CACA,sBAAA,CAEF,6CACE,WAAA,CACA,WAAA,CACA,qBAAA,CACA,UDPM,CCQN,kBDZkB,CCalB,kBAAA,CACA,cAAA,CAEF,IACE,WAAA,CACA,UAAA,CACA,UDfM",
                sourcesContent: ["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap')\n@import './variables'\n\n*\n  padding: 0\n  margin: 0\n\nbody\n  font-family: 'Source Sans Pro', sans-serif\n  background: $secondary-blue-dark\n  color: $white\n\n", "$primary-blue-dark: #1D1D41\n$secondary-blue-dark: #141332\n$main-blue-dark: #6359E9\n$main-blue-light: #64CFF6\n$white: #fff", "@import 'src/shared/styles/global'\n\n.fullReportContainer\n  display: flex\n  align-items: center\n  justify-content: center\n\n.fullReportBtn\n  width: 300px\n  height: 48px\n  border: 1px $white solid\n  color: $white\n  background: $primary-blue-dark\n  border-radius: 20px\n  cursor: pointer\n\nimg\n  height: 32px\n  width: 32px\n  color: $white"],
                sourceRoot: ""
            }]), o.locals = {
                fullReportContainer: "FullReportButton-module_fullReportContainer-vUoud",
                fullReportBtn: "FullReportButton-module_fullReportBtn-KNna7"
            };
            const s = o
        }, 581: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, "", "", {version: 3, sources: [], names: [], mappings: "", sourceRoot: ""}]), o.locals = {};
            const s = o
        }, 740: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, "body[data-theme=dark]{color:#fff}", "", {
                version: 3,
                sources: ["webpack://./features/theme-toggle/ui/themes/_dark.sass"],
                names: [],
                mappings: "AAEA,sBAEE,UAJW",
                sourcesContent: ["$text-color: #ffffff\n\nbody[data-theme='dark']\n  //background-color: $secondary-blue-dark\n  color: $text-color\n"],
                sourceRoot: ""
            }]), o.locals = {};
            const s = o
        }, 500: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, "body[data-theme=light]{background-color:#fff;color:#000}", "", {
                version: 3,
                sources: ["webpack://./features/theme-toggle/ui/themes/_light.sass"],
                names: [],
                mappings: "AAGA,uBACE,qBAJiB,CAKjB,UAJW",
                sourcesContent: ["$background-color: #ffffff\n$text-color: #000000\n\nbody[data-theme='light']\n  background-color: $background-color\n  color: $text-color\n"],
                sourceRoot: ""
            }]), o.locals = {};
            const s = o
        }, 719: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap);"]), o.push([t.id, '*{padding:0;margin:0}body{font-family:"Source Sans Pro",sans-serif;background:#141332;color:#fff}.Transaction-module_transactionContainer-ewoNU{display:flex;flex-direction:column;gap:10px;background:#1d1d41;border-radius:20px;padding:20px;width:660px;color:#fff}.Transaction-module_filterContainer-NlsSx{display:flex;gap:10px}.Transaction-module_searchInput-U2H4v,.Transaction-module_dateInput-crhoM{padding:5px;border:1px solid #ccc;border-radius:5px}.Transaction-module_transactionList-jdRvs{display:flex;flex-direction:column;gap:10px;min-height:400px}.Transaction-module_transactionHeader-c2xAI{display:flex;justify-content:space-between;padding:10px;border-radius:5px;font-weight:bold}.Transaction-module_transactionItem-z3LyK{display:flex;justify-content:flex-start;padding:10px;border-radius:5px}.Transaction-module_transactionName-dYLnx,.Transaction-module_transactionDate-E2whx,.Transaction-module_transactionAmount-Zf4hb,.Transaction-module_transactionStatus-YFRJR{flex:1}', "", {
                version: 3,
                sources: ["webpack://./shared/styles/_global.sass", "webpack://./shared/styles/_variables.sass", "webpack://./features/transactions/ui/Transaction.module.sass"],
                names: [],
                mappings: "AAGA,EACE,SAAA,CACA,QAAA,CAEF,KACE,wCAAA,CACA,kBCRoB,CDSpB,UCNM,CCFR,+CACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,kBDNkB,CCOlB,kBAAA,CACA,YAAA,CACA,WAAA,CACA,UAAA,CAEF,0CACE,YAAA,CACA,QAAA,CAEF,0EACE,WAAA,CACA,qBAAA,CACA,iBAAA,CAEF,0CACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,gBAAA,CAEF,4CACE,YAAA,CACA,6BAAA,CACA,YAAA,CACA,iBAAA,CACA,gBAAA,CAEF,0CACE,YAAA,CACA,0BAAA,CACA,YAAA,CACA,iBAAA,CAEF,4KACE,MAAA",
                sourcesContent: ["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap')\n@import './variables'\n\n*\n  padding: 0\n  margin: 0\n\nbody\n  font-family: 'Source Sans Pro', sans-serif\n  background: $secondary-blue-dark\n  color: $white\n\n", "$primary-blue-dark: #1D1D41\n$secondary-blue-dark: #141332\n$main-blue-dark: #6359E9\n$main-blue-light: #64CFF6\n$white: #fff", "@import 'src/shared/styles/global'\n\n.transactionContainer\n  display: flex\n  flex-direction: column\n  gap: 10px\n  background: $primary-blue-dark\n  border-radius: 20px\n  padding: 20px\n  width: 660px\n  color: #fff\n\n.filterContainer\n  display: flex\n  gap: 10px\n\n.searchInput, .dateInput\n  padding: 5px\n  border: 1px solid #ccc\n  border-radius: 5px\n\n.transactionList\n  display: flex\n  flex-direction: column\n  gap: 10px\n  min-height: 400px\n\n.transactionHeader\n  display: flex\n  justify-content: space-between\n  padding: 10px\n  border-radius: 5px\n  font-weight: bold\n\n.transactionItem\n  display: flex\n  justify-content: flex-start\n  padding: 10px\n  border-radius: 5px\n\n.transactionName, .transactionDate, .transactionAmount, .transactionStatus\n  flex: 1\n"],
                sourceRoot: ""
            }]), o.locals = {
                transactionContainer: "Transaction-module_transactionContainer-ewoNU",
                filterContainer: "Transaction-module_filterContainer-NlsSx",
                searchInput: "Transaction-module_searchInput-U2H4v",
                dateInput: "Transaction-module_dateInput-crhoM",
                transactionList: "Transaction-module_transactionList-jdRvs",
                transactionHeader: "Transaction-module_transactionHeader-c2xAI",
                transactionItem: "Transaction-module_transactionItem-z3LyK",
                transactionName: "Transaction-module_transactionName-dYLnx",
                transactionDate: "Transaction-module_transactionDate-E2whx",
                transactionAmount: "Transaction-module_transactionAmount-Zf4hb",
                transactionStatus: "Transaction-module_transactionStatus-YFRJR"
            };
            const s = o
        }, 861: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap);"]), o.push([t.id, '*{padding:0;margin:0}body{font-family:"Source Sans Pro",sans-serif;background:#141332;color:#fff}.UserMenuList-module_menu-jUgBz{position:absolute;right:0;top:100%;background:#6359e9;border-radius:5px;padding:10px;box-shadow:0 0 10px rgba(0,0,0,.1)}.UserMenuList-module_menu-jUgBz ul{list-style:none;margin:0;padding:0}.UserMenuList-module_menu-jUgBz ul li{padding:10px;color:#fff;cursor:pointer}', "", {
                version: 3,
                sources: ["webpack://./shared/styles/_global.sass", "webpack://./shared/styles/_variables.sass", "webpack://./features/user-menu/ui/UserMenuList.module.sass"],
                names: [],
                mappings: "AAGA,EACE,SAAA,CACA,QAAA,CAEF,KACE,wCAAA,CACA,kBCRoB,CDSpB,UCNM,CCFR,gCACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,kBDJe,CCKf,iBAAA,CACA,YAAA,CACA,kCAAA,CACA,mCACE,eAAA,CACA,QAAA,CACA,SAAA,CACA,sCACE,YAAA,CACA,UAAA,CACA,cAAA",
                sourcesContent: ["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap')\n@import './variables'\n\n*\n  padding: 0\n  margin: 0\n\nbody\n  font-family: 'Source Sans Pro', sans-serif\n  background: $secondary-blue-dark\n  color: $white\n\n", "$primary-blue-dark: #1D1D41\n$secondary-blue-dark: #141332\n$main-blue-dark: #6359E9\n$main-blue-light: #64CFF6\n$white: #fff", "@import 'src/shared/styles/global'\n\n.menu\n  position: absolute\n  right: 0\n  top: 100%\n  background: $main-blue-dark\n  border-radius: 5px\n  padding: 10px\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)\n  ul\n    list-style: none\n    margin: 0\n    padding: 0\n    li\n      padding: 10px\n      color: white\n      cursor: pointer\n"],
                sourceRoot: ""
            }]), o.locals = {menu: "UserMenuList-module_menu-jUgBz"};
            const s = o
        }, 385: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, ".Dashboard-module_dashboardContainer-OCmmX{display:flex;gap:20px;padding:25px;margin-top:20px}.Dashboard-module_mainBlock-l2PI7{display:flex;flex-direction:column;gap:15px}.Dashboard-module_secondaryBlock-bfgDr{display:flex;flex-direction:column;gap:15px}", "", {
                version: 3,
                sources: ["webpack://./pages/dashboard/ui/Dashboard.module.sass"],
                names: [],
                mappings: "AAAA,2CACE,YAAA,CACA,QAAA,CACA,YAAA,CACA,eAAA,CAEF,kCACE,YAAA,CACA,qBAAA,CACA,QAAA,CAEF,uCACE,YAAA,CACA,qBAAA,CACA,QAAA",
                sourcesContent: [".dashboardContainer\n  display: flex\n  gap: 20px\n  padding: 25px\n  margin-top: 20px\n\n.mainBlock\n  display: flex\n  flex-direction: column\n  gap: 15px\n\n.secondaryBlock\n  display: flex\n  flex-direction: column\n  gap: 15px\n"],
                sourceRoot: ""
            }]), o.locals = {
                dashboardContainer: "Dashboard-module_dashboardContainer-OCmmX",
                mainBlock: "Dashboard-module_mainBlock-l2PI7",
                secondaryBlock: "Dashboard-module_secondaryBlock-bfgDr"
            };
            const s = o
        }, 65: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, ".Signup-module_page-container-PZrnw{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#0056b3}.Signup-module_form-container-scxVm{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;border:1px solid #ccc;border-radius:8px;max-width:400px;color:#000;width:100%;background-color:#fff;box-shadow:0 0 10px rgba(0,0,0,.1)}.Signup-module_form-container-scxVm label{display:block;margin-bottom:5px;font-weight:bold}.Signup-module_form-container-scxVm input[type=text],.Signup-module_form-container-scxVm input[type=email],.Signup-module_form-container-scxVm input[type=password]{width:100%;padding:8px;margin:10px 0;border:1px solid #ccc;border-radius:4px}.Signup-module_form-container-scxVm .Signup-module_checkbox-container-xQUWG{display:flex;align-items:center;margin:10px 0}.Signup-module_form-container-scxVm .Signup-module_checkbox-container-xQUWG input[type=checkbox]{margin-right:10px}.Signup-module_form-container-scxVm .Signup-module_error-message-tM7bj{color:red;margin:10px 0}.Signup-module_form-container-scxVm button{padding:10px 20px;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-top:20px}.Signup-module_form-container-scxVm button:hover{background-color:#0056b3}", "", {
                version: 3,
                sources: ["webpack://./pages/signup/ui/Signup.module.sass"],
                names: [],
                mappings: "AAMA,oCACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,YAAA,CACA,wBAAA,CAEF,oCACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA,CACA,YAjBa,CAkBb,qBAAA,CACA,iBAAA,CACA,eAAA,CACA,UAAA,CACA,UAAA,CACA,qBAAA,CACA,kCAAA,CAEA,0CACE,aAAA,CACA,iBAAA,CACA,gBAAA,CAEF,oKAGE,UAAA,CACA,WAAA,CACA,aAnCW,CAoCX,qBAAA,CACA,iBAAA,CAEF,4EACE,YAAA,CACA,kBAAA,CACA,aA1CW,CA4CX,iGACE,iBAAA,CAEJ,uEACE,SA9CU,CA+CV,aAjDW,CAmDb,2CACE,iBAnDa,CAoDb,wBAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,cAAA,CACA,eAAA,CAEA,iDACE,wBAAA",
                sourcesContent: ['// Переменные\n$form-padding: 20px\n$input-margin: 10px 0\n$button-padding: 10px 20px\n$error-color: red\n\n.page-container\n  display: flex\n  justify-content: center\n  align-items: center\n  height: 100vh // Занять всю высоту экрана\n  background-color: #0056b3\n\n.form-container\n  display: flex\n  flex-direction: column\n  align-items: center\n  justify-content: center\n  padding: $form-padding\n  border: 1px solid #ccc\n  border-radius: 8px\n  max-width: 400px\n  color: black\n  width: 100% // Занимать всю доступную ширину контейнера\n  background-color: white // Фоновый цвет формы\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) // Тень вокруг формы\n\n  label\n    display: block\n    margin-bottom: 5px\n    font-weight: bold\n\n  input[type="text"],\n  input[type="email"],\n  input[type="password"]\n    width: 100%\n    padding: 8px\n    margin: $input-margin\n    border: 1px solid #ccc\n    border-radius: 4px\n\n  .checkbox-container\n    display: flex\n    align-items: center\n    margin: $input-margin\n\n    input[type="checkbox"]\n      margin-right: 10px\n\n  .error-message\n    color: $error-color\n    margin: $input-margin\n\n  button\n    padding: $button-padding\n    background-color: #007BFF\n    color: white\n    border: none\n    border-radius: 4px\n    cursor: pointer\n    margin-top: 20px\n\n    &:hover\n      background-color: #0056b3\n'],
                sourceRoot: ""
            }]), o.locals = {
                "page-container": "Signup-module_page-container-PZrnw",
                "form-container": "Signup-module_form-container-scxVm",
                "checkbox-container": "Signup-module_checkbox-container-xQUWG",
                "error-message": "Signup-module_error-message-tM7bj"
            };
            const s = o
        }, 179: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap);"]), o.push([t.id, '*{padding:0;margin:0}body{font-family:"Source Sans Pro",sans-serif;background:#141332;color:#fff}', "", {
                version: 3,
                sources: ["webpack://./shared/styles/_global.sass", "webpack://./shared/styles/_variables.sass"],
                names: [],
                mappings: "AAGA,EACE,SAAA,CACA,QAAA,CAEF,KACE,wCAAA,CACA,kBCRoB,CDSpB,UCNM",
                sourcesContent: ["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap')\n@import './variables'\n\n*\n  padding: 0\n  margin: 0\n\nbody\n  font-family: 'Source Sans Pro', sans-serif\n  background: $secondary-blue-dark\n  color: $white\n\n", "$primary-blue-dark: #1D1D41\n$secondary-blue-dark: #141332\n$main-blue-dark: #6359E9\n$main-blue-light: #64CFF6\n$white: #fff"],
                sourceRoot: ""
            }]), o.locals = {};
            const s = o
        }, 436: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, ".Layout-module_layout-uWGwr{display:flex;height:100vh}.Layout-module_content-cFD4Y{flex:1;overflow-y:auto}", "", {
                version: 3,
                sources: ["webpack://./widgets/Layout/ui/Layout.module.sass"],
                names: [],
                mappings: "AAAA,4BACE,YAAA,CACA,YAAA,CACF,6BACE,MAAA,CACA,eAAA",
                sourcesContent: [".layout\n  display: flex\n  height: 100vh\n.content\n  flex: 1\n  overflow-y: auto\n"],
                sourceRoot: ""
            }]), o.locals = {layout: "Layout-module_layout-uWGwr", content: "Layout-module_content-cFD4Y"};
            const s = o
        }, 911: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap);"]), o.push([t.id, '*{padding:0;margin:0}body{font-family:"Source Sans Pro",sans-serif;background:#141332;color:#fff}.Sidebar-module_sidebar-UHKSG{width:320px;height:100vh;border-top-right-radius:20px;border-bottom-right-radius:20px;background:#1d1d41;font-weight:normal;font-size:16px;display:flex;gap:10px;flex-direction:column;align-items:center}.Sidebar-module_sidebar-UHKSG a{display:flex;align-items:center;gap:10px;color:#fff;text-decoration:none;padding:10px;font-size:18px;width:calc(100% - 26px);box-sizing:border-box;transition:background .7s ease,color .5s ease}.Sidebar-module_sidebar-UHKSG a.Sidebar-module_activeTab-bSOSF{background:#6359e9;border-radius:10px;font-weight:bold;transition:background .7s ease,color .5s ease}.Sidebar-module_sidebar-UHKSG .Sidebar-module_logoTitle-dIOzp{font-size:56px;font-weight:bolder}hr.Sidebar-module_customLine-NwaEk{width:90%;height:1px;background-color:#6359e9;border:none;margin:20px auto}', "", {
                version: 3,
                sources: ["webpack://./shared/styles/_global.sass", "webpack://./shared/styles/_variables.sass", "webpack://./widgets/Sidebar/ui/Sidebar.module.sass"],
                names: [],
                mappings: "AAGA,EACE,SAAA,CACA,QAAA,CAEF,KACE,wCAAA,CACA,kBCRoB,CDSpB,UCNM,CCHR,8BACE,WAAA,CACA,YAAA,CACA,4BAAA,CACA,+BAAA,CACA,kBDNkB,CCOlB,kBAAA,CACA,cAAA,CACA,YAAA,CACA,QAAA,CACA,qBAAA,CACA,kBAAA,CAEA,gCACE,YAAA,CACA,kBAAA,CACA,QAAA,CACA,UAAA,CACA,oBAAA,CACA,YAAA,CACA,cAAA,CACA,uBAAA,CACA,qBAAA,CACA,6CAAA,CAEA,+DACE,kBDzBW,CC0BX,kBAAA,CAEA,gBAAA,CACA,6CAAA,CAGJ,8DACI,cAAA,CACA,kBAAA,CAEN,mCACE,SAAA,CACA,UAAA,CACA,wBDvCe,CCwCf,WAAA,CACA,gBAAA",
                sourcesContent: ["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap')\n@import './variables'\n\n*\n  padding: 0\n  margin: 0\n\nbody\n  font-family: 'Source Sans Pro', sans-serif\n  background: $secondary-blue-dark\n  color: $white\n\n", "$primary-blue-dark: #1D1D41\n$secondary-blue-dark: #141332\n$main-blue-dark: #6359E9\n$main-blue-light: #64CFF6\n$white: #fff", "@import 'src/shared/styles/global'\n.sidebar\n  width: 320px\n  height: 100vh\n  border-top-right-radius: 20px\n  border-bottom-right-radius: 20px\n  background: $primary-blue-dark\n  font-weight: normal\n  font-size: 16px\n  display: flex\n  gap: 10px\n  flex-direction: column\n  align-items: center\n\n  a\n    display: flex\n    align-items: center\n    gap: 10px\n    color: white\n    text-decoration: none\n    padding: 10px\n    font-size: 18px\n    width: calc(100% - 26px)\n    box-sizing: border-box\n    transition: background 0.7s ease, color 0.5s ease\n\n    &.activeTab\n      background: $main-blue-dark\n      border-radius: 10px\n      @mixin flex-center\n      font-weight: bold\n      transition: background 0.7s ease, color 0.5s ease\n\n\n  .logoTitle\n      font-size: 56px\n      font-weight: bolder\n\nhr.customLine\n  width: 90%\n  height: 1px\n  background-color: $main-blue-dark\n  border: none\n  margin: 20px auto\n\n"],
                sourceRoot: ""
            }]), o.locals = {
                sidebar: "Sidebar-module_sidebar-UHKSG",
                activeTab: "Sidebar-module_activeTab-bSOSF",
                logoTitle: "Sidebar-module_logoTitle-dIOzp",
                customLine: "Sidebar-module_customLine-NwaEk"
            };
            const s = o
        }, 801: (t, e, n) => {
            n.d(e, {A: () => s});
            var i = n(942), r = n.n(i), a = n(278), o = n.n(a)()(r());
            o.push([t.id, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap);"]), o.push([t.id, '*{padding:0;margin:0}body{font-family:"Source Sans Pro",sans-serif;background:#141332;color:#fff}.WalletCard-module_cardContainer-VH6GL{border-radius:10px;padding:20px;display:flex;flex-direction:column;align-items:center;gap:10px;background-color:#1d1d41;width:375px;height:475px}.WalletCard-module_cardInfo-hE0Nx{display:flex;flex-direction:column;align-items:center;gap:5px;width:320px;height:180px;background:linear-gradient(90deg, #9C2CF3 0%, #3A6FF9 100%);border-radius:10px;padding:30px}.WalletCard-module_balance-q8q4b{font-size:24px;font-weight:bold}.WalletCard-module_cardNumber-lhXQU{font-size:14px}.WalletCard-module_issueDate-iuDmE{font-size:14px}.WalletCard-module_buttonsContainer-R6VI3{display:flex;gap:10px}.WalletCard-module_manageButton-pEx0W,.WalletCard-module_transferButton-jRgRU{border:none;width:180px;height:40px;background:#6359e9;border-radius:10px;color:#fff;cursor:pointer;font-size:14px;font-weight:bold}', "", {
                version: 3,
                sources: ["webpack://./shared/styles/_global.sass", "webpack://./shared/styles/_variables.sass", "webpack://./widgets/card-wallet/ui/WalletCard.module.sass"],
                names: [],
                mappings: "AAGA,EACE,SAAA,CACA,QAAA,CAEF,KACE,wCAAA,CACA,kBCRoB,CDSpB,UCNM,CCFR,uCACE,kBAAA,CACA,YAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,QAAA,CACA,wBDTkB,CCUlB,WAAA,CACA,YAAA,CAEF,kCACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,OAAA,CACA,WAAA,CACA,YAAA,CACA,2DAAA,CACA,kBAAA,CACA,YAAA,CAEF,iCACE,cAAA,CACA,gBAAA,CAEF,oCACE,cAAA,CAEF,mCACE,cAAA,CAEF,0CACE,YAAA,CACA,QAAA,CAEF,8EACE,WAAA,CACA,WAAA,CACA,WAAA,CACA,kBDxCe,CCyCf,kBAAA,CACA,UDxCM,CCyCN,cAAA,CACA,cAAA,CAEA,gBAAA",
                sourcesContent: ["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap')\n@import './variables'\n\n*\n  padding: 0\n  margin: 0\n\nbody\n  font-family: 'Source Sans Pro', sans-serif\n  background: $secondary-blue-dark\n  color: $white\n\n", "$primary-blue-dark: #1D1D41\n$secondary-blue-dark: #141332\n$main-blue-dark: #6359E9\n$main-blue-light: #64CFF6\n$white: #fff", "@import 'src/shared/styles/global'\n\n.cardContainer\n  border-radius: 10px\n  padding: 20px\n  display: flex\n  flex-direction: column\n  align-items: center\n  gap: 10px\n  background-color: $primary-blue-dark\n  width: 375px\n  height: 475px\n\n.cardInfo\n  display: flex\n  flex-direction: column\n  align-items: center\n  gap: 5px\n  width: 320px\n  height: 180px\n  background: linear-gradient(90deg, #9C2CF3 0%, #3A6FF9 100%)\n  border-radius: 10px\n  padding: 30px\n\n.balance\n  font-size: 24px\n  font-weight: bold\n\n.cardNumber\n  font-size: 14px\n\n.issueDate\n  font-size: 14px\n\n.buttonsContainer\n  display: flex\n  gap: 10px\n\n.manageButton, .transferButton\n  border: none\n  width: 180px\n  height: 40px\n  background: $main-blue-dark\n  border-radius: 10px\n  color: $white\n  cursor: pointer\n  font-size: 14px\n  //@mixin flex-center\n  font-weight: bold\n\n//.manageButton:hover, .transferButton:hover\n//\n"],
                sourceRoot: ""
            }]), o.locals = {
                cardContainer: "WalletCard-module_cardContainer-VH6GL",
                cardInfo: "WalletCard-module_cardInfo-hE0Nx",
                balance: "WalletCard-module_balance-q8q4b",
                cardNumber: "WalletCard-module_cardNumber-lhXQU",
                issueDate: "WalletCard-module_issueDate-iuDmE",
                buttonsContainer: "WalletCard-module_buttonsContainer-R6VI3",
                manageButton: "WalletCard-module_manageButton-pEx0W",
                transferButton: "WalletCard-module_transferButton-jRgRU"
            };
            const s = o
        }, 278: t => {
            t.exports = function (t) {
                var e = [];
                return e.toString = function () {
                    return this.map((function (e) {
                        var n = "", i = void 0 !== e[5];
                        return e[4] && (n += "@supports (".concat(e[4], ") {")), e[2] && (n += "@media ".concat(e[2], " {")), i && (n += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), n += t(e), i && (n += "}"), e[2] && (n += "}"), e[4] && (n += "}"), n
                    })).join("")
                }, e.i = function (t, n, i, r, a) {
                    "string" == typeof t && (t = [[null, t, void 0]]);
                    var o = {};
                    if (i) for (var s = 0; s < this.length; s++) {
                        var l = this[s][0];
                        null != l && (o[l] = !0)
                    }
                    for (var c = 0; c < t.length; c++) {
                        var u = [].concat(t[c]);
                        i && o[u[0]] || (void 0 !== a && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = a), n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n) : u[2] = n), r && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = r) : u[4] = "".concat(r)), e.push(u))
                    }
                }, e
            }
        }, 942: t => {
            t.exports = function (t) {
                var e = t[1], n = t[3];
                if (!n) return e;
                if ("function" == typeof btoa) {
                    var i = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
                        r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),
                        a = "/*# ".concat(r, " */");
                    return [e].concat([a]).join("\n")
                }
                return [e].join("\n")
            }
        }, 67: (t, e, n) => {
            var i = n(696), r = n(434);

            function a(t) {
                for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            var o = new Set, s = {};

            function l(t, e) {
                c(t, e), c(t + "Capture", e)
            }

            function c(t, e) {
                for (s[t] = e, t = 0; t < e.length; t++) o.add(e[t])
            }

            var u = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
                d = Object.prototype.hasOwnProperty,
                h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                f = {}, p = {};

            function g(t, e, n, i, r, a, o) {
                this.acceptsBooleans = 2 === e || 3 === e || 4 === e, this.attributeName = i, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = a, this.removeEmptyString = o
            }

            var m = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (t) {
                m[t] = new g(t, 0, !1, t, null, !1, !1)
            })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (t) {
                var e = t[0];
                m[e] = new g(e, 1, !1, t[1], null, !1, !1)
            })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (t) {
                m[t] = new g(t, 2, !1, t.toLowerCase(), null, !1, !1)
            })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (t) {
                m[t] = new g(t, 2, !1, t, null, !1, !1)
            })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (t) {
                m[t] = new g(t, 3, !1, t.toLowerCase(), null, !1, !1)
            })), ["checked", "multiple", "muted", "selected"].forEach((function (t) {
                m[t] = new g(t, 3, !0, t, null, !1, !1)
            })), ["capture", "download"].forEach((function (t) {
                m[t] = new g(t, 4, !1, t, null, !1, !1)
            })), ["cols", "rows", "size", "span"].forEach((function (t) {
                m[t] = new g(t, 6, !1, t, null, !1, !1)
            })), ["rowSpan", "start"].forEach((function (t) {
                m[t] = new g(t, 5, !1, t.toLowerCase(), null, !1, !1)
            }));
            var M = /[\-:]([a-z])/g;

            function y(t) {
                return t[1].toUpperCase()
            }

            function b(t, e, n, i) {
                var r = m.hasOwnProperty(e) ? m[e] : null;
                (null !== r ? 0 !== r.type : i || !(2 < e.length) || "o" !== e[0] && "O" !== e[0] || "n" !== e[1] && "N" !== e[1]) && (function (t, e, n, i) {
                    if (null == e || function (t, e, n, i) {
                        if (null !== n && 0 === n.type) return !1;
                        switch (typeof e) {
                            case"function":
                            case"symbol":
                                return !0;
                            case"boolean":
                                return !i && (null !== n ? !n.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
                            default:
                                return !1
                        }
                    }(t, e, n, i)) return !0;
                    if (i) return !1;
                    if (null !== n) switch (n.type) {
                        case 3:
                            return !e;
                        case 4:
                            return !1 === e;
                        case 5:
                            return isNaN(e);
                        case 6:
                            return isNaN(e) || 1 > e
                    }
                    return !1
                }(e, n, r, i) && (n = null), i || null === r ? function (t) {
                    return !!d.call(p, t) || !d.call(f, t) && (h.test(t) ? p[t] = !0 : (f[t] = !0, !1))
                }(e) && (null === n ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : r.mustUseProperty ? t[r.propertyName] = null === n ? 3 !== r.type && "" : n : (e = r.attributeName, i = r.attributeNamespace, null === n ? t.removeAttribute(e) : (n = 3 === (r = r.type) || 4 === r && !0 === n ? "" : "" + n, i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))))
            }

            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (t) {
                var e = t.replace(M, y);
                m[e] = new g(e, 1, !1, t, null, !1, !1)
            })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (t) {
                var e = t.replace(M, y);
                m[e] = new g(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1)
            })), ["xml:base", "xml:lang", "xml:space"].forEach((function (t) {
                var e = t.replace(M, y);
                m[e] = new g(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1)
            })), ["tabIndex", "crossOrigin"].forEach((function (t) {
                m[t] = new g(t, 1, !1, t.toLowerCase(), null, !1, !1)
            })), m.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (t) {
                m[t] = new g(t, 1, !1, t.toLowerCase(), null, !0, !0)
            }));
            var x = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, A = Symbol.for("react.element"),
                v = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"),
                k = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), S = Symbol.for("react.context"),
                w = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"),
                C = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), j = Symbol.for("react.lazy");
            Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
            var I = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
            var _ = Symbol.iterator;

            function O(t) {
                return null === t || "object" != typeof t ? null : "function" == typeof (t = _ && t[_] || t["@@iterator"]) ? t : null
            }

            var L, U = Object.assign;

            function R(t) {
                if (void 0 === L) try {
                    throw Error()
                } catch (t) {
                    var e = t.stack.trim().match(/\n( *(at )?)/);
                    L = e && e[1] || ""
                }
                return "\n" + L + t
            }

            var V = !1;

            function F(t, e) {
                if (!t || V) return "";
                V = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (e) if (e = function () {
                        throw Error()
                    }, Object.defineProperty(e.prototype, "props", {
                        set: function () {
                            throw Error()
                        }
                    }), "object" == typeof Reflect && Reflect.construct) {
                        try {
                            Reflect.construct(e, [])
                        } catch (t) {
                            var i = t
                        }
                        Reflect.construct(t, [], e)
                    } else {
                        try {
                            e.call()
                        } catch (t) {
                            i = t
                        }
                        t.call(e.prototype)
                    } else {
                        try {
                            throw Error()
                        } catch (t) {
                            i = t
                        }
                        t()
                    }
                } catch (e) {
                    if (e && i && "string" == typeof e.stack) {
                        for (var r = e.stack.split("\n"), a = i.stack.split("\n"), o = r.length - 1, s = a.length - 1; 1 <= o && 0 <= s && r[o] !== a[s];) s--;
                        for (; 1 <= o && 0 <= s; o--, s--) if (r[o] !== a[s]) {
                            if (1 !== o || 1 !== s) do {
                                if (o--, 0 > --s || r[o] !== a[s]) {
                                    var l = "\n" + r[o].replace(" at new ", " at ");
                                    return t.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", t.displayName)), l
                                }
                            } while (1 <= o && 0 <= s);
                            break
                        }
                    }
                } finally {
                    V = !1, Error.prepareStackTrace = n
                }
                return (t = t ? t.displayName || t.name : "") ? R(t) : ""
            }

            function P(t) {
                switch (t.tag) {
                    case 5:
                        return R(t.type);
                    case 16:
                        return R("Lazy");
                    case 13:
                        return R("Suspense");
                    case 19:
                        return R("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return F(t.type, !1);
                    case 11:
                        return F(t.type.render, !1);
                    case 1:
                        return F(t.type, !0);
                    default:
                        return ""
                }
            }

            function W(t) {
                if (null == t) return null;
                if ("function" == typeof t) return t.displayName || t.name || null;
                if ("string" == typeof t) return t;
                switch (t) {
                    case N:
                        return "Fragment";
                    case v:
                        return "Portal";
                    case k:
                        return "Profiler";
                    case D:
                        return "StrictMode";
                    case E:
                        return "Suspense";
                    case C:
                        return "SuspenseList"
                }
                if ("object" == typeof t) switch (t.$$typeof) {
                    case S:
                        return (t.displayName || "Context") + ".Consumer";
                    case T:
                        return (t._context.displayName || "Context") + ".Provider";
                    case w:
                        var e = t.render;
                        return (t = t.displayName) || (t = "" !== (t = e.displayName || e.name || "") ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
                    case z:
                        return null !== (e = t.displayName || null) ? e : W(t.type) || "Memo";
                    case j:
                        e = t._payload, t = t._init;
                        try {
                            return W(t(e))
                        } catch (t) {
                        }
                }
                return null
            }

            function Q(t) {
                var e = t.type;
                switch (t.tag) {
                    case 24:
                        return "Cache";
                    case 9:
                        return (e.displayName || "Context") + ".Consumer";
                    case 10:
                        return (e._context.displayName || "Context") + ".Provider";
                    case 18:
                        return "DehydratedFragment";
                    case 11:
                        return t = (t = e.render).displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                    case 7:
                        return "Fragment";
                    case 5:
                        return e;
                    case 4:
                        return "Portal";
                    case 3:
                        return "Root";
                    case 6:
                        return "Text";
                    case 16:
                        return W(e);
                    case 8:
                        return e === D ? "StrictMode" : "Mode";
                    case 22:
                        return "Offscreen";
                    case 12:
                        return "Profiler";
                    case 21:
                        return "Scope";
                    case 13:
                        return "Suspense";
                    case 19:
                        return "SuspenseList";
                    case 25:
                        return "TracingMarker";
                    case 1:
                    case 0:
                    case 17:
                    case 2:
                    case 14:
                    case 15:
                        if ("function" == typeof e) return e.displayName || e.name || null;
                        if ("string" == typeof e) return e
                }
                return null
            }

            function Y(t) {
                switch (typeof t) {
                    case"boolean":
                    case"number":
                    case"string":
                    case"undefined":
                    case"object":
                        return t;
                    default:
                        return ""
                }
            }

            function B(t) {
                var e = t.type;
                return (t = t.nodeName) && "input" === t.toLowerCase() && ("checkbox" === e || "radio" === e)
            }

            function Z(t) {
                t._valueTracker || (t._valueTracker = function (t) {
                    var e = B(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
                        i = "" + t[e];
                    if (!t.hasOwnProperty(e) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                        var r = n.get, a = n.set;
                        return Object.defineProperty(t, e, {
                            configurable: !0, get: function () {
                                return r.call(this)
                            }, set: function (t) {
                                i = "" + t, a.call(this, t)
                            }
                        }), Object.defineProperty(t, e, {enumerable: n.enumerable}), {
                            getValue: function () {
                                return i
                            }, setValue: function (t) {
                                i = "" + t
                            }, stopTracking: function () {
                                t._valueTracker = null, delete t[e]
                            }
                        }
                    }
                }(t))
            }

            function H(t) {
                if (!t) return !1;
                var e = t._valueTracker;
                if (!e) return !0;
                var n = e.getValue(), i = "";
                return t && (i = B(t) ? t.checked ? "true" : "false" : t.value), (t = i) !== n && (e.setValue(t), !0)
            }

            function G(t) {
                if (void 0 === (t = t || ("undefined" != typeof document ? document : void 0))) return null;
                try {
                    return t.activeElement || t.body
                } catch (e) {
                    return t.body
                }
            }

            function J(t, e) {
                var n = e.checked;
                return U({}, e, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : t._wrapperState.initialChecked
                })
            }

            function X(t, e) {
                var n = null == e.defaultValue ? "" : e.defaultValue,
                    i = null != e.checked ? e.checked : e.defaultChecked;
                n = Y(null != e.value ? e.value : n), t._wrapperState = {
                    initialChecked: i,
                    initialValue: n,
                    controlled: "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value
                }
            }

            function $(t, e) {
                null != (e = e.checked) && b(t, "checked", e, !1)
            }

            function K(t, e) {
                $(t, e);
                var n = Y(e.value), i = e.type;
                if (null != n) "number" === i ? (0 === n && "" === t.value || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n); else if ("submit" === i || "reset" === i) return void t.removeAttribute("value");
                e.hasOwnProperty("value") ? tt(t, e.type, n) : e.hasOwnProperty("defaultValue") && tt(t, e.type, Y(e.defaultValue)), null == e.checked && null != e.defaultChecked && (t.defaultChecked = !!e.defaultChecked)
            }

            function q(t, e, n) {
                if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
                    var i = e.type;
                    if (!("submit" !== i && "reset" !== i || void 0 !== e.value && null !== e.value)) return;
                    e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e
                }
                "" !== (n = t.name) && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, "" !== n && (t.name = n)
            }

            function tt(t, e, n) {
                "number" === e && G(t.ownerDocument) === t || (null == n ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
            }

            var et = Array.isArray;

            function nt(t, e, n, i) {
                if (t = t.options, e) {
                    e = {};
                    for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
                    for (n = 0; n < t.length; n++) r = e.hasOwnProperty("$" + t[n].value), t[n].selected !== r && (t[n].selected = r), r && i && (t[n].defaultSelected = !0)
                } else {
                    for (n = "" + Y(n), e = null, r = 0; r < t.length; r++) {
                        if (t[r].value === n) return t[r].selected = !0, void (i && (t[r].defaultSelected = !0));
                        null !== e || t[r].disabled || (e = t[r])
                    }
                    null !== e && (e.selected = !0)
                }
            }

            function it(t, e) {
                if (null != e.dangerouslySetInnerHTML) throw Error(a(91));
                return U({}, e, {value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue})
            }

            function rt(t, e) {
                var n = e.value;
                if (null == n) {
                    if (n = e.children, e = e.defaultValue, null != n) {
                        if (null != e) throw Error(a(92));
                        if (et(n)) {
                            if (1 < n.length) throw Error(a(93));
                            n = n[0]
                        }
                        e = n
                    }
                    null == e && (e = ""), n = e
                }
                t._wrapperState = {initialValue: Y(n)}
            }

            function at(t, e) {
                var n = Y(e.value), i = Y(e.defaultValue);
                null != n && ((n = "" + n) !== t.value && (t.value = n), null == e.defaultValue && t.defaultValue !== n && (t.defaultValue = n)), null != i && (t.defaultValue = "" + i)
            }

            function ot(t) {
                var e = t.textContent;
                e === t._wrapperState.initialValue && "" !== e && null !== e && (t.value = e)
            }

            function st(t) {
                switch (t) {
                    case"svg":
                        return "http://www.w3.org/2000/svg";
                    case"math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }

            function lt(t, e) {
                return null == t || "http://www.w3.org/1999/xhtml" === t ? st(e) : "http://www.w3.org/2000/svg" === t && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : t
            }

            var ct, ut, dt = (ut = function (t, e) {
                if ("http://www.w3.org/2000/svg" !== t.namespaceURI || "innerHTML" in t) t.innerHTML = e; else {
                    for ((ct = ct || document.createElement("div")).innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = ct.firstChild; t.firstChild;) t.removeChild(t.firstChild);
                    for (; e.firstChild;) t.appendChild(e.firstChild)
                }
            }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (t, e, n, i) {
                MSApp.execUnsafeLocalFunction((function () {
                    return ut(t, e)
                }))
            } : ut);

            function ht(t, e) {
                if (e) {
                    var n = t.firstChild;
                    if (n && n === t.lastChild && 3 === n.nodeType) return void (n.nodeValue = e)
                }
                t.textContent = e
            }

            var ft = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }, pt = ["Webkit", "ms", "Moz", "O"];

            function gt(t, e, n) {
                return null == e || "boolean" == typeof e || "" === e ? "" : n || "number" != typeof e || 0 === e || ft.hasOwnProperty(t) && ft[t] ? ("" + e).trim() : e + "px"
            }

            function mt(t, e) {
                for (var n in t = t.style, e) if (e.hasOwnProperty(n)) {
                    var i = 0 === n.indexOf("--"), r = gt(n, e[n], i);
                    "float" === n && (n = "cssFloat"), i ? t.setProperty(n, r) : t[n] = r
                }
            }

            Object.keys(ft).forEach((function (t) {
                pt.forEach((function (e) {
                    e = e + t.charAt(0).toUpperCase() + t.substring(1), ft[e] = ft[t]
                }))
            }));
            var Mt = U({menuitem: !0}, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });

            function yt(t, e) {
                if (e) {
                    if (Mt[t] && (null != e.children || null != e.dangerouslySetInnerHTML)) throw Error(a(137, t));
                    if (null != e.dangerouslySetInnerHTML) {
                        if (null != e.children) throw Error(a(60));
                        if ("object" != typeof e.dangerouslySetInnerHTML || !("__html" in e.dangerouslySetInnerHTML)) throw Error(a(61))
                    }
                    if (null != e.style && "object" != typeof e.style) throw Error(a(62))
                }
            }

            function bt(t, e) {
                if (-1 === t.indexOf("-")) return "string" == typeof e.is;
                switch (t) {
                    case"annotation-xml":
                    case"color-profile":
                    case"font-face":
                    case"font-face-src":
                    case"font-face-uri":
                    case"font-face-format":
                    case"font-face-name":
                    case"missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }

            var xt = null;

            function At(t) {
                return (t = t.target || t.srcElement || window).correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
            }

            var vt = null, Nt = null, Dt = null;

            function kt(t) {
                if (t = br(t)) {
                    if ("function" != typeof vt) throw Error(a(280));
                    var e = t.stateNode;
                    e && (e = Ar(e), vt(t.stateNode, t.type, e))
                }
            }

            function Tt(t) {
                Nt ? Dt ? Dt.push(t) : Dt = [t] : Nt = t
            }

            function St() {
                if (Nt) {
                    var t = Nt, e = Dt;
                    if (Dt = Nt = null, kt(t), e) for (t = 0; t < e.length; t++) kt(e[t])
                }
            }

            function wt(t, e) {
                return t(e)
            }

            function Et() {
            }

            var Ct = !1;

            function zt(t, e, n) {
                if (Ct) return t(e, n);
                Ct = !0;
                try {
                    return wt(t, e, n)
                } finally {
                    Ct = !1, (null !== Nt || null !== Dt) && (Et(), St())
                }
            }

            function jt(t, e) {
                var n = t.stateNode;
                if (null === n) return null;
                var i = Ar(n);
                if (null === i) return null;
                n = i[e];
                t:switch (e) {
                    case"onClick":
                    case"onClickCapture":
                    case"onDoubleClick":
                    case"onDoubleClickCapture":
                    case"onMouseDown":
                    case"onMouseDownCapture":
                    case"onMouseMove":
                    case"onMouseMoveCapture":
                    case"onMouseUp":
                    case"onMouseUpCapture":
                    case"onMouseEnter":
                        (i = !i.disabled) || (i = !("button" === (t = t.type) || "input" === t || "select" === t || "textarea" === t)), t = !i;
                        break t;
                    default:
                        t = !1
                }
                if (t) return null;
                if (n && "function" != typeof n) throw Error(a(231, e, typeof n));
                return n
            }

            var It = !1;
            if (u) try {
                var _t = {};
                Object.defineProperty(_t, "passive", {
                    get: function () {
                        It = !0
                    }
                }), window.addEventListener("test", _t, _t), window.removeEventListener("test", _t, _t)
            } catch (ut) {
                It = !1
            }

            function Ot(t, e, n, i, r, a, o, s, l) {
                var c = Array.prototype.slice.call(arguments, 3);
                try {
                    e.apply(n, c)
                } catch (t) {
                    this.onError(t)
                }
            }

            var Lt = !1, Ut = null, Rt = !1, Vt = null, Ft = {
                onError: function (t) {
                    Lt = !0, Ut = t
                }
            };

            function Pt(t, e, n, i, r, a, o, s, l) {
                Lt = !1, Ut = null, Ot.apply(Ft, arguments)
            }

            function Wt(t) {
                var e = t, n = t;
                if (t.alternate) for (; e.return;) e = e.return; else {
                    t = e;
                    do {
                        !!(4098 & (e = t).flags) && (n = e.return), t = e.return
                    } while (t)
                }
                return 3 === e.tag ? n : null
            }

            function Qt(t) {
                if (13 === t.tag) {
                    var e = t.memoizedState;
                    if (null === e && null !== (t = t.alternate) && (e = t.memoizedState), null !== e) return e.dehydrated
                }
                return null
            }

            function Yt(t) {
                if (Wt(t) !== t) throw Error(a(188))
            }

            function Bt(t) {
                return null !== (t = function (t) {
                    var e = t.alternate;
                    if (!e) {
                        if (null === (e = Wt(t))) throw Error(a(188));
                        return e !== t ? null : t
                    }
                    for (var n = t, i = e; ;) {
                        var r = n.return;
                        if (null === r) break;
                        var o = r.alternate;
                        if (null === o) {
                            if (null !== (i = r.return)) {
                                n = i;
                                continue
                            }
                            break
                        }
                        if (r.child === o.child) {
                            for (o = r.child; o;) {
                                if (o === n) return Yt(r), t;
                                if (o === i) return Yt(r), e;
                                o = o.sibling
                            }
                            throw Error(a(188))
                        }
                        if (n.return !== i.return) n = r, i = o; else {
                            for (var s = !1, l = r.child; l;) {
                                if (l === n) {
                                    s = !0, n = r, i = o;
                                    break
                                }
                                if (l === i) {
                                    s = !0, i = r, n = o;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!s) {
                                for (l = o.child; l;) {
                                    if (l === n) {
                                        s = !0, n = o, i = r;
                                        break
                                    }
                                    if (l === i) {
                                        s = !0, i = o, n = r;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!s) throw Error(a(189))
                            }
                        }
                        if (n.alternate !== i) throw Error(a(190))
                    }
                    if (3 !== n.tag) throw Error(a(188));
                    return n.stateNode.current === n ? t : e
                }(t)) ? Zt(t) : null
            }

            function Zt(t) {
                if (5 === t.tag || 6 === t.tag) return t;
                for (t = t.child; null !== t;) {
                    var e = Zt(t);
                    if (null !== e) return e;
                    t = t.sibling
                }
                return null
            }

            var Ht = r.unstable_scheduleCallback, Gt = r.unstable_cancelCallback, Jt = r.unstable_shouldYield,
                Xt = r.unstable_requestPaint, $t = r.unstable_now, Kt = r.unstable_getCurrentPriorityLevel,
                qt = r.unstable_ImmediatePriority, te = r.unstable_UserBlockingPriority, ee = r.unstable_NormalPriority,
                ne = r.unstable_LowPriority, ie = r.unstable_IdlePriority, re = null, ae = null,
                oe = Math.clz32 ? Math.clz32 : function (t) {
                    return 0 === (t >>>= 0) ? 32 : 31 - (se(t) / le | 0) | 0
                }, se = Math.log, le = Math.LN2, ce = 64, ue = 4194304;

            function de(t) {
                switch (t & -t) {
                    case 1:
                        return 1;
                    case 2:
                        return 2;
                    case 4:
                        return 4;
                    case 8:
                        return 8;
                    case 16:
                        return 16;
                    case 32:
                        return 32;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return 4194240 & t;
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        return 130023424 & t;
                    case 134217728:
                        return 134217728;
                    case 268435456:
                        return 268435456;
                    case 536870912:
                        return 536870912;
                    case 1073741824:
                        return 1073741824;
                    default:
                        return t
                }
            }

            function he(t, e) {
                var n = t.pendingLanes;
                if (0 === n) return 0;
                var i = 0, r = t.suspendedLanes, a = t.pingedLanes, o = 268435455 & n;
                if (0 !== o) {
                    var s = o & ~r;
                    0 !== s ? i = de(s) : 0 != (a &= o) && (i = de(a))
                } else 0 != (o = n & ~r) ? i = de(o) : 0 !== a && (i = de(a));
                if (0 === i) return 0;
                if (0 !== e && e !== i && !(e & r) && ((r = i & -i) >= (a = e & -e) || 16 === r && 4194240 & a)) return e;
                if (4 & i && (i |= 16 & n), 0 !== (e = t.entangledLanes)) for (t = t.entanglements, e &= i; 0 < e;) r = 1 << (n = 31 - oe(e)), i |= t[n], e &= ~r;
                return i
            }

            function fe(t, e) {
                switch (t) {
                    case 1:
                    case 2:
                    case 4:
                        return e + 250;
                    case 8:
                    case 16:
                    case 32:
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return e + 5e3;
                    default:
                        return -1
                }
            }

            function pe(t) {
                return 0 != (t = -1073741825 & t.pendingLanes) ? t : 1073741824 & t ? 1073741824 : 0
            }

            function ge() {
                var t = ce;
                return !(4194240 & (ce <<= 1)) && (ce = 64), t
            }

            function me(t) {
                for (var e = [], n = 0; 31 > n; n++) e.push(t);
                return e
            }

            function Me(t, e, n) {
                t.pendingLanes |= e, 536870912 !== e && (t.suspendedLanes = 0, t.pingedLanes = 0), (t = t.eventTimes)[e = 31 - oe(e)] = n
            }

            function ye(t, e) {
                var n = t.entangledLanes |= e;
                for (t = t.entanglements; n;) {
                    var i = 31 - oe(n), r = 1 << i;
                    r & e | t[i] & e && (t[i] |= e), n &= ~r
                }
            }

            var be = 0;

            function xe(t) {
                return 1 < (t &= -t) ? 4 < t ? 268435455 & t ? 16 : 536870912 : 4 : 1
            }

            var Ae, ve, Ne, De, ke, Te = !1, Se = [], we = null, Ee = null, Ce = null, ze = new Map, je = new Map,
                Ie = [],
                _e = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

            function Oe(t, e) {
                switch (t) {
                    case"focusin":
                    case"focusout":
                        we = null;
                        break;
                    case"dragenter":
                    case"dragleave":
                        Ee = null;
                        break;
                    case"mouseover":
                    case"mouseout":
                        Ce = null;
                        break;
                    case"pointerover":
                    case"pointerout":
                        ze.delete(e.pointerId);
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                        je.delete(e.pointerId)
                }
            }

            function Le(t, e, n, i, r, a) {
                return null === t || t.nativeEvent !== a ? (t = {
                    blockedOn: e,
                    domEventName: n,
                    eventSystemFlags: i,
                    nativeEvent: a,
                    targetContainers: [r]
                }, null !== e && null !== (e = br(e)) && ve(e), t) : (t.eventSystemFlags |= i, e = t.targetContainers, null !== r && -1 === e.indexOf(r) && e.push(r), t)
            }

            function Ue(t) {
                var e = yr(t.target);
                if (null !== e) {
                    var n = Wt(e);
                    if (null !== n) if (13 === (e = n.tag)) {
                        if (null !== (e = Qt(n))) return t.blockedOn = e, void ke(t.priority, (function () {
                            Ne(n)
                        }))
                    } else if (3 === e && n.stateNode.current.memoizedState.isDehydrated) return void (t.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                t.blockedOn = null
            }

            function Re(t) {
                if (null !== t.blockedOn) return !1;
                for (var e = t.targetContainers; 0 < e.length;) {
                    var n = Je(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
                    if (null !== n) return null !== (e = br(n)) && ve(e), t.blockedOn = n, !1;
                    var i = new (n = t.nativeEvent).constructor(n.type, n);
                    xt = i, n.target.dispatchEvent(i), xt = null, e.shift()
                }
                return !0
            }

            function Ve(t, e, n) {
                Re(t) && n.delete(e)
            }

            function Fe() {
                Te = !1, null !== we && Re(we) && (we = null), null !== Ee && Re(Ee) && (Ee = null), null !== Ce && Re(Ce) && (Ce = null), ze.forEach(Ve), je.forEach(Ve)
            }

            function Pe(t, e) {
                t.blockedOn === e && (t.blockedOn = null, Te || (Te = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Fe)))
            }

            function We(t) {
                function e(e) {
                    return Pe(e, t)
                }

                if (0 < Se.length) {
                    Pe(Se[0], t);
                    for (var n = 1; n < Se.length; n++) {
                        var i = Se[n];
                        i.blockedOn === t && (i.blockedOn = null)
                    }
                }
                for (null !== we && Pe(we, t), null !== Ee && Pe(Ee, t), null !== Ce && Pe(Ce, t), ze.forEach(e), je.forEach(e), n = 0; n < Ie.length; n++) (i = Ie[n]).blockedOn === t && (i.blockedOn = null);
                for (; 0 < Ie.length && null === (n = Ie[0]).blockedOn;) Ue(n), null === n.blockedOn && Ie.shift()
            }

            var Qe = x.ReactCurrentBatchConfig, Ye = !0;

            function Be(t, e, n, i) {
                var r = be, a = Qe.transition;
                Qe.transition = null;
                try {
                    be = 1, He(t, e, n, i)
                } finally {
                    be = r, Qe.transition = a
                }
            }

            function Ze(t, e, n, i) {
                var r = be, a = Qe.transition;
                Qe.transition = null;
                try {
                    be = 4, He(t, e, n, i)
                } finally {
                    be = r, Qe.transition = a
                }
            }

            function He(t, e, n, i) {
                if (Ye) {
                    var r = Je(t, e, n, i);
                    if (null === r) Yi(t, e, i, Ge, n), Oe(t, i); else if (function (t, e, n, i, r) {
                        switch (e) {
                            case"focusin":
                                return we = Le(we, t, e, n, i, r), !0;
                            case"dragenter":
                                return Ee = Le(Ee, t, e, n, i, r), !0;
                            case"mouseover":
                                return Ce = Le(Ce, t, e, n, i, r), !0;
                            case"pointerover":
                                var a = r.pointerId;
                                return ze.set(a, Le(ze.get(a) || null, t, e, n, i, r)), !0;
                            case"gotpointercapture":
                                return a = r.pointerId, je.set(a, Le(je.get(a) || null, t, e, n, i, r)), !0
                        }
                        return !1
                    }(r, t, e, n, i)) i.stopPropagation(); else if (Oe(t, i), 4 & e && -1 < _e.indexOf(t)) {
                        for (; null !== r;) {
                            var a = br(r);
                            if (null !== a && Ae(a), null === (a = Je(t, e, n, i)) && Yi(t, e, i, Ge, n), a === r) break;
                            r = a
                        }
                        null !== r && i.stopPropagation()
                    } else Yi(t, e, i, null, n)
                }
            }

            var Ge = null;

            function Je(t, e, n, i) {
                if (Ge = null, null !== (t = yr(t = At(i)))) if (null === (e = Wt(t))) t = null; else if (13 === (n = e.tag)) {
                    if (null !== (t = Qt(e))) return t;
                    t = null
                } else if (3 === n) {
                    if (e.stateNode.current.memoizedState.isDehydrated) return 3 === e.tag ? e.stateNode.containerInfo : null;
                    t = null
                } else e !== t && (t = null);
                return Ge = t, null
            }

            function Xe(t) {
                switch (t) {
                    case"cancel":
                    case"click":
                    case"close":
                    case"contextmenu":
                    case"copy":
                    case"cut":
                    case"auxclick":
                    case"dblclick":
                    case"dragend":
                    case"dragstart":
                    case"drop":
                    case"focusin":
                    case"focusout":
                    case"input":
                    case"invalid":
                    case"keydown":
                    case"keypress":
                    case"keyup":
                    case"mousedown":
                    case"mouseup":
                    case"paste":
                    case"pause":
                    case"play":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointerup":
                    case"ratechange":
                    case"reset":
                    case"resize":
                    case"seeked":
                    case"submit":
                    case"touchcancel":
                    case"touchend":
                    case"touchstart":
                    case"volumechange":
                    case"change":
                    case"selectionchange":
                    case"textInput":
                    case"compositionstart":
                    case"compositionend":
                    case"compositionupdate":
                    case"beforeblur":
                    case"afterblur":
                    case"beforeinput":
                    case"blur":
                    case"fullscreenchange":
                    case"focus":
                    case"hashchange":
                    case"popstate":
                    case"select":
                    case"selectstart":
                        return 1;
                    case"drag":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"mousemove":
                    case"mouseout":
                    case"mouseover":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"scroll":
                    case"toggle":
                    case"touchmove":
                    case"wheel":
                    case"mouseenter":
                    case"mouseleave":
                    case"pointerenter":
                    case"pointerleave":
                        return 4;
                    case"message":
                        switch (Kt()) {
                            case qt:
                                return 1;
                            case te:
                                return 4;
                            case ee:
                            case ne:
                                return 16;
                            case ie:
                                return 536870912;
                            default:
                                return 16
                        }
                    default:
                        return 16
                }
            }

            var $e = null, Ke = null, qe = null;

            function tn() {
                if (qe) return qe;
                var t, e, n = Ke, i = n.length, r = "value" in $e ? $e.value : $e.textContent, a = r.length;
                for (t = 0; t < i && n[t] === r[t]; t++) ;
                var o = i - t;
                for (e = 1; e <= o && n[i - e] === r[a - e]; e++) ;
                return qe = r.slice(t, 1 < e ? 1 - e : void 0)
            }

            function en(t) {
                var e = t.keyCode;
                return "charCode" in t ? 0 === (t = t.charCode) && 13 === e && (t = 13) : t = e, 10 === t && (t = 13), 32 <= t || 13 === t ? t : 0
            }

            function nn() {
                return !0
            }

            function rn() {
                return !1
            }

            function an(t) {
                function e(e, n, i, r, a) {
                    for (var o in this._reactName = e, this._targetInst = i, this.type = n, this.nativeEvent = r, this.target = a, this.currentTarget = null, t) t.hasOwnProperty(o) && (e = t[o], this[o] = e ? e(r) : r[o]);
                    return this.isDefaultPrevented = (null != r.defaultPrevented ? r.defaultPrevented : !1 === r.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                }

                return U(e.prototype, {
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                        var t = this.nativeEvent;
                        t && (t.preventDefault ? t.preventDefault() : "unknown" != typeof t.returnValue && (t.returnValue = !1), this.isDefaultPrevented = nn)
                    }, stopPropagation: function () {
                        var t = this.nativeEvent;
                        t && (t.stopPropagation ? t.stopPropagation() : "unknown" != typeof t.cancelBubble && (t.cancelBubble = !0), this.isPropagationStopped = nn)
                    }, persist: function () {
                    }, isPersistent: nn
                }), e
            }

            var on, sn, ln, cn = {
                    eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (t) {
                        return t.timeStamp || Date.now()
                    }, defaultPrevented: 0, isTrusted: 0
                }, un = an(cn), dn = U({}, cn, {view: 0, detail: 0}), hn = an(dn), fn = U({}, dn, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: kn,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function (t) {
                        return void 0 === t.relatedTarget ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
                    },
                    movementX: function (t) {
                        return "movementX" in t ? t.movementX : (t !== ln && (ln && "mousemove" === t.type ? (on = t.screenX - ln.screenX, sn = t.screenY - ln.screenY) : sn = on = 0, ln = t), on)
                    },
                    movementY: function (t) {
                        return "movementY" in t ? t.movementY : sn
                    }
                }), pn = an(fn), gn = an(U({}, fn, {dataTransfer: 0})), mn = an(U({}, dn, {relatedTarget: 0})),
                Mn = an(U({}, cn, {animationName: 0, elapsedTime: 0, pseudoElement: 0})), yn = U({}, cn, {
                    clipboardData: function (t) {
                        return "clipboardData" in t ? t.clipboardData : window.clipboardData
                    }
                }), bn = an(yn), xn = an(U({}, cn, {data: 0})), An = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified"
                }, vn = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta"
                }, Nn = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

            function Dn(t) {
                var e = this.nativeEvent;
                return e.getModifierState ? e.getModifierState(t) : !!(t = Nn[t]) && !!e[t]
            }

            function kn() {
                return Dn
            }

            var Tn = U({}, dn, {
                key: function (t) {
                    if (t.key) {
                        var e = An[t.key] || t.key;
                        if ("Unidentified" !== e) return e
                    }
                    return "keypress" === t.type ? 13 === (t = en(t)) ? "Enter" : String.fromCharCode(t) : "keydown" === t.type || "keyup" === t.type ? vn[t.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: kn,
                charCode: function (t) {
                    return "keypress" === t.type ? en(t) : 0
                },
                keyCode: function (t) {
                    return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
                },
                which: function (t) {
                    return "keypress" === t.type ? en(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
                }
            }), Sn = an(Tn), wn = an(U({}, fn, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            })), En = an(U({}, dn, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: kn
            })), Cn = an(U({}, cn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})), zn = U({}, fn, {
                deltaX: function (t) {
                    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
                }, deltaY: function (t) {
                    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
                }, deltaZ: 0, deltaMode: 0
            }), jn = an(zn), In = [9, 13, 27, 32], _n = u && "CompositionEvent" in window, On = null;
            u && "documentMode" in document && (On = document.documentMode);
            var Ln = u && "TextEvent" in window && !On, Un = u && (!_n || On && 8 < On && 11 >= On),
                Rn = String.fromCharCode(32), Vn = !1;

            function Fn(t, e) {
                switch (t) {
                    case"keyup":
                        return -1 !== In.indexOf(e.keyCode);
                    case"keydown":
                        return 229 !== e.keyCode;
                    case"keypress":
                    case"mousedown":
                    case"focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function Pn(t) {
                return "object" == typeof (t = t.detail) && "data" in t ? t.data : null
            }

            var Wn = !1, Qn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };

            function Yn(t) {
                var e = t && t.nodeName && t.nodeName.toLowerCase();
                return "input" === e ? !!Qn[t.type] : "textarea" === e
            }

            function Bn(t, e, n, i) {
                Tt(i), 0 < (e = Zi(e, "onChange")).length && (n = new un("onChange", "change", null, n, i), t.push({
                    event: n,
                    listeners: e
                }))
            }

            var Zn = null, Hn = null;

            function Gn(t) {
                Ri(t, 0)
            }

            function Jn(t) {
                if (H(xr(t))) return t
            }

            function Xn(t, e) {
                if ("change" === t) return e
            }

            var $n = !1;
            if (u) {
                var Kn;
                if (u) {
                    var qn = "oninput" in document;
                    if (!qn) {
                        var ti = document.createElement("div");
                        ti.setAttribute("oninput", "return;"), qn = "function" == typeof ti.oninput
                    }
                    Kn = qn
                } else Kn = !1;
                $n = Kn && (!document.documentMode || 9 < document.documentMode)
            }

            function ei() {
                Zn && (Zn.detachEvent("onpropertychange", ni), Hn = Zn = null)
            }

            function ni(t) {
                if ("value" === t.propertyName && Jn(Hn)) {
                    var e = [];
                    Bn(e, Hn, t, At(t)), zt(Gn, e)
                }
            }

            function ii(t, e, n) {
                "focusin" === t ? (ei(), Hn = n, (Zn = e).attachEvent("onpropertychange", ni)) : "focusout" === t && ei()
            }

            function ri(t) {
                if ("selectionchange" === t || "keyup" === t || "keydown" === t) return Jn(Hn)
            }

            function ai(t, e) {
                if ("click" === t) return Jn(e)
            }

            function oi(t, e) {
                if ("input" === t || "change" === t) return Jn(e)
            }

            var si = "function" == typeof Object.is ? Object.is : function (t, e) {
                return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
            };

            function li(t, e) {
                if (si(t, e)) return !0;
                if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
                var n = Object.keys(t), i = Object.keys(e);
                if (n.length !== i.length) return !1;
                for (i = 0; i < n.length; i++) {
                    var r = n[i];
                    if (!d.call(e, r) || !si(t[r], e[r])) return !1
                }
                return !0
            }

            function ci(t) {
                for (; t && t.firstChild;) t = t.firstChild;
                return t
            }

            function ui(t, e) {
                var n, i = ci(t);
                for (t = 0; i;) {
                    if (3 === i.nodeType) {
                        if (n = t + i.textContent.length, t <= e && n >= e) return {node: i, offset: e - t};
                        t = n
                    }
                    t:{
                        for (; i;) {
                            if (i.nextSibling) {
                                i = i.nextSibling;
                                break t
                            }
                            i = i.parentNode
                        }
                        i = void 0
                    }
                    i = ci(i)
                }
            }

            function di(t, e) {
                return !(!t || !e) && (t === e || (!t || 3 !== t.nodeType) && (e && 3 === e.nodeType ? di(t, e.parentNode) : "contains" in t ? t.contains(e) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(e))))
            }

            function hi() {
                for (var t = window, e = G(); e instanceof t.HTMLIFrameElement;) {
                    try {
                        var n = "string" == typeof e.contentWindow.location.href
                    } catch (t) {
                        n = !1
                    }
                    if (!n) break;
                    e = G((t = e.contentWindow).document)
                }
                return e
            }

            function fi(t) {
                var e = t && t.nodeName && t.nodeName.toLowerCase();
                return e && ("input" === e && ("text" === t.type || "search" === t.type || "tel" === t.type || "url" === t.type || "password" === t.type) || "textarea" === e || "true" === t.contentEditable)
            }

            function pi(t) {
                var e = hi(), n = t.focusedElem, i = t.selectionRange;
                if (e !== n && n && n.ownerDocument && di(n.ownerDocument.documentElement, n)) {
                    if (null !== i && fi(n)) if (e = i.start, void 0 === (t = i.end) && (t = e), "selectionStart" in n) n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length); else if ((t = (e = n.ownerDocument || document) && e.defaultView || window).getSelection) {
                        t = t.getSelection();
                        var r = n.textContent.length, a = Math.min(i.start, r);
                        i = void 0 === i.end ? a : Math.min(i.end, r), !t.extend && a > i && (r = i, i = a, a = r), r = ui(n, a);
                        var o = ui(n, i);
                        r && o && (1 !== t.rangeCount || t.anchorNode !== r.node || t.anchorOffset !== r.offset || t.focusNode !== o.node || t.focusOffset !== o.offset) && ((e = e.createRange()).setStart(r.node, r.offset), t.removeAllRanges(), a > i ? (t.addRange(e), t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset), t.addRange(e)))
                    }
                    for (e = [], t = n; t = t.parentNode;) 1 === t.nodeType && e.push({
                        element: t,
                        left: t.scrollLeft,
                        top: t.scrollTop
                    });
                    for ("function" == typeof n.focus && n.focus(), n = 0; n < e.length; n++) (t = e[n]).element.scrollLeft = t.left, t.element.scrollTop = t.top
                }
            }

            var gi = u && "documentMode" in document && 11 >= document.documentMode, mi = null, Mi = null, yi = null,
                bi = !1;

            function xi(t, e, n) {
                var i = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                bi || null == mi || mi !== G(i) || (i = "selectionStart" in (i = mi) && fi(i) ? {
                    start: i.selectionStart,
                    end: i.selectionEnd
                } : {
                    anchorNode: (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: i.anchorOffset,
                    focusNode: i.focusNode,
                    focusOffset: i.focusOffset
                }, yi && li(yi, i) || (yi = i, 0 < (i = Zi(Mi, "onSelect")).length && (e = new un("onSelect", "select", null, e, n), t.push({
                    event: e,
                    listeners: i
                }), e.target = mi)))
            }

            function Ai(t, e) {
                var n = {};
                return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
            }

            var vi = {
                animationend: Ai("Animation", "AnimationEnd"),
                animationiteration: Ai("Animation", "AnimationIteration"),
                animationstart: Ai("Animation", "AnimationStart"),
                transitionend: Ai("Transition", "TransitionEnd")
            }, Ni = {}, Di = {};

            function ki(t) {
                if (Ni[t]) return Ni[t];
                if (!vi[t]) return t;
                var e, n = vi[t];
                for (e in n) if (n.hasOwnProperty(e) && e in Di) return Ni[t] = n[e];
                return t
            }

            u && (Di = document.createElement("div").style, "AnimationEvent" in window || (delete vi.animationend.animation, delete vi.animationiteration.animation, delete vi.animationstart.animation), "TransitionEvent" in window || delete vi.transitionend.transition);
            var Ti = ki("animationend"), Si = ki("animationiteration"), wi = ki("animationstart"),
                Ei = ki("transitionend"), Ci = new Map,
                zi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

            function ji(t, e) {
                Ci.set(t, e), l(e, [t])
            }

            for (var Ii = 0; Ii < zi.length; Ii++) {
                var _i = zi[Ii];
                ji(_i.toLowerCase(), "on" + (_i[0].toUpperCase() + _i.slice(1)))
            }
            ji(Ti, "onAnimationEnd"), ji(Si, "onAnimationIteration"), ji(wi, "onAnimationStart"), ji("dblclick", "onDoubleClick"), ji("focusin", "onFocus"), ji("focusout", "onBlur"), ji(Ei, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Oi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                Li = new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));

            function Ui(t, e, n) {
                var i = t.type || "unknown-event";
                t.currentTarget = n, function (t, e, n, i, r, o, s, l, c) {
                    if (Pt.apply(this, arguments), Lt) {
                        if (!Lt) throw Error(a(198));
                        var u = Ut;
                        Lt = !1, Ut = null, Rt || (Rt = !0, Vt = u)
                    }
                }(i, e, void 0, t), t.currentTarget = null
            }

            function Ri(t, e) {
                e = !!(4 & e);
                for (var n = 0; n < t.length; n++) {
                    var i = t[n], r = i.event;
                    i = i.listeners;
                    t:{
                        var a = void 0;
                        if (e) for (var o = i.length - 1; 0 <= o; o--) {
                            var s = i[o], l = s.instance, c = s.currentTarget;
                            if (s = s.listener, l !== a && r.isPropagationStopped()) break t;
                            Ui(r, s, c), a = l
                        } else for (o = 0; o < i.length; o++) {
                            if (l = (s = i[o]).instance, c = s.currentTarget, s = s.listener, l !== a && r.isPropagationStopped()) break t;
                            Ui(r, s, c), a = l
                        }
                    }
                }
                if (Rt) throw t = Vt, Rt = !1, Vt = null, t
            }

            function Vi(t, e) {
                var n = e[gr];
                void 0 === n && (n = e[gr] = new Set);
                var i = t + "__bubble";
                n.has(i) || (Qi(e, t, 2, !1), n.add(i))
            }

            function Fi(t, e, n) {
                var i = 0;
                e && (i |= 4), Qi(n, t, i, e)
            }

            var Pi = "_reactListening" + Math.random().toString(36).slice(2);

            function Wi(t) {
                if (!t[Pi]) {
                    t[Pi] = !0, o.forEach((function (e) {
                        "selectionchange" !== e && (Li.has(e) || Fi(e, !1, t), Fi(e, !0, t))
                    }));
                    var e = 9 === t.nodeType ? t : t.ownerDocument;
                    null === e || e[Pi] || (e[Pi] = !0, Fi("selectionchange", !1, e))
                }
            }

            function Qi(t, e, n, i) {
                switch (Xe(e)) {
                    case 1:
                        var r = Be;
                        break;
                    case 4:
                        r = Ze;
                        break;
                    default:
                        r = He
                }
                n = r.bind(null, e, n, t), r = void 0, !It || "touchstart" !== e && "touchmove" !== e && "wheel" !== e || (r = !0), i ? void 0 !== r ? t.addEventListener(e, n, {
                    capture: !0,
                    passive: r
                }) : t.addEventListener(e, n, !0) : void 0 !== r ? t.addEventListener(e, n, {passive: r}) : t.addEventListener(e, n, !1)
            }

            function Yi(t, e, n, i, r) {
                var a = i;
                if (!(1 & e || 2 & e || null === i)) t:for (; ;) {
                    if (null === i) return;
                    var o = i.tag;
                    if (3 === o || 4 === o) {
                        var s = i.stateNode.containerInfo;
                        if (s === r || 8 === s.nodeType && s.parentNode === r) break;
                        if (4 === o) for (o = i.return; null !== o;) {
                            var l = o.tag;
                            if ((3 === l || 4 === l) && ((l = o.stateNode.containerInfo) === r || 8 === l.nodeType && l.parentNode === r)) return;
                            o = o.return
                        }
                        for (; null !== s;) {
                            if (null === (o = yr(s))) return;
                            if (5 === (l = o.tag) || 6 === l) {
                                i = a = o;
                                continue t
                            }
                            s = s.parentNode
                        }
                    }
                    i = i.return
                }
                zt((function () {
                    var i = a, r = At(n), o = [];
                    t:{
                        var s = Ci.get(t);
                        if (void 0 !== s) {
                            var l = un, c = t;
                            switch (t) {
                                case"keypress":
                                    if (0 === en(n)) break t;
                                case"keydown":
                                case"keyup":
                                    l = Sn;
                                    break;
                                case"focusin":
                                    c = "focus", l = mn;
                                    break;
                                case"focusout":
                                    c = "blur", l = mn;
                                    break;
                                case"beforeblur":
                                case"afterblur":
                                    l = mn;
                                    break;
                                case"click":
                                    if (2 === n.button) break t;
                                case"auxclick":
                                case"dblclick":
                                case"mousedown":
                                case"mousemove":
                                case"mouseup":
                                case"mouseout":
                                case"mouseover":
                                case"contextmenu":
                                    l = pn;
                                    break;
                                case"drag":
                                case"dragend":
                                case"dragenter":
                                case"dragexit":
                                case"dragleave":
                                case"dragover":
                                case"dragstart":
                                case"drop":
                                    l = gn;
                                    break;
                                case"touchcancel":
                                case"touchend":
                                case"touchmove":
                                case"touchstart":
                                    l = En;
                                    break;
                                case Ti:
                                case Si:
                                case wi:
                                    l = Mn;
                                    break;
                                case Ei:
                                    l = Cn;
                                    break;
                                case"scroll":
                                    l = hn;
                                    break;
                                case"wheel":
                                    l = jn;
                                    break;
                                case"copy":
                                case"cut":
                                case"paste":
                                    l = bn;
                                    break;
                                case"gotpointercapture":
                                case"lostpointercapture":
                                case"pointercancel":
                                case"pointerdown":
                                case"pointermove":
                                case"pointerout":
                                case"pointerover":
                                case"pointerup":
                                    l = wn
                            }
                            var u = !!(4 & e), d = !u && "scroll" === t, h = u ? null !== s ? s + "Capture" : null : s;
                            u = [];
                            for (var f, p = i; null !== p;) {
                                var g = (f = p).stateNode;
                                if (5 === f.tag && null !== g && (f = g, null !== h && null != (g = jt(p, h)) && u.push(Bi(p, g, f))), d) break;
                                p = p.return
                            }
                            0 < u.length && (s = new l(s, c, null, n, r), o.push({event: s, listeners: u}))
                        }
                    }
                    if (!(7 & e)) {
                        if (l = "mouseout" === t || "pointerout" === t, (!(s = "mouseover" === t || "pointerover" === t) || n === xt || !(c = n.relatedTarget || n.fromElement) || !yr(c) && !c[pr]) && (l || s) && (s = r.window === r ? r : (s = r.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (l = i, null !== (c = (c = n.relatedTarget || n.toElement) ? yr(c) : null) && (c !== (d = Wt(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (l = null, c = i), l !== c)) {
                            if (u = pn, g = "onMouseLeave", h = "onMouseEnter", p = "mouse", "pointerout" !== t && "pointerover" !== t || (u = wn, g = "onPointerLeave", h = "onPointerEnter", p = "pointer"), d = null == l ? s : xr(l), f = null == c ? s : xr(c), (s = new u(g, p + "leave", l, n, r)).target = d, s.relatedTarget = f, g = null, yr(r) === i && ((u = new u(h, p + "enter", c, n, r)).target = f, u.relatedTarget = d, g = u), d = g, l && c) t:{
                                for (h = c, p = 0, f = u = l; f; f = Hi(f)) p++;
                                for (f = 0, g = h; g; g = Hi(g)) f++;
                                for (; 0 < p - f;) u = Hi(u), p--;
                                for (; 0 < f - p;) h = Hi(h), f--;
                                for (; p--;) {
                                    if (u === h || null !== h && u === h.alternate) break t;
                                    u = Hi(u), h = Hi(h)
                                }
                                u = null
                            } else u = null;
                            null !== l && Gi(o, s, l, u, !1), null !== c && null !== d && Gi(o, d, c, u, !0)
                        }
                        if ("select" === (l = (s = i ? xr(i) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type) var m = Xn; else if (Yn(s)) if ($n) m = oi; else {
                            m = ri;
                            var M = ii
                        } else (l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (m = ai);
                        switch (m && (m = m(t, i)) ? Bn(o, m, n, r) : (M && M(t, s, i), "focusout" === t && (M = s._wrapperState) && M.controlled && "number" === s.type && tt(s, "number", s.value)), M = i ? xr(i) : window, t) {
                            case"focusin":
                                (Yn(M) || "true" === M.contentEditable) && (mi = M, Mi = i, yi = null);
                                break;
                            case"focusout":
                                yi = Mi = mi = null;
                                break;
                            case"mousedown":
                                bi = !0;
                                break;
                            case"contextmenu":
                            case"mouseup":
                            case"dragend":
                                bi = !1, xi(o, n, r);
                                break;
                            case"selectionchange":
                                if (gi) break;
                            case"keydown":
                            case"keyup":
                                xi(o, n, r)
                        }
                        var y;
                        if (_n) t:{
                            switch (t) {
                                case"compositionstart":
                                    var b = "onCompositionStart";
                                    break t;
                                case"compositionend":
                                    b = "onCompositionEnd";
                                    break t;
                                case"compositionupdate":
                                    b = "onCompositionUpdate";
                                    break t
                            }
                            b = void 0
                        } else Wn ? Fn(t, n) && (b = "onCompositionEnd") : "keydown" === t && 229 === n.keyCode && (b = "onCompositionStart");
                        b && (Un && "ko" !== n.locale && (Wn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Wn && (y = tn()) : (Ke = "value" in ($e = r) ? $e.value : $e.textContent, Wn = !0)), 0 < (M = Zi(i, b)).length && (b = new xn(b, t, null, n, r), o.push({
                            event: b,
                            listeners: M
                        }), (y || null !== (y = Pn(n))) && (b.data = y))), (y = Ln ? function (t, e) {
                            switch (t) {
                                case"compositionend":
                                    return Pn(e);
                                case"keypress":
                                    return 32 !== e.which ? null : (Vn = !0, Rn);
                                case"textInput":
                                    return (t = e.data) === Rn && Vn ? null : t;
                                default:
                                    return null
                            }
                        }(t, n) : function (t, e) {
                            if (Wn) return "compositionend" === t || !_n && Fn(t, e) ? (t = tn(), qe = Ke = $e = null, Wn = !1, t) : null;
                            switch (t) {
                                case"paste":
                                default:
                                    return null;
                                case"keypress":
                                    if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                                        if (e.char && 1 < e.char.length) return e.char;
                                        if (e.which) return String.fromCharCode(e.which)
                                    }
                                    return null;
                                case"compositionend":
                                    return Un && "ko" !== e.locale ? null : e.data
                            }
                        }(t, n)) && 0 < (i = Zi(i, "onBeforeInput")).length && (r = new xn("onBeforeInput", "beforeinput", null, n, r), o.push({
                            event: r,
                            listeners: i
                        }), r.data = y)
                    }
                    Ri(o, e)
                }))
            }

            function Bi(t, e, n) {
                return {instance: t, listener: e, currentTarget: n}
            }

            function Zi(t, e) {
                for (var n = e + "Capture", i = []; null !== t;) {
                    var r = t, a = r.stateNode;
                    5 === r.tag && null !== a && (r = a, null != (a = jt(t, n)) && i.unshift(Bi(t, a, r)), null != (a = jt(t, e)) && i.push(Bi(t, a, r))), t = t.return
                }
                return i
            }

            function Hi(t) {
                if (null === t) return null;
                do {
                    t = t.return
                } while (t && 5 !== t.tag);
                return t || null
            }

            function Gi(t, e, n, i, r) {
                for (var a = e._reactName, o = []; null !== n && n !== i;) {
                    var s = n, l = s.alternate, c = s.stateNode;
                    if (null !== l && l === i) break;
                    5 === s.tag && null !== c && (s = c, r ? null != (l = jt(n, a)) && o.unshift(Bi(n, l, s)) : r || null != (l = jt(n, a)) && o.push(Bi(n, l, s))), n = n.return
                }
                0 !== o.length && t.push({event: e, listeners: o})
            }

            var Ji = /\r\n?/g, Xi = /\u0000|\uFFFD/g;

            function $i(t) {
                return ("string" == typeof t ? t : "" + t).replace(Ji, "\n").replace(Xi, "")
            }

            function Ki(t, e, n) {
                if (e = $i(e), $i(t) !== e && n) throw Error(a(425))
            }

            function qi() {
            }

            var tr = null, er = null;

            function nr(t, e) {
                return "textarea" === t || "noscript" === t || "string" == typeof e.children || "number" == typeof e.children || "object" == typeof e.dangerouslySetInnerHTML && null !== e.dangerouslySetInnerHTML && null != e.dangerouslySetInnerHTML.__html
            }

            var ir = "function" == typeof setTimeout ? setTimeout : void 0,
                rr = "function" == typeof clearTimeout ? clearTimeout : void 0,
                ar = "function" == typeof Promise ? Promise : void 0,
                or = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== ar ? function (t) {
                    return ar.resolve(null).then(t).catch(sr)
                } : ir;

            function sr(t) {
                setTimeout((function () {
                    throw t
                }))
            }

            function lr(t, e) {
                var n = e, i = 0;
                do {
                    var r = n.nextSibling;
                    if (t.removeChild(n), r && 8 === r.nodeType) if ("/$" === (n = r.data)) {
                        if (0 === i) return t.removeChild(r), void We(e);
                        i--
                    } else "$" !== n && "$?" !== n && "$!" !== n || i++;
                    n = r
                } while (n);
                We(e)
            }

            function cr(t) {
                for (; null != t; t = t.nextSibling) {
                    var e = t.nodeType;
                    if (1 === e || 3 === e) break;
                    if (8 === e) {
                        if ("$" === (e = t.data) || "$!" === e || "$?" === e) break;
                        if ("/$" === e) return null
                    }
                }
                return t
            }

            function ur(t) {
                t = t.previousSibling;
                for (var e = 0; t;) {
                    if (8 === t.nodeType) {
                        var n = t.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === e) return t;
                            e--
                        } else "/$" === n && e++
                    }
                    t = t.previousSibling
                }
                return null
            }

            var dr = Math.random().toString(36).slice(2), hr = "__reactFiber$" + dr, fr = "__reactProps$" + dr,
                pr = "__reactContainer$" + dr, gr = "__reactEvents$" + dr, mr = "__reactListeners$" + dr,
                Mr = "__reactHandles$" + dr;

            function yr(t) {
                var e = t[hr];
                if (e) return e;
                for (var n = t.parentNode; n;) {
                    if (e = n[pr] || n[hr]) {
                        if (n = e.alternate, null !== e.child || null !== n && null !== n.child) for (t = ur(t); null !== t;) {
                            if (n = t[hr]) return n;
                            t = ur(t)
                        }
                        return e
                    }
                    n = (t = n).parentNode
                }
                return null
            }

            function br(t) {
                return !(t = t[hr] || t[pr]) || 5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag ? null : t
            }

            function xr(t) {
                if (5 === t.tag || 6 === t.tag) return t.stateNode;
                throw Error(a(33))
            }

            function Ar(t) {
                return t[fr] || null
            }

            var vr = [], Nr = -1;

            function Dr(t) {
                return {current: t}
            }

            function kr(t) {
                0 > Nr || (t.current = vr[Nr], vr[Nr] = null, Nr--)
            }

            function Tr(t, e) {
                Nr++, vr[Nr] = t.current, t.current = e
            }

            var Sr = {}, wr = Dr(Sr), Er = Dr(!1), Cr = Sr;

            function zr(t, e) {
                var n = t.type.contextTypes;
                if (!n) return Sr;
                var i = t.stateNode;
                if (i && i.__reactInternalMemoizedUnmaskedChildContext === e) return i.__reactInternalMemoizedMaskedChildContext;
                var r, a = {};
                for (r in n) a[r] = e[r];
                return i && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = a), a
            }

            function jr(t) {
                return null != t.childContextTypes
            }

            function Ir() {
                kr(Er), kr(wr)
            }

            function _r(t, e, n) {
                if (wr.current !== Sr) throw Error(a(168));
                Tr(wr, e), Tr(Er, n)
            }

            function Or(t, e, n) {
                var i = t.stateNode;
                if (e = e.childContextTypes, "function" != typeof i.getChildContext) return n;
                for (var r in i = i.getChildContext()) if (!(r in e)) throw Error(a(108, Q(t) || "Unknown", r));
                return U({}, n, i)
            }

            function Lr(t) {
                return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Sr, Cr = wr.current, Tr(wr, t), Tr(Er, Er.current), !0
            }

            function Ur(t, e, n) {
                var i = t.stateNode;
                if (!i) throw Error(a(169));
                n ? (t = Or(t, e, Cr), i.__reactInternalMemoizedMergedChildContext = t, kr(Er), kr(wr), Tr(wr, t)) : kr(Er), Tr(Er, n)
            }

            var Rr = null, Vr = !1, Fr = !1;

            function Pr(t) {
                null === Rr ? Rr = [t] : Rr.push(t)
            }

            function Wr() {
                if (!Fr && null !== Rr) {
                    Fr = !0;
                    var t = 0, e = be;
                    try {
                        var n = Rr;
                        for (be = 1; t < n.length; t++) {
                            var i = n[t];
                            do {
                                i = i(!0)
                            } while (null !== i)
                        }
                        Rr = null, Vr = !1
                    } catch (e) {
                        throw null !== Rr && (Rr = Rr.slice(t + 1)), Ht(qt, Wr), e
                    } finally {
                        be = e, Fr = !1
                    }
                }
                return null
            }

            var Qr = [], Yr = 0, Br = null, Zr = 0, Hr = [], Gr = 0, Jr = null, Xr = 1, $r = "";

            function Kr(t, e) {
                Qr[Yr++] = Zr, Qr[Yr++] = Br, Br = t, Zr = e
            }

            function qr(t, e, n) {
                Hr[Gr++] = Xr, Hr[Gr++] = $r, Hr[Gr++] = Jr, Jr = t;
                var i = Xr;
                t = $r;
                var r = 32 - oe(i) - 1;
                i &= ~(1 << r), n += 1;
                var a = 32 - oe(e) + r;
                if (30 < a) {
                    var o = r - r % 5;
                    a = (i & (1 << o) - 1).toString(32), i >>= o, r -= o, Xr = 1 << 32 - oe(e) + r | n << r | i, $r = a + t
                } else Xr = 1 << a | n << r | i, $r = t
            }

            function ta(t) {
                null !== t.return && (Kr(t, 1), qr(t, 1, 0))
            }

            function ea(t) {
                for (; t === Br;) Br = Qr[--Yr], Qr[Yr] = null, Zr = Qr[--Yr], Qr[Yr] = null;
                for (; t === Jr;) Jr = Hr[--Gr], Hr[Gr] = null, $r = Hr[--Gr], Hr[Gr] = null, Xr = Hr[--Gr], Hr[Gr] = null
            }

            var na = null, ia = null, ra = !1, aa = null;

            function oa(t, e) {
                var n = zc(5, null, null, 0);
                n.elementType = "DELETED", n.stateNode = e, n.return = t, null === (e = t.deletions) ? (t.deletions = [n], t.flags |= 16) : e.push(n)
            }

            function sa(t, e) {
                switch (t.tag) {
                    case 5:
                        var n = t.type;
                        return null !== (e = 1 !== e.nodeType || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e) && (t.stateNode = e, na = t, ia = cr(e.firstChild), !0);
                    case 6:
                        return null !== (e = "" === t.pendingProps || 3 !== e.nodeType ? null : e) && (t.stateNode = e, na = t, ia = null, !0);
                    case 13:
                        return null !== (e = 8 !== e.nodeType ? null : e) && (n = null !== Jr ? {
                            id: Xr,
                            overflow: $r
                        } : null, t.memoizedState = {
                            dehydrated: e,
                            treeContext: n,
                            retryLane: 1073741824
                        }, (n = zc(18, null, null, 0)).stateNode = e, n.return = t, t.child = n, na = t, ia = null, !0);
                    default:
                        return !1
                }
            }

            function la(t) {
                return !(!(1 & t.mode) || 128 & t.flags)
            }

            function ca(t) {
                if (ra) {
                    var e = ia;
                    if (e) {
                        var n = e;
                        if (!sa(t, e)) {
                            if (la(t)) throw Error(a(418));
                            e = cr(n.nextSibling);
                            var i = na;
                            e && sa(t, e) ? oa(i, n) : (t.flags = -4097 & t.flags | 2, ra = !1, na = t)
                        }
                    } else {
                        if (la(t)) throw Error(a(418));
                        t.flags = -4097 & t.flags | 2, ra = !1, na = t
                    }
                }
            }

            function ua(t) {
                for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;) t = t.return;
                na = t
            }

            function da(t) {
                if (t !== na) return !1;
                if (!ra) return ua(t), ra = !0, !1;
                var e;
                if ((e = 3 !== t.tag) && !(e = 5 !== t.tag) && (e = "head" !== (e = t.type) && "body" !== e && !nr(t.type, t.memoizedProps)), e && (e = ia)) {
                    if (la(t)) throw ha(), Error(a(418));
                    for (; e;) oa(t, e), e = cr(e.nextSibling)
                }
                if (ua(t), 13 === t.tag) {
                    if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) throw Error(a(317));
                    t:{
                        for (t = t.nextSibling, e = 0; t;) {
                            if (8 === t.nodeType) {
                                var n = t.data;
                                if ("/$" === n) {
                                    if (0 === e) {
                                        ia = cr(t.nextSibling);
                                        break t
                                    }
                                    e--
                                } else "$" !== n && "$!" !== n && "$?" !== n || e++
                            }
                            t = t.nextSibling
                        }
                        ia = null
                    }
                } else ia = na ? cr(t.stateNode.nextSibling) : null;
                return !0
            }

            function ha() {
                for (var t = ia; t;) t = cr(t.nextSibling)
            }

            function fa() {
                ia = na = null, ra = !1
            }

            function pa(t) {
                null === aa ? aa = [t] : aa.push(t)
            }

            var ga = x.ReactCurrentBatchConfig;

            function ma(t, e, n) {
                if (null !== (t = n.ref) && "function" != typeof t && "object" != typeof t) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag) throw Error(a(309));
                            var i = n.stateNode
                        }
                        if (!i) throw Error(a(147, t));
                        var r = i, o = "" + t;
                        return null !== e && null !== e.ref && "function" == typeof e.ref && e.ref._stringRef === o ? e.ref : (e = function (t) {
                            var e = r.refs;
                            null === t ? delete e[o] : e[o] = t
                        }, e._stringRef = o, e)
                    }
                    if ("string" != typeof t) throw Error(a(284));
                    if (!n._owner) throw Error(a(290, t))
                }
                return t
            }

            function Ma(t, e) {
                throw t = Object.prototype.toString.call(e), Error(a(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
            }

            function ya(t) {
                return (0, t._init)(t._payload)
            }

            function ba(t) {
                function e(e, n) {
                    if (t) {
                        var i = e.deletions;
                        null === i ? (e.deletions = [n], e.flags |= 16) : i.push(n)
                    }
                }

                function n(n, i) {
                    if (!t) return null;
                    for (; null !== i;) e(n, i), i = i.sibling;
                    return null
                }

                function i(t, e) {
                    for (t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
                    return t
                }

                function r(t, e) {
                    return (t = Ic(t, e)).index = 0, t.sibling = null, t
                }

                function o(e, n, i) {
                    return e.index = i, t ? null !== (i = e.alternate) ? (i = i.index) < n ? (e.flags |= 2, n) : i : (e.flags |= 2, n) : (e.flags |= 1048576, n)
                }

                function s(e) {
                    return t && null === e.alternate && (e.flags |= 2), e
                }

                function l(t, e, n, i) {
                    return null === e || 6 !== e.tag ? ((e = Uc(n, t.mode, i)).return = t, e) : ((e = r(e, n)).return = t, e)
                }

                function c(t, e, n, i) {
                    var a = n.type;
                    return a === N ? d(t, e, n.props.children, i, n.key) : null !== e && (e.elementType === a || "object" == typeof a && null !== a && a.$$typeof === j && ya(a) === e.type) ? ((i = r(e, n.props)).ref = ma(t, e, n), i.return = t, i) : ((i = _c(n.type, n.key, n.props, null, t.mode, i)).ref = ma(t, e, n), i.return = t, i)
                }

                function u(t, e, n, i) {
                    return null === e || 4 !== e.tag || e.stateNode.containerInfo !== n.containerInfo || e.stateNode.implementation !== n.implementation ? ((e = Rc(n, t.mode, i)).return = t, e) : ((e = r(e, n.children || [])).return = t, e)
                }

                function d(t, e, n, i, a) {
                    return null === e || 7 !== e.tag ? ((e = Oc(n, t.mode, i, a)).return = t, e) : ((e = r(e, n)).return = t, e)
                }

                function h(t, e, n) {
                    if ("string" == typeof e && "" !== e || "number" == typeof e) return (e = Uc("" + e, t.mode, n)).return = t, e;
                    if ("object" == typeof e && null !== e) {
                        switch (e.$$typeof) {
                            case A:
                                return (n = _c(e.type, e.key, e.props, null, t.mode, n)).ref = ma(t, null, e), n.return = t, n;
                            case v:
                                return (e = Rc(e, t.mode, n)).return = t, e;
                            case j:
                                return h(t, (0, e._init)(e._payload), n)
                        }
                        if (et(e) || O(e)) return (e = Oc(e, t.mode, n, null)).return = t, e;
                        Ma(t, e)
                    }
                    return null
                }

                function f(t, e, n, i) {
                    var r = null !== e ? e.key : null;
                    if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== r ? null : l(t, e, "" + n, i);
                    if ("object" == typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case A:
                                return n.key === r ? c(t, e, n, i) : null;
                            case v:
                                return n.key === r ? u(t, e, n, i) : null;
                            case j:
                                return f(t, e, (r = n._init)(n._payload), i)
                        }
                        if (et(n) || O(n)) return null !== r ? null : d(t, e, n, i, null);
                        Ma(t, n)
                    }
                    return null
                }

                function p(t, e, n, i, r) {
                    if ("string" == typeof i && "" !== i || "number" == typeof i) return l(e, t = t.get(n) || null, "" + i, r);
                    if ("object" == typeof i && null !== i) {
                        switch (i.$$typeof) {
                            case A:
                                return c(e, t = t.get(null === i.key ? n : i.key) || null, i, r);
                            case v:
                                return u(e, t = t.get(null === i.key ? n : i.key) || null, i, r);
                            case j:
                                return p(t, e, n, (0, i._init)(i._payload), r)
                        }
                        if (et(i) || O(i)) return d(e, t = t.get(n) || null, i, r, null);
                        Ma(e, i)
                    }
                    return null
                }

                function g(r, a, s, l) {
                    for (var c = null, u = null, d = a, g = a = 0, m = null; null !== d && g < s.length; g++) {
                        d.index > g ? (m = d, d = null) : m = d.sibling;
                        var M = f(r, d, s[g], l);
                        if (null === M) {
                            null === d && (d = m);
                            break
                        }
                        t && d && null === M.alternate && e(r, d), a = o(M, a, g), null === u ? c = M : u.sibling = M, u = M, d = m
                    }
                    if (g === s.length) return n(r, d), ra && Kr(r, g), c;
                    if (null === d) {
                        for (; g < s.length; g++) null !== (d = h(r, s[g], l)) && (a = o(d, a, g), null === u ? c = d : u.sibling = d, u = d);
                        return ra && Kr(r, g), c
                    }
                    for (d = i(r, d); g < s.length; g++) null !== (m = p(d, r, g, s[g], l)) && (t && null !== m.alternate && d.delete(null === m.key ? g : m.key), a = o(m, a, g), null === u ? c = m : u.sibling = m, u = m);
                    return t && d.forEach((function (t) {
                        return e(r, t)
                    })), ra && Kr(r, g), c
                }

                function m(r, s, l, c) {
                    var u = O(l);
                    if ("function" != typeof u) throw Error(a(150));
                    if (null == (l = u.call(l))) throw Error(a(151));
                    for (var d = u = null, g = s, m = s = 0, M = null, y = l.next(); null !== g && !y.done; m++, y = l.next()) {
                        g.index > m ? (M = g, g = null) : M = g.sibling;
                        var b = f(r, g, y.value, c);
                        if (null === b) {
                            null === g && (g = M);
                            break
                        }
                        t && g && null === b.alternate && e(r, g), s = o(b, s, m), null === d ? u = b : d.sibling = b, d = b, g = M
                    }
                    if (y.done) return n(r, g), ra && Kr(r, m), u;
                    if (null === g) {
                        for (; !y.done; m++, y = l.next()) null !== (y = h(r, y.value, c)) && (s = o(y, s, m), null === d ? u = y : d.sibling = y, d = y);
                        return ra && Kr(r, m), u
                    }
                    for (g = i(r, g); !y.done; m++, y = l.next()) null !== (y = p(g, r, m, y.value, c)) && (t && null !== y.alternate && g.delete(null === y.key ? m : y.key), s = o(y, s, m), null === d ? u = y : d.sibling = y, d = y);
                    return t && g.forEach((function (t) {
                        return e(r, t)
                    })), ra && Kr(r, m), u
                }

                return function t(i, a, o, l) {
                    if ("object" == typeof o && null !== o && o.type === N && null === o.key && (o = o.props.children), "object" == typeof o && null !== o) {
                        switch (o.$$typeof) {
                            case A:
                                t:{
                                    for (var c = o.key, u = a; null !== u;) {
                                        if (u.key === c) {
                                            if ((c = o.type) === N) {
                                                if (7 === u.tag) {
                                                    n(i, u.sibling), (a = r(u, o.props.children)).return = i, i = a;
                                                    break t
                                                }
                                            } else if (u.elementType === c || "object" == typeof c && null !== c && c.$$typeof === j && ya(c) === u.type) {
                                                n(i, u.sibling), (a = r(u, o.props)).ref = ma(i, u, o), a.return = i, i = a;
                                                break t
                                            }
                                            n(i, u);
                                            break
                                        }
                                        e(i, u), u = u.sibling
                                    }
                                    o.type === N ? ((a = Oc(o.props.children, i.mode, l, o.key)).return = i, i = a) : ((l = _c(o.type, o.key, o.props, null, i.mode, l)).ref = ma(i, a, o), l.return = i, i = l)
                                }
                                return s(i);
                            case v:
                                t:{
                                    for (u = o.key; null !== a;) {
                                        if (a.key === u) {
                                            if (4 === a.tag && a.stateNode.containerInfo === o.containerInfo && a.stateNode.implementation === o.implementation) {
                                                n(i, a.sibling), (a = r(a, o.children || [])).return = i, i = a;
                                                break t
                                            }
                                            n(i, a);
                                            break
                                        }
                                        e(i, a), a = a.sibling
                                    }
                                    (a = Rc(o, i.mode, l)).return = i, i = a
                                }
                                return s(i);
                            case j:
                                return t(i, a, (u = o._init)(o._payload), l)
                        }
                        if (et(o)) return g(i, a, o, l);
                        if (O(o)) return m(i, a, o, l);
                        Ma(i, o)
                    }
                    return "string" == typeof o && "" !== o || "number" == typeof o ? (o = "" + o, null !== a && 6 === a.tag ? (n(i, a.sibling), (a = r(a, o)).return = i, i = a) : (n(i, a), (a = Uc(o, i.mode, l)).return = i, i = a), s(i)) : n(i, a)
                }
            }

            var xa = ba(!0), Aa = ba(!1), va = Dr(null), Na = null, Da = null, ka = null;

            function Ta() {
                ka = Da = Na = null
            }

            function Sa(t) {
                var e = va.current;
                kr(va), t._currentValue = e
            }

            function wa(t, e, n) {
                for (; null !== t;) {
                    var i = t.alternate;
                    if ((t.childLanes & e) !== e ? (t.childLanes |= e, null !== i && (i.childLanes |= e)) : null !== i && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
                    t = t.return
                }
            }

            function Ea(t, e) {
                Na = t, ka = Da = null, null !== (t = t.dependencies) && null !== t.firstContext && (!!(t.lanes & e) && (bs = !0), t.firstContext = null)
            }

            function Ca(t) {
                var e = t._currentValue;
                if (ka !== t) if (t = {context: t, memoizedValue: e, next: null}, null === Da) {
                    if (null === Na) throw Error(a(308));
                    Da = t, Na.dependencies = {lanes: 0, firstContext: t}
                } else Da = Da.next = t;
                return e
            }

            var za = null;

            function ja(t) {
                null === za ? za = [t] : za.push(t)
            }

            function Ia(t, e, n, i) {
                var r = e.interleaved;
                return null === r ? (n.next = n, ja(e)) : (n.next = r.next, r.next = n), e.interleaved = n, _a(t, i)
            }

            function _a(t, e) {
                t.lanes |= e;
                var n = t.alternate;
                for (null !== n && (n.lanes |= e), n = t, t = t.return; null !== t;) t.childLanes |= e, null !== (n = t.alternate) && (n.childLanes |= e), n = t, t = t.return;
                return 3 === n.tag ? n.stateNode : null
            }

            var Oa = !1;

            function La(t) {
                t.updateQueue = {
                    baseState: t.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {pending: null, interleaved: null, lanes: 0},
                    effects: null
                }
            }

            function Ua(t, e) {
                t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
                    baseState: t.baseState,
                    firstBaseUpdate: t.firstBaseUpdate,
                    lastBaseUpdate: t.lastBaseUpdate,
                    shared: t.shared,
                    effects: t.effects
                })
            }

            function Ra(t, e) {
                return {eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null}
            }

            function Va(t, e, n) {
                var i = t.updateQueue;
                if (null === i) return null;
                if (i = i.shared, 2 & wl) {
                    var r = i.pending;
                    return null === r ? e.next = e : (e.next = r.next, r.next = e), i.pending = e, _a(t, n)
                }
                return null === (r = i.interleaved) ? (e.next = e, ja(i)) : (e.next = r.next, r.next = e), i.interleaved = e, _a(t, n)
            }

            function Fa(t, e, n) {
                if (null !== (e = e.updateQueue) && (e = e.shared, 4194240 & n)) {
                    var i = e.lanes;
                    n |= i &= t.pendingLanes, e.lanes = n, ye(t, n)
                }
            }

            function Pa(t, e) {
                var n = t.updateQueue, i = t.alternate;
                if (null !== i && n === (i = i.updateQueue)) {
                    var r = null, a = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var o = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === a ? r = a = o : a = a.next = o, n = n.next
                        } while (null !== n);
                        null === a ? r = a = e : a = a.next = e
                    } else r = a = e;
                    return n = {
                        baseState: i.baseState,
                        firstBaseUpdate: r,
                        lastBaseUpdate: a,
                        shared: i.shared,
                        effects: i.effects
                    }, void (t.updateQueue = n)
                }
                null === (t = n.lastBaseUpdate) ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e
            }

            function Wa(t, e, n, i) {
                var r = t.updateQueue;
                Oa = !1;
                var a = r.firstBaseUpdate, o = r.lastBaseUpdate, s = r.shared.pending;
                if (null !== s) {
                    r.shared.pending = null;
                    var l = s, c = l.next;
                    l.next = null, null === o ? a = c : o.next = c, o = l;
                    var u = t.alternate;
                    null !== u && (s = (u = u.updateQueue).lastBaseUpdate) !== o && (null === s ? u.firstBaseUpdate = c : s.next = c, u.lastBaseUpdate = l)
                }
                if (null !== a) {
                    var d = r.baseState;
                    for (o = 0, u = c = l = null, s = a; ;) {
                        var h = s.lane, f = s.eventTime;
                        if ((i & h) === h) {
                            null !== u && (u = u.next = {
                                eventTime: f,
                                lane: 0,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            });
                            t:{
                                var p = t, g = s;
                                switch (h = e, f = n, g.tag) {
                                    case 1:
                                        if ("function" == typeof (p = g.payload)) {
                                            d = p.call(f, d, h);
                                            break t
                                        }
                                        d = p;
                                        break t;
                                    case 3:
                                        p.flags = -65537 & p.flags | 128;
                                    case 0:
                                        if (null == (h = "function" == typeof (p = g.payload) ? p.call(f, d, h) : p)) break t;
                                        d = U({}, d, h);
                                        break t;
                                    case 2:
                                        Oa = !0
                                }
                            }
                            null !== s.callback && 0 !== s.lane && (t.flags |= 64, null === (h = r.effects) ? r.effects = [s] : h.push(s))
                        } else f = {
                            eventTime: f,
                            lane: h,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null
                        }, null === u ? (c = u = f, l = d) : u = u.next = f, o |= h;
                        if (null === (s = s.next)) {
                            if (null === (s = r.shared.pending)) break;
                            s = (h = s).next, h.next = null, r.lastBaseUpdate = h, r.shared.pending = null
                        }
                    }
                    if (null === u && (l = d), r.baseState = l, r.firstBaseUpdate = c, r.lastBaseUpdate = u, null !== (e = r.shared.interleaved)) {
                        r = e;
                        do {
                            o |= r.lane, r = r.next
                        } while (r !== e)
                    } else null === a && (r.shared.lanes = 0);
                    Ll |= o, t.lanes = o, t.memoizedState = d
                }
            }

            function Qa(t, e, n) {
                if (t = e.effects, e.effects = null, null !== t) for (e = 0; e < t.length; e++) {
                    var i = t[e], r = i.callback;
                    if (null !== r) {
                        if (i.callback = null, i = n, "function" != typeof r) throw Error(a(191, r));
                        r.call(i)
                    }
                }
            }

            var Ya = {}, Ba = Dr(Ya), Za = Dr(Ya), Ha = Dr(Ya);

            function Ga(t) {
                if (t === Ya) throw Error(a(174));
                return t
            }

            function Ja(t, e) {
                switch (Tr(Ha, e), Tr(Za, t), Tr(Ba, Ya), t = e.nodeType) {
                    case 9:
                    case 11:
                        e = (e = e.documentElement) ? e.namespaceURI : lt(null, "");
                        break;
                    default:
                        e = lt(e = (t = 8 === t ? e.parentNode : e).namespaceURI || null, t = t.tagName)
                }
                kr(Ba), Tr(Ba, e)
            }

            function Xa() {
                kr(Ba), kr(Za), kr(Ha)
            }

            function $a(t) {
                Ga(Ha.current);
                var e = Ga(Ba.current), n = lt(e, t.type);
                e !== n && (Tr(Za, t), Tr(Ba, n))
            }

            function Ka(t) {
                Za.current === t && (kr(Ba), kr(Za))
            }

            var qa = Dr(0);

            function to(t) {
                for (var e = t; null !== e;) {
                    if (13 === e.tag) {
                        var n = e.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return e
                    } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
                        if (128 & e.flags) return e
                    } else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue
                    }
                    if (e === t) break;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t) return null;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
                return null
            }

            var eo = [];

            function no() {
                for (var t = 0; t < eo.length; t++) eo[t]._workInProgressVersionPrimary = null;
                eo.length = 0
            }

            var io = x.ReactCurrentDispatcher, ro = x.ReactCurrentBatchConfig, ao = 0, oo = null, so = null, lo = null,
                co = !1, uo = !1, ho = 0, fo = 0;

            function po() {
                throw Error(a(321))
            }

            function go(t, e) {
                if (null === e) return !1;
                for (var n = 0; n < e.length && n < t.length; n++) if (!si(t[n], e[n])) return !1;
                return !0
            }

            function mo(t, e, n, i, r, o) {
                if (ao = o, oo = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, io.current = null === t || null === t.memoizedState ? qo : ts, t = n(i, r), uo) {
                    o = 0;
                    do {
                        if (uo = !1, ho = 0, 25 <= o) throw Error(a(301));
                        o += 1, lo = so = null, e.updateQueue = null, io.current = es, t = n(i, r)
                    } while (uo)
                }
                if (io.current = Ko, e = null !== so && null !== so.next, ao = 0, lo = so = oo = null, co = !1, e) throw Error(a(300));
                return t
            }

            function Mo() {
                var t = 0 !== ho;
                return ho = 0, t
            }

            function yo() {
                var t = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
                return null === lo ? oo.memoizedState = lo = t : lo = lo.next = t, lo
            }

            function bo() {
                if (null === so) {
                    var t = oo.alternate;
                    t = null !== t ? t.memoizedState : null
                } else t = so.next;
                var e = null === lo ? oo.memoizedState : lo.next;
                if (null !== e) lo = e, so = t; else {
                    if (null === t) throw Error(a(310));
                    t = {
                        memoizedState: (so = t).memoizedState,
                        baseState: so.baseState,
                        baseQueue: so.baseQueue,
                        queue: so.queue,
                        next: null
                    }, null === lo ? oo.memoizedState = lo = t : lo = lo.next = t
                }
                return lo
            }

            function xo(t, e) {
                return "function" == typeof e ? e(t) : e
            }

            function Ao(t) {
                var e = bo(), n = e.queue;
                if (null === n) throw Error(a(311));
                n.lastRenderedReducer = t;
                var i = so, r = i.baseQueue, o = n.pending;
                if (null !== o) {
                    if (null !== r) {
                        var s = r.next;
                        r.next = o.next, o.next = s
                    }
                    i.baseQueue = r = o, n.pending = null
                }
                if (null !== r) {
                    o = r.next, i = i.baseState;
                    var l = s = null, c = null, u = o;
                    do {
                        var d = u.lane;
                        if ((ao & d) === d) null !== c && (c = c.next = {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        }), i = u.hasEagerState ? u.eagerState : t(i, u.action); else {
                            var h = {
                                lane: d,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            };
                            null === c ? (l = c = h, s = i) : c = c.next = h, oo.lanes |= d, Ll |= d
                        }
                        u = u.next
                    } while (null !== u && u !== o);
                    null === c ? s = i : c.next = l, si(i, e.memoizedState) || (bs = !0), e.memoizedState = i, e.baseState = s, e.baseQueue = c, n.lastRenderedState = i
                }
                if (null !== (t = n.interleaved)) {
                    r = t;
                    do {
                        o = r.lane, oo.lanes |= o, Ll |= o, r = r.next
                    } while (r !== t)
                } else null === r && (n.lanes = 0);
                return [e.memoizedState, n.dispatch]
            }

            function vo(t) {
                var e = bo(), n = e.queue;
                if (null === n) throw Error(a(311));
                n.lastRenderedReducer = t;
                var i = n.dispatch, r = n.pending, o = e.memoizedState;
                if (null !== r) {
                    n.pending = null;
                    var s = r = r.next;
                    do {
                        o = t(o, s.action), s = s.next
                    } while (s !== r);
                    si(o, e.memoizedState) || (bs = !0), e.memoizedState = o, null === e.baseQueue && (e.baseState = o), n.lastRenderedState = o
                }
                return [o, i]
            }

            function No() {
            }

            function Do(t, e) {
                var n = oo, i = bo(), r = e(), o = !si(i.memoizedState, r);
                if (o && (i.memoizedState = r, bs = !0), i = i.queue, Lo(So.bind(null, n, i, t), [t]), i.getSnapshot !== e || o || null !== lo && 1 & lo.memoizedState.tag) {
                    if (n.flags |= 2048, zo(9, To.bind(null, n, i, r, e), void 0, null), null === El) throw Error(a(349));
                    30 & ao || ko(n, e, r)
                }
                return r
            }

            function ko(t, e, n) {
                t.flags |= 16384, t = {
                    getSnapshot: e,
                    value: n
                }, null === (e = oo.updateQueue) ? (e = {
                    lastEffect: null,
                    stores: null
                }, oo.updateQueue = e, e.stores = [t]) : null === (n = e.stores) ? e.stores = [t] : n.push(t)
            }

            function To(t, e, n, i) {
                e.value = n, e.getSnapshot = i, wo(e) && Eo(t)
            }

            function So(t, e, n) {
                return n((function () {
                    wo(e) && Eo(t)
                }))
            }

            function wo(t) {
                var e = t.getSnapshot;
                t = t.value;
                try {
                    var n = e();
                    return !si(t, n)
                } catch (t) {
                    return !0
                }
            }

            function Eo(t) {
                var e = _a(t, 1);
                null !== e && nc(e, t, 1, -1)
            }

            function Co(t) {
                var e = yo();
                return "function" == typeof t && (t = t()), e.memoizedState = e.baseState = t, t = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: xo,
                    lastRenderedState: t
                }, e.queue = t, t = t.dispatch = Go.bind(null, oo, t), [e.memoizedState, t]
            }

            function zo(t, e, n, i) {
                return t = {
                    tag: t,
                    create: e,
                    destroy: n,
                    deps: i,
                    next: null
                }, null === (e = oo.updateQueue) ? (e = {
                    lastEffect: null,
                    stores: null
                }, oo.updateQueue = e, e.lastEffect = t.next = t) : null === (n = e.lastEffect) ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t), t
            }

            function jo() {
                return bo().memoizedState
            }

            function Io(t, e, n, i) {
                var r = yo();
                oo.flags |= t, r.memoizedState = zo(1 | e, n, void 0, void 0 === i ? null : i)
            }

            function _o(t, e, n, i) {
                var r = bo();
                i = void 0 === i ? null : i;
                var a = void 0;
                if (null !== so) {
                    var o = so.memoizedState;
                    if (a = o.destroy, null !== i && go(i, o.deps)) return void (r.memoizedState = zo(e, n, a, i))
                }
                oo.flags |= t, r.memoizedState = zo(1 | e, n, a, i)
            }

            function Oo(t, e) {
                return Io(8390656, 8, t, e)
            }

            function Lo(t, e) {
                return _o(2048, 8, t, e)
            }

            function Uo(t, e) {
                return _o(4, 2, t, e)
            }

            function Ro(t, e) {
                return _o(4, 4, t, e)
            }

            function Vo(t, e) {
                return "function" == typeof e ? (t = t(), e(t), function () {
                    e(null)
                }) : null != e ? (t = t(), e.current = t, function () {
                    e.current = null
                }) : void 0
            }

            function Fo(t, e, n) {
                return n = null != n ? n.concat([t]) : null, _o(4, 4, Vo.bind(null, e, t), n)
            }

            function Po() {
            }

            function Wo(t, e) {
                var n = bo();
                e = void 0 === e ? null : e;
                var i = n.memoizedState;
                return null !== i && null !== e && go(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t)
            }

            function Qo(t, e) {
                var n = bo();
                e = void 0 === e ? null : e;
                var i = n.memoizedState;
                return null !== i && null !== e && go(e, i[1]) ? i[0] : (t = t(), n.memoizedState = [t, e], t)
            }

            function Yo(t, e, n) {
                return 21 & ao ? (si(n, e) || (n = ge(), oo.lanes |= n, Ll |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, bs = !0), t.memoizedState = n)
            }

            function Bo(t, e) {
                var n = be;
                be = 0 !== n && 4 > n ? n : 4, t(!0);
                var i = ro.transition;
                ro.transition = {};
                try {
                    t(!1), e()
                } finally {
                    be = n, ro.transition = i
                }
            }

            function Zo() {
                return bo().memoizedState
            }

            function Ho(t, e, n) {
                var i = ec(t);
                n = {
                    lane: i,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, Jo(t) ? Xo(e, n) : null !== (n = Ia(t, e, n, i)) && (nc(n, t, i, tc()), $o(n, e, i))
            }

            function Go(t, e, n) {
                var i = ec(t), r = {lane: i, action: n, hasEagerState: !1, eagerState: null, next: null};
                if (Jo(t)) Xo(e, r); else {
                    var a = t.alternate;
                    if (0 === t.lanes && (null === a || 0 === a.lanes) && null !== (a = e.lastRenderedReducer)) try {
                        var o = e.lastRenderedState, s = a(o, n);
                        if (r.hasEagerState = !0, r.eagerState = s, si(s, o)) {
                            var l = e.interleaved;
                            return null === l ? (r.next = r, ja(e)) : (r.next = l.next, l.next = r), void (e.interleaved = r)
                        }
                    } catch (t) {
                    }
                    null !== (n = Ia(t, e, r, i)) && (nc(n, t, i, r = tc()), $o(n, e, i))
                }
            }

            function Jo(t) {
                var e = t.alternate;
                return t === oo || null !== e && e === oo
            }

            function Xo(t, e) {
                uo = co = !0;
                var n = t.pending;
                null === n ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
            }

            function $o(t, e, n) {
                if (4194240 & n) {
                    var i = e.lanes;
                    n |= i &= t.pendingLanes, e.lanes = n, ye(t, n)
                }
            }

            var Ko = {
                readContext: Ca,
                useCallback: po,
                useContext: po,
                useEffect: po,
                useImperativeHandle: po,
                useInsertionEffect: po,
                useLayoutEffect: po,
                useMemo: po,
                useReducer: po,
                useRef: po,
                useState: po,
                useDebugValue: po,
                useDeferredValue: po,
                useTransition: po,
                useMutableSource: po,
                useSyncExternalStore: po,
                useId: po,
                unstable_isNewReconciler: !1
            }, qo = {
                readContext: Ca, useCallback: function (t, e) {
                    return yo().memoizedState = [t, void 0 === e ? null : e], t
                }, useContext: Ca, useEffect: Oo, useImperativeHandle: function (t, e, n) {
                    return n = null != n ? n.concat([t]) : null, Io(4194308, 4, Vo.bind(null, e, t), n)
                }, useLayoutEffect: function (t, e) {
                    return Io(4194308, 4, t, e)
                }, useInsertionEffect: function (t, e) {
                    return Io(4, 2, t, e)
                }, useMemo: function (t, e) {
                    var n = yo();
                    return e = void 0 === e ? null : e, t = t(), n.memoizedState = [t, e], t
                }, useReducer: function (t, e, n) {
                    var i = yo();
                    return e = void 0 !== n ? n(e) : e, i.memoizedState = i.baseState = e, t = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: t,
                        lastRenderedState: e
                    }, i.queue = t, t = t.dispatch = Ho.bind(null, oo, t), [i.memoizedState, t]
                }, useRef: function (t) {
                    return t = {current: t}, yo().memoizedState = t
                }, useState: Co, useDebugValue: Po, useDeferredValue: function (t) {
                    return yo().memoizedState = t
                }, useTransition: function () {
                    var t = Co(!1), e = t[0];
                    return t = Bo.bind(null, t[1]), yo().memoizedState = t, [e, t]
                }, useMutableSource: function () {
                }, useSyncExternalStore: function (t, e, n) {
                    var i = oo, r = yo();
                    if (ra) {
                        if (void 0 === n) throw Error(a(407));
                        n = n()
                    } else {
                        if (n = e(), null === El) throw Error(a(349));
                        30 & ao || ko(i, e, n)
                    }
                    r.memoizedState = n;
                    var o = {value: n, getSnapshot: e};
                    return r.queue = o, Oo(So.bind(null, i, o, t), [t]), i.flags |= 2048, zo(9, To.bind(null, i, o, n, e), void 0, null), n
                }, useId: function () {
                    var t = yo(), e = El.identifierPrefix;
                    if (ra) {
                        var n = $r;
                        e = ":" + e + "R" + (n = (Xr & ~(1 << 32 - oe(Xr) - 1)).toString(32) + n), 0 < (n = ho++) && (e += "H" + n.toString(32)), e += ":"
                    } else e = ":" + e + "r" + (n = fo++).toString(32) + ":";
                    return t.memoizedState = e
                }, unstable_isNewReconciler: !1
            }, ts = {
                readContext: Ca,
                useCallback: Wo,
                useContext: Ca,
                useEffect: Lo,
                useImperativeHandle: Fo,
                useInsertionEffect: Uo,
                useLayoutEffect: Ro,
                useMemo: Qo,
                useReducer: Ao,
                useRef: jo,
                useState: function () {
                    return Ao(xo)
                },
                useDebugValue: Po,
                useDeferredValue: function (t) {
                    return Yo(bo(), so.memoizedState, t)
                },
                useTransition: function () {
                    return [Ao(xo)[0], bo().memoizedState]
                },
                useMutableSource: No,
                useSyncExternalStore: Do,
                useId: Zo,
                unstable_isNewReconciler: !1
            }, es = {
                readContext: Ca,
                useCallback: Wo,
                useContext: Ca,
                useEffect: Lo,
                useImperativeHandle: Fo,
                useInsertionEffect: Uo,
                useLayoutEffect: Ro,
                useMemo: Qo,
                useReducer: vo,
                useRef: jo,
                useState: function () {
                    return vo(xo)
                },
                useDebugValue: Po,
                useDeferredValue: function (t) {
                    var e = bo();
                    return null === so ? e.memoizedState = t : Yo(e, so.memoizedState, t)
                },
                useTransition: function () {
                    return [vo(xo)[0], bo().memoizedState]
                },
                useMutableSource: No,
                useSyncExternalStore: Do,
                useId: Zo,
                unstable_isNewReconciler: !1
            };

            function ns(t, e) {
                if (t && t.defaultProps) {
                    for (var n in e = U({}, e), t = t.defaultProps) void 0 === e[n] && (e[n] = t[n]);
                    return e
                }
                return e
            }

            function is(t, e, n, i) {
                n = null == (n = n(i, e = t.memoizedState)) ? e : U({}, e, n), t.memoizedState = n, 0 === t.lanes && (t.updateQueue.baseState = n)
            }

            var rs = {
                isMounted: function (t) {
                    return !!(t = t._reactInternals) && Wt(t) === t
                }, enqueueSetState: function (t, e, n) {
                    t = t._reactInternals;
                    var i = tc(), r = ec(t), a = Ra(i, r);
                    a.payload = e, null != n && (a.callback = n), null !== (e = Va(t, a, r)) && (nc(e, t, r, i), Fa(e, t, r))
                }, enqueueReplaceState: function (t, e, n) {
                    t = t._reactInternals;
                    var i = tc(), r = ec(t), a = Ra(i, r);
                    a.tag = 1, a.payload = e, null != n && (a.callback = n), null !== (e = Va(t, a, r)) && (nc(e, t, r, i), Fa(e, t, r))
                }, enqueueForceUpdate: function (t, e) {
                    t = t._reactInternals;
                    var n = tc(), i = ec(t), r = Ra(n, i);
                    r.tag = 2, null != e && (r.callback = e), null !== (e = Va(t, r, i)) && (nc(e, t, i, n), Fa(e, t, i))
                }
            };

            function as(t, e, n, i, r, a, o) {
                return "function" == typeof (t = t.stateNode).shouldComponentUpdate ? t.shouldComponentUpdate(i, a, o) : !(e.prototype && e.prototype.isPureReactComponent && li(n, i) && li(r, a))
            }

            function os(t, e, n) {
                var i = !1, r = Sr, a = e.contextType;
                return "object" == typeof a && null !== a ? a = Ca(a) : (r = jr(e) ? Cr : wr.current, a = (i = null != (i = e.contextTypes)) ? zr(t, r) : Sr), e = new e(n, a), t.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, e.updater = rs, t.stateNode = e, e._reactInternals = t, i && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = r, t.__reactInternalMemoizedMaskedChildContext = a), e
            }

            function ss(t, e, n, i) {
                t = e.state, "function" == typeof e.componentWillReceiveProps && e.componentWillReceiveProps(n, i), "function" == typeof e.UNSAFE_componentWillReceiveProps && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && rs.enqueueReplaceState(e, e.state, null)
            }

            function ls(t, e, n, i) {
                var r = t.stateNode;
                r.props = n, r.state = t.memoizedState, r.refs = {}, La(t);
                var a = e.contextType;
                "object" == typeof a && null !== a ? r.context = Ca(a) : (a = jr(e) ? Cr : wr.current, r.context = zr(t, a)), r.state = t.memoizedState, "function" == typeof (a = e.getDerivedStateFromProps) && (is(t, e, a, n), r.state = t.memoizedState), "function" == typeof e.getDerivedStateFromProps || "function" == typeof r.getSnapshotBeforeUpdate || "function" != typeof r.UNSAFE_componentWillMount && "function" != typeof r.componentWillMount || (e = r.state, "function" == typeof r.componentWillMount && r.componentWillMount(), "function" == typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(), e !== r.state && rs.enqueueReplaceState(r, r.state, null), Wa(t, n, r, i), r.state = t.memoizedState), "function" == typeof r.componentDidMount && (t.flags |= 4194308)
            }

            function cs(t, e) {
                try {
                    var n = "", i = e;
                    do {
                        n += P(i), i = i.return
                    } while (i);
                    var r = n
                } catch (t) {
                    r = "\nError generating stack: " + t.message + "\n" + t.stack
                }
                return {value: t, source: e, stack: r, digest: null}
            }

            function us(t, e, n) {
                return {value: t, source: null, stack: null != n ? n : null, digest: null != e ? e : null}
            }

            function ds(t, e) {
                try {
                    console.error(e.value)
                } catch (t) {
                    setTimeout((function () {
                        throw t
                    }))
                }
            }

            var hs = "function" == typeof WeakMap ? WeakMap : Map;

            function fs(t, e, n) {
                (n = Ra(-1, n)).tag = 3, n.payload = {element: null};
                var i = e.value;
                return n.callback = function () {
                    Yl || (Yl = !0, Bl = i), ds(0, e)
                }, n
            }

            function ps(t, e, n) {
                (n = Ra(-1, n)).tag = 3;
                var i = t.type.getDerivedStateFromError;
                if ("function" == typeof i) {
                    var r = e.value;
                    n.payload = function () {
                        return i(r)
                    }, n.callback = function () {
                        ds(0, e)
                    }
                }
                var a = t.stateNode;
                return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function () {
                    ds(0, e), "function" != typeof i && (null === Zl ? Zl = new Set([this]) : Zl.add(this));
                    var t = e.stack;
                    this.componentDidCatch(e.value, {componentStack: null !== t ? t : ""})
                }), n
            }

            function gs(t, e, n) {
                var i = t.pingCache;
                if (null === i) {
                    i = t.pingCache = new hs;
                    var r = new Set;
                    i.set(e, r)
                } else void 0 === (r = i.get(e)) && (r = new Set, i.set(e, r));
                r.has(n) || (r.add(n), t = kc.bind(null, t, e, n), e.then(t, t))
            }

            function ms(t) {
                do {
                    var e;
                    if ((e = 13 === t.tag) && (e = null === (e = t.memoizedState) || null !== e.dehydrated), e) return t;
                    t = t.return
                } while (null !== t);
                return null
            }

            function Ms(t, e, n, i, r) {
                return 1 & t.mode ? (t.flags |= 65536, t.lanes = r, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((e = Ra(-1, 1)).tag = 2, Va(n, e, 1))), n.lanes |= 1), t)
            }

            var ys = x.ReactCurrentOwner, bs = !1;

            function xs(t, e, n, i) {
                e.child = null === t ? Aa(e, null, n, i) : xa(e, t.child, n, i)
            }

            function As(t, e, n, i, r) {
                n = n.render;
                var a = e.ref;
                return Ea(e, r), i = mo(t, e, n, i, a, r), n = Mo(), null === t || bs ? (ra && n && ta(e), e.flags |= 1, xs(t, e, i, r), e.child) : (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~r, Ys(t, e, r))
            }

            function vs(t, e, n, i, r) {
                if (null === t) {
                    var a = n.type;
                    return "function" != typeof a || jc(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((t = _c(n.type, null, i, e, e.mode, r)).ref = e.ref, t.return = e, e.child = t) : (e.tag = 15, e.type = a, Ns(t, e, a, i, r))
                }
                if (a = t.child, !(t.lanes & r)) {
                    var o = a.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : li)(o, i) && t.ref === e.ref) return Ys(t, e, r)
                }
                return e.flags |= 1, (t = Ic(a, i)).ref = e.ref, t.return = e, e.child = t
            }

            function Ns(t, e, n, i, r) {
                if (null !== t) {
                    var a = t.memoizedProps;
                    if (li(a, i) && t.ref === e.ref) {
                        if (bs = !1, e.pendingProps = i = a, !(t.lanes & r)) return e.lanes = t.lanes, Ys(t, e, r);
                        131072 & t.flags && (bs = !0)
                    }
                }
                return Ts(t, e, n, i, r)
            }

            function Ds(t, e, n) {
                var i = e.pendingProps, r = i.children, a = null !== t ? t.memoizedState : null;
                if ("hidden" === i.mode) if (1 & e.mode) {
                    if (!(1073741824 & n)) return t = null !== a ? a.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = {
                        baseLanes: t,
                        cachePool: null,
                        transitions: null
                    }, e.updateQueue = null, Tr(Il, jl), jl |= t, null;
                    e.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, i = null !== a ? a.baseLanes : n, Tr(Il, jl), jl |= i
                } else e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, Tr(Il, jl), jl |= n; else null !== a ? (i = a.baseLanes | n, e.memoizedState = null) : i = n, Tr(Il, jl), jl |= i;
                return xs(t, e, r, n), e.child
            }

            function ks(t, e) {
                var n = e.ref;
                (null === t && null !== n || null !== t && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152)
            }

            function Ts(t, e, n, i, r) {
                var a = jr(n) ? Cr : wr.current;
                return a = zr(e, a), Ea(e, r), n = mo(t, e, n, i, a, r), i = Mo(), null === t || bs ? (ra && i && ta(e), e.flags |= 1, xs(t, e, n, r), e.child) : (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~r, Ys(t, e, r))
            }

            function Ss(t, e, n, i, r) {
                if (jr(n)) {
                    var a = !0;
                    Lr(e)
                } else a = !1;
                if (Ea(e, r), null === e.stateNode) Qs(t, e), os(e, n, i), ls(e, n, i, r), i = !0; else if (null === t) {
                    var o = e.stateNode, s = e.memoizedProps;
                    o.props = s;
                    var l = o.context, c = n.contextType;
                    c = "object" == typeof c && null !== c ? Ca(c) : zr(e, c = jr(n) ? Cr : wr.current);
                    var u = n.getDerivedStateFromProps,
                        d = "function" == typeof u || "function" == typeof o.getSnapshotBeforeUpdate;
                    d || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (s !== i || l !== c) && ss(e, o, i, c), Oa = !1;
                    var h = e.memoizedState;
                    o.state = h, Wa(e, i, o, r), l = e.memoizedState, s !== i || h !== l || Er.current || Oa ? ("function" == typeof u && (is(e, n, u, i), l = e.memoizedState), (s = Oa || as(e, n, s, i, h, l, c)) ? (d || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (e.flags |= 4194308)) : ("function" == typeof o.componentDidMount && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = l), o.props = i, o.state = l, o.context = c, i = s) : ("function" == typeof o.componentDidMount && (e.flags |= 4194308), i = !1)
                } else {
                    o = e.stateNode, Ua(t, e), s = e.memoizedProps, c = e.type === e.elementType ? s : ns(e.type, s), o.props = c, d = e.pendingProps, h = o.context, l = "object" == typeof (l = n.contextType) && null !== l ? Ca(l) : zr(e, l = jr(n) ? Cr : wr.current);
                    var f = n.getDerivedStateFromProps;
                    (u = "function" == typeof f || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (s !== d || h !== l) && ss(e, o, i, l), Oa = !1, h = e.memoizedState, o.state = h, Wa(e, i, o, r);
                    var p = e.memoizedState;
                    s !== d || h !== p || Er.current || Oa ? ("function" == typeof f && (is(e, n, f, i), p = e.memoizedState), (c = Oa || as(e, n, c, i, h, p, l) || !1) ? (u || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(i, p, l), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(i, p, l)), "function" == typeof o.componentDidUpdate && (e.flags |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (e.flags |= 1024)) : ("function" != typeof o.componentDidUpdate || s === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || s === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = p), o.props = i, o.state = p, o.context = l, i = c) : ("function" != typeof o.componentDidUpdate || s === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || s === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), i = !1)
                }
                return ws(t, e, n, i, a, r)
            }

            function ws(t, e, n, i, r, a) {
                ks(t, e);
                var o = !!(128 & e.flags);
                if (!i && !o) return r && Ur(e, n, !1), Ys(t, e, a);
                i = e.stateNode, ys.current = e;
                var s = o && "function" != typeof n.getDerivedStateFromError ? null : i.render();
                return e.flags |= 1, null !== t && o ? (e.child = xa(e, t.child, null, a), e.child = xa(e, null, s, a)) : xs(t, e, s, a), e.memoizedState = i.state, r && Ur(e, n, !0), e.child
            }

            function Es(t) {
                var e = t.stateNode;
                e.pendingContext ? _r(0, e.pendingContext, e.pendingContext !== e.context) : e.context && _r(0, e.context, !1), Ja(t, e.containerInfo)
            }

            function Cs(t, e, n, i, r) {
                return fa(), pa(r), e.flags |= 256, xs(t, e, n, i), e.child
            }

            var zs, js, Is, _s, Os = {dehydrated: null, treeContext: null, retryLane: 0};

            function Ls(t) {
                return {baseLanes: t, cachePool: null, transitions: null}
            }

            function Us(t, e, n) {
                var i, r = e.pendingProps, o = qa.current, s = !1, l = !!(128 & e.flags);
                if ((i = l) || (i = (null === t || null !== t.memoizedState) && !!(2 & o)), i ? (s = !0, e.flags &= -129) : null !== t && null === t.memoizedState || (o |= 1), Tr(qa, 1 & o), null === t) return ca(e), null !== (t = e.memoizedState) && null !== (t = t.dehydrated) ? (1 & e.mode ? "$!" === t.data ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (l = r.children, t = r.fallback, s ? (r = e.mode, s = e.child, l = {
                    mode: "hidden",
                    children: l
                }, 1 & r || null === s ? s = Lc(l, r, 0, null) : (s.childLanes = 0, s.pendingProps = l), t = Oc(t, r, n, null), s.return = e, t.return = e, s.sibling = t, e.child = s, e.child.memoizedState = Ls(n), e.memoizedState = Os, t) : Rs(e, l));
                if (null !== (o = t.memoizedState) && null !== (i = o.dehydrated)) return function (t, e, n, i, r, o, s) {
                    if (n) return 256 & e.flags ? (e.flags &= -257, Vs(t, e, s, i = us(Error(a(422))))) : null !== e.memoizedState ? (e.child = t.child, e.flags |= 128, null) : (o = i.fallback, r = e.mode, i = Lc({
                        mode: "visible",
                        children: i.children
                    }, r, 0, null), (o = Oc(o, r, s, null)).flags |= 2, i.return = e, o.return = e, i.sibling = o, e.child = i, 1 & e.mode && xa(e, t.child, null, s), e.child.memoizedState = Ls(s), e.memoizedState = Os, o);
                    if (!(1 & e.mode)) return Vs(t, e, s, null);
                    if ("$!" === r.data) {
                        if (i = r.nextSibling && r.nextSibling.dataset) var l = i.dgst;
                        return i = l, Vs(t, e, s, i = us(o = Error(a(419)), i, void 0))
                    }
                    if (l = !!(s & t.childLanes), bs || l) {
                        if (null !== (i = El)) {
                            switch (s & -s) {
                                case 4:
                                    r = 2;
                                    break;
                                case 16:
                                    r = 8;
                                    break;
                                case 64:
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                case 67108864:
                                    r = 32;
                                    break;
                                case 536870912:
                                    r = 268435456;
                                    break;
                                default:
                                    r = 0
                            }
                            0 !== (r = r & (i.suspendedLanes | s) ? 0 : r) && r !== o.retryLane && (o.retryLane = r, _a(t, r), nc(i, t, r, -1))
                        }
                        return gc(), Vs(t, e, s, i = us(Error(a(421))))
                    }
                    return "$?" === r.data ? (e.flags |= 128, e.child = t.child, e = Sc.bind(null, t), r._reactRetry = e, null) : (t = o.treeContext, ia = cr(r.nextSibling), na = e, ra = !0, aa = null, null !== t && (Hr[Gr++] = Xr, Hr[Gr++] = $r, Hr[Gr++] = Jr, Xr = t.id, $r = t.overflow, Jr = e), (e = Rs(e, i.children)).flags |= 4096, e)
                }(t, e, l, r, i, o, n);
                if (s) {
                    s = r.fallback, l = e.mode, i = (o = t.child).sibling;
                    var c = {mode: "hidden", children: r.children};
                    return 1 & l || e.child === o ? (r = Ic(o, c)).subtreeFlags = 14680064 & o.subtreeFlags : ((r = e.child).childLanes = 0, r.pendingProps = c, e.deletions = null), null !== i ? s = Ic(i, s) : (s = Oc(s, l, n, null)).flags |= 2, s.return = e, r.return = e, r.sibling = s, e.child = r, r = s, s = e.child, l = null === (l = t.child.memoizedState) ? Ls(n) : {
                        baseLanes: l.baseLanes | n,
                        cachePool: null,
                        transitions: l.transitions
                    }, s.memoizedState = l, s.childLanes = t.childLanes & ~n, e.memoizedState = Os, r
                }
                return t = (s = t.child).sibling, r = Ic(s, {
                    mode: "visible",
                    children: r.children
                }), !(1 & e.mode) && (r.lanes = n), r.return = e, r.sibling = null, null !== t && (null === (n = e.deletions) ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = r, e.memoizedState = null, r
            }

            function Rs(t, e) {
                return (e = Lc({mode: "visible", children: e}, t.mode, 0, null)).return = t, t.child = e
            }

            function Vs(t, e, n, i) {
                return null !== i && pa(i), xa(e, t.child, null, n), (t = Rs(e, e.pendingProps.children)).flags |= 2, e.memoizedState = null, t
            }

            function Fs(t, e, n) {
                t.lanes |= e;
                var i = t.alternate;
                null !== i && (i.lanes |= e), wa(t.return, e, n)
            }

            function Ps(t, e, n, i, r) {
                var a = t.memoizedState;
                null === a ? t.memoizedState = {
                    isBackwards: e,
                    rendering: null,
                    renderingStartTime: 0,
                    last: i,
                    tail: n,
                    tailMode: r
                } : (a.isBackwards = e, a.rendering = null, a.renderingStartTime = 0, a.last = i, a.tail = n, a.tailMode = r)
            }

            function Ws(t, e, n) {
                var i = e.pendingProps, r = i.revealOrder, a = i.tail;
                if (xs(t, e, i.children, n), 2 & (i = qa.current)) i = 1 & i | 2, e.flags |= 128; else {
                    if (null !== t && 128 & t.flags) t:for (t = e.child; null !== t;) {
                        if (13 === t.tag) null !== t.memoizedState && Fs(t, n, e); else if (19 === t.tag) Fs(t, n, e); else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break t;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) break t;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    i &= 1
                }
                if (Tr(qa, i), 1 & e.mode) switch (r) {
                    case"forwards":
                        for (n = e.child, r = null; null !== n;) null !== (t = n.alternate) && null === to(t) && (r = n), n = n.sibling;
                        null === (n = r) ? (r = e.child, e.child = null) : (r = n.sibling, n.sibling = null), Ps(e, !1, r, n, a);
                        break;
                    case"backwards":
                        for (n = null, r = e.child, e.child = null; null !== r;) {
                            if (null !== (t = r.alternate) && null === to(t)) {
                                e.child = r;
                                break
                            }
                            t = r.sibling, r.sibling = n, n = r, r = t
                        }
                        Ps(e, !0, n, null, a);
                        break;
                    case"together":
                        Ps(e, !1, null, null, void 0);
                        break;
                    default:
                        e.memoizedState = null
                } else e.memoizedState = null;
                return e.child
            }

            function Qs(t, e) {
                !(1 & e.mode) && null !== t && (t.alternate = null, e.alternate = null, e.flags |= 2)
            }

            function Ys(t, e, n) {
                if (null !== t && (e.dependencies = t.dependencies), Ll |= e.lanes, !(n & e.childLanes)) return null;
                if (null !== t && e.child !== t.child) throw Error(a(153));
                if (null !== e.child) {
                    for (n = Ic(t = e.child, t.pendingProps), e.child = n, n.return = e; null !== t.sibling;) t = t.sibling, (n = n.sibling = Ic(t, t.pendingProps)).return = e;
                    n.sibling = null
                }
                return e.child
            }

            function Bs(t, e) {
                if (!ra) switch (t.tailMode) {
                    case"hidden":
                        e = t.tail;
                        for (var n = null; null !== e;) null !== e.alternate && (n = e), e = e.sibling;
                        null === n ? t.tail = null : n.sibling = null;
                        break;
                    case"collapsed":
                        n = t.tail;
                        for (var i = null; null !== n;) null !== n.alternate && (i = n), n = n.sibling;
                        null === i ? e || null === t.tail ? t.tail = null : t.tail.sibling = null : i.sibling = null
                }
            }

            function Zs(t) {
                var e = null !== t.alternate && t.alternate.child === t.child, n = 0, i = 0;
                if (e) for (var r = t.child; null !== r;) n |= r.lanes | r.childLanes, i |= 14680064 & r.subtreeFlags, i |= 14680064 & r.flags, r.return = t, r = r.sibling; else for (r = t.child; null !== r;) n |= r.lanes | r.childLanes, i |= r.subtreeFlags, i |= r.flags, r.return = t, r = r.sibling;
                return t.subtreeFlags |= i, t.childLanes = n, e
            }

            function Hs(t, e, n) {
                var i = e.pendingProps;
                switch (ea(e), e.tag) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                        return Zs(e), null;
                    case 1:
                    case 17:
                        return jr(e.type) && Ir(), Zs(e), null;
                    case 3:
                        return i = e.stateNode, Xa(), kr(Er), kr(wr), no(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), null !== t && null !== t.child || (da(e) ? e.flags |= 4 : null === t || t.memoizedState.isDehydrated && !(256 & e.flags) || (e.flags |= 1024, null !== aa && (oc(aa), aa = null))), js(t, e), Zs(e), null;
                    case 5:
                        Ka(e);
                        var r = Ga(Ha.current);
                        if (n = e.type, null !== t && null != e.stateNode) Is(t, e, n, i, r), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152); else {
                            if (!i) {
                                if (null === e.stateNode) throw Error(a(166));
                                return Zs(e), null
                            }
                            if (t = Ga(Ba.current), da(e)) {
                                i = e.stateNode, n = e.type;
                                var o = e.memoizedProps;
                                switch (i[hr] = e, i[fr] = o, t = !!(1 & e.mode), n) {
                                    case"dialog":
                                        Vi("cancel", i), Vi("close", i);
                                        break;
                                    case"iframe":
                                    case"object":
                                    case"embed":
                                        Vi("load", i);
                                        break;
                                    case"video":
                                    case"audio":
                                        for (r = 0; r < Oi.length; r++) Vi(Oi[r], i);
                                        break;
                                    case"source":
                                        Vi("error", i);
                                        break;
                                    case"img":
                                    case"image":
                                    case"link":
                                        Vi("error", i), Vi("load", i);
                                        break;
                                    case"details":
                                        Vi("toggle", i);
                                        break;
                                    case"input":
                                        X(i, o), Vi("invalid", i);
                                        break;
                                    case"select":
                                        i._wrapperState = {wasMultiple: !!o.multiple}, Vi("invalid", i);
                                        break;
                                    case"textarea":
                                        rt(i, o), Vi("invalid", i)
                                }
                                for (var l in yt(n, o), r = null, o) if (o.hasOwnProperty(l)) {
                                    var c = o[l];
                                    "children" === l ? "string" == typeof c ? i.textContent !== c && (!0 !== o.suppressHydrationWarning && Ki(i.textContent, c, t), r = ["children", c]) : "number" == typeof c && i.textContent !== "" + c && (!0 !== o.suppressHydrationWarning && Ki(i.textContent, c, t), r = ["children", "" + c]) : s.hasOwnProperty(l) && null != c && "onScroll" === l && Vi("scroll", i)
                                }
                                switch (n) {
                                    case"input":
                                        Z(i), q(i, o, !0);
                                        break;
                                    case"textarea":
                                        Z(i), ot(i);
                                        break;
                                    case"select":
                                    case"option":
                                        break;
                                    default:
                                        "function" == typeof o.onClick && (i.onclick = qi)
                                }
                                i = r, e.updateQueue = i, null !== i && (e.flags |= 4)
                            } else {
                                l = 9 === r.nodeType ? r : r.ownerDocument, "http://www.w3.org/1999/xhtml" === t && (t = st(n)), "http://www.w3.org/1999/xhtml" === t ? "script" === n ? ((t = l.createElement("div")).innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : "string" == typeof i.is ? t = l.createElement(n, {is: i.is}) : (t = l.createElement(n), "select" === n && (l = t, i.multiple ? l.multiple = !0 : i.size && (l.size = i.size))) : t = l.createElementNS(t, n), t[hr] = e, t[fr] = i, zs(t, e, !1, !1), e.stateNode = t;
                                t:{
                                    switch (l = bt(n, i), n) {
                                        case"dialog":
                                            Vi("cancel", t), Vi("close", t), r = i;
                                            break;
                                        case"iframe":
                                        case"object":
                                        case"embed":
                                            Vi("load", t), r = i;
                                            break;
                                        case"video":
                                        case"audio":
                                            for (r = 0; r < Oi.length; r++) Vi(Oi[r], t);
                                            r = i;
                                            break;
                                        case"source":
                                            Vi("error", t), r = i;
                                            break;
                                        case"img":
                                        case"image":
                                        case"link":
                                            Vi("error", t), Vi("load", t), r = i;
                                            break;
                                        case"details":
                                            Vi("toggle", t), r = i;
                                            break;
                                        case"input":
                                            X(t, i), r = J(t, i), Vi("invalid", t);
                                            break;
                                        case"option":
                                        default:
                                            r = i;
                                            break;
                                        case"select":
                                            t._wrapperState = {wasMultiple: !!i.multiple}, r = U({}, i, {value: void 0}), Vi("invalid", t);
                                            break;
                                        case"textarea":
                                            rt(t, i), r = it(t, i), Vi("invalid", t)
                                    }
                                    for (o in yt(n, r), c = r) if (c.hasOwnProperty(o)) {
                                        var u = c[o];
                                        "style" === o ? mt(t, u) : "dangerouslySetInnerHTML" === o ? null != (u = u ? u.__html : void 0) && dt(t, u) : "children" === o ? "string" == typeof u ? ("textarea" !== n || "" !== u) && ht(t, u) : "number" == typeof u && ht(t, "" + u) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (s.hasOwnProperty(o) ? null != u && "onScroll" === o && Vi("scroll", t) : null != u && b(t, o, u, l))
                                    }
                                    switch (n) {
                                        case"input":
                                            Z(t), q(t, i, !1);
                                            break;
                                        case"textarea":
                                            Z(t), ot(t);
                                            break;
                                        case"option":
                                            null != i.value && t.setAttribute("value", "" + Y(i.value));
                                            break;
                                        case"select":
                                            t.multiple = !!i.multiple, null != (o = i.value) ? nt(t, !!i.multiple, o, !1) : null != i.defaultValue && nt(t, !!i.multiple, i.defaultValue, !0);
                                            break;
                                        default:
                                            "function" == typeof r.onClick && (t.onclick = qi)
                                    }
                                    switch (n) {
                                        case"button":
                                        case"input":
                                        case"select":
                                        case"textarea":
                                            i = !!i.autoFocus;
                                            break t;
                                        case"img":
                                            i = !0;
                                            break t;
                                        default:
                                            i = !1
                                    }
                                }
                                i && (e.flags |= 4)
                            }
                            null !== e.ref && (e.flags |= 512, e.flags |= 2097152)
                        }
                        return Zs(e), null;
                    case 6:
                        if (t && null != e.stateNode) _s(t, e, t.memoizedProps, i); else {
                            if ("string" != typeof i && null === e.stateNode) throw Error(a(166));
                            if (n = Ga(Ha.current), Ga(Ba.current), da(e)) {
                                if (i = e.stateNode, n = e.memoizedProps, i[hr] = e, (o = i.nodeValue !== n) && null !== (t = na)) switch (t.tag) {
                                    case 3:
                                        Ki(i.nodeValue, n, !!(1 & t.mode));
                                        break;
                                    case 5:
                                        !0 !== t.memoizedProps.suppressHydrationWarning && Ki(i.nodeValue, n, !!(1 & t.mode))
                                }
                                o && (e.flags |= 4)
                            } else (i = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(i))[hr] = e, e.stateNode = i
                        }
                        return Zs(e), null;
                    case 13:
                        if (kr(qa), i = e.memoizedState, null === t || null !== t.memoizedState && null !== t.memoizedState.dehydrated) {
                            if (ra && null !== ia && 1 & e.mode && !(128 & e.flags)) ha(), fa(), e.flags |= 98560, o = !1; else if (o = da(e), null !== i && null !== i.dehydrated) {
                                if (null === t) {
                                    if (!o) throw Error(a(318));
                                    if (!(o = null !== (o = e.memoizedState) ? o.dehydrated : null)) throw Error(a(317));
                                    o[hr] = e
                                } else fa(), !(128 & e.flags) && (e.memoizedState = null), e.flags |= 4;
                                Zs(e), o = !1
                            } else null !== aa && (oc(aa), aa = null), o = !0;
                            if (!o) return 65536 & e.flags ? e : null
                        }
                        return 128 & e.flags ? (e.lanes = n, e) : ((i = null !== i) != (null !== t && null !== t.memoizedState) && i && (e.child.flags |= 8192, 1 & e.mode && (null === t || 1 & qa.current ? 0 === _l && (_l = 3) : gc())), null !== e.updateQueue && (e.flags |= 4), Zs(e), null);
                    case 4:
                        return Xa(), js(t, e), null === t && Wi(e.stateNode.containerInfo), Zs(e), null;
                    case 10:
                        return Sa(e.type._context), Zs(e), null;
                    case 19:
                        if (kr(qa), null === (o = e.memoizedState)) return Zs(e), null;
                        if (i = !!(128 & e.flags), null === (l = o.rendering)) if (i) Bs(o, !1); else {
                            if (0 !== _l || null !== t && 128 & t.flags) for (t = e.child; null !== t;) {
                                if (null !== (l = to(t))) {
                                    for (e.flags |= 128, Bs(o, !1), null !== (i = l.updateQueue) && (e.updateQueue = i, e.flags |= 4), e.subtreeFlags = 0, i = n, n = e.child; null !== n;) t = i, (o = n).flags &= 14680066, null === (l = o.alternate) ? (o.childLanes = 0, o.lanes = t, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, t = l.dependencies, o.dependencies = null === t ? null : {
                                        lanes: t.lanes,
                                        firstContext: t.firstContext
                                    }), n = n.sibling;
                                    return Tr(qa, 1 & qa.current | 2), e.child
                                }
                                t = t.sibling
                            }
                            null !== o.tail && $t() > Wl && (e.flags |= 128, i = !0, Bs(o, !1), e.lanes = 4194304)
                        } else {
                            if (!i) if (null !== (t = to(l))) {
                                if (e.flags |= 128, i = !0, null !== (n = t.updateQueue) && (e.updateQueue = n, e.flags |= 4), Bs(o, !0), null === o.tail && "hidden" === o.tailMode && !l.alternate && !ra) return Zs(e), null
                            } else 2 * $t() - o.renderingStartTime > Wl && 1073741824 !== n && (e.flags |= 128, i = !0, Bs(o, !1), e.lanes = 4194304);
                            o.isBackwards ? (l.sibling = e.child, e.child = l) : (null !== (n = o.last) ? n.sibling = l : e.child = l, o.last = l)
                        }
                        return null !== o.tail ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = $t(), e.sibling = null, n = qa.current, Tr(qa, i ? 1 & n | 2 : 1 & n), e) : (Zs(e), null);
                    case 22:
                    case 23:
                        return dc(), i = null !== e.memoizedState, null !== t && null !== t.memoizedState !== i && (e.flags |= 8192), i && 1 & e.mode ? !!(1073741824 & jl) && (Zs(e), 6 & e.subtreeFlags && (e.flags |= 8192)) : Zs(e), null;
                    case 24:
                    case 25:
                        return null
                }
                throw Error(a(156, e.tag))
            }

            function Gs(t, e) {
                switch (ea(e), e.tag) {
                    case 1:
                        return jr(e.type) && Ir(), 65536 & (t = e.flags) ? (e.flags = -65537 & t | 128, e) : null;
                    case 3:
                        return Xa(), kr(Er), kr(wr), no(), 65536 & (t = e.flags) && !(128 & t) ? (e.flags = -65537 & t | 128, e) : null;
                    case 5:
                        return Ka(e), null;
                    case 13:
                        if (kr(qa), null !== (t = e.memoizedState) && null !== t.dehydrated) {
                            if (null === e.alternate) throw Error(a(340));
                            fa()
                        }
                        return 65536 & (t = e.flags) ? (e.flags = -65537 & t | 128, e) : null;
                    case 19:
                        return kr(qa), null;
                    case 4:
                        return Xa(), null;
                    case 10:
                        return Sa(e.type._context), null;
                    case 22:
                    case 23:
                        return dc(), null;
                    default:
                        return null
                }
            }

            zs = function (t, e) {
                for (var n = e.child; null !== n;) {
                    if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode); else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === e) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === e) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }, js = function () {
            }, Is = function (t, e, n, i) {
                var r = t.memoizedProps;
                if (r !== i) {
                    t = e.stateNode, Ga(Ba.current);
                    var a, o = null;
                    switch (n) {
                        case"input":
                            r = J(t, r), i = J(t, i), o = [];
                            break;
                        case"select":
                            r = U({}, r, {value: void 0}), i = U({}, i, {value: void 0}), o = [];
                            break;
                        case"textarea":
                            r = it(t, r), i = it(t, i), o = [];
                            break;
                        default:
                            "function" != typeof r.onClick && "function" == typeof i.onClick && (t.onclick = qi)
                    }
                    for (u in yt(n, i), n = null, r) if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && null != r[u]) if ("style" === u) {
                        var l = r[u];
                        for (a in l) l.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
                    } else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (s.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
                    for (u in i) {
                        var c = i[u];
                        if (l = null != r ? r[u] : void 0, i.hasOwnProperty(u) && c !== l && (null != c || null != l)) if ("style" === u) if (l) {
                            for (a in l) !l.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                            for (a in c) c.hasOwnProperty(a) && l[a] !== c[a] && (n || (n = {}), n[a] = c[a])
                        } else n || (o || (o = []), o.push(u, n)), n = c; else "dangerouslySetInnerHTML" === u ? (c = c ? c.__html : void 0, l = l ? l.__html : void 0, null != c && l !== c && (o = o || []).push(u, c)) : "children" === u ? "string" != typeof c && "number" != typeof c || (o = o || []).push(u, "" + c) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (s.hasOwnProperty(u) ? (null != c && "onScroll" === u && Vi("scroll", t), o || l === c || (o = [])) : (o = o || []).push(u, c))
                    }
                    n && (o = o || []).push("style", n);
                    var u = o;
                    (e.updateQueue = u) && (e.flags |= 4)
                }
            }, _s = function (t, e, n, i) {
                n !== i && (e.flags |= 4)
            };
            var Js = !1, Xs = !1, $s = "function" == typeof WeakSet ? WeakSet : Set, Ks = null;

            function qs(t, e) {
                var n = t.ref;
                if (null !== n) if ("function" == typeof n) try {
                    n(null)
                } catch (n) {
                    Dc(t, e, n)
                } else n.current = null
            }

            function tl(t, e, n) {
                try {
                    n()
                } catch (n) {
                    Dc(t, e, n)
                }
            }

            var el = !1;

            function nl(t, e, n) {
                var i = e.updateQueue;
                if (null !== (i = null !== i ? i.lastEffect : null)) {
                    var r = i = i.next;
                    do {
                        if ((r.tag & t) === t) {
                            var a = r.destroy;
                            r.destroy = void 0, void 0 !== a && tl(e, n, a)
                        }
                        r = r.next
                    } while (r !== i)
                }
            }

            function il(t, e) {
                if (null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)) {
                    var n = e = e.next;
                    do {
                        if ((n.tag & t) === t) {
                            var i = n.create;
                            n.destroy = i()
                        }
                        n = n.next
                    } while (n !== e)
                }
            }

            function rl(t) {
                var e = t.ref;
                if (null !== e) {
                    var n = t.stateNode;
                    t.tag, t = n, "function" == typeof e ? e(t) : e.current = t
                }
            }

            function al(t) {
                var e = t.alternate;
                null !== e && (t.alternate = null, al(e)), t.child = null, t.deletions = null, t.sibling = null, 5 === t.tag && null !== (e = t.stateNode) && (delete e[hr], delete e[fr], delete e[gr], delete e[mr], delete e[Mr]), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
            }

            function ol(t) {
                return 5 === t.tag || 3 === t.tag || 4 === t.tag
            }

            function sl(t) {
                t:for (; ;) {
                    for (; null === t.sibling;) {
                        if (null === t.return || ol(t.return)) return null;
                        t = t.return
                    }
                    for (t.sibling.return = t.return, t = t.sibling; 5 !== t.tag && 6 !== t.tag && 18 !== t.tag;) {
                        if (2 & t.flags) continue t;
                        if (null === t.child || 4 === t.tag) continue t;
                        t.child.return = t, t = t.child
                    }
                    if (!(2 & t.flags)) return t.stateNode
                }
            }

            function ll(t, e, n) {
                var i = t.tag;
                if (5 === i || 6 === i) t = t.stateNode, e ? 8 === n.nodeType ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (8 === n.nodeType ? (e = n.parentNode).insertBefore(t, n) : (e = n).appendChild(t), null != (n = n._reactRootContainer) || null !== e.onclick || (e.onclick = qi)); else if (4 !== i && null !== (t = t.child)) for (ll(t, e, n), t = t.sibling; null !== t;) ll(t, e, n), t = t.sibling
            }

            function cl(t, e, n) {
                var i = t.tag;
                if (5 === i || 6 === i) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t); else if (4 !== i && null !== (t = t.child)) for (cl(t, e, n), t = t.sibling; null !== t;) cl(t, e, n), t = t.sibling
            }

            var ul = null, dl = !1;

            function hl(t, e, n) {
                for (n = n.child; null !== n;) fl(t, e, n), n = n.sibling
            }

            function fl(t, e, n) {
                if (ae && "function" == typeof ae.onCommitFiberUnmount) try {
                    ae.onCommitFiberUnmount(re, n)
                } catch (t) {
                }
                switch (n.tag) {
                    case 5:
                        Xs || qs(n, e);
                    case 6:
                        var i = ul, r = dl;
                        ul = null, hl(t, e, n), dl = r, null !== (ul = i) && (dl ? (t = ul, n = n.stateNode, 8 === t.nodeType ? t.parentNode.removeChild(n) : t.removeChild(n)) : ul.removeChild(n.stateNode));
                        break;
                    case 18:
                        null !== ul && (dl ? (t = ul, n = n.stateNode, 8 === t.nodeType ? lr(t.parentNode, n) : 1 === t.nodeType && lr(t, n), We(t)) : lr(ul, n.stateNode));
                        break;
                    case 4:
                        i = ul, r = dl, ul = n.stateNode.containerInfo, dl = !0, hl(t, e, n), ul = i, dl = r;
                        break;
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (!Xs && null !== (i = n.updateQueue) && null !== (i = i.lastEffect)) {
                            r = i = i.next;
                            do {
                                var a = r, o = a.destroy;
                                a = a.tag, void 0 !== o && (2 & a || 4 & a) && tl(n, e, o), r = r.next
                            } while (r !== i)
                        }
                        hl(t, e, n);
                        break;
                    case 1:
                        if (!Xs && (qs(n, e), "function" == typeof (i = n.stateNode).componentWillUnmount)) try {
                            i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount()
                        } catch (t) {
                            Dc(n, e, t)
                        }
                        hl(t, e, n);
                        break;
                    case 21:
                        hl(t, e, n);
                        break;
                    case 22:
                        1 & n.mode ? (Xs = (i = Xs) || null !== n.memoizedState, hl(t, e, n), Xs = i) : hl(t, e, n);
                        break;
                    default:
                        hl(t, e, n)
                }
            }

            function pl(t) {
                var e = t.updateQueue;
                if (null !== e) {
                    t.updateQueue = null;
                    var n = t.stateNode;
                    null === n && (n = t.stateNode = new $s), e.forEach((function (e) {
                        var i = wc.bind(null, t, e);
                        n.has(e) || (n.add(e), e.then(i, i))
                    }))
                }
            }

            function gl(t, e) {
                var n = e.deletions;
                if (null !== n) for (var i = 0; i < n.length; i++) {
                    var r = n[i];
                    try {
                        var o = t, s = e, l = s;
                        t:for (; null !== l;) {
                            switch (l.tag) {
                                case 5:
                                    ul = l.stateNode, dl = !1;
                                    break t;
                                case 3:
                                case 4:
                                    ul = l.stateNode.containerInfo, dl = !0;
                                    break t
                            }
                            l = l.return
                        }
                        if (null === ul) throw Error(a(160));
                        fl(o, s, r), ul = null, dl = !1;
                        var c = r.alternate;
                        null !== c && (c.return = null), r.return = null
                    } catch (t) {
                        Dc(r, e, t)
                    }
                }
                if (12854 & e.subtreeFlags) for (e = e.child; null !== e;) ml(e, t), e = e.sibling
            }

            function ml(t, e) {
                var n = t.alternate, i = t.flags;
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (gl(e, t), Ml(t), 4 & i) {
                            try {
                                nl(3, t, t.return), il(3, t)
                            } catch (e) {
                                Dc(t, t.return, e)
                            }
                            try {
                                nl(5, t, t.return)
                            } catch (e) {
                                Dc(t, t.return, e)
                            }
                        }
                        break;
                    case 1:
                        gl(e, t), Ml(t), 512 & i && null !== n && qs(n, n.return);
                        break;
                    case 5:
                        if (gl(e, t), Ml(t), 512 & i && null !== n && qs(n, n.return), 32 & t.flags) {
                            var r = t.stateNode;
                            try {
                                ht(r, "")
                            } catch (e) {
                                Dc(t, t.return, e)
                            }
                        }
                        if (4 & i && null != (r = t.stateNode)) {
                            var o = t.memoizedProps, s = null !== n ? n.memoizedProps : o, l = t.type,
                                c = t.updateQueue;
                            if (t.updateQueue = null, null !== c) try {
                                "input" === l && "radio" === o.type && null != o.name && $(r, o), bt(l, s);
                                var u = bt(l, o);
                                for (s = 0; s < c.length; s += 2) {
                                    var d = c[s], h = c[s + 1];
                                    "style" === d ? mt(r, h) : "dangerouslySetInnerHTML" === d ? dt(r, h) : "children" === d ? ht(r, h) : b(r, d, h, u)
                                }
                                switch (l) {
                                    case"input":
                                        K(r, o);
                                        break;
                                    case"textarea":
                                        at(r, o);
                                        break;
                                    case"select":
                                        var f = r._wrapperState.wasMultiple;
                                        r._wrapperState.wasMultiple = !!o.multiple;
                                        var p = o.value;
                                        null != p ? nt(r, !!o.multiple, p, !1) : f !== !!o.multiple && (null != o.defaultValue ? nt(r, !!o.multiple, o.defaultValue, !0) : nt(r, !!o.multiple, o.multiple ? [] : "", !1))
                                }
                                r[fr] = o
                            } catch (e) {
                                Dc(t, t.return, e)
                            }
                        }
                        break;
                    case 6:
                        if (gl(e, t), Ml(t), 4 & i) {
                            if (null === t.stateNode) throw Error(a(162));
                            r = t.stateNode, o = t.memoizedProps;
                            try {
                                r.nodeValue = o
                            } catch (e) {
                                Dc(t, t.return, e)
                            }
                        }
                        break;
                    case 3:
                        if (gl(e, t), Ml(t), 4 & i && null !== n && n.memoizedState.isDehydrated) try {
                            We(e.containerInfo)
                        } catch (e) {
                            Dc(t, t.return, e)
                        }
                        break;
                    case 4:
                    default:
                        gl(e, t), Ml(t);
                        break;
                    case 13:
                        gl(e, t), Ml(t), 8192 & (r = t.child).flags && (o = null !== r.memoizedState, r.stateNode.isHidden = o, !o || null !== r.alternate && null !== r.alternate.memoizedState || (Pl = $t())), 4 & i && pl(t);
                        break;
                    case 22:
                        if (d = null !== n && null !== n.memoizedState, 1 & t.mode ? (Xs = (u = Xs) || d, gl(e, t), Xs = u) : gl(e, t), Ml(t), 8192 & i) {
                            if (u = null !== t.memoizedState, (t.stateNode.isHidden = u) && !d && 1 & t.mode) for (Ks = t, d = t.child; null !== d;) {
                                for (h = Ks = d; null !== Ks;) {
                                    switch (p = (f = Ks).child, f.tag) {
                                        case 0:
                                        case 11:
                                        case 14:
                                        case 15:
                                            nl(4, f, f.return);
                                            break;
                                        case 1:
                                            qs(f, f.return);
                                            var g = f.stateNode;
                                            if ("function" == typeof g.componentWillUnmount) {
                                                i = f, n = f.return;
                                                try {
                                                    e = i, g.props = e.memoizedProps, g.state = e.memoizedState, g.componentWillUnmount()
                                                } catch (t) {
                                                    Dc(i, n, t)
                                                }
                                            }
                                            break;
                                        case 5:
                                            qs(f, f.return);
                                            break;
                                        case 22:
                                            if (null !== f.memoizedState) {
                                                Al(h);
                                                continue
                                            }
                                    }
                                    null !== p ? (p.return = f, Ks = p) : Al(h)
                                }
                                d = d.sibling
                            }
                            t:for (d = null, h = t; ;) {
                                if (5 === h.tag) {
                                    if (null === d) {
                                        d = h;
                                        try {
                                            r = h.stateNode, u ? "function" == typeof (o = r.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (l = h.stateNode, s = null != (c = h.memoizedProps.style) && c.hasOwnProperty("display") ? c.display : null, l.style.display = gt("display", s))
                                        } catch (e) {
                                            Dc(t, t.return, e)
                                        }
                                    }
                                } else if (6 === h.tag) {
                                    if (null === d) try {
                                        h.stateNode.nodeValue = u ? "" : h.memoizedProps
                                    } catch (e) {
                                        Dc(t, t.return, e)
                                    }
                                } else if ((22 !== h.tag && 23 !== h.tag || null === h.memoizedState || h === t) && null !== h.child) {
                                    h.child.return = h, h = h.child;
                                    continue
                                }
                                if (h === t) break t;
                                for (; null === h.sibling;) {
                                    if (null === h.return || h.return === t) break t;
                                    d === h && (d = null), h = h.return
                                }
                                d === h && (d = null), h.sibling.return = h.return, h = h.sibling
                            }
                        }
                        break;
                    case 19:
                        gl(e, t), Ml(t), 4 & i && pl(t);
                    case 21:
                }
            }

            function Ml(t) {
                var e = t.flags;
                if (2 & e) {
                    try {
                        t:{
                            for (var n = t.return; null !== n;) {
                                if (ol(n)) {
                                    var i = n;
                                    break t
                                }
                                n = n.return
                            }
                            throw Error(a(160))
                        }
                        switch (i.tag) {
                            case 5:
                                var r = i.stateNode;
                                32 & i.flags && (ht(r, ""), i.flags &= -33), cl(t, sl(t), r);
                                break;
                            case 3:
                            case 4:
                                var o = i.stateNode.containerInfo;
                                ll(t, sl(t), o);
                                break;
                            default:
                                throw Error(a(161))
                        }
                    } catch (e) {
                        Dc(t, t.return, e)
                    }
                    t.flags &= -3
                }
                4096 & e && (t.flags &= -4097)
            }

            function yl(t, e, n) {
                Ks = t, bl(t, e, n)
            }

            function bl(t, e, n) {
                for (var i = !!(1 & t.mode); null !== Ks;) {
                    var r = Ks, a = r.child;
                    if (22 === r.tag && i) {
                        var o = null !== r.memoizedState || Js;
                        if (!o) {
                            var s = r.alternate, l = null !== s && null !== s.memoizedState || Xs;
                            s = Js;
                            var c = Xs;
                            if (Js = o, (Xs = l) && !c) for (Ks = r; null !== Ks;) l = (o = Ks).child, 22 === o.tag && null !== o.memoizedState ? vl(r) : null !== l ? (l.return = o, Ks = l) : vl(r);
                            for (; null !== a;) Ks = a, bl(a, e, n), a = a.sibling;
                            Ks = r, Js = s, Xs = c
                        }
                        xl(t)
                    } else 8772 & r.subtreeFlags && null !== a ? (a.return = r, Ks = a) : xl(t)
                }
            }

            function xl(t) {
                for (; null !== Ks;) {
                    var e = Ks;
                    if (8772 & e.flags) {
                        var n = e.alternate;
                        try {
                            if (8772 & e.flags) switch (e.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Xs || il(5, e);
                                    break;
                                case 1:
                                    var i = e.stateNode;
                                    if (4 & e.flags && !Xs) if (null === n) i.componentDidMount(); else {
                                        var r = e.elementType === e.type ? n.memoizedProps : ns(e.type, n.memoizedProps);
                                        i.componentDidUpdate(r, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate)
                                    }
                                    var o = e.updateQueue;
                                    null !== o && Qa(e, o, i);
                                    break;
                                case 3:
                                    var s = e.updateQueue;
                                    if (null !== s) {
                                        if (n = null, null !== e.child) switch (e.child.tag) {
                                            case 5:
                                            case 1:
                                                n = e.child.stateNode
                                        }
                                        Qa(e, s, n)
                                    }
                                    break;
                                case 5:
                                    var l = e.stateNode;
                                    if (null === n && 4 & e.flags) {
                                        n = l;
                                        var c = e.memoizedProps;
                                        switch (e.type) {
                                            case"button":
                                            case"input":
                                            case"select":
                                            case"textarea":
                                                c.autoFocus && n.focus();
                                                break;
                                            case"img":
                                                c.src && (n.src = c.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === e.memoizedState) {
                                        var u = e.alternate;
                                        if (null !== u) {
                                            var d = u.memoizedState;
                                            if (null !== d) {
                                                var h = d.dehydrated;
                                                null !== h && We(h)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(a(163))
                            }
                            Xs || 512 & e.flags && rl(e)
                        } catch (t) {
                            Dc(e, e.return, t)
                        }
                    }
                    if (e === t) {
                        Ks = null;
                        break
                    }
                    if (null !== (n = e.sibling)) {
                        n.return = e.return, Ks = n;
                        break
                    }
                    Ks = e.return
                }
            }

            function Al(t) {
                for (; null !== Ks;) {
                    var e = Ks;
                    if (e === t) {
                        Ks = null;
                        break
                    }
                    var n = e.sibling;
                    if (null !== n) {
                        n.return = e.return, Ks = n;
                        break
                    }
                    Ks = e.return
                }
            }

            function vl(t) {
                for (; null !== Ks;) {
                    var e = Ks;
                    try {
                        switch (e.tag) {
                            case 0:
                            case 11:
                            case 15:
                                var n = e.return;
                                try {
                                    il(4, e)
                                } catch (t) {
                                    Dc(e, n, t)
                                }
                                break;
                            case 1:
                                var i = e.stateNode;
                                if ("function" == typeof i.componentDidMount) {
                                    var r = e.return;
                                    try {
                                        i.componentDidMount()
                                    } catch (t) {
                                        Dc(e, r, t)
                                    }
                                }
                                var a = e.return;
                                try {
                                    rl(e)
                                } catch (t) {
                                    Dc(e, a, t)
                                }
                                break;
                            case 5:
                                var o = e.return;
                                try {
                                    rl(e)
                                } catch (t) {
                                    Dc(e, o, t)
                                }
                        }
                    } catch (t) {
                        Dc(e, e.return, t)
                    }
                    if (e === t) {
                        Ks = null;
                        break
                    }
                    var s = e.sibling;
                    if (null !== s) {
                        s.return = e.return, Ks = s;
                        break
                    }
                    Ks = e.return
                }
            }

            var Nl, Dl = Math.ceil, kl = x.ReactCurrentDispatcher, Tl = x.ReactCurrentOwner,
                Sl = x.ReactCurrentBatchConfig, wl = 0, El = null, Cl = null, zl = 0, jl = 0, Il = Dr(0), _l = 0,
                Ol = null, Ll = 0, Ul = 0, Rl = 0, Vl = null, Fl = null, Pl = 0, Wl = 1 / 0, Ql = null, Yl = !1,
                Bl = null, Zl = null, Hl = !1, Gl = null, Jl = 0, Xl = 0, $l = null, Kl = -1, ql = 0;

            function tc() {
                return 6 & wl ? $t() : -1 !== Kl ? Kl : Kl = $t()
            }

            function ec(t) {
                return 1 & t.mode ? 2 & wl && 0 !== zl ? zl & -zl : null !== ga.transition ? (0 === ql && (ql = ge()), ql) : 0 !== (t = be) ? t : t = void 0 === (t = window.event) ? 16 : Xe(t.type) : 1
            }

            function nc(t, e, n, i) {
                if (50 < Xl) throw Xl = 0, $l = null, Error(a(185));
                Me(t, n, i), 2 & wl && t === El || (t === El && (!(2 & wl) && (Ul |= n), 4 === _l && sc(t, zl)), ic(t, i), 1 === n && 0 === wl && !(1 & e.mode) && (Wl = $t() + 500, Vr && Wr()))
            }

            function ic(t, e) {
                var n = t.callbackNode;
                !function (t, e) {
                    for (var n = t.suspendedLanes, i = t.pingedLanes, r = t.expirationTimes, a = t.pendingLanes; 0 < a;) {
                        var o = 31 - oe(a), s = 1 << o, l = r[o];
                        -1 === l ? s & n && !(s & i) || (r[o] = fe(s, e)) : l <= e && (t.expiredLanes |= s), a &= ~s
                    }
                }(t, e);
                var i = he(t, t === El ? zl : 0);
                if (0 === i) null !== n && Gt(n), t.callbackNode = null, t.callbackPriority = 0; else if (e = i & -i, t.callbackPriority !== e) {
                    if (null != n && Gt(n), 1 === e) 0 === t.tag ? function (t) {
                        Vr = !0, Pr(t)
                    }(lc.bind(null, t)) : Pr(lc.bind(null, t)), or((function () {
                        !(6 & wl) && Wr()
                    })), n = null; else {
                        switch (xe(i)) {
                            case 1:
                                n = qt;
                                break;
                            case 4:
                                n = te;
                                break;
                            case 16:
                            default:
                                n = ee;
                                break;
                            case 536870912:
                                n = ie
                        }
                        n = Ec(n, rc.bind(null, t))
                    }
                    t.callbackPriority = e, t.callbackNode = n
                }
            }

            function rc(t, e) {
                if (Kl = -1, ql = 0, 6 & wl) throw Error(a(327));
                var n = t.callbackNode;
                if (vc() && t.callbackNode !== n) return null;
                var i = he(t, t === El ? zl : 0);
                if (0 === i) return null;
                if (30 & i || i & t.expiredLanes || e) e = mc(t, i); else {
                    e = i;
                    var r = wl;
                    wl |= 2;
                    var o = pc();
                    for (El === t && zl === e || (Ql = null, Wl = $t() + 500, hc(t, e)); ;) try {
                        yc();
                        break
                    } catch (e) {
                        fc(t, e)
                    }
                    Ta(), kl.current = o, wl = r, null !== Cl ? e = 0 : (El = null, zl = 0, e = _l)
                }
                if (0 !== e) {
                    if (2 === e && 0 !== (r = pe(t)) && (i = r, e = ac(t, r)), 1 === e) throw n = Ol, hc(t, 0), sc(t, i), ic(t, $t()), n;
                    if (6 === e) sc(t, i); else {
                        if (r = t.current.alternate, !(30 & i || function (t) {
                            for (var e = t; ;) {
                                if (16384 & e.flags) {
                                    var n = e.updateQueue;
                                    if (null !== n && null !== (n = n.stores)) for (var i = 0; i < n.length; i++) {
                                        var r = n[i], a = r.getSnapshot;
                                        r = r.value;
                                        try {
                                            if (!si(a(), r)) return !1
                                        } catch (t) {
                                            return !1
                                        }
                                    }
                                }
                                if (n = e.child, 16384 & e.subtreeFlags && null !== n) n.return = e, e = n; else {
                                    if (e === t) break;
                                    for (; null === e.sibling;) {
                                        if (null === e.return || e.return === t) return !0;
                                        e = e.return
                                    }
                                    e.sibling.return = e.return, e = e.sibling
                                }
                            }
                            return !0
                        }(r) || (e = mc(t, i), 2 === e && (o = pe(t), 0 !== o && (i = o, e = ac(t, o))), 1 !== e))) throw n = Ol, hc(t, 0), sc(t, i), ic(t, $t()), n;
                        switch (t.finishedWork = r, t.finishedLanes = i, e) {
                            case 0:
                            case 1:
                                throw Error(a(345));
                            case 2:
                            case 5:
                                Ac(t, Fl, Ql);
                                break;
                            case 3:
                                if (sc(t, i), (130023424 & i) === i && 10 < (e = Pl + 500 - $t())) {
                                    if (0 !== he(t, 0)) break;
                                    if (((r = t.suspendedLanes) & i) !== i) {
                                        tc(), t.pingedLanes |= t.suspendedLanes & r;
                                        break
                                    }
                                    t.timeoutHandle = ir(Ac.bind(null, t, Fl, Ql), e);
                                    break
                                }
                                Ac(t, Fl, Ql);
                                break;
                            case 4:
                                if (sc(t, i), (4194240 & i) === i) break;
                                for (e = t.eventTimes, r = -1; 0 < i;) {
                                    var s = 31 - oe(i);
                                    o = 1 << s, (s = e[s]) > r && (r = s), i &= ~o
                                }
                                if (i = r, 10 < (i = (120 > (i = $t() - i) ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * Dl(i / 1960)) - i)) {
                                    t.timeoutHandle = ir(Ac.bind(null, t, Fl, Ql), i);
                                    break
                                }
                                Ac(t, Fl, Ql);
                                break;
                            default:
                                throw Error(a(329))
                        }
                    }
                }
                return ic(t, $t()), t.callbackNode === n ? rc.bind(null, t) : null
            }

            function ac(t, e) {
                var n = Vl;
                return t.current.memoizedState.isDehydrated && (hc(t, e).flags |= 256), 2 !== (t = mc(t, e)) && (e = Fl, Fl = n, null !== e && oc(e)), t
            }

            function oc(t) {
                null === Fl ? Fl = t : Fl.push.apply(Fl, t)
            }

            function sc(t, e) {
                for (e &= ~Rl, e &= ~Ul, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e;) {
                    var n = 31 - oe(e), i = 1 << n;
                    t[n] = -1, e &= ~i
                }
            }

            function lc(t) {
                if (6 & wl) throw Error(a(327));
                vc();
                var e = he(t, 0);
                if (!(1 & e)) return ic(t, $t()), null;
                var n = mc(t, e);
                if (0 !== t.tag && 2 === n) {
                    var i = pe(t);
                    0 !== i && (e = i, n = ac(t, i))
                }
                if (1 === n) throw n = Ol, hc(t, 0), sc(t, e), ic(t, $t()), n;
                if (6 === n) throw Error(a(345));
                return t.finishedWork = t.current.alternate, t.finishedLanes = e, Ac(t, Fl, Ql), ic(t, $t()), null
            }

            function cc(t, e) {
                var n = wl;
                wl |= 1;
                try {
                    return t(e)
                } finally {
                    0 === (wl = n) && (Wl = $t() + 500, Vr && Wr())
                }
            }

            function uc(t) {
                null !== Gl && 0 === Gl.tag && !(6 & wl) && vc();
                var e = wl;
                wl |= 1;
                var n = Sl.transition, i = be;
                try {
                    if (Sl.transition = null, be = 1, t) return t()
                } finally {
                    be = i, Sl.transition = n, !(6 & (wl = e)) && Wr()
                }
            }

            function dc() {
                jl = Il.current, kr(Il)
            }

            function hc(t, e) {
                t.finishedWork = null, t.finishedLanes = 0;
                var n = t.timeoutHandle;
                if (-1 !== n && (t.timeoutHandle = -1, rr(n)), null !== Cl) for (n = Cl.return; null !== n;) {
                    var i = n;
                    switch (ea(i), i.tag) {
                        case 1:
                            null != (i = i.type.childContextTypes) && Ir();
                            break;
                        case 3:
                            Xa(), kr(Er), kr(wr), no();
                            break;
                        case 5:
                            Ka(i);
                            break;
                        case 4:
                            Xa();
                            break;
                        case 13:
                        case 19:
                            kr(qa);
                            break;
                        case 10:
                            Sa(i.type._context);
                            break;
                        case 22:
                        case 23:
                            dc()
                    }
                    n = n.return
                }
                if (El = t, Cl = t = Ic(t.current, null), zl = jl = e, _l = 0, Ol = null, Rl = Ul = Ll = 0, Fl = Vl = null, null !== za) {
                    for (e = 0; e < za.length; e++) if (null !== (i = (n = za[e]).interleaved)) {
                        n.interleaved = null;
                        var r = i.next, a = n.pending;
                        if (null !== a) {
                            var o = a.next;
                            a.next = r, i.next = o
                        }
                        n.pending = i
                    }
                    za = null
                }
                return t
            }

            function fc(t, e) {
                for (; ;) {
                    var n = Cl;
                    try {
                        if (Ta(), io.current = Ko, co) {
                            for (var i = oo.memoizedState; null !== i;) {
                                var r = i.queue;
                                null !== r && (r.pending = null), i = i.next
                            }
                            co = !1
                        }
                        if (ao = 0, lo = so = oo = null, uo = !1, ho = 0, Tl.current = null, null === n || null === n.return) {
                            _l = 1, Ol = e, Cl = null;
                            break
                        }
                        t:{
                            var o = t, s = n.return, l = n, c = e;
                            if (e = zl, l.flags |= 32768, null !== c && "object" == typeof c && "function" == typeof c.then) {
                                var u = c, d = l, h = d.tag;
                                if (!(1 & d.mode || 0 !== h && 11 !== h && 15 !== h)) {
                                    var f = d.alternate;
                                    f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null)
                                }
                                var p = ms(s);
                                if (null !== p) {
                                    p.flags &= -257, Ms(p, s, l, 0, e), 1 & p.mode && gs(o, u, e), c = u;
                                    var g = (e = p).updateQueue;
                                    if (null === g) {
                                        var m = new Set;
                                        m.add(c), e.updateQueue = m
                                    } else g.add(c);
                                    break t
                                }
                                if (!(1 & e)) {
                                    gs(o, u, e), gc();
                                    break t
                                }
                                c = Error(a(426))
                            } else if (ra && 1 & l.mode) {
                                var M = ms(s);
                                if (null !== M) {
                                    !(65536 & M.flags) && (M.flags |= 256), Ms(M, s, l, 0, e), pa(cs(c, l));
                                    break t
                                }
                            }
                            o = c = cs(c, l), 4 !== _l && (_l = 2), null === Vl ? Vl = [o] : Vl.push(o), o = s;
                            do {
                                switch (o.tag) {
                                    case 3:
                                        o.flags |= 65536, e &= -e, o.lanes |= e, Pa(o, fs(0, c, e));
                                        break t;
                                    case 1:
                                        l = c;
                                        var y = o.type, b = o.stateNode;
                                        if (!(128 & o.flags || "function" != typeof y.getDerivedStateFromError && (null === b || "function" != typeof b.componentDidCatch || null !== Zl && Zl.has(b)))) {
                                            o.flags |= 65536, e &= -e, o.lanes |= e, Pa(o, ps(o, l, e));
                                            break t
                                        }
                                }
                                o = o.return
                            } while (null !== o)
                        }
                        xc(n)
                    } catch (t) {
                        e = t, Cl === n && null !== n && (Cl = n = n.return);
                        continue
                    }
                    break
                }
            }

            function pc() {
                var t = kl.current;
                return kl.current = Ko, null === t ? Ko : t
            }

            function gc() {
                0 !== _l && 3 !== _l && 2 !== _l || (_l = 4), null === El || !(268435455 & Ll) && !(268435455 & Ul) || sc(El, zl)
            }

            function mc(t, e) {
                var n = wl;
                wl |= 2;
                var i = pc();
                for (El === t && zl === e || (Ql = null, hc(t, e)); ;) try {
                    Mc();
                    break
                } catch (e) {
                    fc(t, e)
                }
                if (Ta(), wl = n, kl.current = i, null !== Cl) throw Error(a(261));
                return El = null, zl = 0, _l
            }

            function Mc() {
                for (; null !== Cl;) bc(Cl)
            }

            function yc() {
                for (; null !== Cl && !Jt();) bc(Cl)
            }

            function bc(t) {
                var e = Nl(t.alternate, t, jl);
                t.memoizedProps = t.pendingProps, null === e ? xc(t) : Cl = e, Tl.current = null
            }

            function xc(t) {
                var e = t;
                do {
                    var n = e.alternate;
                    if (t = e.return, 32768 & e.flags) {
                        if (null !== (n = Gs(n, e))) return n.flags &= 32767, void (Cl = n);
                        if (null === t) return _l = 6, void (Cl = null);
                        t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null
                    } else if (null !== (n = Hs(n, e, jl))) return void (Cl = n);
                    if (null !== (e = e.sibling)) return void (Cl = e);
                    Cl = e = t
                } while (null !== e);
                0 === _l && (_l = 5)
            }

            function Ac(t, e, n) {
                var i = be, r = Sl.transition;
                try {
                    Sl.transition = null, be = 1, function (t, e, n, i) {
                        do {
                            vc()
                        } while (null !== Gl);
                        if (6 & wl) throw Error(a(327));
                        n = t.finishedWork;
                        var r = t.finishedLanes;
                        if (null === n) return null;
                        if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(a(177));
                        t.callbackNode = null, t.callbackPriority = 0;
                        var o = n.lanes | n.childLanes;
                        if (function (t, e) {
                            var n = t.pendingLanes & ~e;
                            t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
                            var i = t.eventTimes;
                            for (t = t.expirationTimes; 0 < n;) {
                                var r = 31 - oe(n), a = 1 << r;
                                e[r] = 0, i[r] = -1, t[r] = -1, n &= ~a
                            }
                        }(t, o), t === El && (Cl = El = null, zl = 0), !(2064 & n.subtreeFlags) && !(2064 & n.flags) || Hl || (Hl = !0, Ec(ee, (function () {
                            return vc(), null
                        }))), o = !!(15990 & n.flags), 15990 & n.subtreeFlags || o) {
                            o = Sl.transition, Sl.transition = null;
                            var s = be;
                            be = 1;
                            var l = wl;
                            wl |= 4, Tl.current = null, function (t, e) {
                                if (tr = Ye, fi(t = hi())) {
                                    if ("selectionStart" in t) var n = {
                                        start: t.selectionStart,
                                        end: t.selectionEnd
                                    }; else t:{
                                        var i = (n = (n = t.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                        if (i && 0 !== i.rangeCount) {
                                            n = i.anchorNode;
                                            var r = i.anchorOffset, o = i.focusNode;
                                            i = i.focusOffset;
                                            try {
                                                n.nodeType, o.nodeType
                                            } catch (t) {
                                                n = null;
                                                break t
                                            }
                                            var s = 0, l = -1, c = -1, u = 0, d = 0, h = t, f = null;
                                            e:for (; ;) {
                                                for (var p; h !== n || 0 !== r && 3 !== h.nodeType || (l = s + r), h !== o || 0 !== i && 3 !== h.nodeType || (c = s + i), 3 === h.nodeType && (s += h.nodeValue.length), null !== (p = h.firstChild);) f = h, h = p;
                                                for (; ;) {
                                                    if (h === t) break e;
                                                    if (f === n && ++u === r && (l = s), f === o && ++d === i && (c = s), null !== (p = h.nextSibling)) break;
                                                    f = (h = f).parentNode
                                                }
                                                h = p
                                            }
                                            n = -1 === l || -1 === c ? null : {start: l, end: c}
                                        } else n = null
                                    }
                                    n = n || {start: 0, end: 0}
                                } else n = null;
                                for (er = {
                                    focusedElem: t,
                                    selectionRange: n
                                }, Ye = !1, Ks = e; null !== Ks;) if (t = (e = Ks).child, 1028 & e.subtreeFlags && null !== t) t.return = e, Ks = t; else for (; null !== Ks;) {
                                    e = Ks;
                                    try {
                                        var g = e.alternate;
                                        if (1024 & e.flags) switch (e.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                            case 5:
                                            case 6:
                                            case 4:
                                            case 17:
                                                break;
                                            case 1:
                                                if (null !== g) {
                                                    var m = g.memoizedProps, M = g.memoizedState, y = e.stateNode,
                                                        b = y.getSnapshotBeforeUpdate(e.elementType === e.type ? m : ns(e.type, m), M);
                                                    y.__reactInternalSnapshotBeforeUpdate = b
                                                }
                                                break;
                                            case 3:
                                                var x = e.stateNode.containerInfo;
                                                1 === x.nodeType ? x.textContent = "" : 9 === x.nodeType && x.documentElement && x.removeChild(x.documentElement);
                                                break;
                                            default:
                                                throw Error(a(163))
                                        }
                                    } catch (t) {
                                        Dc(e, e.return, t)
                                    }
                                    if (null !== (t = e.sibling)) {
                                        t.return = e.return, Ks = t;
                                        break
                                    }
                                    Ks = e.return
                                }
                                g = el, el = !1
                            }(t, n), ml(n, t), pi(er), Ye = !!tr, er = tr = null, t.current = n, yl(n, t, r), Xt(), wl = l, be = s, Sl.transition = o
                        } else t.current = n;
                        if (Hl && (Hl = !1, Gl = t, Jl = r), 0 === (o = t.pendingLanes) && (Zl = null), function (t) {
                            if (ae && "function" == typeof ae.onCommitFiberRoot) try {
                                ae.onCommitFiberRoot(re, t, void 0, !(128 & ~t.current.flags))
                            } catch (t) {
                            }
                        }(n.stateNode), ic(t, $t()), null !== e) for (i = t.onRecoverableError, n = 0; n < e.length; n++) i((r = e[n]).value, {
                            componentStack: r.stack,
                            digest: r.digest
                        });
                        if (Yl) throw Yl = !1, t = Bl, Bl = null, t;
                        !!(1 & Jl) && 0 !== t.tag && vc(), 1 & (o = t.pendingLanes) ? t === $l ? Xl++ : (Xl = 0, $l = t) : Xl = 0, Wr()
                    }(t, e, n, i)
                } finally {
                    Sl.transition = r, be = i
                }
                return null
            }

            function vc() {
                if (null !== Gl) {
                    var t = xe(Jl), e = Sl.transition, n = be;
                    try {
                        if (Sl.transition = null, be = 16 > t ? 16 : t, null === Gl) var i = !1; else {
                            if (t = Gl, Gl = null, Jl = 0, 6 & wl) throw Error(a(331));
                            var r = wl;
                            for (wl |= 4, Ks = t.current; null !== Ks;) {
                                var o = Ks, s = o.child;
                                if (16 & Ks.flags) {
                                    var l = o.deletions;
                                    if (null !== l) {
                                        for (var c = 0; c < l.length; c++) {
                                            var u = l[c];
                                            for (Ks = u; null !== Ks;) {
                                                var d = Ks;
                                                switch (d.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                        nl(8, d, o)
                                                }
                                                var h = d.child;
                                                if (null !== h) h.return = d, Ks = h; else for (; null !== Ks;) {
                                                    var f = (d = Ks).sibling, p = d.return;
                                                    if (al(d), d === u) {
                                                        Ks = null;
                                                        break
                                                    }
                                                    if (null !== f) {
                                                        f.return = p, Ks = f;
                                                        break
                                                    }
                                                    Ks = p
                                                }
                                            }
                                        }
                                        var g = o.alternate;
                                        if (null !== g) {
                                            var m = g.child;
                                            if (null !== m) {
                                                g.child = null;
                                                do {
                                                    var M = m.sibling;
                                                    m.sibling = null, m = M
                                                } while (null !== m)
                                            }
                                        }
                                        Ks = o
                                    }
                                }
                                if (2064 & o.subtreeFlags && null !== s) s.return = o, Ks = s; else t:for (; null !== Ks;) {
                                    if (2048 & (o = Ks).flags) switch (o.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            nl(9, o, o.return)
                                    }
                                    var y = o.sibling;
                                    if (null !== y) {
                                        y.return = o.return, Ks = y;
                                        break t
                                    }
                                    Ks = o.return
                                }
                            }
                            var b = t.current;
                            for (Ks = b; null !== Ks;) {
                                var x = (s = Ks).child;
                                if (2064 & s.subtreeFlags && null !== x) x.return = s, Ks = x; else t:for (s = b; null !== Ks;) {
                                    if (2048 & (l = Ks).flags) try {
                                        switch (l.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                il(9, l)
                                        }
                                    } catch (t) {
                                        Dc(l, l.return, t)
                                    }
                                    if (l === s) {
                                        Ks = null;
                                        break t
                                    }
                                    var A = l.sibling;
                                    if (null !== A) {
                                        A.return = l.return, Ks = A;
                                        break t
                                    }
                                    Ks = l.return
                                }
                            }
                            if (wl = r, Wr(), ae && "function" == typeof ae.onPostCommitFiberRoot) try {
                                ae.onPostCommitFiberRoot(re, t)
                            } catch (t) {
                            }
                            i = !0
                        }
                        return i
                    } finally {
                        be = n, Sl.transition = e
                    }
                }
                return !1
            }

            function Nc(t, e, n) {
                t = Va(t, e = fs(0, e = cs(n, e), 1), 1), e = tc(), null !== t && (Me(t, 1, e), ic(t, e))
            }

            function Dc(t, e, n) {
                if (3 === t.tag) Nc(t, t, n); else for (; null !== e;) {
                    if (3 === e.tag) {
                        Nc(e, t, n);
                        break
                    }
                    if (1 === e.tag) {
                        var i = e.stateNode;
                        if ("function" == typeof e.type.getDerivedStateFromError || "function" == typeof i.componentDidCatch && (null === Zl || !Zl.has(i))) {
                            e = Va(e, t = ps(e, t = cs(n, t), 1), 1), t = tc(), null !== e && (Me(e, 1, t), ic(e, t));
                            break
                        }
                    }
                    e = e.return
                }
            }

            function kc(t, e, n) {
                var i = t.pingCache;
                null !== i && i.delete(e), e = tc(), t.pingedLanes |= t.suspendedLanes & n, El === t && (zl & n) === n && (4 === _l || 3 === _l && (130023424 & zl) === zl && 500 > $t() - Pl ? hc(t, 0) : Rl |= n), ic(t, e)
            }

            function Tc(t, e) {
                0 === e && (1 & t.mode ? (e = ue, !(130023424 & (ue <<= 1)) && (ue = 4194304)) : e = 1);
                var n = tc();
                null !== (t = _a(t, e)) && (Me(t, e, n), ic(t, n))
            }

            function Sc(t) {
                var e = t.memoizedState, n = 0;
                null !== e && (n = e.retryLane), Tc(t, n)
            }

            function wc(t, e) {
                var n = 0;
                switch (t.tag) {
                    case 13:
                        var i = t.stateNode, r = t.memoizedState;
                        null !== r && (n = r.retryLane);
                        break;
                    case 19:
                        i = t.stateNode;
                        break;
                    default:
                        throw Error(a(314))
                }
                null !== i && i.delete(e), Tc(t, n)
            }

            function Ec(t, e) {
                return Ht(t, e)
            }

            function Cc(t, e, n, i) {
                this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function zc(t, e, n, i) {
                return new Cc(t, e, n, i)
            }

            function jc(t) {
                return !(!(t = t.prototype) || !t.isReactComponent)
            }

            function Ic(t, e) {
                var n = t.alternate;
                return null === n ? ((n = zc(t.tag, e, t.key, t.mode)).elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & t.flags, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = null === e ? null : {
                    lanes: e.lanes,
                    firstContext: e.firstContext
                }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n
            }

            function _c(t, e, n, i, r, o) {
                var s = 2;
                if (i = t, "function" == typeof t) jc(t) && (s = 1); else if ("string" == typeof t) s = 5; else t:switch (t) {
                    case N:
                        return Oc(n.children, r, o, e);
                    case D:
                        s = 8, r |= 8;
                        break;
                    case k:
                        return (t = zc(12, n, e, 2 | r)).elementType = k, t.lanes = o, t;
                    case E:
                        return (t = zc(13, n, e, r)).elementType = E, t.lanes = o, t;
                    case C:
                        return (t = zc(19, n, e, r)).elementType = C, t.lanes = o, t;
                    case I:
                        return Lc(n, r, o, e);
                    default:
                        if ("object" == typeof t && null !== t) switch (t.$$typeof) {
                            case T:
                                s = 10;
                                break t;
                            case S:
                                s = 9;
                                break t;
                            case w:
                                s = 11;
                                break t;
                            case z:
                                s = 14;
                                break t;
                            case j:
                                s = 16, i = null;
                                break t
                        }
                        throw Error(a(130, null == t ? t : typeof t, ""))
                }
                return (e = zc(s, n, e, r)).elementType = t, e.type = i, e.lanes = o, e
            }

            function Oc(t, e, n, i) {
                return (t = zc(7, t, i, e)).lanes = n, t
            }

            function Lc(t, e, n, i) {
                return (t = zc(22, t, i, e)).elementType = I, t.lanes = n, t.stateNode = {isHidden: !1}, t
            }

            function Uc(t, e, n) {
                return (t = zc(6, t, null, e)).lanes = n, t
            }

            function Rc(t, e, n) {
                return (e = zc(4, null !== t.children ? t.children : [], t.key, e)).lanes = n, e.stateNode = {
                    containerInfo: t.containerInfo,
                    pendingChildren: null,
                    implementation: t.implementation
                }, e
            }

            function Vc(t, e, n, i, r) {
                this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = me(0), this.expirationTimes = me(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = me(0), this.identifierPrefix = i, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null
            }

            function Fc(t, e, n, i, r, a, o, s, l) {
                return t = new Vc(t, e, n, s, l), 1 === e ? (e = 1, !0 === a && (e |= 8)) : e = 0, a = zc(3, null, null, e), t.current = a, a.stateNode = t, a.memoizedState = {
                    element: i,
                    isDehydrated: n,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                }, La(a), t
            }

            function Pc(t) {
                if (!t) return Sr;
                t:{
                    if (Wt(t = t._reactInternals) !== t || 1 !== t.tag) throw Error(a(170));
                    var e = t;
                    do {
                        switch (e.tag) {
                            case 3:
                                e = e.stateNode.context;
                                break t;
                            case 1:
                                if (jr(e.type)) {
                                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break t
                                }
                        }
                        e = e.return
                    } while (null !== e);
                    throw Error(a(171))
                }
                if (1 === t.tag) {
                    var n = t.type;
                    if (jr(n)) return Or(t, n, e)
                }
                return e
            }

            function Wc(t, e, n, i, r, a, o, s, l) {
                return (t = Fc(n, i, !0, t, 0, a, 0, s, l)).context = Pc(null), n = t.current, (a = Ra(i = tc(), r = ec(n))).callback = null != e ? e : null, Va(n, a, r), t.current.lanes = r, Me(t, r, i), ic(t, i), t
            }

            function Qc(t, e, n, i) {
                var r = e.current, a = tc(), o = ec(r);
                return n = Pc(n), null === e.context ? e.context = n : e.pendingContext = n, (e = Ra(a, o)).payload = {element: t}, null !== (i = void 0 === i ? null : i) && (e.callback = i), null !== (t = Va(r, e, o)) && (nc(t, r, o, a), Fa(t, r, o)), o
            }

            function Yc(t) {
                return (t = t.current).child ? (t.child.tag, t.child.stateNode) : null
            }

            function Bc(t, e) {
                if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
                    var n = t.retryLane;
                    t.retryLane = 0 !== n && n < e ? n : e
                }
            }

            function Zc(t, e) {
                Bc(t, e), (t = t.alternate) && Bc(t, e)
            }

            Nl = function (t, e, n) {
                if (null !== t) if (t.memoizedProps !== e.pendingProps || Er.current) bs = !0; else {
                    if (!(t.lanes & n || 128 & e.flags)) return bs = !1, function (t, e, n) {
                        switch (e.tag) {
                            case 3:
                                Es(e), fa();
                                break;
                            case 5:
                                $a(e);
                                break;
                            case 1:
                                jr(e.type) && Lr(e);
                                break;
                            case 4:
                                Ja(e, e.stateNode.containerInfo);
                                break;
                            case 10:
                                var i = e.type._context, r = e.memoizedProps.value;
                                Tr(va, i._currentValue), i._currentValue = r;
                                break;
                            case 13:
                                if (null !== (i = e.memoizedState)) return null !== i.dehydrated ? (Tr(qa, 1 & qa.current), e.flags |= 128, null) : n & e.child.childLanes ? Us(t, e, n) : (Tr(qa, 1 & qa.current), null !== (t = Ys(t, e, n)) ? t.sibling : null);
                                Tr(qa, 1 & qa.current);
                                break;
                            case 19:
                                if (i = !!(n & e.childLanes), 128 & t.flags) {
                                    if (i) return Ws(t, e, n);
                                    e.flags |= 128
                                }
                                if (null !== (r = e.memoizedState) && (r.rendering = null, r.tail = null, r.lastEffect = null), Tr(qa, qa.current), i) break;
                                return null;
                            case 22:
                            case 23:
                                return e.lanes = 0, Ds(t, e, n)
                        }
                        return Ys(t, e, n)
                    }(t, e, n);
                    bs = !!(131072 & t.flags)
                } else bs = !1, ra && 1048576 & e.flags && qr(e, Zr, e.index);
                switch (e.lanes = 0, e.tag) {
                    case 2:
                        var i = e.type;
                        Qs(t, e), t = e.pendingProps;
                        var r = zr(e, wr.current);
                        Ea(e, n), r = mo(null, e, i, t, r, n);
                        var o = Mo();
                        return e.flags |= 1, "object" == typeof r && null !== r && "function" == typeof r.render && void 0 === r.$$typeof ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, jr(i) ? (o = !0, Lr(e)) : o = !1, e.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null, La(e), r.updater = rs, e.stateNode = r, r._reactInternals = e, ls(e, i, t, n), e = ws(null, e, i, !0, o, n)) : (e.tag = 0, ra && o && ta(e), xs(null, e, r, n), e = e.child), e;
                    case 16:
                        i = e.elementType;
                        t:{
                            switch (Qs(t, e), t = e.pendingProps, i = (r = i._init)(i._payload), e.type = i, r = e.tag = function (t) {
                                if ("function" == typeof t) return jc(t) ? 1 : 0;
                                if (null != t) {
                                    if ((t = t.$$typeof) === w) return 11;
                                    if (t === z) return 14
                                }
                                return 2
                            }(i), t = ns(i, t), r) {
                                case 0:
                                    e = Ts(null, e, i, t, n);
                                    break t;
                                case 1:
                                    e = Ss(null, e, i, t, n);
                                    break t;
                                case 11:
                                    e = As(null, e, i, t, n);
                                    break t;
                                case 14:
                                    e = vs(null, e, i, ns(i.type, t), n);
                                    break t
                            }
                            throw Error(a(306, i, ""))
                        }
                        return e;
                    case 0:
                        return i = e.type, r = e.pendingProps, Ts(t, e, i, r = e.elementType === i ? r : ns(i, r), n);
                    case 1:
                        return i = e.type, r = e.pendingProps, Ss(t, e, i, r = e.elementType === i ? r : ns(i, r), n);
                    case 3:
                        t:{
                            if (Es(e), null === t) throw Error(a(387));
                            i = e.pendingProps, r = (o = e.memoizedState).element, Ua(t, e), Wa(e, i, null, n);
                            var s = e.memoizedState;
                            if (i = s.element, o.isDehydrated) {
                                if (o = {
                                    element: i,
                                    isDehydrated: !1,
                                    cache: s.cache,
                                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                                    transitions: s.transitions
                                }, e.updateQueue.baseState = o, e.memoizedState = o, 256 & e.flags) {
                                    e = Cs(t, e, i, n, r = cs(Error(a(423)), e));
                                    break t
                                }
                                if (i !== r) {
                                    e = Cs(t, e, i, n, r = cs(Error(a(424)), e));
                                    break t
                                }
                                for (ia = cr(e.stateNode.containerInfo.firstChild), na = e, ra = !0, aa = null, n = Aa(e, null, i, n), e.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                            } else {
                                if (fa(), i === r) {
                                    e = Ys(t, e, n);
                                    break t
                                }
                                xs(t, e, i, n)
                            }
                            e = e.child
                        }
                        return e;
                    case 5:
                        return $a(e), null === t && ca(e), i = e.type, r = e.pendingProps, o = null !== t ? t.memoizedProps : null, s = r.children, nr(i, r) ? s = null : null !== o && nr(i, o) && (e.flags |= 32), ks(t, e), xs(t, e, s, n), e.child;
                    case 6:
                        return null === t && ca(e), null;
                    case 13:
                        return Us(t, e, n);
                    case 4:
                        return Ja(e, e.stateNode.containerInfo), i = e.pendingProps, null === t ? e.child = xa(e, null, i, n) : xs(t, e, i, n), e.child;
                    case 11:
                        return i = e.type, r = e.pendingProps, As(t, e, i, r = e.elementType === i ? r : ns(i, r), n);
                    case 7:
                        return xs(t, e, e.pendingProps, n), e.child;
                    case 8:
                    case 12:
                        return xs(t, e, e.pendingProps.children, n), e.child;
                    case 10:
                        t:{
                            if (i = e.type._context, r = e.pendingProps, o = e.memoizedProps, s = r.value, Tr(va, i._currentValue), i._currentValue = s, null !== o) if (si(o.value, s)) {
                                if (o.children === r.children && !Er.current) {
                                    e = Ys(t, e, n);
                                    break t
                                }
                            } else for (null !== (o = e.child) && (o.return = e); null !== o;) {
                                var l = o.dependencies;
                                if (null !== l) {
                                    s = o.child;
                                    for (var c = l.firstContext; null !== c;) {
                                        if (c.context === i) {
                                            if (1 === o.tag) {
                                                (c = Ra(-1, n & -n)).tag = 2;
                                                var u = o.updateQueue;
                                                if (null !== u) {
                                                    var d = (u = u.shared).pending;
                                                    null === d ? c.next = c : (c.next = d.next, d.next = c), u.pending = c
                                                }
                                            }
                                            o.lanes |= n, null !== (c = o.alternate) && (c.lanes |= n), wa(o.return, n, e), l.lanes |= n;
                                            break
                                        }
                                        c = c.next
                                    }
                                } else if (10 === o.tag) s = o.type === e.type ? null : o.child; else if (18 === o.tag) {
                                    if (null === (s = o.return)) throw Error(a(341));
                                    s.lanes |= n, null !== (l = s.alternate) && (l.lanes |= n), wa(s, n, e), s = o.sibling
                                } else s = o.child;
                                if (null !== s) s.return = o; else for (s = o; null !== s;) {
                                    if (s === e) {
                                        s = null;
                                        break
                                    }
                                    if (null !== (o = s.sibling)) {
                                        o.return = s.return, s = o;
                                        break
                                    }
                                    s = s.return
                                }
                                o = s
                            }
                            xs(t, e, r.children, n), e = e.child
                        }
                        return e;
                    case 9:
                        return r = e.type, i = e.pendingProps.children, Ea(e, n), i = i(r = Ca(r)), e.flags |= 1, xs(t, e, i, n), e.child;
                    case 14:
                        return r = ns(i = e.type, e.pendingProps), vs(t, e, i, r = ns(i.type, r), n);
                    case 15:
                        return Ns(t, e, e.type, e.pendingProps, n);
                    case 17:
                        return i = e.type, r = e.pendingProps, r = e.elementType === i ? r : ns(i, r), Qs(t, e), e.tag = 1, jr(i) ? (t = !0, Lr(e)) : t = !1, Ea(e, n), os(e, i, r), ls(e, i, r, n), ws(null, e, i, !0, t, n);
                    case 19:
                        return Ws(t, e, n);
                    case 22:
                        return Ds(t, e, n)
                }
                throw Error(a(156, e.tag))
            };
            var Hc = "function" == typeof reportError ? reportError : function (t) {
                console.error(t)
            };

            function Gc(t) {
                this._internalRoot = t
            }

            function Jc(t) {
                this._internalRoot = t
            }

            function Xc(t) {
                return !(!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            }

            function $c(t) {
                return !(!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType && (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue))
            }

            function Kc() {
            }

            function qc(t, e, n, i, r) {
                var a = n._reactRootContainer;
                if (a) {
                    var o = a;
                    if ("function" == typeof r) {
                        var s = r;
                        r = function () {
                            var t = Yc(o);
                            s.call(t)
                        }
                    }
                    Qc(e, o, t, r)
                } else o = function (t, e, n, i, r) {
                    if (r) {
                        if ("function" == typeof i) {
                            var a = i;
                            i = function () {
                                var t = Yc(o);
                                a.call(t)
                            }
                        }
                        var o = Wc(e, i, t, 0, null, !1, 0, "", Kc);
                        return t._reactRootContainer = o, t[pr] = o.current, Wi(8 === t.nodeType ? t.parentNode : t), uc(), o
                    }
                    for (; r = t.lastChild;) t.removeChild(r);
                    if ("function" == typeof i) {
                        var s = i;
                        i = function () {
                            var t = Yc(l);
                            s.call(t)
                        }
                    }
                    var l = Fc(t, 0, !1, null, 0, !1, 0, "", Kc);
                    return t._reactRootContainer = l, t[pr] = l.current, Wi(8 === t.nodeType ? t.parentNode : t), uc((function () {
                        Qc(e, l, n, i)
                    })), l
                }(n, e, t, r, i);
                return Yc(o)
            }

            Jc.prototype.render = Gc.prototype.render = function (t) {
                var e = this._internalRoot;
                if (null === e) throw Error(a(409));
                Qc(t, e, null, null)
            }, Jc.prototype.unmount = Gc.prototype.unmount = function () {
                var t = this._internalRoot;
                if (null !== t) {
                    this._internalRoot = null;
                    var e = t.containerInfo;
                    uc((function () {
                        Qc(null, t, null, null)
                    })), e[pr] = null
                }
            }, Jc.prototype.unstable_scheduleHydration = function (t) {
                if (t) {
                    var e = De();
                    t = {blockedOn: null, target: t, priority: e};
                    for (var n = 0; n < Ie.length && 0 !== e && e < Ie[n].priority; n++) ;
                    Ie.splice(n, 0, t), 0 === n && Ue(t)
                }
            }, Ae = function (t) {
                switch (t.tag) {
                    case 3:
                        var e = t.stateNode;
                        if (e.current.memoizedState.isDehydrated) {
                            var n = de(e.pendingLanes);
                            0 !== n && (ye(e, 1 | n), ic(e, $t()), !(6 & wl) && (Wl = $t() + 500, Wr()))
                        }
                        break;
                    case 13:
                        uc((function () {
                            var e = _a(t, 1);
                            if (null !== e) {
                                var n = tc();
                                nc(e, t, 1, n)
                            }
                        })), Zc(t, 1)
                }
            }, ve = function (t) {
                if (13 === t.tag) {
                    var e = _a(t, 134217728);
                    null !== e && nc(e, t, 134217728, tc()), Zc(t, 134217728)
                }
            }, Ne = function (t) {
                if (13 === t.tag) {
                    var e = ec(t), n = _a(t, e);
                    null !== n && nc(n, t, e, tc()), Zc(t, e)
                }
            }, De = function () {
                return be
            }, ke = function (t, e) {
                var n = be;
                try {
                    return be = t, e()
                } finally {
                    be = n
                }
            }, vt = function (t, e, n) {
                switch (e) {
                    case"input":
                        if (K(t, n), e = n.name, "radio" === n.type && null != e) {
                            for (n = t; n.parentNode;) n = n.parentNode;
                            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
                                var i = n[e];
                                if (i !== t && i.form === t.form) {
                                    var r = Ar(i);
                                    if (!r) throw Error(a(90));
                                    H(i), K(i, r)
                                }
                            }
                        }
                        break;
                    case"textarea":
                        at(t, n);
                        break;
                    case"select":
                        null != (e = n.value) && nt(t, !!n.multiple, e, !1)
                }
            }, wt = cc, Et = uc;
            var tu = {usingClientEntryPoint: !1, Events: [br, xr, Ar, Tt, St, cc]},
                eu = {findFiberByHostInstance: yr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom"},
                nu = {
                    bundleType: eu.bundleType,
                    version: eu.version,
                    rendererPackageName: eu.rendererPackageName,
                    rendererConfig: eu.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setErrorHandler: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: x.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function (t) {
                        return null === (t = Bt(t)) ? null : t.stateNode
                    },
                    findFiberByHostInstance: eu.findFiberByHostInstance || function () {
                        return null
                    },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null,
                    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
                };
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!iu.isDisabled && iu.supportsFiber) try {
                    re = iu.inject(nu), ae = iu
                } catch (ut) {
                }
            }
            e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu, e.createPortal = function (t, e) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Xc(e)) throw Error(a(200));
                return function (t, e, n) {
                    var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: v,
                        key: null == i ? null : "" + i,
                        children: t,
                        containerInfo: e,
                        implementation: n
                    }
                }(t, e, null, n)
            }, e.createRoot = function (t, e) {
                if (!Xc(t)) throw Error(a(299));
                var n = !1, i = "", r = Hc;
                return null != e && (!0 === e.unstable_strictMode && (n = !0), void 0 !== e.identifierPrefix && (i = e.identifierPrefix), void 0 !== e.onRecoverableError && (r = e.onRecoverableError)), e = Fc(t, 1, !1, null, 0, n, 0, i, r), t[pr] = e.current, Wi(8 === t.nodeType ? t.parentNode : t), new Gc(e)
            }, e.findDOMNode = function (t) {
                if (null == t) return null;
                if (1 === t.nodeType) return t;
                var e = t._reactInternals;
                if (void 0 === e) {
                    if ("function" == typeof t.render) throw Error(a(188));
                    throw t = Object.keys(t).join(","), Error(a(268, t))
                }
                return null === (t = Bt(e)) ? null : t.stateNode
            }, e.flushSync = function (t) {
                return uc(t)
            }, e.hydrate = function (t, e, n) {
                if (!$c(e)) throw Error(a(200));
                return qc(null, t, e, !0, n)
            }, e.hydrateRoot = function (t, e, n) {
                if (!Xc(t)) throw Error(a(405));
                var i = null != n && n.hydratedSources || null, r = !1, o = "", s = Hc;
                if (null != n && (!0 === n.unstable_strictMode && (r = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onRecoverableError && (s = n.onRecoverableError)), e = Wc(e, null, t, 1, null != n ? n : null, r, 0, o, s), t[pr] = e.current, Wi(t), i) for (t = 0; t < i.length; t++) r = (r = (n = i[t])._getVersion)(n._source), null == e.mutableSourceEagerHydrationData ? e.mutableSourceEagerHydrationData = [n, r] : e.mutableSourceEagerHydrationData.push(n, r);
                return new Jc(e)
            }, e.render = function (t, e, n) {
                if (!$c(e)) throw Error(a(200));
                return qc(null, t, e, !1, n)
            }, e.unmountComponentAtNode = function (t) {
                if (!$c(t)) throw Error(a(40));
                return !!t._reactRootContainer && (uc((function () {
                    qc(null, null, t, !1, (function () {
                        t._reactRootContainer = null, t[pr] = null
                    }))
                })), !0)
            }, e.unstable_batchedUpdates = cc, e.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
                if (!$c(n)) throw Error(a(200));
                if (null == t || void 0 === t._reactInternals) throw Error(a(38));
                return qc(t, e, n, !1, i)
            }, e.version = "18.3.1-next-f1338f8080-20240426"
        }, 470: (t, e, n) => {
            var i = n(325);
            e.createRoot = i.createRoot, e.hydrateRoot = i.hydrateRoot
        }, 325: (t, e, n) => {
            !function t() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
                } catch (t) {
                    console.error(t)
                }
            }(), t.exports = n(67)
        }, 403: (t, e) => {
            var n = Symbol.for("react.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"),
                a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"),
                l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"),
                d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), f = Symbol.iterator, p = {
                    isMounted: function () {
                        return !1
                    }, enqueueForceUpdate: function () {
                    }, enqueueReplaceState: function () {
                    }, enqueueSetState: function () {
                    }
                }, g = Object.assign, m = {};

            function M(t, e, n) {
                this.props = t, this.context = e, this.refs = m, this.updater = n || p
            }

            function y() {
            }

            function b(t, e, n) {
                this.props = t, this.context = e, this.refs = m, this.updater = n || p
            }

            M.prototype.isReactComponent = {}, M.prototype.setState = function (t, e) {
                if ("object" != typeof t && "function" != typeof t && null != t) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, t, e, "setState")
            }, M.prototype.forceUpdate = function (t) {
                this.updater.enqueueForceUpdate(this, t, "forceUpdate")
            }, y.prototype = M.prototype;
            var x = b.prototype = new y;
            x.constructor = b, g(x, M.prototype), x.isPureReactComponent = !0;
            var A = Array.isArray, v = Object.prototype.hasOwnProperty, N = {current: null},
                D = {key: !0, ref: !0, __self: !0, __source: !0};

            function k(t, e, i) {
                var r, a = {}, o = null, s = null;
                if (null != e) for (r in void 0 !== e.ref && (s = e.ref), void 0 !== e.key && (o = "" + e.key), e) v.call(e, r) && !D.hasOwnProperty(r) && (a[r] = e[r]);
                var l = arguments.length - 2;
                if (1 === l) a.children = i; else if (1 < l) {
                    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
                    a.children = c
                }
                if (t && t.defaultProps) for (r in l = t.defaultProps) void 0 === a[r] && (a[r] = l[r]);
                return {$$typeof: n, type: t, key: o, ref: s, props: a, _owner: N.current}
            }

            function T(t) {
                return "object" == typeof t && null !== t && t.$$typeof === n
            }

            var S = /\/+/g;

            function w(t, e) {
                return "object" == typeof t && null !== t && null != t.key ? function (t) {
                    var e = {"=": "=0", ":": "=2"};
                    return "$" + t.replace(/[=:]/g, (function (t) {
                        return e[t]
                    }))
                }("" + t.key) : e.toString(36)
            }

            function E(t, e, r, a, o) {
                var s = typeof t;
                "undefined" !== s && "boolean" !== s || (t = null);
                var l = !1;
                if (null === t) l = !0; else switch (s) {
                    case"string":
                    case"number":
                        l = !0;
                        break;
                    case"object":
                        switch (t.$$typeof) {
                            case n:
                            case i:
                                l = !0
                        }
                }
                if (l) return o = o(l = t), t = "" === a ? "." + w(l, 0) : a, A(o) ? (r = "", null != t && (r = t.replace(S, "$&/") + "/"), E(o, e, r, "", (function (t) {
                    return t
                }))) : null != o && (T(o) && (o = function (t, e) {
                    return {$$typeof: n, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner}
                }(o, r + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(S, "$&/") + "/") + t)), e.push(o)), 1;
                if (l = 0, a = "" === a ? "." : a + ":", A(t)) for (var c = 0; c < t.length; c++) {
                    var u = a + w(s = t[c], c);
                    l += E(s, e, r, u, o)
                } else if (u = function (t) {
                    return null === t || "object" != typeof t ? null : "function" == typeof (t = f && t[f] || t["@@iterator"]) ? t : null
                }(t), "function" == typeof u) for (t = u.call(t), c = 0; !(s = t.next()).done;) l += E(s = s.value, e, r, u = a + w(s, c++), o); else if ("object" === s) throw e = String(t), Error("Objects are not valid as a React child (found: " + ("[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
                return l
            }

            function C(t, e, n) {
                if (null == t) return t;
                var i = [], r = 0;
                return E(t, i, "", "", (function (t) {
                    return e.call(n, t, r++)
                })), i
            }

            function z(t) {
                if (-1 === t._status) {
                    var e = t._result;
                    (e = e()).then((function (e) {
                        0 !== t._status && -1 !== t._status || (t._status = 1, t._result = e)
                    }), (function (e) {
                        0 !== t._status && -1 !== t._status || (t._status = 2, t._result = e)
                    })), -1 === t._status && (t._status = 0, t._result = e)
                }
                if (1 === t._status) return t._result.default;
                throw t._result
            }

            var j = {current: null}, I = {transition: null},
                _ = {ReactCurrentDispatcher: j, ReactCurrentBatchConfig: I, ReactCurrentOwner: N};

            function O() {
                throw Error("act(...) is not supported in production builds of React.")
            }

            e.Children = {
                map: C, forEach: function (t, e, n) {
                    C(t, (function () {
                        e.apply(this, arguments)
                    }), n)
                }, count: function (t) {
                    var e = 0;
                    return C(t, (function () {
                        e++
                    })), e
                }, toArray: function (t) {
                    return C(t, (function (t) {
                        return t
                    })) || []
                }, only: function (t) {
                    if (!T(t)) throw Error("React.Children.only expected to receive a single React element child.");
                    return t
                }
            }, e.Component = M, e.Fragment = r, e.Profiler = o, e.PureComponent = b, e.StrictMode = a, e.Suspense = u, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _, e.act = O, e.cloneElement = function (t, e, i) {
                if (null == t) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
                var r = g({}, t.props), a = t.key, o = t.ref, s = t._owner;
                if (null != e) {
                    if (void 0 !== e.ref && (o = e.ref, s = N.current), void 0 !== e.key && (a = "" + e.key), t.type && t.type.defaultProps) var l = t.type.defaultProps;
                    for (c in e) v.call(e, c) && !D.hasOwnProperty(c) && (r[c] = void 0 === e[c] && void 0 !== l ? l[c] : e[c])
                }
                var c = arguments.length - 2;
                if (1 === c) r.children = i; else if (1 < c) {
                    l = Array(c);
                    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
                    r.children = l
                }
                return {$$typeof: n, type: t.type, key: a, ref: o, props: r, _owner: s}
            }, e.createContext = function (t) {
                return (t = {
                    $$typeof: l,
                    _currentValue: t,
                    _currentValue2: t,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {$$typeof: s, _context: t}, t.Consumer = t
            }, e.createElement = k, e.createFactory = function (t) {
                var e = k.bind(null, t);
                return e.type = t, e
            }, e.createRef = function () {
                return {current: null}
            }, e.forwardRef = function (t) {
                return {$$typeof: c, render: t}
            }, e.isValidElement = T, e.lazy = function (t) {
                return {$$typeof: h, _payload: {_status: -1, _result: t}, _init: z}
            }, e.memo = function (t, e) {
                return {$$typeof: d, type: t, compare: void 0 === e ? null : e}
            }, e.startTransition = function (t) {
                var e = I.transition;
                I.transition = {};
                try {
                    t()
                } finally {
                    I.transition = e
                }
            }, e.unstable_act = O, e.useCallback = function (t, e) {
                return j.current.useCallback(t, e)
            }, e.useContext = function (t) {
                return j.current.useContext(t)
            }, e.useDebugValue = function () {
            }, e.useDeferredValue = function (t) {
                return j.current.useDeferredValue(t)
            }, e.useEffect = function (t, e) {
                return j.current.useEffect(t, e)
            }, e.useId = function () {
                return j.current.useId()
            }, e.useImperativeHandle = function (t, e, n) {
                return j.current.useImperativeHandle(t, e, n)
            }, e.useInsertionEffect = function (t, e) {
                return j.current.useInsertionEffect(t, e)
            }, e.useLayoutEffect = function (t, e) {
                return j.current.useLayoutEffect(t, e)
            }, e.useMemo = function (t, e) {
                return j.current.useMemo(t, e)
            }, e.useReducer = function (t, e, n) {
                return j.current.useReducer(t, e, n)
            }, e.useRef = function (t) {
                return j.current.useRef(t)
            }, e.useState = function (t) {
                return j.current.useState(t)
            }, e.useSyncExternalStore = function (t, e, n) {
                return j.current.useSyncExternalStore(t, e, n)
            }, e.useTransition = function () {
                return j.current.useTransition()
            }, e.version = "18.3.1"
        }, 696: (t, e, n) => {
            t.exports = n(403)
        }, 699: (t, e) => {
            function n(t, e) {
                var n = t.length;
                t.push(e);
                t:for (; 0 < n;) {
                    var i = n - 1 >>> 1, r = t[i];
                    if (!(0 < a(r, e))) break t;
                    t[i] = e, t[n] = r, n = i
                }
            }

            function i(t) {
                return 0 === t.length ? null : t[0]
            }

            function r(t) {
                if (0 === t.length) return null;
                var e = t[0], n = t.pop();
                if (n !== e) {
                    t[0] = n;
                    t:for (var i = 0, r = t.length, o = r >>> 1; i < o;) {
                        var s = 2 * (i + 1) - 1, l = t[s], c = s + 1, u = t[c];
                        if (0 > a(l, n)) c < r && 0 > a(u, l) ? (t[i] = u, t[c] = n, i = c) : (t[i] = l, t[s] = n, i = s); else {
                            if (!(c < r && 0 > a(u, n))) break t;
                            t[i] = u, t[c] = n, i = c
                        }
                    }
                }
                return e
            }

            function a(t, e) {
                var n = t.sortIndex - e.sortIndex;
                return 0 !== n ? n : t.id - e.id
            }

            if ("object" == typeof performance && "function" == typeof performance.now) {
                var o = performance;
                e.unstable_now = function () {
                    return o.now()
                }
            } else {
                var s = Date, l = s.now();
                e.unstable_now = function () {
                    return s.now() - l
                }
            }
            var c = [], u = [], d = 1, h = null, f = 3, p = !1, g = !1, m = !1,
                M = "function" == typeof setTimeout ? setTimeout : null,
                y = "function" == typeof clearTimeout ? clearTimeout : null,
                b = "undefined" != typeof setImmediate ? setImmediate : null;

            function x(t) {
                for (var e = i(u); null !== e;) {
                    if (null === e.callback) r(u); else {
                        if (!(e.startTime <= t)) break;
                        r(u), e.sortIndex = e.expirationTime, n(c, e)
                    }
                    e = i(u)
                }
            }

            function A(t) {
                if (m = !1, x(t), !g) if (null !== i(c)) g = !0, I(v); else {
                    var e = i(u);
                    null !== e && _(A, e.startTime - t)
                }
            }

            function v(t, n) {
                g = !1, m && (m = !1, y(T), T = -1), p = !0;
                var a = f;
                try {
                    for (x(n), h = i(c); null !== h && (!(h.expirationTime > n) || t && !E());) {
                        var o = h.callback;
                        if ("function" == typeof o) {
                            h.callback = null, f = h.priorityLevel;
                            var s = o(h.expirationTime <= n);
                            n = e.unstable_now(), "function" == typeof s ? h.callback = s : h === i(c) && r(c), x(n)
                        } else r(c);
                        h = i(c)
                    }
                    if (null !== h) var l = !0; else {
                        var d = i(u);
                        null !== d && _(A, d.startTime - n), l = !1
                    }
                    return l
                } finally {
                    h = null, f = a, p = !1
                }
            }

            "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var N, D = !1, k = null, T = -1, S = 5, w = -1;

            function E() {
                return !(e.unstable_now() - w < S)
            }

            function C() {
                if (null !== k) {
                    var t = e.unstable_now();
                    w = t;
                    var n = !0;
                    try {
                        n = k(!0, t)
                    } finally {
                        n ? N() : (D = !1, k = null)
                    }
                } else D = !1
            }

            if ("function" == typeof b) N = function () {
                b(C)
            }; else if ("undefined" != typeof MessageChannel) {
                var z = new MessageChannel, j = z.port2;
                z.port1.onmessage = C, N = function () {
                    j.postMessage(null)
                }
            } else N = function () {
                M(C, 0)
            };

            function I(t) {
                k = t, D || (D = !0, N())
            }

            function _(t, n) {
                T = M((function () {
                    t(e.unstable_now())
                }), n)
            }

            e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (t) {
                t.callback = null
            }, e.unstable_continueExecution = function () {
                g || p || (g = !0, I(v))
            }, e.unstable_forceFrameRate = function (t) {
                0 > t || 125 < t ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : S = 0 < t ? Math.floor(1e3 / t) : 5
            }, e.unstable_getCurrentPriorityLevel = function () {
                return f
            }, e.unstable_getFirstCallbackNode = function () {
                return i(c)
            }, e.unstable_next = function (t) {
                switch (f) {
                    case 1:
                    case 2:
                    case 3:
                        var e = 3;
                        break;
                    default:
                        e = f
                }
                var n = f;
                f = e;
                try {
                    return t()
                } finally {
                    f = n
                }
            }, e.unstable_pauseExecution = function () {
            }, e.unstable_requestPaint = function () {
            }, e.unstable_runWithPriority = function (t, e) {
                switch (t) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        t = 3
                }
                var n = f;
                f = t;
                try {
                    return e()
                } finally {
                    f = n
                }
            }, e.unstable_scheduleCallback = function (t, r, a) {
                var o = e.unstable_now();
                switch (a = "object" == typeof a && null !== a && "number" == typeof (a = a.delay) && 0 < a ? o + a : o, t) {
                    case 1:
                        var s = -1;
                        break;
                    case 2:
                        s = 250;
                        break;
                    case 5:
                        s = 1073741823;
                        break;
                    case 4:
                        s = 1e4;
                        break;
                    default:
                        s = 5e3
                }
                return t = {
                    id: d++,
                    callback: r,
                    priorityLevel: t,
                    startTime: a,
                    expirationTime: s = a + s,
                    sortIndex: -1
                }, a > o ? (t.sortIndex = a, n(u, t), null === i(c) && t === i(u) && (m ? (y(T), T = -1) : m = !0, _(A, a - o))) : (t.sortIndex = s, n(c, t), g || p || (g = !0, I(v))), t
            }, e.unstable_shouldYield = E, e.unstable_wrapCallback = function (t) {
                var e = f;
                return function () {
                    var n = f;
                    f = e;
                    try {
                        return t.apply(this, arguments)
                    } finally {
                        f = n
                    }
                }
            }
        }, 434: (t, e, n) => {
            t.exports = n(699)
        }, 292: t => {
            var e = [];

            function n(t) {
                for (var n = -1, i = 0; i < e.length; i++) if (e[i].identifier === t) {
                    n = i;
                    break
                }
                return n
            }

            function i(t, i) {
                for (var a = {}, o = [], s = 0; s < t.length; s++) {
                    var l = t[s], c = i.base ? l[0] + i.base : l[0], u = a[c] || 0, d = "".concat(c, " ").concat(u);
                    a[c] = u + 1;
                    var h = n(d), f = {css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5]};
                    if (-1 !== h) e[h].references++, e[h].updater(f); else {
                        var p = r(f, i);
                        i.byIndex = s, e.splice(s, 0, {identifier: d, updater: p, references: 1})
                    }
                    o.push(d)
                }
                return o
            }

            function r(t, e) {
                var n = e.domAPI(e);
                return n.update(t), function (e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer) return;
                        n.update(t = e)
                    } else n.remove()
                }
            }

            t.exports = function (t, r) {
                var a = i(t = t || [], r = r || {});
                return function (t) {
                    t = t || [];
                    for (var o = 0; o < a.length; o++) {
                        var s = n(a[o]);
                        e[s].references--
                    }
                    for (var l = i(t, r), c = 0; c < a.length; c++) {
                        var u = n(a[c]);
                        0 === e[u].references && (e[u].updater(), e.splice(u, 1))
                    }
                    a = l
                }
            }
        }, 383: t => {
            var e = {};
            t.exports = function (t, n) {
                var i = function (t) {
                    if (void 0 === e[t]) {
                        var n = document.querySelector(t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head
                        } catch (t) {
                            n = null
                        }
                        e[t] = n
                    }
                    return e[t]
                }(t);
                if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                i.appendChild(n)
            }
        }, 88: t => {
            t.exports = function (t) {
                var e = document.createElement("style");
                return t.setAttributes(e, t.attributes), t.insert(e, t.options), e
            }
        }, 884: (t, e, n) => {
            t.exports = function (t) {
                var e = n.nc;
                e && t.setAttribute("nonce", e)
            }
        }, 893: t => {
            t.exports = function (t) {
                if ("undefined" == typeof document) return {
                    update: function () {
                    }, remove: function () {
                    }
                };
                var e = t.insertStyleElement(t);
                return {
                    update: function (n) {
                        !function (t, e, n) {
                            var i = "";
                            n.supports && (i += "@supports (".concat(n.supports, ") {")), n.media && (i += "@media ".concat(n.media, " {"));
                            var r = void 0 !== n.layer;
                            r && (i += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), i += n.css, r && (i += "}"), n.media && (i += "}"), n.supports && (i += "}");
                            var a = n.sourceMap;
                            a && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleTagTransform(i, t, e.options)
                        }(e, t, n)
                    }, remove: function () {
                        !function (t) {
                            if (null === t.parentNode) return !1;
                            t.parentNode.removeChild(t)
                        }(e)
                    }
                }
            }
        }, 997: t => {
            t.exports = function (t, e) {
                if (e.styleSheet) e.styleSheet.cssText = t; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(t))
                }
            }
        }
    }, i = {};

    function r(t) {
        var e = i[t];
        if (void 0 !== e) return e.exports;
        var a = i[t] = {id: t, exports: {}};
        return n[t](a, a.exports, r), a.exports
    }

    r.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return r.d(e, {a: e}), e
    }, e = Object.getPrototypeOf ? t => Object.getPrototypeOf(t) : t => t.__proto__, r.t = function (n, i) {
        if (1 & i && (n = this(n)), 8 & i) return n;
        if ("object" == typeof n && n) {
            if (4 & i && n.__esModule) return n;
            if (16 & i && "function" == typeof n.then) return n
        }
        var a = Object.create(null);
        r.r(a);
        var o = {};
        t = t || [null, e({}), e([]), e(e)];
        for (var s = 2 & i && n; "object" == typeof s && !~t.indexOf(s); s = e(s)) Object.getOwnPropertyNames(s).forEach((t => o[t] = () => n[t]));
        return o.default = () => n, r.d(a, o), a
    }, r.d = (t, e) => {
        for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {enumerable: !0, get: e[n]})
    }, r.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), r.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, (() => {
        var t;
        r.g.importScripts && (t = r.g.location + "");
        var e = r.g.document;
        if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
            var n = e.getElementsByTagName("script");
            if (n.length) for (var i = n.length - 1; i > -1 && (!t || !/^http(s?):/.test(t));) t = n[i--].src
        }
        if (!t) throw new Error("Automatic publicPath is not supported in this browser");
        t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = t + "../"
    })(), r.nc = void 0;
    var a = r(696), o = r.t(a, 2), s = r(470), l = r(292), c = r.n(l), u = r(893), d = r.n(u), h = r(383), f = r.n(h),
        p = r(884), g = r.n(p), m = r(88), M = r.n(m), y = r(997), b = r.n(y), x = r(179), A = {};
    A.styleTagTransform = b(), A.setAttributes = g(), A.insert = f().bind(null, "head"), A.domAPI = d(), A.insertStyleElement = M(), c()(x.A, A), x.A && x.A.locals && x.A.locals;
    var v, N = r(325), D = r.t(N, 2);

    function k() {
        return k = Object.assign ? Object.assign.bind() : function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, k.apply(this, arguments)
    }

    !function (t) {
        t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE"
    }(v || (v = {}));
    const T = "popstate";

    function S(t, e) {
        if (!1 === t || null == t) throw new Error(e)
    }

    function w(t, e) {
        if (!t) {
            "undefined" != typeof console && console.warn(e);
            try {
                throw new Error(e)
            } catch (t) {
            }
        }
    }

    function E(t, e) {
        return {usr: t.state, key: t.key, idx: e}
    }

    function C(t, e, n, i) {
        return void 0 === n && (n = null), k({
            pathname: "string" == typeof t ? t : t.pathname,
            search: "",
            hash: ""
        }, "string" == typeof e ? j(e) : e, {state: n, key: e && e.key || i || Math.random().toString(36).substr(2, 8)})
    }

    function z(t) {
        let {pathname: e = "/", search: n = "", hash: i = ""} = t;
        return n && "?" !== n && (e += "?" === n.charAt(0) ? n : "?" + n), i && "#" !== i && (e += "#" === i.charAt(0) ? i : "#" + i), e
    }

    function j(t) {
        let e = {};
        if (t) {
            let n = t.indexOf("#");
            n >= 0 && (e.hash = t.substr(n), t = t.substr(0, n));
            let i = t.indexOf("?");
            i >= 0 && (e.search = t.substr(i), t = t.substr(0, i)), t && (e.pathname = t)
        }
        return e
    }

    var I;

    function _(t, e, n) {
        void 0 === n && (n = "/");
        let i = G(("string" == typeof e ? j(e) : e).pathname || "/", n);
        if (null == i) return null;
        let r = O(t);
        !function (t) {
            t.sort(((t, e) => t.score !== e.score ? e.score - t.score : function (t, e) {
                return t.length === e.length && t.slice(0, -1).every(((t, n) => t === e[n])) ? t[t.length - 1] - e[e.length - 1] : 0
            }(t.routesMeta.map((t => t.childrenIndex)), e.routesMeta.map((t => t.childrenIndex)))))
        }(r);
        let a = null;
        for (let t = 0; null == a && t < r.length; ++t) {
            let e = H(i);
            a = B(r[t], e)
        }
        return a
    }

    function O(t, e, n, i) {
        void 0 === e && (e = []), void 0 === n && (n = []), void 0 === i && (i = "");
        let r = (t, r, a) => {
            let o = {
                relativePath: void 0 === a ? t.path || "" : a,
                caseSensitive: !0 === t.caseSensitive,
                childrenIndex: r,
                route: t
            };
            o.relativePath.startsWith("/") && (S(o.relativePath.startsWith(i), 'Absolute route path "' + o.relativePath + '" nested under path "' + i + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(i.length));
            let s = K([i, o.relativePath]), l = n.concat(o);
            t.children && t.children.length > 0 && (S(!0 !== t.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), O(t.children, e, l, s)), (null != t.path || t.index) && e.push({
                path: s,
                score: Y(s, t.index),
                routesMeta: l
            })
        };
        return t.forEach(((t, e) => {
            var n;
            if ("" !== t.path && null != (n = t.path) && n.includes("?")) for (let n of L(t.path)) r(t, e, n); else r(t, e)
        })), e
    }

    function L(t) {
        let e = t.split("/");
        if (0 === e.length) return [];
        let [n, ...i] = e, r = n.endsWith("?"), a = n.replace(/\?$/, "");
        if (0 === i.length) return r ? [a, ""] : [a];
        let o = L(i.join("/")), s = [];
        return s.push(...o.map((t => "" === t ? a : [a, t].join("/")))), r && s.push(...o), s.map((e => t.startsWith("/") && "" === e ? "/" : e))
    }

    !function (t) {
        t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error"
    }(I || (I = {})), new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
    const U = /^:[\w-]+$/, R = 3, V = 2, F = 1, P = 10, W = -2, Q = t => "*" === t;

    function Y(t, e) {
        let n = t.split("/"), i = n.length;
        return n.some(Q) && (i += W), e && (i += V), n.filter((t => !Q(t))).reduce(((t, e) => t + (U.test(e) ? R : "" === e ? F : P)), i)
    }

    function B(t, e) {
        let {routesMeta: n} = t, i = {}, r = "/", a = [];
        for (let t = 0; t < n.length; ++t) {
            let o = n[t], s = t === n.length - 1, l = "/" === r ? e : e.slice(r.length) || "/",
                c = Z({path: o.relativePath, caseSensitive: o.caseSensitive, end: s}, l);
            if (!c) return null;
            Object.assign(i, c.params);
            let u = o.route;
            a.push({
                params: i,
                pathname: K([r, c.pathname]),
                pathnameBase: q(K([r, c.pathnameBase])),
                route: u
            }), "/" !== c.pathnameBase && (r = K([r, c.pathnameBase]))
        }
        return a
    }

    function Z(t, e) {
        "string" == typeof t && (t = {path: t, caseSensitive: !1, end: !0});
        let [n, i] = function (t, e, n) {
            void 0 === e && (e = !1), void 0 === n && (n = !0), w("*" === t || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were "' + t.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + t.replace(/\*$/, "/*") + '".');
            let i = [],
                r = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, ((t, e, n) => (i.push({
                    paramName: e,
                    isOptional: null != n
                }), n ? "/?([^\\/]+)?" : "/([^\\/]+)")));
            return t.endsWith("*") ? (i.push({paramName: "*"}), r += "*" === t || "/*" === t ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? r += "\\/*$" : "" !== t && "/" !== t && (r += "(?:(?=\\/|$))"), [new RegExp(r, e ? void 0 : "i"), i]
        }(t.path, t.caseSensitive, t.end), r = e.match(n);
        if (!r) return null;
        let a = r[0], o = a.replace(/(.)\/+$/, "$1"), s = r.slice(1), l = i.reduce(((t, e, n) => {
            let {paramName: i, isOptional: r} = e;
            if ("*" === i) {
                let t = s[n] || "";
                o = a.slice(0, a.length - t.length).replace(/(.)\/+$/, "$1")
            }
            const l = s[n];
            return t[i] = r && !l ? void 0 : (l || "").replace(/%2F/g, "/"), t
        }), {});
        return {params: l, pathname: a, pathnameBase: o, pattern: t}
    }

    function H(t) {
        try {
            return t.split("/").map((t => decodeURIComponent(t).replace(/\//g, "%2F"))).join("/")
        } catch (e) {
            return w(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + e + ")."), t
        }
    }

    function G(t, e) {
        if ("/" === e) return t;
        if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
        let n = e.endsWith("/") ? e.length - 1 : e.length, i = t.charAt(n);
        return i && "/" !== i ? null : t.slice(n) || "/"
    }

    function J(t, e, n, i) {
        return "Cannot include a '" + t + "' character in a manually specified `to." + e + "` field [" + JSON.stringify(i) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
    }

    function X(t, e) {
        let n = function (t) {
            return t.filter(((t, e) => 0 === e || t.route.path && t.route.path.length > 0))
        }(t);
        return e ? n.map(((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase)) : n.map((t => t.pathnameBase))
    }

    function $(t, e, n, i) {
        let r;
        void 0 === i && (i = !1), "string" == typeof t ? r = j(t) : (r = k({}, t), S(!r.pathname || !r.pathname.includes("?"), J("?", "pathname", "search", r)), S(!r.pathname || !r.pathname.includes("#"), J("#", "pathname", "hash", r)), S(!r.search || !r.search.includes("#"), J("#", "search", "hash", r)));
        let a, o = "" === t || "" === r.pathname, s = o ? "/" : r.pathname;
        if (null == s) a = n; else {
            let t = e.length - 1;
            if (!i && s.startsWith("..")) {
                let e = s.split("/");
                for (; ".." === e[0];) e.shift(), t -= 1;
                r.pathname = e.join("/")
            }
            a = t >= 0 ? e[t] : "/"
        }
        let l = function (t, e) {
            void 0 === e && (e = "/");
            let {pathname: n, search: i = "", hash: r = ""} = "string" == typeof t ? j(t) : t,
                a = n ? n.startsWith("/") ? n : function (t, e) {
                    let n = e.replace(/\/+$/, "").split("/");
                    return t.split("/").forEach((t => {
                        ".." === t ? n.length > 1 && n.pop() : "." !== t && n.push(t)
                    })), n.length > 1 ? n.join("/") : "/"
                }(n, e) : e;
            return {pathname: a, search: tt(i), hash: et(r)}
        }(r, a), c = s && "/" !== s && s.endsWith("/"), u = (o || "." === s) && n.endsWith("/");
        return l.pathname.endsWith("/") || !c && !u || (l.pathname += "/"), l
    }

    const K = t => t.join("/").replace(/\/\/+/g, "/"), q = t => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
        tt = t => t && "?" !== t ? t.startsWith("?") ? t : "?" + t : "",
        et = t => t && "#" !== t ? t.startsWith("#") ? t : "#" + t : "";
    Error;
    const nt = ["post", "put", "patch", "delete"], it = (new Set(nt), ["get", ...nt]);

    function rt() {
        return rt = Object.assign ? Object.assign.bind() : function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, rt.apply(this, arguments)
    }

    new Set(it), new Set([301, 302, 303, 307, 308]), new Set([307, 308]), Symbol("deferred");
    const at = a.createContext(null), ot = a.createContext(null), st = a.createContext(null),
        lt = a.createContext(null), ct = a.createContext({outlet: null, matches: [], isDataRoute: !1}),
        ut = a.createContext(null);

    function dt() {
        return null != a.useContext(lt)
    }

    function ht() {
        return dt() || S(!1), a.useContext(lt).location
    }

    function ft(t) {
        a.useContext(st).static || a.useLayoutEffect(t)
    }

    function pt() {
        let {isDataRoute: t} = a.useContext(ct);
        return t ? function () {
            let {router: t} = function (t) {
                let e = a.useContext(at);
                return e || S(!1), e
            }(vt.UseNavigateStable), e = Dt(Nt.UseNavigateStable), n = a.useRef(!1);
            ft((() => {
                n.current = !0
            }));
            let i = a.useCallback((function (i, r) {
                void 0 === r && (r = {}), n.current && ("number" == typeof i ? t.navigate(i) : t.navigate(i, rt({fromRouteId: e}, r)))
            }), [t, e]);
            return i
        }() : function () {
            dt() || S(!1);
            let t = a.useContext(at), {
                    basename: e,
                    future: n,
                    navigator: i
                } = a.useContext(st), {matches: r} = a.useContext(ct), {pathname: o} = ht(),
                s = JSON.stringify(X(r, n.v7_relativeSplatPath)), l = a.useRef(!1);
            ft((() => {
                l.current = !0
            }));
            let c = a.useCallback((function (n, r) {
                if (void 0 === r && (r = {}), !l.current) return;
                if ("number" == typeof n) return void i.go(n);
                let a = $(n, JSON.parse(s), o, "path" === r.relative);
                null == t && "/" !== e && (a.pathname = "/" === a.pathname ? e : K([e, a.pathname])), (r.replace ? i.replace : i.push)(a, r.state, r)
            }), [e, i, s, o, t]);
            return c
        }()
    }

    const gt = a.createContext(null);

    function mt(t, e) {
        let {relative: n} = void 0 === e ? {} : e, {future: i} = a.useContext(st), {matches: r} = a.useContext(ct), {pathname: o} = ht(),
            s = JSON.stringify(X(r, i.v7_relativeSplatPath));
        return a.useMemo((() => $(t, JSON.parse(s), o, "path" === n)), [t, s, o, n])
    }

    function Mt(t, e, n, i) {
        dt() || S(!1);
        let {navigator: r} = a.useContext(st), {matches: o} = a.useContext(ct), s = o[o.length - 1],
            l = s ? s.params : {}, c = (s && s.pathname, s ? s.pathnameBase : "/");
        s && s.route;
        let u, d = ht();
        if (e) {
            var h;
            let t = "string" == typeof e ? j(e) : e;
            "/" === c || (null == (h = t.pathname) ? void 0 : h.startsWith(c)) || S(!1), u = t
        } else u = d;
        let f = u.pathname || "/", p = f;
        if ("/" !== c) {
            let t = c.replace(/^\//, "").split("/");
            p = "/" + f.replace(/^\//, "").split("/").slice(t.length).join("/")
        }
        let g = _(t, {pathname: p}), m = function (t, e, n, i) {
            var r;
            if (void 0 === e && (e = []), void 0 === n && (n = null), void 0 === i && (i = null), null == t) {
                var o;
                if (null == (o = n) || !o.errors) return null;
                t = n.matches
            }
            let s = t, l = null == (r = n) ? void 0 : r.errors;
            if (null != l) {
                let t = s.findIndex((t => t.route.id && void 0 !== (null == l ? void 0 : l[t.route.id])));
                t >= 0 || S(!1), s = s.slice(0, Math.min(s.length, t + 1))
            }
            let c = !1, u = -1;
            if (n && i && i.v7_partialHydration) for (let t = 0; t < s.length; t++) {
                let e = s[t];
                if ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (u = t), e.route.id) {
                    let {loaderData: t, errors: i} = n,
                        r = e.route.loader && void 0 === t[e.route.id] && (!i || void 0 === i[e.route.id]);
                    if (e.route.lazy || r) {
                        c = !0, s = u >= 0 ? s.slice(0, u + 1) : [s[0]];
                        break
                    }
                }
            }
            return s.reduceRight(((t, i, r) => {
                let o, d = !1, h = null, f = null;
                var p;
                n && (o = l && i.route.id ? l[i.route.id] : void 0, h = i.route.errorElement || bt, c && (u < 0 && 0 === r ? (kt[p = "route-fallback"] || (kt[p] = !0), d = !0, f = null) : u === r && (d = !0, f = i.route.hydrateFallbackElement || null)));
                let g = e.concat(s.slice(0, r + 1)), m = () => {
                    let e;
                    return e = o ? h : d ? f : i.route.Component ? a.createElement(i.route.Component, null) : i.route.element ? i.route.element : t, a.createElement(At, {
                        match: i,
                        routeContext: {outlet: t, matches: g, isDataRoute: null != n},
                        children: e
                    })
                };
                return n && (i.route.ErrorBoundary || i.route.errorElement || 0 === r) ? a.createElement(xt, {
                    location: n.location,
                    revalidation: n.revalidation,
                    component: h,
                    error: o,
                    children: m(),
                    routeContext: {outlet: null, matches: g, isDataRoute: !0}
                }) : m()
            }), null)
        }(g && g.map((t => Object.assign({}, t, {
            params: Object.assign({}, l, t.params),
            pathname: K([c, r.encodeLocation ? r.encodeLocation(t.pathname).pathname : t.pathname]),
            pathnameBase: "/" === t.pathnameBase ? c : K([c, r.encodeLocation ? r.encodeLocation(t.pathnameBase).pathname : t.pathnameBase])
        }))), o, n, i);
        return e && m ? a.createElement(lt.Provider, {
            value: {
                location: rt({
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default"
                }, u), navigationType: v.Pop
            }
        }, m) : m
    }

    function yt() {
        let t = function () {
                var t;
                let e = a.useContext(ut), n = function (t) {
                    let e = a.useContext(ot);
                    return e || S(!1), e
                }(Nt.UseRouteError), i = Dt(Nt.UseRouteError);
                return void 0 !== e ? e : null == (t = n.errors) ? void 0 : t[i]
            }(), e = function (t) {
                return null != t && "number" == typeof t.status && "string" == typeof t.statusText && "boolean" == typeof t.internal && "data" in t
            }(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
            n = t instanceof Error ? t.stack : null, i = {padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)"};
        return a.createElement(a.Fragment, null, a.createElement("h2", null, "Unexpected Application Error!"), a.createElement("h3", {style: {fontStyle: "italic"}}, e), n ? a.createElement("pre", {style: i}, n) : null, null)
    }

    const bt = a.createElement(yt, null);

    class xt extends a.Component {
        constructor(t) {
            super(t), this.state = {location: t.location, revalidation: t.revalidation, error: t.error}
        }

        static getDerivedStateFromError(t) {
            return {error: t}
        }

        static getDerivedStateFromProps(t, e) {
            return e.location !== t.location || "idle" !== e.revalidation && "idle" === t.revalidation ? {
                error: t.error,
                location: t.location,
                revalidation: t.revalidation
            } : {
                error: void 0 !== t.error ? t.error : e.error,
                location: e.location,
                revalidation: t.revalidation || e.revalidation
            }
        }

        componentDidCatch(t, e) {
            console.error("React Router caught the following error during render", t, e)
        }

        render() {
            return void 0 !== this.state.error ? a.createElement(ct.Provider, {value: this.props.routeContext}, a.createElement(ut.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    }

    function At(t) {
        let {routeContext: e, match: n, children: i} = t, r = a.useContext(at);
        return r && r.static && r.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = n.route.id), a.createElement(ct.Provider, {value: e}, i)
    }

    var vt = function (t) {
        return t.UseBlocker = "useBlocker", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t
    }(vt || {}), Nt = function (t) {
        return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t
    }(Nt || {});

    function Dt(t) {
        let e = function (t) {
            let e = a.useContext(ct);
            return e || S(!1), e
        }(), n = e.matches[e.matches.length - 1];
        return n.route.id || S(!1), n.route.id
    }

    const kt = {};

    function Tt(t) {
        return function (t) {
            let e = a.useContext(ct).outlet;
            return e ? a.createElement(gt.Provider, {value: t}, e) : e
        }(t.context)
    }

    function St(t) {
        S(!1)
    }

    function wt(t) {
        let {
            basename: e = "/",
            children: n = null,
            location: i,
            navigationType: r = v.Pop,
            navigator: o,
            static: s = !1,
            future: l
        } = t;
        dt() && S(!1);
        let c = e.replace(/^\/*/, "/"), u = a.useMemo((() => ({
            basename: c,
            navigator: o,
            static: s,
            future: rt({v7_relativeSplatPath: !1}, l)
        })), [c, l, o, s]);
        "string" == typeof i && (i = j(i));
        let {pathname: d = "/", search: h = "", hash: f = "", state: p = null, key: g = "default"} = i,
            m = a.useMemo((() => {
                let t = G(d, c);
                return null == t ? null : {
                    location: {pathname: t, search: h, hash: f, state: p, key: g},
                    navigationType: r
                }
            }), [c, d, h, f, p, g, r]);
        return null == m ? null : a.createElement(st.Provider, {value: u}, a.createElement(lt.Provider, {
            children: n,
            value: m
        }))
    }

    function Et(t) {
        let {children: e, location: n} = t;
        return Mt(Ct(e), n)
    }

    function Ct(t, e) {
        void 0 === e && (e = []);
        let n = [];
        return a.Children.forEach(t, ((t, i) => {
            if (!a.isValidElement(t)) return;
            let r = [...e, i];
            if (t.type === a.Fragment) return void n.push.apply(n, Ct(t.props.children, r));
            t.type !== St && S(!1), t.props.index && t.props.children && S(!1);
            let o = {
                id: t.props.id || r.join("-"),
                caseSensitive: t.props.caseSensitive,
                element: t.props.element,
                Component: t.props.Component,
                index: t.props.index,
                path: t.props.path,
                loader: t.props.loader,
                action: t.props.action,
                errorElement: t.props.errorElement,
                ErrorBoundary: t.props.ErrorBoundary,
                hasErrorBoundary: null != t.props.ErrorBoundary || null != t.props.errorElement,
                shouldRevalidate: t.props.shouldRevalidate,
                handle: t.props.handle,
                lazy: t.props.lazy
            };
            t.props.children && (o.children = Ct(t.props.children, r)), n.push(o)
        })), n
    }

    function zt() {
        return zt = Object.assign ? Object.assign.bind() : function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, zt.apply(this, arguments)
    }

    function jt(t, e) {
        if (null == t) return {};
        var n, i, r = {}, a = Object.keys(t);
        for (i = 0; i < a.length; i++) n = a[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
        return r
    }

    o.startTransition, new Promise((() => {
    })), a.Component, new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
    const It = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
        _t = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"];
    try {
        window.__reactRouterVersion = "6"
    } catch (t) {
    }
    const Ot = a.createContext({isTransitioning: !1});
    new Map;
    const Lt = o.startTransition;

    function Ut(t) {
        let {basename: e, children: n, future: i, window: r} = t, o = a.useRef();
        null == o.current && (o.current = function (t) {
            return void 0 === t && (t = {}), function (t, e, n, i) {
                void 0 === i && (i = {});
                let {window: r = document.defaultView, v5Compat: a = !1} = i, o = r.history, s = v.Pop, l = null,
                    c = u();

                function u() {
                    return (o.state || {idx: null}).idx
                }

                function d() {
                    s = v.Pop;
                    let t = u(), e = null == t ? null : t - c;
                    c = t, l && l({action: s, location: f.location, delta: e})
                }

                function h(t) {
                    let e = "null" !== r.location.origin ? r.location.origin : r.location.href,
                        n = "string" == typeof t ? t : z(t);
                    return n = n.replace(/ $/, "%20"), S(e, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, e)
                }

                null == c && (c = 0, o.replaceState(k({}, o.state, {idx: c}), ""));
                let f = {
                    get action() {
                        return s
                    }, get location() {
                        return t(r, o)
                    }, listen(t) {
                        if (l) throw new Error("A history only accepts one active listener");
                        return r.addEventListener(T, d), l = t, () => {
                            r.removeEventListener(T, d), l = null
                        }
                    }, createHref: t => e(r, t), createURL: h, encodeLocation(t) {
                        let e = h(t);
                        return {pathname: e.pathname, search: e.search, hash: e.hash}
                    }, push: function (t, e) {
                        s = v.Push;
                        let i = C(f.location, t, e);
                        n && n(i, t), c = u() + 1;
                        let d = E(i, c), h = f.createHref(i);
                        try {
                            o.pushState(d, "", h)
                        } catch (t) {
                            if (t instanceof DOMException && "DataCloneError" === t.name) throw t;
                            r.location.assign(h)
                        }
                        a && l && l({action: s, location: f.location, delta: 1})
                    }, replace: function (t, e) {
                        s = v.Replace;
                        let i = C(f.location, t, e);
                        n && n(i, t), c = u();
                        let r = E(i, c), d = f.createHref(i);
                        o.replaceState(r, "", d), a && l && l({action: s, location: f.location, delta: 0})
                    }, go: t => o.go(t)
                };
                return f
            }((function (t, e) {
                let {pathname: n, search: i, hash: r} = t.location;
                return C("", {
                    pathname: n,
                    search: i,
                    hash: r
                }, e.state && e.state.usr || null, e.state && e.state.key || "default")
            }), (function (t, e) {
                return "string" == typeof e ? e : z(e)
            }), null, t)
        }({window: r, v5Compat: !0}));
        let s = o.current, [l, c] = a.useState({
            action: s.action,
            location: s.location
        }), {v7_startTransition: u} = i || {}, d = a.useCallback((t => {
            u && Lt ? Lt((() => c(t))) : c(t)
        }), [c, u]);
        return a.useLayoutEffect((() => s.listen(d)), [s, d]), a.createElement(wt, {
            basename: e,
            children: n,
            location: l.location,
            navigationType: l.action,
            navigator: s,
            future: i
        })
    }

    D.flushSync, o.useId;
    const Rt = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
        Vt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ft = a.forwardRef((function (t, e) {
            let n, {
                onClick: i,
                relative: r,
                reloadDocument: o,
                replace: s,
                state: l,
                target: c,
                to: u,
                preventScrollReset: d,
                unstable_viewTransition: h
            } = t, f = jt(t, It), {basename: p} = a.useContext(st), g = !1;
            if ("string" == typeof u && Vt.test(u) && (n = u, Rt)) try {
                let t = new URL(window.location.href), e = u.startsWith("//") ? new URL(t.protocol + u) : new URL(u),
                    n = G(e.pathname, p);
                e.origin === t.origin && null != n ? u = n + e.search + e.hash : g = !0
            } catch (t) {
            }
            let m = function (t, e) {
                let {relative: n} = void 0 === e ? {} : e;
                dt() || S(!1);
                let {basename: i, navigator: r} = a.useContext(st), {
                    hash: o,
                    pathname: s,
                    search: l
                } = mt(t, {relative: n}), c = s;
                return "/" !== i && (c = "/" === s ? i : K([i, s])), r.createHref({pathname: c, search: l, hash: o})
            }(u, {relative: r}), M = function (t, e) {
                let {
                    target: n,
                    replace: i,
                    state: r,
                    preventScrollReset: o,
                    relative: s,
                    unstable_viewTransition: l
                } = void 0 === e ? {} : e, c = pt(), u = ht(), d = mt(t, {relative: s});
                return a.useCallback((e => {
                    if (function (t, e) {
                        return !(0 !== t.button || e && "_self" !== e || function (t) {
                            return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
                        }(t))
                    }(e, n)) {
                        e.preventDefault();
                        let n = void 0 !== i ? i : z(u) === z(d);
                        c(t, {replace: n, state: r, preventScrollReset: o, relative: s, unstable_viewTransition: l})
                    }
                }), [u, c, d, i, r, n, t, o, s, l])
            }(u, {replace: s, state: l, target: c, preventScrollReset: d, relative: r, unstable_viewTransition: h});
            return a.createElement("a", zt({}, f, {
                href: n || m, onClick: g || o ? i : function (t) {
                    i && i(t), t.defaultPrevented || M(t)
                }, ref: e, target: c
            }))
        })), Pt = a.forwardRef((function (t, e) {
            let {
                    "aria-current": n = "page",
                    caseSensitive: i = !1,
                    className: r = "",
                    end: o = !1,
                    style: s,
                    to: l,
                    unstable_viewTransition: c,
                    children: u
                } = t, d = jt(t, _t), h = mt(l, {relative: d.relative}), f = ht(), p = a.useContext(ot), {
                    navigator: g,
                    basename: m
                } = a.useContext(st), M = null != p && function (t, e) {
                    void 0 === e && (e = {});
                    let n = a.useContext(Ot);
                    null == n && S(!1);
                    let {basename: i} = function (t) {
                        let e = a.useContext(at);
                        return e || S(!1), e
                    }(Wt.useViewTransitionState), r = mt(t, {relative: e.relative});
                    if (!n.isTransitioning) return !1;
                    let o = G(n.currentLocation.pathname, i) || n.currentLocation.pathname,
                        s = G(n.nextLocation.pathname, i) || n.nextLocation.pathname;
                    return null != Z(r.pathname, s) || null != Z(r.pathname, o)
                }(h) && !0 === c, y = g.encodeLocation ? g.encodeLocation(h).pathname : h.pathname, b = f.pathname,
                x = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
            i || (b = b.toLowerCase(), x = x ? x.toLowerCase() : null, y = y.toLowerCase()), x && m && (x = G(x, m) || x);
            const A = "/" !== y && y.endsWith("/") ? y.length - 1 : y.length;
            let v, N = b === y || !o && b.startsWith(y) && "/" === b.charAt(A),
                D = null != x && (x === y || !o && x.startsWith(y) && "/" === x.charAt(y.length)),
                k = {isActive: N, isPending: D, isTransitioning: M}, T = N ? n : void 0;
            v = "function" == typeof r ? r(k) : [r, N ? "active" : null, D ? "pending" : null, M ? "transitioning" : null].filter(Boolean).join(" ");
            let w = "function" == typeof s ? s(k) : s;
            return a.createElement(Ft, zt({}, d, {
                "aria-current": T,
                className: v,
                ref: e,
                style: w,
                to: l,
                unstable_viewTransition: c
            }), "function" == typeof u ? u(k) : u)
        }));
    var Wt, Qt;
    (function (t) {
        t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState"
    })(Wt || (Wt = {})), function (t) {
        t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration"
    }(Qt || (Qt = {}));
    var Yt = r(985), Bt = {};
    Bt.styleTagTransform = b(), Bt.setAttributes = g(), Bt.insert = f().bind(null, "head"), Bt.domAPI = d(), Bt.insertStyleElement = M(), c()(Yt.A, Bt);
    const Zt = Yt.A && Yt.A.locals ? Yt.A.locals : void 0;

    function Ht(t) {
        return t + .5 | 0
    }

    const Gt = (t, e, n) => Math.max(Math.min(t, n), e);

    function Jt(t) {
        return Gt(Ht(2.55 * t), 0, 255)
    }

    function Xt(t) {
        return Gt(Ht(255 * t), 0, 255)
    }

    function $t(t) {
        return Gt(Ht(t / 2.55) / 100, 0, 1)
    }

    function Kt(t) {
        return Gt(Ht(100 * t), 0, 100)
    }

    const qt = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            a: 10,
            b: 11,
            c: 12,
            d: 13,
            e: 14,
            f: 15
        }, te = [..."0123456789ABCDEF"], ee = t => te[15 & t], ne = t => te[(240 & t) >> 4] + te[15 & t],
        ie = t => (240 & t) >> 4 == (15 & t);
    const re = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

    function ae(t, e, n) {
        const i = e * Math.min(n, 1 - n),
            r = (e, r = (e + t / 30) % 12) => n - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
        return [r(0), r(8), r(4)]
    }

    function oe(t, e, n) {
        const i = (i, r = (i + t / 60) % 6) => n - n * e * Math.max(Math.min(r, 4 - r, 1), 0);
        return [i(5), i(3), i(1)]
    }

    function se(t, e, n) {
        const i = ae(t, 1, .5);
        let r;
        for (e + n > 1 && (r = 1 / (e + n), e *= r, n *= r), r = 0; r < 3; r++) i[r] *= 1 - e - n, i[r] += e;
        return i
    }

    function le(t) {
        const e = t.r / 255, n = t.g / 255, i = t.b / 255, r = Math.max(e, n, i), a = Math.min(e, n, i),
            o = (r + a) / 2;
        let s, l, c;
        return r !== a && (c = r - a, l = o > .5 ? c / (2 - r - a) : c / (r + a), s = function (t, e, n, i, r) {
            return t === r ? (e - n) / i + (e < n ? 6 : 0) : e === r ? (n - t) / i + 2 : (t - e) / i + 4
        }(e, n, i, c, r), s = 60 * s + .5), [0 | s, l || 0, o]
    }

    function ce(t, e, n, i) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(Xt)
    }

    function ue(t, e, n) {
        return ce(ae, t, e, n)
    }

    function de(t) {
        return (t % 360 + 360) % 360
    }

    const he = {
        x: "dark",
        Z: "light",
        Y: "re",
        X: "blu",
        W: "gr",
        V: "medium",
        U: "slate",
        A: "ee",
        T: "ol",
        S: "or",
        B: "ra",
        C: "lateg",
        D: "ights",
        R: "in",
        Q: "turquois",
        E: "hi",
        P: "ro",
        O: "al",
        N: "le",
        M: "de",
        L: "yello",
        F: "en",
        K: "ch",
        G: "arks",
        H: "ea",
        I: "ightg",
        J: "wh"
    }, fe = {
        OiceXe: "f0f8ff",
        antiquewEte: "faebd7",
        aqua: "ffff",
        aquamarRe: "7fffd4",
        azuY: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "0",
        blanKedOmond: "ffebcd",
        Xe: "ff",
        XeviTet: "8a2be2",
        bPwn: "a52a2a",
        burlywood: "deb887",
        caMtXe: "5f9ea0",
        KartYuse: "7fff00",
        KocTate: "d2691e",
        cSO: "ff7f50",
        cSnflowerXe: "6495ed",
        cSnsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "ffff",
        xXe: "8b",
        xcyan: "8b8b",
        xgTMnPd: "b8860b",
        xWay: "a9a9a9",
        xgYF: "6400",
        xgYy: "a9a9a9",
        xkhaki: "bdb76b",
        xmagFta: "8b008b",
        xTivegYF: "556b2f",
        xSange: "ff8c00",
        xScEd: "9932cc",
        xYd: "8b0000",
        xsOmon: "e9967a",
        xsHgYF: "8fbc8f",
        xUXe: "483d8b",
        xUWay: "2f4f4f",
        xUgYy: "2f4f4f",
        xQe: "ced1",
        xviTet: "9400d3",
        dAppRk: "ff1493",
        dApskyXe: "bfff",
        dimWay: "696969",
        dimgYy: "696969",
        dodgerXe: "1e90ff",
        fiYbrick: "b22222",
        flSOwEte: "fffaf0",
        foYstWAn: "228b22",
        fuKsia: "ff00ff",
        gaRsbSo: "dcdcdc",
        ghostwEte: "f8f8ff",
        gTd: "ffd700",
        gTMnPd: "daa520",
        Way: "808080",
        gYF: "8000",
        gYFLw: "adff2f",
        gYy: "808080",
        honeyMw: "f0fff0",
        hotpRk: "ff69b4",
        RdianYd: "cd5c5c",
        Rdigo: "4b0082",
        ivSy: "fffff0",
        khaki: "f0e68c",
        lavFMr: "e6e6fa",
        lavFMrXsh: "fff0f5",
        lawngYF: "7cfc00",
        NmoncEffon: "fffacd",
        ZXe: "add8e6",
        ZcSO: "f08080",
        Zcyan: "e0ffff",
        ZgTMnPdLw: "fafad2",
        ZWay: "d3d3d3",
        ZgYF: "90ee90",
        ZgYy: "d3d3d3",
        ZpRk: "ffb6c1",
        ZsOmon: "ffa07a",
        ZsHgYF: "20b2aa",
        ZskyXe: "87cefa",
        ZUWay: "778899",
        ZUgYy: "778899",
        ZstAlXe: "b0c4de",
        ZLw: "ffffe0",
        lime: "ff00",
        limegYF: "32cd32",
        lRF: "faf0e6",
        magFta: "ff00ff",
        maPon: "800000",
        VaquamarRe: "66cdaa",
        VXe: "cd",
        VScEd: "ba55d3",
        VpurpN: "9370db",
        VsHgYF: "3cb371",
        VUXe: "7b68ee",
        VsprRggYF: "fa9a",
        VQe: "48d1cc",
        VviTetYd: "c71585",
        midnightXe: "191970",
        mRtcYam: "f5fffa",
        mistyPse: "ffe4e1",
        moccasR: "ffe4b5",
        navajowEte: "ffdead",
        navy: "80",
        Tdlace: "fdf5e6",
        Tive: "808000",
        TivedBb: "6b8e23",
        Sange: "ffa500",
        SangeYd: "ff4500",
        ScEd: "da70d6",
        pOegTMnPd: "eee8aa",
        pOegYF: "98fb98",
        pOeQe: "afeeee",
        pOeviTetYd: "db7093",
        papayawEp: "ffefd5",
        pHKpuff: "ffdab9",
        peru: "cd853f",
        pRk: "ffc0cb",
        plum: "dda0dd",
        powMrXe: "b0e0e6",
        purpN: "800080",
        YbeccapurpN: "663399",
        Yd: "ff0000",
        Psybrown: "bc8f8f",
        PyOXe: "4169e1",
        saddNbPwn: "8b4513",
        sOmon: "fa8072",
        sandybPwn: "f4a460",
        sHgYF: "2e8b57",
        sHshell: "fff5ee",
        siFna: "a0522d",
        silver: "c0c0c0",
        skyXe: "87ceeb",
        UXe: "6a5acd",
        UWay: "708090",
        UgYy: "708090",
        snow: "fffafa",
        sprRggYF: "ff7f",
        stAlXe: "4682b4",
        tan: "d2b48c",
        teO: "8080",
        tEstN: "d8bfd8",
        tomato: "ff6347",
        Qe: "40e0d0",
        viTet: "ee82ee",
        JHt: "f5deb3",
        wEte: "ffffff",
        wEtesmoke: "f5f5f5",
        Lw: "ffff00",
        LwgYF: "9acd32"
    };
    let pe;
    const ge = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
        me = t => t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055,
        Me = t => t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);

    function ye(t, e, n) {
        if (t) {
            let i = le(t);
            i[e] = Math.max(0, Math.min(i[e] + i[e] * n, 0 === e ? 360 : 1)), i = ue(i), t.r = i[0], t.g = i[1], t.b = i[2]
        }
    }

    function be(t, e) {
        return t ? Object.assign(e || {}, t) : t
    }

    function xe(t) {
        var e = {r: 0, g: 0, b: 0, a: 255};
        return Array.isArray(t) ? t.length >= 3 && (e = {
            r: t[0],
            g: t[1],
            b: t[2],
            a: 255
        }, t.length > 3 && (e.a = Xt(t[3]))) : (e = be(t, {r: 0, g: 0, b: 0, a: 1})).a = Xt(e.a), e
    }

    function Ae(t) {
        return "r" === t.charAt(0) ? function (t) {
            const e = ge.exec(t);
            let n, i, r, a = 255;
            if (e) {
                if (e[7] !== n) {
                    const t = +e[7];
                    a = e[8] ? Jt(t) : Gt(255 * t, 0, 255)
                }
                return n = +e[1], i = +e[3], r = +e[5], n = 255 & (e[2] ? Jt(n) : Gt(n, 0, 255)), i = 255 & (e[4] ? Jt(i) : Gt(i, 0, 255)), r = 255 & (e[6] ? Jt(r) : Gt(r, 0, 255)), {
                    r: n,
                    g: i,
                    b: r,
                    a
                }
            }
        }(t) : function (t) {
            const e = re.exec(t);
            let n, i = 255;
            if (!e) return;
            e[5] !== n && (i = e[6] ? Jt(+e[5]) : Xt(+e[5]));
            const r = de(+e[2]), a = +e[3] / 100, o = +e[4] / 100;
            return n = "hwb" === e[1] ? function (t, e, n) {
                return ce(se, t, e, n)
            }(r, a, o) : "hsv" === e[1] ? function (t, e, n) {
                return ce(oe, t, e, n)
            }(r, a, o) : ue(r, a, o), {r: n[0], g: n[1], b: n[2], a: i}
        }(t)
    }

    class ve {
        constructor(t) {
            if (t instanceof ve) return t;
            const e = typeof t;
            let n;
            var i, r, a;
            "object" === e ? n = xe(t) : "string" === e && (a = (i = t).length, "#" === i[0] && (4 === a || 5 === a ? r = {
                r: 255 & 17 * qt[i[1]],
                g: 255 & 17 * qt[i[2]],
                b: 255 & 17 * qt[i[3]],
                a: 5 === a ? 17 * qt[i[4]] : 255
            } : 7 !== a && 9 !== a || (r = {
                r: qt[i[1]] << 4 | qt[i[2]],
                g: qt[i[3]] << 4 | qt[i[4]],
                b: qt[i[5]] << 4 | qt[i[6]],
                a: 9 === a ? qt[i[7]] << 4 | qt[i[8]] : 255
            })), n = r || function (t) {
                pe || (pe = function () {
                    const t = {}, e = Object.keys(fe), n = Object.keys(he);
                    let i, r, a, o, s;
                    for (i = 0; i < e.length; i++) {
                        for (o = s = e[i], r = 0; r < n.length; r++) a = n[r], s = s.replace(a, he[a]);
                        a = parseInt(fe[o], 16), t[s] = [a >> 16 & 255, a >> 8 & 255, 255 & a]
                    }
                    return t
                }(), pe.transparent = [0, 0, 0, 0]);
                const e = pe[t.toLowerCase()];
                return e && {r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255}
            }(t) || Ae(t)), this._rgb = n, this._valid = !!n
        }

        get valid() {
            return this._valid
        }

        get rgb() {
            var t = be(this._rgb);
            return t && (t.a = $t(t.a)), t
        }

        set rgb(t) {
            this._rgb = xe(t)
        }

        rgbString() {
            return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${$t(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : void 0;
            var t
        }

        hexString() {
            return this._valid ? (t = this._rgb, e = (t => ie(t.r) && ie(t.g) && ie(t.b) && ie(t.a))(t) ? ee : ne, t ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t, e) => t < 255 ? e(t) : "")(t.a, e) : void 0) : void 0;
            var t, e
        }

        hslString() {
            return this._valid ? function (t) {
                if (!t) return;
                const e = le(t), n = e[0], i = Kt(e[1]), r = Kt(e[2]);
                return t.a < 255 ? `hsla(${n}, ${i}%, ${r}%, ${$t(t.a)})` : `hsl(${n}, ${i}%, ${r}%)`
            }(this._rgb) : void 0
        }

        mix(t, e) {
            if (t) {
                const n = this.rgb, i = t.rgb;
                let r;
                const a = e === r ? .5 : e, o = 2 * a - 1, s = n.a - i.a,
                    l = ((o * s == -1 ? o : (o + s) / (1 + o * s)) + 1) / 2;
                r = 1 - l, n.r = 255 & l * n.r + r * i.r + .5, n.g = 255 & l * n.g + r * i.g + .5, n.b = 255 & l * n.b + r * i.b + .5, n.a = a * n.a + (1 - a) * i.a, this.rgb = n
            }
            return this
        }

        interpolate(t, e) {
            return t && (this._rgb = function (t, e, n) {
                const i = Me($t(t.r)), r = Me($t(t.g)), a = Me($t(t.b));
                return {
                    r: Xt(me(i + n * (Me($t(e.r)) - i))),
                    g: Xt(me(r + n * (Me($t(e.g)) - r))),
                    b: Xt(me(a + n * (Me($t(e.b)) - a))),
                    a: t.a + n * (e.a - t.a)
                }
            }(this._rgb, t._rgb, e)), this
        }

        clone() {
            return new ve(this.rgb)
        }

        alpha(t) {
            return this._rgb.a = Xt(t), this
        }

        clearer(t) {
            return this._rgb.a *= 1 - t, this
        }

        greyscale() {
            const t = this._rgb, e = Ht(.3 * t.r + .59 * t.g + .11 * t.b);
            return t.r = t.g = t.b = e, this
        }

        opaquer(t) {
            return this._rgb.a *= 1 + t, this
        }

        negate() {
            const t = this._rgb;
            return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
        }

        lighten(t) {
            return ye(this._rgb, 2, t), this
        }

        darken(t) {
            return ye(this._rgb, 2, -t), this
        }

        saturate(t) {
            return ye(this._rgb, 1, t), this
        }

        desaturate(t) {
            return ye(this._rgb, 1, -t), this
        }

        rotate(t) {
            return function (t, e) {
                var n = le(t);
                n[0] = de(n[0] + e), n = ue(n), t.r = n[0], t.g = n[1], t.b = n[2]
            }(this._rgb, t), this
        }
    }

    function Ne() {
    }

    const De = (() => {
        let t = 0;
        return () => t++
    })();

    function ke(t) {
        return null == t
    }

    function Te(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        const e = Object.prototype.toString.call(t);
        return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6)
    }

    function Se(t) {
        return null !== t && "[object Object]" === Object.prototype.toString.call(t)
    }

    function we(t) {
        return ("number" == typeof t || t instanceof Number) && isFinite(+t)
    }

    function Ee(t, e) {
        return we(t) ? t : e
    }

    function Ce(t, e) {
        return void 0 === t ? e : t
    }

    const ze = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;

    function je(t, e, n) {
        if (t && "function" == typeof t.call) return t.apply(n, e)
    }

    function Ie(t, e, n, i) {
        let r, a, o;
        if (Te(t)) if (a = t.length, i) for (r = a - 1; r >= 0; r--) e.call(n, t[r], r); else for (r = 0; r < a; r++) e.call(n, t[r], r); else if (Se(t)) for (o = Object.keys(t), a = o.length, r = 0; r < a; r++) e.call(n, t[o[r]], o[r])
    }

    function _e(t, e) {
        let n, i, r, a;
        if (!t || !e || t.length !== e.length) return !1;
        for (n = 0, i = t.length; n < i; ++n) if (r = t[n], a = e[n], r.datasetIndex !== a.datasetIndex || r.index !== a.index) return !1;
        return !0
    }

    function Oe(t) {
        if (Te(t)) return t.map(Oe);
        if (Se(t)) {
            const e = Object.create(null), n = Object.keys(t), i = n.length;
            let r = 0;
            for (; r < i; ++r) e[n[r]] = Oe(t[n[r]]);
            return e
        }
        return t
    }

    function Le(t) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
    }

    function Ue(t, e, n, i) {
        if (!Le(t)) return;
        const r = e[t], a = n[t];
        Se(r) && Se(a) ? Re(r, a, i) : e[t] = Oe(a)
    }

    function Re(t, e, n) {
        const i = Te(e) ? e : [e], r = i.length;
        if (!Se(t)) return t;
        const a = (n = n || {}).merger || Ue;
        let o;
        for (let e = 0; e < r; ++e) {
            if (o = i[e], !Se(o)) continue;
            const r = Object.keys(o);
            for (let e = 0, i = r.length; e < i; ++e) a(r[e], t, o, n)
        }
        return t
    }

    function Ve(t, e) {
        return Re(t, e, {merger: Fe})
    }

    function Fe(t, e, n) {
        if (!Le(t)) return;
        const i = e[t], r = n[t];
        Se(i) && Se(r) ? Ve(i, r) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Oe(r))
    }

    const Pe = {"": t => t, x: t => t.x, y: t => t.y};

    function We(t, e) {
        const n = Pe[e] || (Pe[e] = function (t) {
            const e = function (t) {
                const e = t.split("."), n = [];
                let i = "";
                for (const t of e) i += t, i.endsWith("\\") ? i = i.slice(0, -1) + "." : (n.push(i), i = "");
                return n
            }(t);
            return t => {
                for (const n of e) {
                    if ("" === n) break;
                    t = t && t[n]
                }
                return t
            }
        }(e));
        return n(t)
    }

    function Qe(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }

    const Ye = t => void 0 !== t, Be = t => "function" == typeof t, Ze = (t, e) => {
            if (t.size !== e.size) return !1;
            for (const n of t) if (!e.has(n)) return !1;
            return !0
        }, He = Math.PI, Ge = 2 * He, Je = Ge + He, Xe = Number.POSITIVE_INFINITY, $e = He / 180, Ke = He / 2, qe = He / 4,
        tn = 2 * He / 3, en = Math.log10, nn = Math.sign;

    function rn(t, e, n) {
        return Math.abs(t - e) < n
    }

    function an(t) {
        const e = Math.round(t);
        t = rn(t, e, t / 1e3) ? e : t;
        const n = Math.pow(10, Math.floor(en(t))), i = t / n;
        return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n
    }

    function on(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }

    function sn(t, e, n) {
        let i, r, a;
        for (i = 0, r = t.length; i < r; i++) a = t[i][n], isNaN(a) || (e.min = Math.min(e.min, a), e.max = Math.max(e.max, a))
    }

    function ln(t) {
        return t * (He / 180)
    }

    function cn(t) {
        return t * (180 / He)
    }

    function un(t) {
        if (!we(t)) return;
        let e = 1, n = 0;
        for (; Math.round(t * e) / e !== t;) e *= 10, n++;
        return n
    }

    function dn(t, e) {
        const n = e.x - t.x, i = e.y - t.y, r = Math.sqrt(n * n + i * i);
        let a = Math.atan2(i, n);
        return a < -.5 * He && (a += Ge), {angle: a, distance: r}
    }

    function hn(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }

    function fn(t, e) {
        return (t - e + Je) % Ge - He
    }

    function pn(t) {
        return (t % Ge + Ge) % Ge
    }

    function gn(t, e, n, i) {
        const r = pn(t), a = pn(e), o = pn(n), s = pn(a - r), l = pn(o - r), c = pn(r - a), u = pn(r - o);
        return r === a || r === o || i && a === o || s > l && c < u
    }

    function mn(t, e, n) {
        return Math.max(e, Math.min(n, t))
    }

    function Mn(t, e, n, i = 1e-6) {
        return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i
    }

    function yn(t, e, n) {
        n = n || (n => t[n] < e);
        let i, r = t.length - 1, a = 0;
        for (; r - a > 1;) i = a + r >> 1, n(i) ? a = i : r = i;
        return {lo: a, hi: r}
    }

    const bn = (t, e, n, i) => yn(t, n, i ? i => {
            const r = t[i][e];
            return r < n || r === n && t[i + 1][e] === n
        } : i => t[i][e] < n), xn = (t, e, n) => yn(t, n, (i => t[i][e] >= n)),
        An = ["push", "pop", "shift", "splice", "unshift"];

    function vn(t, e) {
        const n = t._chartjs;
        if (!n) return;
        const i = n.listeners, r = i.indexOf(e);
        -1 !== r && i.splice(r, 1), i.length > 0 || (An.forEach((e => {
            delete t[e]
        })), delete t._chartjs)
    }

    function Nn(t) {
        const e = new Set(t);
        return e.size === t.length ? t : Array.from(e)
    }

    const Dn = "undefined" == typeof window ? function (t) {
        return t()
    } : window.requestAnimationFrame;

    function kn(t, e) {
        let n = [], i = !1;
        return function (...r) {
            n = r, i || (i = !0, Dn.call(window, (() => {
                i = !1, t.apply(e, n)
            })))
        }
    }

    const Tn = t => "start" === t ? "left" : "end" === t ? "right" : "center",
        Sn = (t, e, n) => "start" === t ? e : "end" === t ? n : (e + n) / 2;

    function wn(t, e, n) {
        const i = e.length;
        let r = 0, a = i;
        if (t._sorted) {
            const {iScale: o, _parsed: s} = t, l = o.axis, {
                min: c,
                max: u,
                minDefined: d,
                maxDefined: h
            } = o.getUserBounds();
            d && (r = mn(Math.min(bn(s, l, c).lo, n ? i : bn(e, l, o.getPixelForValue(c)).lo), 0, i - 1)), a = h ? mn(Math.max(bn(s, o.axis, u, !0).hi + 1, n ? 0 : bn(e, l, o.getPixelForValue(u), !0).hi + 1), r, i) - r : i - r
        }
        return {start: r, count: a}
    }

    function En(t) {
        const {xScale: e, yScale: n, _scaleRanges: i} = t, r = {xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max};
        if (!i) return t._scaleRanges = r, !0;
        const a = i.xmin !== e.min || i.xmax !== e.max || i.ymin !== n.min || i.ymax !== n.max;
        return Object.assign(i, r), a
    }

    const Cn = t => 0 === t || 1 === t, zn = (t, e, n) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * Ge / n),
        jn = (t, e, n) => Math.pow(2, -10 * t) * Math.sin((t - e) * Ge / n) + 1, In = {
            linear: t => t,
            easeInQuad: t => t * t,
            easeOutQuad: t => -t * (t - 2),
            easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
            easeInCubic: t => t * t * t,
            easeOutCubic: t => (t -= 1) * t * t + 1,
            easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
            easeInQuart: t => t * t * t * t,
            easeOutQuart: t => -((t -= 1) * t * t * t - 1),
            easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
            easeInQuint: t => t * t * t * t * t,
            easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
            easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
            easeInSine: t => 1 - Math.cos(t * Ke),
            easeOutSine: t => Math.sin(t * Ke),
            easeInOutSine: t => -.5 * (Math.cos(He * t) - 1),
            easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
            easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
            easeInOutExpo: t => Cn(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
            easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
            easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
            easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
            easeInElastic: t => Cn(t) ? t : zn(t, .075, .3),
            easeOutElastic: t => Cn(t) ? t : jn(t, .075, .3),
            easeInOutElastic(t) {
                const e = .1125;
                return Cn(t) ? t : t < .5 ? .5 * zn(2 * t, e, .45) : .5 + .5 * jn(2 * t - 1, e, .45)
            },
            easeInBack(t) {
                const e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            easeOutBack(t) {
                const e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            easeInOutBack(t) {
                let e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: t => 1 - In.easeOutBounce(1 - t),
            easeOutBounce(t) {
                const e = 7.5625, n = 2.75;
                return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375
            },
            easeInOutBounce: t => t < .5 ? .5 * In.easeInBounce(2 * t) : .5 * In.easeOutBounce(2 * t - 1) + .5
        };

    function _n(t) {
        if (t && "object" == typeof t) {
            const e = t.toString();
            return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e
        }
        return !1
    }

    function On(t) {
        return _n(t) ? t : new ve(t)
    }

    function Ln(t) {
        return _n(t) ? t : new ve(t).saturate(.5).darken(.1).hexString()
    }

    const Un = ["x", "y", "borderWidth", "radius", "tension"], Rn = ["color", "borderColor", "backgroundColor"],
        Vn = new Map;

    function Fn(t, e, n) {
        return function (t, e) {
            e = e || {};
            const n = t + JSON.stringify(e);
            let i = Vn.get(n);
            return i || (i = new Intl.NumberFormat(t, e), Vn.set(n, i)), i
        }(e, n).format(t)
    }

    const Pn = {
        values: t => Te(t) ? t : "" + t, numeric(t, e, n) {
            if (0 === t) return "0";
            const i = this.chart.options.locale;
            let r, a = t;
            if (n.length > 1) {
                const e = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
                (e < 1e-4 || e > 1e15) && (r = "scientific"), a = function (t, e) {
                    let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                    return Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t)), n
                }(t, n)
            }
            const o = en(Math.abs(a)), s = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
                l = {notation: r, minimumFractionDigits: s, maximumFractionDigits: s};
            return Object.assign(l, this.options.ticks.format), Fn(t, i, l)
        }, logarithmic(t, e, n) {
            if (0 === t) return "0";
            const i = n[e].significand || t / Math.pow(10, Math.floor(en(t)));
            return [1, 2, 3, 5, 10, 15].includes(i) || e > .8 * n.length ? Pn.numeric.call(this, t, e, n) : ""
        }
    };
    var Wn = {formatters: Pn};
    const Qn = Object.create(null), Yn = Object.create(null);

    function Bn(t, e) {
        if (!e) return t;
        const n = e.split(".");
        for (let e = 0, i = n.length; e < i; ++e) {
            const i = n[e];
            t = t[i] || (t[i] = Object.create(null))
        }
        return t
    }

    function Zn(t, e, n) {
        return "string" == typeof e ? Re(Bn(t, e), n) : Re(Bn(t, ""), e)
    }

    class Hn {
        constructor(t, e) {
            this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: "normal",
                lineHeight: 1.2,
                weight: null
            }, this.hover = {}, this.hoverBackgroundColor = (t, e) => Ln(e.backgroundColor), this.hoverBorderColor = (t, e) => Ln(e.borderColor), this.hoverColor = (t, e) => Ln(e.color), this.indexAxis = "x", this.interaction = {
                mode: "nearest",
                intersect: !0,
                includeInvisible: !1
            }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e)
        }

        set(t, e) {
            return Zn(this, t, e)
        }

        get(t) {
            return Bn(this, t)
        }

        describe(t, e) {
            return Zn(Yn, t, e)
        }

        override(t, e) {
            return Zn(Qn, t, e)
        }

        route(t, e, n, i) {
            const r = Bn(this, t), a = Bn(this, n), o = "_" + e;
            Object.defineProperties(r, {
                [o]: {value: r[e], writable: !0}, [e]: {
                    enumerable: !0, get() {
                        const t = this[o], e = a[i];
                        return Se(t) ? Object.assign({}, e, t) : Ce(t, e)
                    }, set(t) {
                        this[o] = t
                    }
                }
            })
        }

        apply(t) {
            t.forEach((t => t(this)))
        }
    }

    var Gn = new Hn({
        _scriptable: t => !t.startsWith("on"),
        _indexable: t => "events" !== t,
        hover: {_fallback: "interaction"},
        interaction: {_scriptable: !1, _indexable: !1}
    }, [function (t) {
        t.set("animation", {
            delay: void 0,
            duration: 1e3,
            easing: "easeOutQuart",
            fn: void 0,
            from: void 0,
            loop: void 0,
            to: void 0,
            type: void 0
        }), t.describe("animation", {
            _fallback: !1,
            _indexable: !1,
            _scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t
        }), t.set("animations", {
            colors: {type: "color", properties: Rn},
            numbers: {type: "number", properties: Un}
        }), t.describe("animations", {_fallback: "animation"}), t.set("transitions", {
            active: {animation: {duration: 400}},
            resize: {animation: {duration: 0}},
            show: {animations: {colors: {from: "transparent"}, visible: {type: "boolean", duration: 0}}},
            hide: {
                animations: {
                    colors: {to: "transparent"},
                    visible: {type: "boolean", easing: "linear", fn: t => 0 | t}
                }
            }
        })
    }, function (t) {
        t.set("layout", {autoPadding: !0, padding: {top: 0, right: 0, bottom: 0, left: 0}})
    }, function (t) {
        t.set("scale", {
            display: !0,
            offset: !1,
            reverse: !1,
            beginAtZero: !1,
            bounds: "ticks",
            clip: !0,
            grace: 0,
            grid: {
                display: !0,
                lineWidth: 1,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: (t, e) => e.lineWidth,
                tickColor: (t, e) => e.color,
                offset: !1
            },
            border: {display: !0, dash: [], dashOffset: 0, width: 1},
            title: {display: !1, text: "", padding: {top: 4, bottom: 4}},
            ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: "",
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: Wn.formatters.values,
                minor: {},
                major: {},
                align: "center",
                crossAlign: "near",
                showLabelBackdrop: !1,
                backdropColor: "rgba(255, 255, 255, 0.75)",
                backdropPadding: 2
            }
        }), t.route("scale.ticks", "color", "", "color"), t.route("scale.grid", "color", "", "borderColor"), t.route("scale.border", "color", "", "borderColor"), t.route("scale.title", "color", "", "color"), t.describe("scale", {
            _fallback: !1,
            _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
            _indexable: t => "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t
        }), t.describe("scales", {_fallback: "scale"}), t.describe("scale.ticks", {
            _scriptable: t => "backdropPadding" !== t && "callback" !== t,
            _indexable: t => "backdropPadding" !== t
        })
    }]);

    function Jn(t, e, n, i, r) {
        let a = e[r];
        return a || (a = e[r] = t.measureText(r).width, n.push(r)), a > i && (i = a), i
    }

    function Xn(t, e, n, i) {
        let r = (i = i || {}).data = i.data || {}, a = i.garbageCollect = i.garbageCollect || [];
        i.font !== e && (r = i.data = {}, a = i.garbageCollect = [], i.font = e), t.save(), t.font = e;
        let o = 0;
        const s = n.length;
        let l, c, u, d, h;
        for (l = 0; l < s; l++) if (d = n[l], null == d || Te(d)) {
            if (Te(d)) for (c = 0, u = d.length; c < u; c++) h = d[c], null == h || Te(h) || (o = Jn(t, r, a, o, h))
        } else o = Jn(t, r, a, o, d);
        t.restore();
        const f = a.length / 2;
        if (f > n.length) {
            for (l = 0; l < f; l++) delete r[a[l]];
            a.splice(0, f)
        }
        return o
    }

    function $n(t, e, n) {
        const i = t.currentDevicePixelRatio, r = 0 !== n ? Math.max(n / 2, .5) : 0;
        return Math.round((e - r) * i) / i + r
    }

    function Kn(t, e) {
        (e || t) && ((e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore())
    }

    function qn(t, e, n, i) {
        ti(t, e, n, i, null)
    }

    function ti(t, e, n, i, r) {
        let a, o, s, l, c, u, d, h;
        const f = e.pointStyle, p = e.rotation, g = e.radius;
        let m = (p || 0) * $e;
        if (f && "object" == typeof f && (a = f.toString(), "[object HTMLImageElement]" === a || "[object HTMLCanvasElement]" === a)) return t.save(), t.translate(n, i), t.rotate(m), t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), void t.restore();
        if (!(isNaN(g) || g <= 0)) {
            switch (t.beginPath(), f) {
                default:
                    r ? t.ellipse(n, i, r / 2, g, 0, 0, Ge) : t.arc(n, i, g, 0, Ge), t.closePath();
                    break;
                case"triangle":
                    u = r ? r / 2 : g, t.moveTo(n + Math.sin(m) * u, i - Math.cos(m) * g), m += tn, t.lineTo(n + Math.sin(m) * u, i - Math.cos(m) * g), m += tn, t.lineTo(n + Math.sin(m) * u, i - Math.cos(m) * g), t.closePath();
                    break;
                case"rectRounded":
                    c = .516 * g, l = g - c, o = Math.cos(m + qe) * l, d = Math.cos(m + qe) * (r ? r / 2 - c : l), s = Math.sin(m + qe) * l, h = Math.sin(m + qe) * (r ? r / 2 - c : l), t.arc(n - d, i - s, c, m - He, m - Ke), t.arc(n + h, i - o, c, m - Ke, m), t.arc(n + d, i + s, c, m, m + Ke), t.arc(n - h, i + o, c, m + Ke, m + He), t.closePath();
                    break;
                case"rect":
                    if (!p) {
                        l = Math.SQRT1_2 * g, u = r ? r / 2 : l, t.rect(n - u, i - l, 2 * u, 2 * l);
                        break
                    }
                    m += qe;
                case"rectRot":
                    d = Math.cos(m) * (r ? r / 2 : g), o = Math.cos(m) * g, s = Math.sin(m) * g, h = Math.sin(m) * (r ? r / 2 : g), t.moveTo(n - d, i - s), t.lineTo(n + h, i - o), t.lineTo(n + d, i + s), t.lineTo(n - h, i + o), t.closePath();
                    break;
                case"crossRot":
                    m += qe;
                case"cross":
                    d = Math.cos(m) * (r ? r / 2 : g), o = Math.cos(m) * g, s = Math.sin(m) * g, h = Math.sin(m) * (r ? r / 2 : g), t.moveTo(n - d, i - s), t.lineTo(n + d, i + s), t.moveTo(n + h, i - o), t.lineTo(n - h, i + o);
                    break;
                case"star":
                    d = Math.cos(m) * (r ? r / 2 : g), o = Math.cos(m) * g, s = Math.sin(m) * g, h = Math.sin(m) * (r ? r / 2 : g), t.moveTo(n - d, i - s), t.lineTo(n + d, i + s), t.moveTo(n + h, i - o), t.lineTo(n - h, i + o), m += qe, d = Math.cos(m) * (r ? r / 2 : g), o = Math.cos(m) * g, s = Math.sin(m) * g, h = Math.sin(m) * (r ? r / 2 : g), t.moveTo(n - d, i - s), t.lineTo(n + d, i + s), t.moveTo(n + h, i - o), t.lineTo(n - h, i + o);
                    break;
                case"line":
                    o = r ? r / 2 : Math.cos(m) * g, s = Math.sin(m) * g, t.moveTo(n - o, i - s), t.lineTo(n + o, i + s);
                    break;
                case"dash":
                    t.moveTo(n, i), t.lineTo(n + Math.cos(m) * (r ? r / 2 : g), i + Math.sin(m) * g);
                    break;
                case!1:
                    t.closePath()
            }
            t.fill(), e.borderWidth > 0 && t.stroke()
        }
    }

    function ei(t, e, n) {
        return n = n || .5, !e || t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n
    }

    function ni(t, e) {
        t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
    }

    function ii(t) {
        t.restore()
    }

    function ri(t, e, n, i, r) {
        if (!e) return t.lineTo(n.x, n.y);
        if ("middle" === r) {
            const i = (e.x + n.x) / 2;
            t.lineTo(i, e.y), t.lineTo(i, n.y)
        } else "after" === r != !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
        t.lineTo(n.x, n.y)
    }

    function ai(t, e, n, i) {
        if (!e) return t.lineTo(n.x, n.y);
        t.bezierCurveTo(i ? e.cp1x : e.cp2x, i ? e.cp1y : e.cp2y, i ? n.cp2x : n.cp1x, i ? n.cp2y : n.cp1y, n.x, n.y)
    }

    function oi(t, e, n, i, r) {
        if (r.strikethrough || r.underline) {
            const a = t.measureText(i), o = e - a.actualBoundingBoxLeft, s = e + a.actualBoundingBoxRight,
                l = n - a.actualBoundingBoxAscent, c = n + a.actualBoundingBoxDescent,
                u = r.strikethrough ? (l + c) / 2 : c;
            t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = r.decorationWidth || 2, t.moveTo(o, u), t.lineTo(s, u), t.stroke()
        }
    }

    function si(t, e) {
        const n = t.fillStyle;
        t.fillStyle = e.color, t.fillRect(e.left, e.top, e.width, e.height), t.fillStyle = n
    }

    function li(t, e, n, i, r, a = {}) {
        const o = Te(e) ? e : [e], s = a.strokeWidth > 0 && "" !== a.strokeColor;
        let l, c;
        for (t.save(), t.font = r.string, function (t, e) {
            e.translation && t.translate(e.translation[0], e.translation[1]), ke(e.rotation) || t.rotate(e.rotation), e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), e.textBaseline && (t.textBaseline = e.textBaseline)
        }(t, a), l = 0; l < o.length; ++l) c = o[l], a.backdrop && si(t, a.backdrop), s && (a.strokeColor && (t.strokeStyle = a.strokeColor), ke(a.strokeWidth) || (t.lineWidth = a.strokeWidth), t.strokeText(c, n, i, a.maxWidth)), t.fillText(c, n, i, a.maxWidth), oi(t, n, i, c, a), i += Number(r.lineHeight);
        t.restore()
    }

    function ci(t, e) {
        const {x: n, y: i, w: r, h: a, radius: o} = e;
        t.arc(n + o.topLeft, i + o.topLeft, o.topLeft, 1.5 * He, He, !0), t.lineTo(n, i + a - o.bottomLeft), t.arc(n + o.bottomLeft, i + a - o.bottomLeft, o.bottomLeft, He, Ke, !0), t.lineTo(n + r - o.bottomRight, i + a), t.arc(n + r - o.bottomRight, i + a - o.bottomRight, o.bottomRight, Ke, 0, !0), t.lineTo(n + r, i + o.topRight), t.arc(n + r - o.topRight, i + o.topRight, o.topRight, 0, -Ke, !0), t.lineTo(n + o.topLeft, i)
    }

    const ui = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        di = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;

    function hi(t, e) {
        const n = ("" + t).match(ui);
        if (!n || "normal" === n[1]) return 1.2 * e;
        switch (t = +n[2], n[3]) {
            case"px":
                return t;
            case"%":
                t /= 100
        }
        return e * t
    }

    const fi = t => +t || 0;

    function pi(t, e) {
        const n = {}, i = Se(e), r = i ? Object.keys(e) : e,
            a = Se(t) ? i ? n => Ce(t[n], t[e[n]]) : e => t[e] : () => t;
        for (const t of r) n[t] = fi(a(t));
        return n
    }

    function gi(t) {
        return pi(t, {top: "y", right: "x", bottom: "y", left: "x"})
    }

    function mi(t) {
        return pi(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
    }

    function Mi(t) {
        const e = gi(t);
        return e.width = e.left + e.right, e.height = e.top + e.bottom, e
    }

    function yi(t, e) {
        t = t || {}, e = e || Gn.font;
        let n = Ce(t.size, e.size);
        "string" == typeof n && (n = parseInt(n, 10));
        let i = Ce(t.style, e.style);
        i && !("" + i).match(di) && (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
        const r = {
            family: Ce(t.family, e.family),
            lineHeight: hi(Ce(t.lineHeight, e.lineHeight), n),
            size: n,
            style: i,
            weight: Ce(t.weight, e.weight),
            string: ""
        };
        return r.string = function (t) {
            return !t || ke(t.size) || ke(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
        }(r), r
    }

    function bi(t, e, n, i) {
        let r, a, o, s = !0;
        for (r = 0, a = t.length; r < a; ++r) if (o = t[r], void 0 !== o && (void 0 !== e && "function" == typeof o && (o = o(e), s = !1), void 0 !== n && Te(o) && (o = o[n % o.length], s = !1), void 0 !== o)) return i && !s && (i.cacheable = !1), o
    }

    function xi(t, e) {
        return Object.assign(Object.create(t), e)
    }

    function Ai(t, e = [""], n, i, r = (() => t[0])) {
        const a = n || t;
        void 0 === i && (i = ji("_fallback", t));
        const o = {
            [Symbol.toStringTag]: "Object",
            _cacheable: !0,
            _scopes: t,
            _rootScopes: a,
            _fallback: i,
            _getTarget: r,
            override: n => Ai([n, ...t], e, a, i)
        };
        return new Proxy(o, {
            deleteProperty: (e, n) => (delete e[n], delete e._keys, delete t[0][n], !0),
            get: (n, i) => Ti(n, i, (() => function (t, e, n, i) {
                let r;
                for (const a of e) if (r = ji(Di(a, t), n), void 0 !== r) return ki(t, r) ? Ci(n, i, t, r) : r
            }(i, e, t, n))),
            getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
            getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
            has: (t, e) => Ii(t).includes(e),
            ownKeys: t => Ii(t),
            set(t, e, n) {
                const i = t._storage || (t._storage = r());
                return t[e] = i[e] = n, delete t._keys, !0
            }
        })
    }

    function vi(t, e, n, i) {
        const r = {
            _cacheable: !1,
            _proxy: t,
            _context: e,
            _subProxy: n,
            _stack: new Set,
            _descriptors: Ni(t, i),
            setContext: e => vi(t, e, n, i),
            override: r => vi(t.override(r), e, n, i)
        };
        return new Proxy(r, {
            deleteProperty: (e, n) => (delete e[n], delete t[n], !0),
            get: (t, e, n) => Ti(t, e, (() => function (t, e, n) {
                const {_proxy: i, _context: r, _subProxy: a, _descriptors: o} = t;
                let s = i[e];
                return Be(s) && o.isScriptable(e) && (s = function (t, e, n, i) {
                    const {_proxy: r, _context: a, _subProxy: o, _stack: s} = n;
                    if (s.has(t)) throw new Error("Recursion detected: " + Array.from(s).join("->") + "->" + t);
                    s.add(t);
                    let l = e(a, o || i);
                    return s.delete(t), ki(t, l) && (l = Ci(r._scopes, r, t, l)), l
                }(e, s, t, n)), Te(s) && s.length && (s = function (t, e, n, i) {
                    const {_proxy: r, _context: a, _subProxy: o, _descriptors: s} = n;
                    if (void 0 !== a.index && i(t)) return e[a.index % e.length];
                    if (Se(e[0])) {
                        const n = e, i = r._scopes.filter((t => t !== n));
                        e = [];
                        for (const l of n) {
                            const n = Ci(i, r, t, l);
                            e.push(vi(n, a, o && o[t], s))
                        }
                    }
                    return e
                }(e, s, t, o.isIndexable)), ki(e, s) && (s = vi(s, r, a && a[e], o)), s
            }(t, e, n))),
            getOwnPropertyDescriptor: (e, n) => e._descriptors.allKeys ? Reflect.has(t, n) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(t, n),
            getPrototypeOf: () => Reflect.getPrototypeOf(t),
            has: (e, n) => Reflect.has(t, n),
            ownKeys: () => Reflect.ownKeys(t),
            set: (e, n, i) => (t[n] = i, delete e[n], !0)
        })
    }

    function Ni(t, e = {scriptable: !0, indexable: !0}) {
        const {_scriptable: n = e.scriptable, _indexable: i = e.indexable, _allKeys: r = e.allKeys} = t;
        return {
            allKeys: r,
            scriptable: n,
            indexable: i,
            isScriptable: Be(n) ? n : () => n,
            isIndexable: Be(i) ? i : () => i
        }
    }

    const Di = (t, e) => t ? t + Qe(e) : e,
        ki = (t, e) => Se(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);

    function Ti(t, e, n) {
        if (Object.prototype.hasOwnProperty.call(t, e) || "constructor" === e) return t[e];
        const i = n();
        return t[e] = i, i
    }

    function Si(t, e, n) {
        return Be(t) ? t(e, n) : t
    }

    const wi = (t, e) => !0 === t ? e : "string" == typeof t ? We(e, t) : void 0;

    function Ei(t, e, n, i, r) {
        for (const a of e) {
            const e = wi(n, a);
            if (e) {
                t.add(e);
                const a = Si(e._fallback, n, r);
                if (void 0 !== a && a !== n && a !== i) return a
            } else if (!1 === e && void 0 !== i && n !== i) return null
        }
        return !1
    }

    function Ci(t, e, n, i) {
        const r = e._rootScopes, a = Si(e._fallback, n, i), o = [...t, ...r], s = new Set;
        s.add(i);
        let l = zi(s, o, n, a || n, i);
        return null !== l && (void 0 === a || a === n || (l = zi(s, o, a, l, i), null !== l)) && Ai(Array.from(s), [""], r, a, (() => function (t, e, n) {
            const i = t._getTarget();
            e in i || (i[e] = {});
            const r = i[e];
            return Te(r) && Se(n) ? n : r || {}
        }(e, n, i)))
    }

    function zi(t, e, n, i, r) {
        for (; n;) n = Ei(t, e, n, i, r);
        return n
    }

    function ji(t, e) {
        for (const n of e) {
            if (!n) continue;
            const e = n[t];
            if (void 0 !== e) return e
        }
    }

    function Ii(t) {
        let e = t._keys;
        return e || (e = t._keys = function (t) {
            const e = new Set;
            for (const n of t) for (const t of Object.keys(n).filter((t => !t.startsWith("_")))) e.add(t);
            return Array.from(e)
        }(t._scopes)), e
    }

    function _i(t, e, n, i) {
        const {iScale: r} = t, {key: a = "r"} = this._parsing, o = new Array(i);
        let s, l, c, u;
        for (s = 0, l = i; s < l; ++s) c = s + n, u = e[c], o[s] = {r: r.parse(We(u, a), c)};
        return o
    }

    const Oi = Number.EPSILON || 1e-14, Li = (t, e) => e < t.length && !t[e].skip && t[e],
        Ui = t => "x" === t ? "y" : "x";

    function Ri(t, e, n, i) {
        const r = t.skip ? e : t, a = e, o = n.skip ? e : n, s = hn(a, r), l = hn(o, a);
        let c = s / (s + l), u = l / (s + l);
        c = isNaN(c) ? 0 : c, u = isNaN(u) ? 0 : u;
        const d = i * c, h = i * u;
        return {
            previous: {x: a.x - d * (o.x - r.x), y: a.y - d * (o.y - r.y)},
            next: {x: a.x + h * (o.x - r.x), y: a.y + h * (o.y - r.y)}
        }
    }

    function Vi(t, e, n) {
        return Math.max(Math.min(t, n), e)
    }

    function Fi(t, e, n, i, r) {
        let a, o, s, l;
        if (e.spanGaps && (t = t.filter((t => !t.skip))), "monotone" === e.cubicInterpolationMode) !function (t, e = "x") {
            const n = Ui(e), i = t.length, r = Array(i).fill(0), a = Array(i);
            let o, s, l, c = Li(t, 0);
            for (o = 0; o < i; ++o) if (s = l, l = c, c = Li(t, o + 1), l) {
                if (c) {
                    const t = c[e] - l[e];
                    r[o] = 0 !== t ? (c[n] - l[n]) / t : 0
                }
                a[o] = s ? c ? nn(r[o - 1]) !== nn(r[o]) ? 0 : (r[o - 1] + r[o]) / 2 : r[o - 1] : r[o]
            }
            !function (t, e, n) {
                const i = t.length;
                let r, a, o, s, l, c = Li(t, 0);
                for (let u = 0; u < i - 1; ++u) l = c, c = Li(t, u + 1), l && c && (rn(e[u], 0, Oi) ? n[u] = n[u + 1] = 0 : (r = n[u] / e[u], a = n[u + 1] / e[u], s = Math.pow(r, 2) + Math.pow(a, 2), s <= 9 || (o = 3 / Math.sqrt(s), n[u] = r * o * e[u], n[u + 1] = a * o * e[u])))
            }(t, r, a), function (t, e, n = "x") {
                const i = Ui(n), r = t.length;
                let a, o, s, l = Li(t, 0);
                for (let c = 0; c < r; ++c) {
                    if (o = s, s = l, l = Li(t, c + 1), !s) continue;
                    const r = s[n], u = s[i];
                    o && (a = (r - o[n]) / 3, s[`cp1${n}`] = r - a, s[`cp1${i}`] = u - a * e[c]), l && (a = (l[n] - r) / 3, s[`cp2${n}`] = r + a, s[`cp2${i}`] = u + a * e[c])
                }
            }(t, a, e)
        }(t, r); else {
            let n = i ? t[t.length - 1] : t[0];
            for (a = 0, o = t.length; a < o; ++a) s = t[a], l = Ri(n, s, t[Math.min(a + 1, o - (i ? 0 : 1)) % o], e.tension), s.cp1x = l.previous.x, s.cp1y = l.previous.y, s.cp2x = l.next.x, s.cp2y = l.next.y, n = s
        }
        e.capBezierPoints && function (t, e) {
            let n, i, r, a, o, s = ei(t[0], e);
            for (n = 0, i = t.length; n < i; ++n) o = a, a = s, s = n < i - 1 && ei(t[n + 1], e), a && (r = t[n], o && (r.cp1x = Vi(r.cp1x, e.left, e.right), r.cp1y = Vi(r.cp1y, e.top, e.bottom)), s && (r.cp2x = Vi(r.cp2x, e.left, e.right), r.cp2y = Vi(r.cp2y, e.top, e.bottom)))
        }(t, n)
    }

    function Pi() {
        return "undefined" != typeof window && "undefined" != typeof document
    }

    function Wi(t) {
        let e = t.parentNode;
        return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
    }

    function Qi(t, e, n) {
        let i;
        return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
    }

    const Yi = t => t.ownerDocument.defaultView.getComputedStyle(t, null), Bi = ["top", "right", "bottom", "left"];

    function Zi(t, e, n) {
        const i = {};
        n = n ? "-" + n : "";
        for (let r = 0; r < 4; r++) {
            const a = Bi[r];
            i[a] = parseFloat(t[e + "-" + a + n]) || 0
        }
        return i.width = i.left + i.right, i.height = i.top + i.bottom, i
    }

    const Hi = (t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot);

    function Gi(t, e) {
        if ("native" in t) return t;
        const {canvas: n, currentDevicePixelRatio: i} = e, r = Yi(n), a = "border-box" === r.boxSizing,
            o = Zi(r, "padding"), s = Zi(r, "border", "width"), {x: l, y: c, box: u} = function (t, e) {
                const n = t.touches, i = n && n.length ? n[0] : t, {offsetX: r, offsetY: a} = i;
                let o, s, l = !1;
                if (Hi(r, a, t.target)) o = r, s = a; else {
                    const t = e.getBoundingClientRect();
                    o = i.clientX - t.left, s = i.clientY - t.top, l = !0
                }
                return {x: o, y: s, box: l}
            }(t, n), d = o.left + (u && s.left), h = o.top + (u && s.top);
        let {width: f, height: p} = e;
        return a && (f -= o.width + s.width, p -= o.height + s.height), {
            x: Math.round((l - d) / f * n.width / i),
            y: Math.round((c - h) / p * n.height / i)
        }
    }

    const Ji = t => Math.round(10 * t) / 10;

    function Xi(t, e, n) {
        const i = e || 1, r = Math.floor(t.height * i), a = Math.floor(t.width * i);
        t.height = Math.floor(t.height), t.width = Math.floor(t.width);
        const o = t.canvas;
        return o.style && (n || !o.style.height && !o.style.width) && (o.style.height = `${t.height}px`, o.style.width = `${t.width}px`), (t.currentDevicePixelRatio !== i || o.height !== r || o.width !== a) && (t.currentDevicePixelRatio = i, o.height = r, o.width = a, t.ctx.setTransform(i, 0, 0, i, 0, 0), !0)
    }

    const $i = function () {
        let t = !1;
        try {
            const e = {
                get passive() {
                    return t = !0, !1
                }
            };
            Pi() && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e))
        } catch (t) {
        }
        return t
    }();

    function Ki(t, e) {
        const n = function (t, e) {
            return Yi(t).getPropertyValue(e)
        }(t, e), i = n && n.match(/^(\d+)(\.\d+)?px$/);
        return i ? +i[1] : void 0
    }

    function qi(t, e, n, i) {
        return {x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y)}
    }

    function tr(t, e, n, i) {
        return {
            x: t.x + n * (e.x - t.x),
            y: "middle" === i ? n < .5 ? t.y : e.y : "after" === i ? n < 1 ? t.y : e.y : n > 0 ? e.y : t.y
        }
    }

    function er(t, e, n, i) {
        const r = {x: t.cp2x, y: t.cp2y}, a = {x: e.cp1x, y: e.cp1y}, o = qi(t, r, n), s = qi(r, a, n), l = qi(a, e, n),
            c = qi(o, s, n), u = qi(s, l, n);
        return qi(c, u, n)
    }

    function nr(t, e, n) {
        return t ? function (t, e) {
            return {
                x: n => t + t + e - n,
                setWidth(t) {
                    e = t
                },
                textAlign: t => "center" === t ? t : "right" === t ? "left" : "right",
                xPlus: (t, e) => t - e,
                leftForLtr: (t, e) => t - e
            }
        }(e, n) : {
            x: t => t, setWidth(t) {
            }, textAlign: t => t, xPlus: (t, e) => t + e, leftForLtr: (t, e) => t
        }
    }

    function ir(t, e) {
        let n, i;
        "ltr" !== e && "rtl" !== e || (n = t.canvas.style, i = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = i)
    }

    function rr(t, e) {
        void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
    }

    function ar(t) {
        return "angle" === t ? {between: gn, compare: fn, normalize: pn} : {
            between: Mn,
            compare: (t, e) => t - e,
            normalize: t => t
        }
    }

    function or({start: t, end: e, count: n, loop: i, style: r}) {
        return {start: t % n, end: e % n, loop: i && (e - t + 1) % n == 0, style: r}
    }

    function sr(t, e, n) {
        if (!n) return [t];
        const {property: i, start: r, end: a} = n, o = e.length, {
            compare: s,
            between: l,
            normalize: c
        } = ar(i), {start: u, end: d, loop: h, style: f} = function (t, e, n) {
            const {property: i, start: r, end: a} = n, {between: o, normalize: s} = ar(i), l = e.length;
            let c, u, {start: d, end: h, loop: f} = t;
            if (f) {
                for (d += l, h += l, c = 0, u = l; c < u && o(s(e[d % l][i]), r, a); ++c) d--, h--;
                d %= l, h %= l
            }
            return h < d && (h += l), {start: d, end: h, loop: f, style: t.style}
        }(t, e, n), p = [];
        let g, m, M, y = !1, b = null;
        for (let t = u, n = u; t <= d; ++t) m = e[t % o], m.skip || (g = c(m[i]), g !== M && (y = l(g, r, a), null === b && (y || l(r, M, g) && 0 !== s(r, M)) && (b = 0 === s(g, r) ? t : n), null !== b && (!y || 0 === s(a, g) || l(a, M, g)) && (p.push(or({
            start: b,
            end: t,
            loop: h,
            count: o,
            style: f
        })), b = null), n = t, M = g));
        return null !== b && p.push(or({start: b, end: d, loop: h, count: o, style: f})), p
    }

    function lr(t, e) {
        const n = [], i = t.segments;
        for (let r = 0; r < i.length; r++) {
            const a = sr(i[r], t.points, e);
            a.length && n.push(...a)
        }
        return n
    }

    function cr(t) {
        return {
            backgroundColor: t.backgroundColor,
            borderCapStyle: t.borderCapStyle,
            borderDash: t.borderDash,
            borderDashOffset: t.borderDashOffset,
            borderJoinStyle: t.borderJoinStyle,
            borderWidth: t.borderWidth,
            borderColor: t.borderColor
        }
    }

    function ur(t, e) {
        if (!e) return !1;
        const n = [], i = function (t, e) {
            return _n(e) ? (n.includes(e) || n.push(e), n.indexOf(e)) : e
        };
        return JSON.stringify(t, i) !== JSON.stringify(e, i)
    }

    class dr {
        constructor() {
            this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
        }

        _notify(t, e, n, i) {
            const r = e.listeners[i], a = e.duration;
            r.forEach((i => i({chart: t, initial: e.initial, numSteps: a, currentStep: Math.min(n - e.start, a)})))
        }

        _refresh() {
            this._request || (this._running = !0, this._request = Dn.call(window, (() => {
                this._update(), this._request = null, this._running && this._refresh()
            })))
        }

        _update(t = Date.now()) {
            let e = 0;
            this._charts.forEach(((n, i) => {
                if (!n.running || !n.items.length) return;
                const r = n.items;
                let a, o = r.length - 1, s = !1;
                for (; o >= 0; --o) a = r[o], a._active ? (a._total > n.duration && (n.duration = a._total), a.tick(t), s = !0) : (r[o] = r[r.length - 1], r.pop());
                s && (i.draw(), this._notify(i, n, t, "progress")), r.length || (n.running = !1, this._notify(i, n, t, "complete"), n.initial = !1), e += r.length
            })), this._lastDate = t, 0 === e && (this._running = !1)
        }

        _getAnims(t) {
            const e = this._charts;
            let n = e.get(t);
            return n || (n = {
                running: !1,
                initial: !0,
                items: [],
                listeners: {complete: [], progress: []}
            }, e.set(t, n)), n
        }

        listen(t, e, n) {
            this._getAnims(t).listeners[e].push(n)
        }

        add(t, e) {
            e && e.length && this._getAnims(t).items.push(...e)
        }

        has(t) {
            return this._getAnims(t).items.length > 0
        }

        start(t) {
            const e = this._charts.get(t);
            e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce(((t, e) => Math.max(t, e._duration)), 0), this._refresh())
        }

        running(t) {
            if (!this._running) return !1;
            const e = this._charts.get(t);
            return !!(e && e.running && e.items.length)
        }

        stop(t) {
            const e = this._charts.get(t);
            if (!e || !e.items.length) return;
            const n = e.items;
            let i = n.length - 1;
            for (; i >= 0; --i) n[i].cancel();
            e.items = [], this._notify(t, e, Date.now(), "complete")
        }

        remove(t) {
            return this._charts.delete(t)
        }
    }

    var hr = new dr;
    const fr = "transparent", pr = {
        boolean: (t, e, n) => n > .5 ? e : t, color(t, e, n) {
            const i = On(t || fr), r = i.valid && On(e || fr);
            return r && r.valid ? r.mix(i, n).hexString() : e
        }, number: (t, e, n) => t + (e - t) * n
    };

    class gr {
        constructor(t, e, n, i) {
            const r = e[n];
            i = bi([t.to, i, r, t.from]);
            const a = bi([t.from, r, i]);
            this._active = !0, this._fn = t.fn || pr[t.type || typeof a], this._easing = In[t.easing] || In.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = n, this._from = a, this._to = i, this._promises = void 0
        }

        active() {
            return this._active
        }

        update(t, e, n) {
            if (this._active) {
                this._notify(!1);
                const i = this._target[this._prop], r = n - this._start, a = this._duration - r;
                this._start = n, this._duration = Math.floor(Math.max(a, t.duration)), this._total += r, this._loop = !!t.loop, this._to = bi([t.to, e, i, t.from]), this._from = bi([t.from, i, e])
            }
        }

        cancel() {
            this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1))
        }

        tick(t) {
            const e = t - this._start, n = this._duration, i = this._prop, r = this._from, a = this._loop, o = this._to;
            let s;
            if (this._active = r !== o && (a || e < n), !this._active) return this._target[i] = o, void this._notify(!0);
            e < 0 ? this._target[i] = r : (s = e / n % 2, s = a && s > 1 ? 2 - s : s, s = this._easing(Math.min(1, Math.max(0, s))), this._target[i] = this._fn(r, o, s))
        }

        wait() {
            const t = this._promises || (this._promises = []);
            return new Promise(((e, n) => {
                t.push({res: e, rej: n})
            }))
        }

        _notify(t) {
            const e = t ? "res" : "rej", n = this._promises || [];
            for (let t = 0; t < n.length; t++) n[t][e]()
        }
    }

    class mr {
        constructor(t, e) {
            this._chart = t, this._properties = new Map, this.configure(e)
        }

        configure(t) {
            if (!Se(t)) return;
            const e = Object.keys(Gn.animation), n = this._properties;
            Object.getOwnPropertyNames(t).forEach((i => {
                const r = t[i];
                if (!Se(r)) return;
                const a = {};
                for (const t of e) a[t] = r[t];
                (Te(r.properties) && r.properties || [i]).forEach((t => {
                    t !== i && n.has(t) || n.set(t, a)
                }))
            }))
        }

        _animateOptions(t, e) {
            const n = e.options, i = function (t, e) {
                if (!e) return;
                let n = t.options;
                if (n) return n.$shared && (t.options = n = Object.assign({}, n, {$shared: !1, $animations: {}})), n;
                t.options = e
            }(t, n);
            if (!i) return [];
            const r = this._createAnimations(i, n);
            return n.$shared && function (t, e) {
                const n = [], i = Object.keys(e);
                for (let e = 0; e < i.length; e++) {
                    const r = t[i[e]];
                    r && r.active() && n.push(r.wait())
                }
                return Promise.all(n)
            }(t.options.$animations, n).then((() => {
                t.options = n
            }), (() => {
            })), r
        }

        _createAnimations(t, e) {
            const n = this._properties, i = [], r = t.$animations || (t.$animations = {}), a = Object.keys(e),
                o = Date.now();
            let s;
            for (s = a.length - 1; s >= 0; --s) {
                const l = a[s];
                if ("$" === l.charAt(0)) continue;
                if ("options" === l) {
                    i.push(...this._animateOptions(t, e));
                    continue
                }
                const c = e[l];
                let u = r[l];
                const d = n.get(l);
                if (u) {
                    if (d && u.active()) {
                        u.update(d, c, o);
                        continue
                    }
                    u.cancel()
                }
                d && d.duration ? (r[l] = u = new gr(d, t, l, c), i.push(u)) : t[l] = c
            }
            return i
        }

        update(t, e) {
            if (0 === this._properties.size) return void Object.assign(t, e);
            const n = this._createAnimations(t, e);
            return n.length ? (hr.add(this._chart, n), !0) : void 0
        }
    }

    function Mr(t, e) {
        const n = t && t.options || {}, i = n.reverse, r = void 0 === n.min ? e : 0, a = void 0 === n.max ? e : 0;
        return {start: i ? a : r, end: i ? r : a}
    }

    function yr(t, e) {
        const n = [], i = t._getSortedDatasetMetas(e);
        let r, a;
        for (r = 0, a = i.length; r < a; ++r) n.push(i[r].index);
        return n
    }

    function br(t, e, n, i = {}) {
        const r = t.keys, a = "single" === i.mode;
        let o, s, l, c;
        if (null !== e) {
            for (o = 0, s = r.length; o < s; ++o) {
                if (l = +r[o], l === n) {
                    if (i.all) continue;
                    break
                }
                c = t.values[l], we(c) && (a || 0 === e || nn(e) === nn(c)) && (e += c)
            }
            return e
        }
    }

    function xr(t, e) {
        const n = t && t.options.stacked;
        return n || void 0 === n && void 0 !== e.stack
    }

    function Ar(t, e, n) {
        const i = t[e] || (t[e] = {});
        return i[n] || (i[n] = {})
    }

    function vr(t, e, n, i) {
        for (const r of e.getMatchingVisibleMetas(i).reverse()) {
            const e = t[r.index];
            if (n && e > 0 || !n && e < 0) return r.index
        }
        return null
    }

    function Nr(t, e) {
        const {chart: n, _cachedMeta: i} = t, r = n._stacks || (n._stacks = {}), {iScale: a, vScale: o, index: s} = i,
            l = a.axis, c = o.axis, u = function (t, e, n) {
                return `${t.id}.${e.id}.${n.stack || n.type}`
            }(a, o, i), d = e.length;
        let h;
        for (let t = 0; t < d; ++t) {
            const n = e[t], {[l]: a, [c]: d} = n;
            h = (n._stacks || (n._stacks = {}))[c] = Ar(r, u, a), h[s] = d, h._top = vr(h, o, !0, i.type), h._bottom = vr(h, o, !1, i.type), (h._visualValues || (h._visualValues = {}))[s] = d
        }
    }

    function Dr(t, e) {
        const n = t.scales;
        return Object.keys(n).filter((t => n[t].axis === e)).shift()
    }

    function kr(t, e) {
        const n = t.controller.index, i = t.vScale && t.vScale.axis;
        if (i) {
            e = e || t._parsed;
            for (const t of e) {
                const e = t._stacks;
                if (!e || void 0 === e[i] || void 0 === e[i][n]) return;
                delete e[i][n], void 0 !== e[i]._visualValues && void 0 !== e[i]._visualValues[n] && delete e[i]._visualValues[n]
            }
        }
    }

    const Tr = t => "reset" === t || "none" === t, Sr = (t, e) => e ? t : Object.assign({}, t);

    class wr {
        static defaults = {};
        static datasetElementType = null;
        static dataElementType = null;

        constructor(t, e) {
            this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize()
        }

        initialize() {
            const t = this._cachedMeta;
            this.configure(), this.linkScales(), t._stacked = xr(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")
        }

        updateIndex(t) {
            this.index !== t && kr(this._cachedMeta), this.index = t
        }

        linkScales() {
            const t = this.chart, e = this._cachedMeta, n = this.getDataset(),
                i = (t, e, n, i) => "x" === t ? e : "r" === t ? i : n, r = e.xAxisID = Ce(n.xAxisID, Dr(t, "x")),
                a = e.yAxisID = Ce(n.yAxisID, Dr(t, "y")), o = e.rAxisID = Ce(n.rAxisID, Dr(t, "r")), s = e.indexAxis,
                l = e.iAxisID = i(s, r, a, o), c = e.vAxisID = i(s, a, r, o);
            e.xScale = this.getScaleForId(r), e.yScale = this.getScaleForId(a), e.rScale = this.getScaleForId(o), e.iScale = this.getScaleForId(l), e.vScale = this.getScaleForId(c)
        }

        getDataset() {
            return this.chart.data.datasets[this.index]
        }

        getMeta() {
            return this.chart.getDatasetMeta(this.index)
        }

        getScaleForId(t) {
            return this.chart.scales[t]
        }

        _getOtherScale(t) {
            const e = this._cachedMeta;
            return t === e.iScale ? e.vScale : e.iScale
        }

        reset() {
            this._update("reset")
        }

        _destroy() {
            const t = this._cachedMeta;
            this._data && vn(this._data, this), t._stacked && kr(t)
        }

        _dataCheck() {
            const t = this.getDataset(), e = t.data || (t.data = []), n = this._data;
            if (Se(e)) {
                const t = this._cachedMeta;
                this._data = function (t, e) {
                    const {iScale: n, vScale: i} = e, r = "x" === n.axis ? "x" : "y", a = "x" === i.axis ? "x" : "y",
                        o = Object.keys(t), s = new Array(o.length);
                    let l, c, u;
                    for (l = 0, c = o.length; l < c; ++l) u = o[l], s[l] = {[r]: u, [a]: t[u]};
                    return s
                }(e, t)
            } else if (n !== e) {
                if (n) {
                    vn(n, this);
                    const t = this._cachedMeta;
                    kr(t), t._parsed = []
                }
                e && Object.isExtensible(e) && ((i = e)._chartjs ? i._chartjs.listeners.push(this) : (Object.defineProperty(i, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: {listeners: [this]}
                }), An.forEach((t => {
                    const e = "_onData" + Qe(t), n = i[t];
                    Object.defineProperty(i, t, {
                        configurable: !0, enumerable: !1, value(...t) {
                            const r = n.apply(this, t);
                            return i._chartjs.listeners.forEach((n => {
                                "function" == typeof n[e] && n[e](...t)
                            })), r
                        }
                    })
                })))), this._syncList = [], this._data = e
            }
            var i
        }

        addElements() {
            const t = this._cachedMeta;
            this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType)
        }

        buildOrUpdateElements(t) {
            const e = this._cachedMeta, n = this.getDataset();
            let i = !1;
            this._dataCheck();
            const r = e._stacked;
            e._stacked = xr(e.vScale, e), e.stack !== n.stack && (i = !0, kr(e), e.stack = n.stack), this._resyncElements(t), (i || r !== e._stacked) && Nr(this, e._parsed)
        }

        configure() {
            const t = this.chart.config, e = t.datasetScopeKeys(this._type),
                n = t.getOptionScopes(this.getDataset(), e, !0);
            this.options = t.createResolver(n, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {}
        }

        parse(t, e) {
            const {_cachedMeta: n, _data: i} = this, {iScale: r, _stacked: a} = n, o = r.axis;
            let s, l, c, u = 0 === t && e === i.length || n._sorted, d = t > 0 && n._parsed[t - 1];
            if (!1 === this._parsing) n._parsed = i, n._sorted = !0, c = i; else {
                c = Te(i[t]) ? this.parseArrayData(n, i, t, e) : Se(i[t]) ? this.parseObjectData(n, i, t, e) : this.parsePrimitiveData(n, i, t, e);
                const r = () => null === l[o] || d && l[o] < d[o];
                for (s = 0; s < e; ++s) n._parsed[s + t] = l = c[s], u && (r() && (u = !1), d = l);
                n._sorted = u
            }
            a && Nr(this, c)
        }

        parsePrimitiveData(t, e, n, i) {
            const {iScale: r, vScale: a} = t, o = r.axis, s = a.axis, l = r.getLabels(), c = r === a, u = new Array(i);
            let d, h, f;
            for (d = 0, h = i; d < h; ++d) f = d + n, u[d] = {[o]: c || r.parse(l[f], f), [s]: a.parse(e[f], f)};
            return u
        }

        parseArrayData(t, e, n, i) {
            const {xScale: r, yScale: a} = t, o = new Array(i);
            let s, l, c, u;
            for (s = 0, l = i; s < l; ++s) c = s + n, u = e[c], o[s] = {x: r.parse(u[0], c), y: a.parse(u[1], c)};
            return o
        }

        parseObjectData(t, e, n, i) {
            const {xScale: r, yScale: a} = t, {xAxisKey: o = "x", yAxisKey: s = "y"} = this._parsing, l = new Array(i);
            let c, u, d, h;
            for (c = 0, u = i; c < u; ++c) d = c + n, h = e[d], l[c] = {
                x: r.parse(We(h, o), d),
                y: a.parse(We(h, s), d)
            };
            return l
        }

        getParsed(t) {
            return this._cachedMeta._parsed[t]
        }

        getDataElement(t) {
            return this._cachedMeta.data[t]
        }

        applyStack(t, e, n) {
            const i = this.chart, r = this._cachedMeta, a = e[t.axis];
            return br({keys: yr(i, !0), values: e._stacks[t.axis]._visualValues}, a, r.index, {mode: n})
        }

        updateRangeFromParsed(t, e, n, i) {
            const r = n[e.axis];
            let a = null === r ? NaN : r;
            const o = i && n._stacks[e.axis];
            i && o && (i.values = o, a = br(i, r, this._cachedMeta.index)), t.min = Math.min(t.min, a), t.max = Math.max(t.max, a)
        }

        getMinMax(t, e) {
            const n = this._cachedMeta, i = n._parsed, r = n._sorted && t === n.iScale, a = i.length,
                o = this._getOtherScale(t),
                s = ((t, e, n) => t && !e.hidden && e._stacked && {keys: yr(n, !0), values: null})(e, n, this.chart),
                l = {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY}, {min: c, max: u} = function (t) {
                    const {min: e, max: n, minDefined: i, maxDefined: r} = t.getUserBounds();
                    return {min: i ? e : Number.NEGATIVE_INFINITY, max: r ? n : Number.POSITIVE_INFINITY}
                }(o);
            let d, h;

            function f() {
                h = i[d];
                const e = h[o.axis];
                return !we(h[t.axis]) || c > e || u < e
            }

            for (d = 0; d < a && (f() || (this.updateRangeFromParsed(l, t, h, s), !r)); ++d) ;
            if (r) for (d = a - 1; d >= 0; --d) if (!f()) {
                this.updateRangeFromParsed(l, t, h, s);
                break
            }
            return l
        }

        getAllParsedValues(t) {
            const e = this._cachedMeta._parsed, n = [];
            let i, r, a;
            for (i = 0, r = e.length; i < r; ++i) a = e[i][t.axis], we(a) && n.push(a);
            return n
        }

        getMaxOverflow() {
            return !1
        }

        getLabelAndValue(t) {
            const e = this._cachedMeta, n = e.iScale, i = e.vScale, r = this.getParsed(t);
            return {
                label: n ? "" + n.getLabelForValue(r[n.axis]) : "",
                value: i ? "" + i.getLabelForValue(r[i.axis]) : ""
            }
        }

        _update(t) {
            const e = this._cachedMeta;
            this.update(t || "default"), e._clip = function (t) {
                let e, n, i, r;
                return Se(t) ? (e = t.top, n = t.right, i = t.bottom, r = t.left) : e = n = i = r = t, {
                    top: e,
                    right: n,
                    bottom: i,
                    left: r,
                    disabled: !1 === t
                }
            }(Ce(this.options.clip, function (t, e, n) {
                if (!1 === n) return !1;
                const i = Mr(t, n), r = Mr(e, n);
                return {top: r.end, right: i.end, bottom: r.start, left: i.start}
            }(e.xScale, e.yScale, this.getMaxOverflow())))
        }

        update(t) {
        }

        draw() {
            const t = this._ctx, e = this.chart, n = this._cachedMeta, i = n.data || [], r = e.chartArea, a = [],
                o = this._drawStart || 0, s = this._drawCount || i.length - o, l = this.options.drawActiveElementsOnTop;
            let c;
            for (n.dataset && n.dataset.draw(t, r, o, s), c = o; c < o + s; ++c) {
                const e = i[c];
                e.hidden || (e.active && l ? a.push(e) : e.draw(t, r))
            }
            for (c = 0; c < a.length; ++c) a[c].draw(t, r)
        }

        getStyle(t, e) {
            const n = e ? "active" : "default";
            return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(n) : this.resolveDataElementOptions(t || 0, n)
        }

        getContext(t, e, n) {
            const i = this.getDataset();
            let r;
            if (t >= 0 && t < this._cachedMeta.data.length) {
                const e = this._cachedMeta.data[t];
                r = e.$context || (e.$context = function (t, e, n) {
                    return xi(t, {
                        active: !1,
                        dataIndex: e,
                        parsed: void 0,
                        raw: void 0,
                        element: n,
                        index: e,
                        mode: "default",
                        type: "data"
                    })
                }(this.getContext(), t, e)), r.parsed = this.getParsed(t), r.raw = i.data[t], r.index = r.dataIndex = t
            } else r = this.$context || (this.$context = function (t, e) {
                return xi(t, {active: !1, dataset: void 0, datasetIndex: e, index: e, mode: "default", type: "dataset"})
            }(this.chart.getContext(), this.index)), r.dataset = i, r.index = r.datasetIndex = this.index;
            return r.active = !!e, r.mode = n, r
        }

        resolveDatasetElementOptions(t) {
            return this._resolveElementOptions(this.datasetElementType.id, t)
        }

        resolveDataElementOptions(t, e) {
            return this._resolveElementOptions(this.dataElementType.id, e, t)
        }

        _resolveElementOptions(t, e = "default", n) {
            const i = "active" === e, r = this._cachedDataOpts, a = t + "-" + e, o = r[a],
                s = this.enableOptionSharing && Ye(n);
            if (o) return Sr(o, s);
            const l = this.chart.config, c = l.datasetElementScopeKeys(this._type, t),
                u = i ? [`${t}Hover`, "hover", t, ""] : [t, ""], d = l.getOptionScopes(this.getDataset(), c),
                h = Object.keys(Gn.elements[t]), f = l.resolveNamedOptions(d, h, (() => this.getContext(n, i, e)), u);
            return f.$shared && (f.$shared = s, r[a] = Object.freeze(Sr(f, s))), f
        }

        _resolveAnimations(t, e, n) {
            const i = this.chart, r = this._cachedDataOpts, a = `animation-${e}`, o = r[a];
            if (o) return o;
            let s;
            if (!1 !== i.options.animation) {
                const i = this.chart.config, r = i.datasetAnimationScopeKeys(this._type, e),
                    a = i.getOptionScopes(this.getDataset(), r);
                s = i.createResolver(a, this.getContext(t, n, e))
            }
            const l = new mr(i, s && s.animations);
            return s && s._cacheable && (r[a] = Object.freeze(l)), l
        }

        getSharedOptions(t) {
            if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
        }

        includeOptions(t, e) {
            return !e || Tr(t) || this.chart._animationsDisabled
        }

        _getSharedOptions(t, e) {
            const n = this.resolveDataElementOptions(t, e), i = this._sharedOptions, r = this.getSharedOptions(n),
                a = this.includeOptions(e, r) || r !== i;
            return this.updateSharedOptions(r, e, n), {sharedOptions: r, includeOptions: a}
        }

        updateElement(t, e, n, i) {
            Tr(i) ? Object.assign(t, n) : this._resolveAnimations(e, i).update(t, n)
        }

        updateSharedOptions(t, e, n) {
            t && !Tr(e) && this._resolveAnimations(void 0, e).update(t, n)
        }

        _setStyle(t, e, n, i) {
            t.active = i;
            const r = this.getStyle(e, i);
            this._resolveAnimations(e, n, i).update(t, {options: !i && this.getSharedOptions(r) || r})
        }

        removeHoverStyle(t, e, n) {
            this._setStyle(t, n, "active", !1)
        }

        setHoverStyle(t, e, n) {
            this._setStyle(t, n, "active", !0)
        }

        _removeDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !1)
        }

        _setDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !0)
        }

        _resyncElements(t) {
            const e = this._data, n = this._cachedMeta.data;
            for (const [t, e, n] of this._syncList) this[t](e, n);
            this._syncList = [];
            const i = n.length, r = e.length, a = Math.min(r, i);
            a && this.parse(0, a), r > i ? this._insertElements(i, r - i, t) : r < i && this._removeElements(r, i - r)
        }

        _insertElements(t, e, n = !0) {
            const i = this._cachedMeta, r = i.data, a = t + e;
            let o;
            const s = t => {
                for (t.length += e, o = t.length - 1; o >= a; o--) t[o] = t[o - e]
            };
            for (s(r), o = t; o < a; ++o) r[o] = new this.dataElementType;
            this._parsing && s(i._parsed), this.parse(t, e), n && this.updateElements(r, t, e, "reset")
        }

        updateElements(t, e, n, i) {
        }

        _removeElements(t, e) {
            const n = this._cachedMeta;
            if (this._parsing) {
                const i = n._parsed.splice(t, e);
                n._stacked && kr(n, i)
            }
            n.data.splice(t, e)
        }

        _sync(t) {
            if (this._parsing) this._syncList.push(t); else {
                const [e, n, i] = t;
                this[e](n, i)
            }
            this.chart._dataChanges.push([this.index, ...t])
        }

        _onDataPush() {
            const t = arguments.length;
            this._sync(["_insertElements", this.getDataset().data.length - t, t])
        }

        _onDataPop() {
            this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
        }

        _onDataShift() {
            this._sync(["_removeElements", 0, 1])
        }

        _onDataSplice(t, e) {
            e && this._sync(["_removeElements", t, e]);
            const n = arguments.length - 2;
            n && this._sync(["_insertElements", t, n])
        }

        _onDataUnshift() {
            this._sync(["_insertElements", 0, arguments.length])
        }
    }

    function Er(t) {
        const e = t.iScale, n = function (t, e) {
            if (!t._cache.$bar) {
                const n = t.getMatchingVisibleMetas(e);
                let i = [];
                for (let e = 0, r = n.length; e < r; e++) i = i.concat(n[e].controller.getAllParsedValues(t));
                t._cache.$bar = Nn(i.sort(((t, e) => t - e)))
            }
            return t._cache.$bar
        }(e, t.type);
        let i, r, a, o, s = e._length;
        const l = () => {
            32767 !== a && -32768 !== a && (Ye(o) && (s = Math.min(s, Math.abs(a - o) || s)), o = a)
        };
        for (i = 0, r = n.length; i < r; ++i) a = e.getPixelForValue(n[i]), l();
        for (o = void 0, i = 0, r = e.ticks.length; i < r; ++i) a = e.getPixelForTick(i), l();
        return s
    }

    function Cr(t, e, n, i) {
        return Te(t) ? function (t, e, n, i) {
            const r = n.parse(t[0], i), a = n.parse(t[1], i), o = Math.min(r, a), s = Math.max(r, a);
            let l = o, c = s;
            Math.abs(o) > Math.abs(s) && (l = s, c = o), e[n.axis] = c, e._custom = {
                barStart: l,
                barEnd: c,
                start: r,
                end: a,
                min: o,
                max: s
            }
        }(t, e, n, i) : e[n.axis] = n.parse(t, i), e
    }

    function zr(t, e, n, i) {
        const r = t.iScale, a = t.vScale, o = r.getLabels(), s = r === a, l = [];
        let c, u, d, h;
        for (c = n, u = n + i; c < u; ++c) h = e[c], d = {}, d[r.axis] = s || r.parse(o[c], c), l.push(Cr(h, d, a, c));
        return l
    }

    function jr(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd
    }

    function Ir(t, e, n, i) {
        let r = e.borderSkipped;
        const a = {};
        if (!r) return void (t.borderSkipped = a);
        if (!0 === r) return void (t.borderSkipped = {top: !0, right: !0, bottom: !0, left: !0});
        const {start: o, end: s, reverse: l, top: c, bottom: u} = function (t) {
            let e, n, i, r, a;
            return t.horizontal ? (e = t.base > t.x, n = "left", i = "right") : (e = t.base < t.y, n = "bottom", i = "top"), e ? (r = "end", a = "start") : (r = "start", a = "end"), {
                start: n,
                end: i,
                reverse: e,
                top: r,
                bottom: a
            }
        }(t);
        "middle" === r && n && (t.enableBorderRadius = !0, (n._top || 0) === i ? r = c : (n._bottom || 0) === i ? r = u : (a[_r(u, o, s, l)] = !0, r = c)), a[_r(r, o, s, l)] = !0, t.borderSkipped = a
    }

    function _r(t, e, n, i) {
        var r, a, o;
        return i ? (o = n, t = Or(t = (r = t) === (a = e) ? o : r === o ? a : r, n, e)) : t = Or(t, e, n), t
    }

    function Or(t, e, n) {
        return "start" === t ? e : "end" === t ? n : t
    }

    function Lr(t, {inflateAmount: e}, n) {
        t.inflateAmount = "auto" === e ? 1 === n ? .33 : 0 : e
    }

    class Ur extends wr {
        static id = "doughnut";
        static defaults = {
            datasetElementType: !1,
            dataElementType: "arc",
            animation: {animateRotate: !0, animateScale: !1},
            animations: {
                numbers: {
                    type: "number",
                    properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
                }
            },
            cutout: "50%",
            rotation: 0,
            circumference: 360,
            radius: "100%",
            spacing: 0,
            indexAxis: "r"
        };
        static descriptors = {
            _scriptable: t => "spacing" !== t,
            _indexable: t => "spacing" !== t && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
        };
        static overrides = {
            aspectRatio: 1, plugins: {
                legend: {
                    labels: {
                        generateLabels(t) {
                            const e = t.data;
                            if (e.labels.length && e.datasets.length) {
                                const {labels: {pointStyle: n, color: i}} = t.legend.options;
                                return e.labels.map(((e, r) => {
                                    const a = t.getDatasetMeta(0).controller.getStyle(r);
                                    return {
                                        text: e,
                                        fillStyle: a.backgroundColor,
                                        strokeStyle: a.borderColor,
                                        fontColor: i,
                                        lineWidth: a.borderWidth,
                                        pointStyle: n,
                                        hidden: !t.getDataVisibility(r),
                                        index: r
                                    }
                                }))
                            }
                            return []
                        }
                    }, onClick(t, e, n) {
                        n.chart.toggleDataVisibility(e.index), n.chart.update()
                    }
                }
            }
        };

        constructor(t, e) {
            super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0
        }

        linkScales() {
        }

        parse(t, e) {
            const n = this.getDataset().data, i = this._cachedMeta;
            if (!1 === this._parsing) i._parsed = n; else {
                let r, a, o = t => +n[t];
                if (Se(n[t])) {
                    const {key: t = "value"} = this._parsing;
                    o = e => +We(n[e], t)
                }
                for (r = t, a = t + e; r < a; ++r) i._parsed[r] = o(r)
            }
        }

        _getRotation() {
            return ln(this.options.rotation - 90)
        }

        _getCircumference() {
            return ln(this.options.circumference)
        }

        _getRotationExtents() {
            let t = Ge, e = -Ge;
            for (let n = 0; n < this.chart.data.datasets.length; ++n) if (this.chart.isDatasetVisible(n) && this.chart.getDatasetMeta(n).type === this._type) {
                const i = this.chart.getDatasetMeta(n).controller, r = i._getRotation(), a = i._getCircumference();
                t = Math.min(t, r), e = Math.max(e, r + a)
            }
            return {rotation: t, circumference: e - t}
        }

        update(t) {
            const e = this.chart, {chartArea: n} = e, i = this._cachedMeta, r = i.data,
                a = this.getMaxBorderWidth() + this.getMaxOffset(r) + this.options.spacing,
                o = Math.max((Math.min(n.width, n.height) - a) / 2, 0),
                s = Math.min((c = o, "string" == typeof (l = this.options.cutout) && l.endsWith("%") ? parseFloat(l) / 100 : +l / c), 1);
            var l, c;
            const u = this._getRingWeight(this.index), {
                    circumference: d,
                    rotation: h
                } = this._getRotationExtents(), {ratioX: f, ratioY: p, offsetX: g, offsetY: m} = function (t, e, n) {
                    let i = 1, r = 1, a = 0, o = 0;
                    if (e < Ge) {
                        const s = t, l = s + e, c = Math.cos(s), u = Math.sin(s), d = Math.cos(l), h = Math.sin(l),
                            f = (t, e, i) => gn(t, s, l, !0) ? 1 : Math.max(e, e * n, i, i * n),
                            p = (t, e, i) => gn(t, s, l, !0) ? -1 : Math.min(e, e * n, i, i * n), g = f(0, c, d),
                            m = f(Ke, u, h), M = p(He, c, d), y = p(He + Ke, u, h);
                        i = (g - M) / 2, r = (m - y) / 2, a = -(g + M) / 2, o = -(m + y) / 2
                    }
                    return {ratioX: i, ratioY: r, offsetX: a, offsetY: o}
                }(h, d, s), M = (n.width - a) / f, y = (n.height - a) / p, b = Math.max(Math.min(M, y) / 2, 0),
                x = ze(this.options.radius, b), A = (x - Math.max(x * s, 0)) / this._getVisibleDatasetWeightTotal();
            this.offsetX = g * x, this.offsetY = m * x, i.total = this.calculateTotal(), this.outerRadius = x - A * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - A * u, 0), this.updateElements(r, 0, r.length, t)
        }

        _circumference(t, e) {
            const n = this.options, i = this._cachedMeta, r = this._getCircumference();
            return e && n.animation.animateRotate || !this.chart.getDataVisibility(t) || null === i._parsed[t] || i.data[t].hidden ? 0 : this.calculateCircumference(i._parsed[t] * r / Ge)
        }

        updateElements(t, e, n, i) {
            const r = "reset" === i, a = this.chart, o = a.chartArea, s = a.options.animation,
                l = (o.left + o.right) / 2, c = (o.top + o.bottom) / 2, u = r && s.animateScale,
                d = u ? 0 : this.innerRadius, h = u ? 0 : this.outerRadius, {
                    sharedOptions: f,
                    includeOptions: p
                } = this._getSharedOptions(e, i);
            let g, m = this._getRotation();
            for (g = 0; g < e; ++g) m += this._circumference(g, r);
            for (g = e; g < e + n; ++g) {
                const e = this._circumference(g, r), n = t[g], a = {
                    x: l + this.offsetX,
                    y: c + this.offsetY,
                    startAngle: m,
                    endAngle: m + e,
                    circumference: e,
                    outerRadius: h,
                    innerRadius: d
                };
                p && (a.options = f || this.resolveDataElementOptions(g, n.active ? "active" : i)), m += e, this.updateElement(n, g, a, i)
            }
        }

        calculateTotal() {
            const t = this._cachedMeta, e = t.data;
            let n, i = 0;
            for (n = 0; n < e.length; n++) {
                const r = t._parsed[n];
                null === r || isNaN(r) || !this.chart.getDataVisibility(n) || e[n].hidden || (i += Math.abs(r))
            }
            return i
        }

        calculateCircumference(t) {
            const e = this._cachedMeta.total;
            return e > 0 && !isNaN(t) ? Ge * (Math.abs(t) / e) : 0
        }

        getLabelAndValue(t) {
            const e = this._cachedMeta, n = this.chart, i = n.data.labels || [], r = Fn(e._parsed[t], n.options.locale);
            return {label: i[t] || "", value: r}
        }

        getMaxBorderWidth(t) {
            let e = 0;
            const n = this.chart;
            let i, r, a, o, s;
            if (!t) for (i = 0, r = n.data.datasets.length; i < r; ++i) if (n.isDatasetVisible(i)) {
                a = n.getDatasetMeta(i), t = a.data, o = a.controller;
                break
            }
            if (!t) return 0;
            for (i = 0, r = t.length; i < r; ++i) s = o.resolveDataElementOptions(i), "inner" !== s.borderAlign && (e = Math.max(e, s.borderWidth || 0, s.hoverBorderWidth || 0));
            return e
        }

        getMaxOffset(t) {
            let e = 0;
            for (let n = 0, i = t.length; n < i; ++n) {
                const t = this.resolveDataElementOptions(n);
                e = Math.max(e, t.offset || 0, t.hoverOffset || 0)
            }
            return e
        }

        _getRingWeightOffset(t) {
            let e = 0;
            for (let n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
            return e
        }

        _getRingWeight(t) {
            return Math.max(Ce(this.chart.data.datasets[t].weight, 1), 0)
        }

        _getVisibleDatasetWeightTotal() {
            return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
        }
    }

    class Rr extends wr {
        static id = "polarArea";
        static defaults = {
            dataElementType: "arc",
            animation: {animateRotate: !0, animateScale: !0},
            animations: {
                numbers: {
                    type: "number",
                    properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
                }
            },
            indexAxis: "r",
            startAngle: 0
        };
        static overrides = {
            aspectRatio: 1,
            plugins: {
                legend: {
                    labels: {
                        generateLabels(t) {
                            const e = t.data;
                            if (e.labels.length && e.datasets.length) {
                                const {labels: {pointStyle: n, color: i}} = t.legend.options;
                                return e.labels.map(((e, r) => {
                                    const a = t.getDatasetMeta(0).controller.getStyle(r);
                                    return {
                                        text: e,
                                        fillStyle: a.backgroundColor,
                                        strokeStyle: a.borderColor,
                                        fontColor: i,
                                        lineWidth: a.borderWidth,
                                        pointStyle: n,
                                        hidden: !t.getDataVisibility(r),
                                        index: r
                                    }
                                }))
                            }
                            return []
                        }
                    }, onClick(t, e, n) {
                        n.chart.toggleDataVisibility(e.index), n.chart.update()
                    }
                }
            },
            scales: {
                r: {
                    type: "radialLinear",
                    angleLines: {display: !1},
                    beginAtZero: !0,
                    grid: {circular: !0},
                    pointLabels: {display: !1},
                    startAngle: 0
                }
            }
        };

        constructor(t, e) {
            super(t, e), this.innerRadius = void 0, this.outerRadius = void 0
        }

        getLabelAndValue(t) {
            const e = this._cachedMeta, n = this.chart, i = n.data.labels || [],
                r = Fn(e._parsed[t].r, n.options.locale);
            return {label: i[t] || "", value: r}
        }

        parseObjectData(t, e, n, i) {
            return _i.bind(this)(t, e, n, i)
        }

        update(t) {
            const e = this._cachedMeta.data;
            this._updateRadius(), this.updateElements(e, 0, e.length, t)
        }

        getMinMax() {
            const t = this._cachedMeta, e = {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY};
            return t.data.forEach(((t, n) => {
                const i = this.getParsed(n).r;
                !isNaN(i) && this.chart.getDataVisibility(n) && (i < e.min && (e.min = i), i > e.max && (e.max = i))
            })), e
        }

        _updateRadius() {
            const t = this.chart, e = t.chartArea, n = t.options, i = Math.min(e.right - e.left, e.bottom - e.top),
                r = Math.max(i / 2, 0),
                a = (r - Math.max(n.cutoutPercentage ? r / 100 * n.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
            this.outerRadius = r - a * this.index, this.innerRadius = this.outerRadius - a
        }

        updateElements(t, e, n, i) {
            const r = "reset" === i, a = this.chart, o = a.options.animation, s = this._cachedMeta.rScale,
                l = s.xCenter, c = s.yCenter, u = s.getIndexAngle(0) - .5 * He;
            let d, h = u;
            const f = 360 / this.countVisibleElements();
            for (d = 0; d < e; ++d) h += this._computeAngle(d, i, f);
            for (d = e; d < e + n; d++) {
                const e = t[d];
                let n = h, p = h + this._computeAngle(d, i, f),
                    g = a.getDataVisibility(d) ? s.getDistanceFromCenterForValue(this.getParsed(d).r) : 0;
                h = p, r && (o.animateScale && (g = 0), o.animateRotate && (n = p = u));
                const m = {
                    x: l,
                    y: c,
                    innerRadius: 0,
                    outerRadius: g,
                    startAngle: n,
                    endAngle: p,
                    options: this.resolveDataElementOptions(d, e.active ? "active" : i)
                };
                this.updateElement(e, d, m, i)
            }
        }

        countVisibleElements() {
            const t = this._cachedMeta;
            let e = 0;
            return t.data.forEach(((t, n) => {
                !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++
            })), e
        }

        _computeAngle(t, e, n) {
            return this.chart.getDataVisibility(t) ? ln(this.resolveDataElementOptions(t, e).angle || n) : 0
        }
    }

    var Vr = Object.freeze({
        __proto__: null, BarController: class extends wr {
            static id = "bar";
            static defaults = {
                datasetElementType: !1,
                dataElementType: "bar",
                categoryPercentage: .8,
                barPercentage: .9,
                grouped: !0,
                animations: {numbers: {type: "number", properties: ["x", "y", "base", "width", "height"]}}
            };
            static overrides = {
                scales: {
                    _index_: {type: "category", offset: !0, grid: {offset: !0}},
                    _value_: {type: "linear", beginAtZero: !0}
                }
            };

            parsePrimitiveData(t, e, n, i) {
                return zr(t, e, n, i)
            }

            parseArrayData(t, e, n, i) {
                return zr(t, e, n, i)
            }

            parseObjectData(t, e, n, i) {
                const {iScale: r, vScale: a} = t, {xAxisKey: o = "x", yAxisKey: s = "y"} = this._parsing,
                    l = "x" === r.axis ? o : s, c = "x" === a.axis ? o : s, u = [];
                let d, h, f, p;
                for (d = n, h = n + i; d < h; ++d) p = e[d], f = {}, f[r.axis] = r.parse(We(p, l), d), u.push(Cr(We(p, c), f, a, d));
                return u
            }

            updateRangeFromParsed(t, e, n, i) {
                super.updateRangeFromParsed(t, e, n, i);
                const r = n._custom;
                r && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, r.min), t.max = Math.max(t.max, r.max))
            }

            getMaxOverflow() {
                return 0
            }

            getLabelAndValue(t) {
                const e = this._cachedMeta, {iScale: n, vScale: i} = e, r = this.getParsed(t), a = r._custom,
                    o = jr(a) ? "[" + a.start + ", " + a.end + "]" : "" + i.getLabelForValue(r[i.axis]);
                return {label: "" + n.getLabelForValue(r[n.axis]), value: o}
            }

            initialize() {
                this.enableOptionSharing = !0, super.initialize(), this._cachedMeta.stack = this.getDataset().stack
            }

            update(t) {
                const e = this._cachedMeta;
                this.updateElements(e.data, 0, e.data.length, t)
            }

            updateElements(t, e, n, i) {
                const r = "reset" === i, {index: a, _cachedMeta: {vScale: o}} = this, s = o.getBasePixel(),
                    l = o.isHorizontal(), c = this._getRuler(), {
                        sharedOptions: u,
                        includeOptions: d
                    } = this._getSharedOptions(e, i);
                for (let h = e; h < e + n; h++) {
                    const e = this.getParsed(h),
                        n = r || ke(e[o.axis]) ? {base: s, head: s} : this._calculateBarValuePixels(h),
                        f = this._calculateBarIndexPixels(h, c), p = (e._stacks || {})[o.axis], g = {
                            horizontal: l,
                            base: n.base,
                            enableBorderRadius: !p || jr(e._custom) || a === p._top || a === p._bottom,
                            x: l ? n.head : f.center,
                            y: l ? f.center : n.head,
                            height: l ? f.size : Math.abs(n.size),
                            width: l ? Math.abs(n.size) : f.size
                        };
                    d && (g.options = u || this.resolveDataElementOptions(h, t[h].active ? "active" : i));
                    const m = g.options || t[h].options;
                    Ir(g, m, p, a), Lr(g, m, c.ratio), this.updateElement(t[h], h, g, i)
                }
            }

            _getStacks(t, e) {
                const {iScale: n} = this._cachedMeta,
                    i = n.getMatchingVisibleMetas(this._type).filter((t => t.controller.options.grouped)),
                    r = n.options.stacked, a = [], o = t => {
                        const n = t.controller.getParsed(e), i = n && n[t.vScale.axis];
                        if (ke(i) || isNaN(i)) return !0
                    };
                for (const n of i) if ((void 0 === e || !o(n)) && ((!1 === r || -1 === a.indexOf(n.stack) || void 0 === r && void 0 === n.stack) && a.push(n.stack), n.index === t)) break;
                return a.length || a.push(void 0), a
            }

            _getStackCount(t) {
                return this._getStacks(void 0, t).length
            }

            _getStackIndex(t, e, n) {
                const i = this._getStacks(t, n), r = void 0 !== e ? i.indexOf(e) : -1;
                return -1 === r ? i.length - 1 : r
            }

            _getRuler() {
                const t = this.options, e = this._cachedMeta, n = e.iScale, i = [];
                let r, a;
                for (r = 0, a = e.data.length; r < a; ++r) i.push(n.getPixelForValue(this.getParsed(r)[n.axis], r));
                const o = t.barThickness;
                return {
                    min: o || Er(e),
                    pixels: i,
                    start: n._startPixel,
                    end: n._endPixel,
                    stackCount: this._getStackCount(),
                    scale: n,
                    grouped: t.grouped,
                    ratio: o ? 1 : t.categoryPercentage * t.barPercentage
                }
            }

            _calculateBarValuePixels(t) {
                const {_cachedMeta: {vScale: e, _stacked: n, index: i}, options: {base: r, minBarLength: a}} = this,
                    o = r || 0, s = this.getParsed(t), l = s._custom, c = jr(l);
                let u, d, h = s[e.axis], f = 0, p = n ? this.applyStack(e, s, n) : h;
                p !== h && (f = p - h, p = h), c && (h = l.barStart, p = l.barEnd - l.barStart, 0 !== h && nn(h) !== nn(l.barEnd) && (f = 0), f += h);
                const g = ke(r) || c ? f : r;
                let m = e.getPixelForValue(g);
                if (u = this.chart.getDataVisibility(t) ? e.getPixelForValue(f + p) : m, d = u - m, Math.abs(d) < a) {
                    d = function (t, e, n) {
                        return 0 !== t ? nn(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1)
                    }(d, e, o) * a, h === o && (m -= d / 2);
                    const t = e.getPixelForDecimal(0), r = e.getPixelForDecimal(1), l = Math.min(t, r),
                        f = Math.max(t, r);
                    m = Math.max(Math.min(m, f), l), u = m + d, n && !c && (s._stacks[e.axis]._visualValues[i] = e.getValueForPixel(u) - e.getValueForPixel(m))
                }
                if (m === e.getPixelForValue(o)) {
                    const t = nn(d) * e.getLineWidthForValue(o) / 2;
                    m += t, d -= t
                }
                return {size: d, base: m, head: u, center: u + d / 2}
            }

            _calculateBarIndexPixels(t, e) {
                const n = e.scale, i = this.options, r = i.skipNull, a = Ce(i.maxBarThickness, 1 / 0);
                let o, s;
                if (e.grouped) {
                    const n = r ? this._getStackCount(t) : e.stackCount,
                        l = "flex" === i.barThickness ? function (t, e, n, i) {
                            const r = e.pixels, a = r[t];
                            let o = t > 0 ? r[t - 1] : null, s = t < r.length - 1 ? r[t + 1] : null;
                            const l = n.categoryPercentage;
                            null === o && (o = a - (null === s ? e.end - e.start : s - a)), null === s && (s = a + a - o);
                            const c = a - (a - Math.min(o, s)) / 2 * l;
                            return {chunk: Math.abs(s - o) / 2 * l / i, ratio: n.barPercentage, start: c}
                        }(t, e, i, n) : function (t, e, n, i) {
                            const r = n.barThickness;
                            let a, o;
                            return ke(r) ? (a = e.min * n.categoryPercentage, o = n.barPercentage) : (a = r * i, o = 1), {
                                chunk: a / i,
                                ratio: o,
                                start: e.pixels[t] - a / 2
                            }
                        }(t, e, i, n), c = this._getStackIndex(this.index, this._cachedMeta.stack, r ? t : void 0);
                    o = l.start + l.chunk * c + l.chunk / 2, s = Math.min(a, l.chunk * l.ratio)
                } else o = n.getPixelForValue(this.getParsed(t)[n.axis], t), s = Math.min(a, e.min * e.ratio);
                return {base: o - s / 2, head: o + s / 2, center: o, size: s}
            }

            draw() {
                const t = this._cachedMeta, e = t.vScale, n = t.data, i = n.length;
                let r = 0;
                for (; r < i; ++r) null === this.getParsed(r)[e.axis] || n[r].hidden || n[r].draw(this._ctx)
            }
        }, BubbleController: class extends wr {
            static id = "bubble";
            static defaults = {
                datasetElementType: !1,
                dataElementType: "point",
                animations: {numbers: {type: "number", properties: ["x", "y", "borderWidth", "radius"]}}
            };
            static overrides = {scales: {x: {type: "linear"}, y: {type: "linear"}}};

            initialize() {
                this.enableOptionSharing = !0, super.initialize()
            }

            parsePrimitiveData(t, e, n, i) {
                const r = super.parsePrimitiveData(t, e, n, i);
                for (let t = 0; t < r.length; t++) r[t]._custom = this.resolveDataElementOptions(t + n).radius;
                return r
            }

            parseArrayData(t, e, n, i) {
                const r = super.parseArrayData(t, e, n, i);
                for (let t = 0; t < r.length; t++) {
                    const i = e[n + t];
                    r[t]._custom = Ce(i[2], this.resolveDataElementOptions(t + n).radius)
                }
                return r
            }

            parseObjectData(t, e, n, i) {
                const r = super.parseObjectData(t, e, n, i);
                for (let t = 0; t < r.length; t++) {
                    const i = e[n + t];
                    r[t]._custom = Ce(i && i.r && +i.r, this.resolveDataElementOptions(t + n).radius)
                }
                return r
            }

            getMaxOverflow() {
                const t = this._cachedMeta.data;
                let e = 0;
                for (let n = t.length - 1; n >= 0; --n) e = Math.max(e, t[n].size(this.resolveDataElementOptions(n)) / 2);
                return e > 0 && e
            }

            getLabelAndValue(t) {
                const e = this._cachedMeta, n = this.chart.data.labels || [], {xScale: i, yScale: r} = e,
                    a = this.getParsed(t), o = i.getLabelForValue(a.x), s = r.getLabelForValue(a.y), l = a._custom;
                return {label: n[t] || "", value: "(" + o + ", " + s + (l ? ", " + l : "") + ")"}
            }

            update(t) {
                const e = this._cachedMeta.data;
                this.updateElements(e, 0, e.length, t)
            }

            updateElements(t, e, n, i) {
                const r = "reset" === i, {iScale: a, vScale: o} = this._cachedMeta, {
                    sharedOptions: s,
                    includeOptions: l
                } = this._getSharedOptions(e, i), c = a.axis, u = o.axis;
                for (let d = e; d < e + n; d++) {
                    const e = t[d], n = !r && this.getParsed(d), h = {},
                        f = h[c] = r ? a.getPixelForDecimal(.5) : a.getPixelForValue(n[c]),
                        p = h[u] = r ? o.getBasePixel() : o.getPixelForValue(n[u]);
                    h.skip = isNaN(f) || isNaN(p), l && (h.options = s || this.resolveDataElementOptions(d, e.active ? "active" : i), r && (h.options.radius = 0)), this.updateElement(e, d, h, i)
                }
            }

            resolveDataElementOptions(t, e) {
                const n = this.getParsed(t);
                let i = super.resolveDataElementOptions(t, e);
                i.$shared && (i = Object.assign({}, i, {$shared: !1}));
                const r = i.radius;
                return "active" !== e && (i.radius = 0), i.radius += Ce(n && n._custom, r), i
            }
        }, DoughnutController: Ur, LineController: class extends wr {
            static id = "line";
            static defaults = {datasetElementType: "line", dataElementType: "point", showLine: !0, spanGaps: !1};
            static overrides = {scales: {_index_: {type: "category"}, _value_: {type: "linear"}}};

            initialize() {
                this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize()
            }

            update(t) {
                const e = this._cachedMeta, {dataset: n, data: i = [], _dataset: r} = e,
                    a = this.chart._animationsDisabled;
                let {start: o, count: s} = wn(e, i, a);
                this._drawStart = o, this._drawCount = s, En(e) && (o = 0, s = i.length), n._chart = this.chart, n._datasetIndex = this.index, n._decimated = !!r._decimated, n.points = i;
                const l = this.resolveDatasetElementOptions(t);
                this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, this.updateElement(n, void 0, {
                    animated: !a,
                    options: l
                }, t), this.updateElements(i, o, s, t)
            }

            updateElements(t, e, n, i) {
                const r = "reset" === i, {
                        iScale: a,
                        vScale: o,
                        _stacked: s,
                        _dataset: l
                    } = this._cachedMeta, {sharedOptions: c, includeOptions: u} = this._getSharedOptions(e, i), d = a.axis,
                    h = o.axis, {spanGaps: f, segment: p} = this.options, g = on(f) ? f : Number.POSITIVE_INFINITY,
                    m = this.chart._animationsDisabled || r || "none" === i, M = e + n, y = t.length;
                let b = e > 0 && this.getParsed(e - 1);
                for (let n = 0; n < y; ++n) {
                    const f = t[n], y = m ? f : {};
                    if (n < e || n >= M) {
                        y.skip = !0;
                        continue
                    }
                    const x = this.getParsed(n), A = ke(x[h]), v = y[d] = a.getPixelForValue(x[d], n),
                        N = y[h] = r || A ? o.getBasePixel() : o.getPixelForValue(s ? this.applyStack(o, x, s) : x[h], n);
                    y.skip = isNaN(v) || isNaN(N) || A, y.stop = n > 0 && Math.abs(x[d] - b[d]) > g, p && (y.parsed = x, y.raw = l.data[n]), u && (y.options = c || this.resolveDataElementOptions(n, f.active ? "active" : i)), m || this.updateElement(f, n, y, i), b = x
                }
            }

            getMaxOverflow() {
                const t = this._cachedMeta, e = t.dataset, n = e.options && e.options.borderWidth || 0,
                    i = t.data || [];
                if (!i.length) return n;
                const r = i[0].size(this.resolveDataElementOptions(0)),
                    a = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
                return Math.max(n, r, a) / 2
            }

            draw() {
                const t = this._cachedMeta;
                t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
            }
        }, PieController: class extends Ur {
            static id = "pie";
            static defaults = {cutout: 0, rotation: 0, circumference: 360, radius: "100%"}
        }, PolarAreaController: Rr, RadarController: class extends wr {
            static id = "radar";
            static defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                indexAxis: "r",
                showLine: !0,
                elements: {line: {fill: "start"}}
            };
            static overrides = {aspectRatio: 1, scales: {r: {type: "radialLinear"}}};

            getLabelAndValue(t) {
                const e = this._cachedMeta.vScale, n = this.getParsed(t);
                return {label: e.getLabels()[t], value: "" + e.getLabelForValue(n[e.axis])}
            }

            parseObjectData(t, e, n, i) {
                return _i.bind(this)(t, e, n, i)
            }

            update(t) {
                const e = this._cachedMeta, n = e.dataset, i = e.data || [], r = e.iScale.getLabels();
                if (n.points = i, "resize" !== t) {
                    const e = this.resolveDatasetElementOptions(t);
                    this.options.showLine || (e.borderWidth = 0);
                    const a = {_loop: !0, _fullLoop: r.length === i.length, options: e};
                    this.updateElement(n, void 0, a, t)
                }
                this.updateElements(i, 0, i.length, t)
            }

            updateElements(t, e, n, i) {
                const r = this._cachedMeta.rScale, a = "reset" === i;
                for (let o = e; o < e + n; o++) {
                    const e = t[o], n = this.resolveDataElementOptions(o, e.active ? "active" : i),
                        s = r.getPointPositionForValue(o, this.getParsed(o).r), l = a ? r.xCenter : s.x,
                        c = a ? r.yCenter : s.y,
                        u = {x: l, y: c, angle: s.angle, skip: isNaN(l) || isNaN(c), options: n};
                    this.updateElement(e, o, u, i)
                }
            }
        }, ScatterController: class extends wr {
            static id = "scatter";
            static defaults = {datasetElementType: !1, dataElementType: "point", showLine: !1, fill: !1};
            static overrides = {interaction: {mode: "point"}, scales: {x: {type: "linear"}, y: {type: "linear"}}};

            getLabelAndValue(t) {
                const e = this._cachedMeta, n = this.chart.data.labels || [], {xScale: i, yScale: r} = e,
                    a = this.getParsed(t), o = i.getLabelForValue(a.x), s = r.getLabelForValue(a.y);
                return {label: n[t] || "", value: "(" + o + ", " + s + ")"}
            }

            update(t) {
                const e = this._cachedMeta, {data: n = []} = e, i = this.chart._animationsDisabled;
                let {start: r, count: a} = wn(e, n, i);
                if (this._drawStart = r, this._drawCount = a, En(e) && (r = 0, a = n.length), this.options.showLine) {
                    this.datasetElementType || this.addElements();
                    const {dataset: r, _dataset: a} = e;
                    r._chart = this.chart, r._datasetIndex = this.index, r._decimated = !!a._decimated, r.points = n;
                    const o = this.resolveDatasetElementOptions(t);
                    o.segment = this.options.segment, this.updateElement(r, void 0, {animated: !i, options: o}, t)
                } else this.datasetElementType && (delete e.dataset, this.datasetElementType = !1);
                this.updateElements(n, r, a, t)
            }

            addElements() {
                const {showLine: t} = this.options;
                !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements()
            }

            updateElements(t, e, n, i) {
                const r = "reset" === i, {iScale: a, vScale: o, _stacked: s, _dataset: l} = this._cachedMeta,
                    c = this.resolveDataElementOptions(e, i), u = this.getSharedOptions(c),
                    d = this.includeOptions(i, u), h = a.axis, f = o.axis, {spanGaps: p, segment: g} = this.options,
                    m = on(p) ? p : Number.POSITIVE_INFINITY, M = this.chart._animationsDisabled || r || "none" === i;
                let y = e > 0 && this.getParsed(e - 1);
                for (let c = e; c < e + n; ++c) {
                    const e = t[c], n = this.getParsed(c), p = M ? e : {}, b = ke(n[f]),
                        x = p[h] = a.getPixelForValue(n[h], c),
                        A = p[f] = r || b ? o.getBasePixel() : o.getPixelForValue(s ? this.applyStack(o, n, s) : n[f], c);
                    p.skip = isNaN(x) || isNaN(A) || b, p.stop = c > 0 && Math.abs(n[h] - y[h]) > m, g && (p.parsed = n, p.raw = l.data[c]), d && (p.options = u || this.resolveDataElementOptions(c, e.active ? "active" : i)), M || this.updateElement(e, c, p, i), y = n
                }
                this.updateSharedOptions(u, i, c)
            }

            getMaxOverflow() {
                const t = this._cachedMeta, e = t.data || [];
                if (!this.options.showLine) {
                    let t = 0;
                    for (let n = e.length - 1; n >= 0; --n) t = Math.max(t, e[n].size(this.resolveDataElementOptions(n)) / 2);
                    return t > 0 && t
                }
                const n = t.dataset, i = n.options && n.options.borderWidth || 0;
                if (!e.length) return i;
                const r = e[0].size(this.resolveDataElementOptions(0)),
                    a = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
                return Math.max(i, r, a) / 2
            }
        }
    });

    function Fr() {
        throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
    }

    class Pr {
        static override(t) {
            Object.assign(Pr.prototype, t)
        }

        options;

        constructor(t) {
            this.options = t || {}
        }

        init() {
        }

        formats() {
            return Fr()
        }

        parse() {
            return Fr()
        }

        format() {
            return Fr()
        }

        add() {
            return Fr()
        }

        diff() {
            return Fr()
        }

        startOf() {
            return Fr()
        }

        endOf() {
            return Fr()
        }
    }

    var Wr = Pr;

    function Qr(t, e, n, i) {
        const {controller: r, data: a, _sorted: o} = t, s = r._cachedMeta.iScale;
        if (s && e === s.axis && "r" !== e && o && a.length) {
            const t = s._reversePixels ? xn : bn;
            if (!i) return t(a, e, n);
            if (r._sharedOptions) {
                const i = a[0], r = "function" == typeof i.getRange && i.getRange(e);
                if (r) {
                    const i = t(a, e, n - r), o = t(a, e, n + r);
                    return {lo: i.lo, hi: o.hi}
                }
            }
        }
        return {lo: 0, hi: a.length - 1}
    }

    function Yr(t, e, n, i, r) {
        const a = t.getSortedVisibleDatasetMetas(), o = n[e];
        for (let t = 0, n = a.length; t < n; ++t) {
            const {index: n, data: s} = a[t], {lo: l, hi: c} = Qr(a[t], e, o, r);
            for (let t = l; t <= c; ++t) {
                const e = s[t];
                e.skip || i(e, n, t)
            }
        }
    }

    function Br(t, e, n, i, r) {
        const a = [];
        return r || t.isPointInArea(e) ? (Yr(t, n, e, (function (n, o, s) {
            (r || ei(n, t.chartArea, 0)) && n.inRange(e.x, e.y, i) && a.push({element: n, datasetIndex: o, index: s})
        }), !0), a) : a
    }

    function Zr(t, e, n, i, r, a) {
        return a || t.isPointInArea(e) ? "r" !== n || i ? function (t, e, n, i, r, a) {
            let o = [];
            const s = function (t) {
                const e = -1 !== t.indexOf("x"), n = -1 !== t.indexOf("y");
                return function (t, i) {
                    const r = e ? Math.abs(t.x - i.x) : 0, a = n ? Math.abs(t.y - i.y) : 0;
                    return Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2))
                }
            }(n);
            let l = Number.POSITIVE_INFINITY;
            return Yr(t, n, e, (function (n, c, u) {
                const d = n.inRange(e.x, e.y, r);
                if (i && !d) return;
                const h = n.getCenterPoint(r);
                if (!a && !t.isPointInArea(h) && !d) return;
                const f = s(e, h);
                f < l ? (o = [{element: n, datasetIndex: c, index: u}], l = f) : f === l && o.push({
                    element: n,
                    datasetIndex: c,
                    index: u
                })
            })), o
        }(t, e, n, i, r, a) : function (t, e, n, i) {
            let r = [];
            return Yr(t, n, e, (function (t, n, a) {
                const {
                    startAngle: o,
                    endAngle: s
                } = t.getProps(["startAngle", "endAngle"], i), {angle: l} = dn(t, {x: e.x, y: e.y});
                gn(l, o, s) && r.push({element: t, datasetIndex: n, index: a})
            })), r
        }(t, e, n, r) : []
    }

    function Hr(t, e, n, i, r) {
        const a = [], o = "x" === n ? "inXRange" : "inYRange";
        let s = !1;
        return Yr(t, n, e, ((t, i, l) => {
            t[o](e[n], r) && (a.push({element: t, datasetIndex: i, index: l}), s = s || t.inRange(e.x, e.y, r))
        })), i && !s ? [] : a
    }

    var Gr = {
        evaluateInteractionItems: Yr, modes: {
            index(t, e, n, i) {
                const r = Gi(e, t), a = n.axis || "x", o = n.includeInvisible || !1,
                    s = n.intersect ? Br(t, r, a, i, o) : Zr(t, r, a, !1, i, o), l = [];
                return s.length ? (t.getSortedVisibleDatasetMetas().forEach((t => {
                    const e = s[0].index, n = t.data[e];
                    n && !n.skip && l.push({element: n, datasetIndex: t.index, index: e})
                })), l) : []
            },
            dataset(t, e, n, i) {
                const r = Gi(e, t), a = n.axis || "xy", o = n.includeInvisible || !1;
                let s = n.intersect ? Br(t, r, a, i, o) : Zr(t, r, a, !1, i, o);
                if (s.length > 0) {
                    const e = s[0].datasetIndex, n = t.getDatasetMeta(e).data;
                    s = [];
                    for (let t = 0; t < n.length; ++t) s.push({element: n[t], datasetIndex: e, index: t})
                }
                return s
            },
            point: (t, e, n, i) => Br(t, Gi(e, t), n.axis || "xy", i, n.includeInvisible || !1),
            nearest(t, e, n, i) {
                const r = Gi(e, t), a = n.axis || "xy", o = n.includeInvisible || !1;
                return Zr(t, r, a, n.intersect, i, o)
            },
            x: (t, e, n, i) => Hr(t, Gi(e, t), "x", n.intersect, i),
            y: (t, e, n, i) => Hr(t, Gi(e, t), "y", n.intersect, i)
        }
    };
    const Jr = ["left", "top", "right", "bottom"];

    function Xr(t, e) {
        return t.filter((t => t.pos === e))
    }

    function $r(t, e) {
        return t.filter((t => -1 === Jr.indexOf(t.pos) && t.box.axis === e))
    }

    function Kr(t, e) {
        return t.sort(((t, n) => {
            const i = e ? n : t, r = e ? t : n;
            return i.weight === r.weight ? i.index - r.index : i.weight - r.weight
        }))
    }

    function qr(t, e, n, i) {
        return Math.max(t[n], e[n]) + Math.max(t[i], e[i])
    }

    function ta(t, e) {
        t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right)
    }

    function ea(t, e, n, i) {
        const {pos: r, box: a} = n, o = t.maxPadding;
        if (!Se(r)) {
            n.size && (t[r] -= n.size);
            const e = i[n.stack] || {size: 0, count: 1};
            e.size = Math.max(e.size, n.horizontal ? a.height : a.width), n.size = e.size / e.count, t[r] += n.size
        }
        a.getPadding && ta(o, a.getPadding());
        const s = Math.max(0, e.outerWidth - qr(o, t, "left", "right")),
            l = Math.max(0, e.outerHeight - qr(o, t, "top", "bottom")), c = s !== t.w, u = l !== t.h;
        return t.w = s, t.h = l, n.horizontal ? {same: c, other: u} : {same: u, other: c}
    }

    function na(t, e) {
        const n = e.maxPadding;
        return function (t) {
            const i = {left: 0, top: 0, right: 0, bottom: 0};
            return t.forEach((t => {
                i[t] = Math.max(e[t], n[t])
            })), i
        }(t ? ["left", "right"] : ["top", "bottom"])
    }

    function ia(t, e, n, i) {
        const r = [];
        let a, o, s, l, c, u;
        for (a = 0, o = t.length, c = 0; a < o; ++a) {
            s = t[a], l = s.box, l.update(s.width || e.w, s.height || e.h, na(s.horizontal, e));
            const {same: o, other: d} = ea(e, n, s, i);
            c |= o && r.length, u = u || d, l.fullSize || r.push(s)
        }
        return c && ia(r, e, n, i) || u
    }

    function ra(t, e, n, i, r) {
        t.top = n, t.left = e, t.right = e + i, t.bottom = n + r, t.width = i, t.height = r
    }

    function aa(t, e, n, i) {
        const r = n.padding;
        let {x: a, y: o} = e;
        for (const s of t) {
            const t = s.box, l = i[s.stack] || {count: 1, placed: 0, weight: 1}, c = s.stackWeight / l.weight || 1;
            if (s.horizontal) {
                const i = e.w * c, a = l.size || t.height;
                Ye(l.start) && (o = l.start), t.fullSize ? ra(t, r.left, o, n.outerWidth - r.right - r.left, a) : ra(t, e.left + l.placed, o, i, a), l.start = o, l.placed += i, o = t.bottom
            } else {
                const i = e.h * c, o = l.size || t.width;
                Ye(l.start) && (a = l.start), t.fullSize ? ra(t, a, r.top, o, n.outerHeight - r.bottom - r.top) : ra(t, a, e.top + l.placed, o, i), l.start = a, l.placed += i, a = t.right
            }
        }
        e.x = a, e.y = o
    }

    var oa = {
        addBox(t, e) {
            t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () {
                return [{
                    z: 0, draw(t) {
                        e.draw(t)
                    }
                }]
            }, t.boxes.push(e)
        }, removeBox(t, e) {
            const n = t.boxes ? t.boxes.indexOf(e) : -1;
            -1 !== n && t.boxes.splice(n, 1)
        }, configure(t, e, n) {
            e.fullSize = n.fullSize, e.position = n.position, e.weight = n.weight
        }, update(t, e, n, i) {
            if (!t) return;
            const r = Mi(t.options.layout.padding), a = Math.max(e - r.width, 0), o = Math.max(n - r.height, 0),
                s = function (t) {
                    const e = function (t) {
                            const e = [];
                            let n, i, r, a, o, s;
                            for (n = 0, i = (t || []).length; n < i; ++n) r = t[n], ({
                                position: a,
                                options: {stack: o, stackWeight: s = 1}
                            } = r), e.push({
                                index: n,
                                box: r,
                                pos: a,
                                horizontal: r.isHorizontal(),
                                weight: r.weight,
                                stack: o && a + o,
                                stackWeight: s
                            });
                            return e
                        }(t), n = Kr(e.filter((t => t.box.fullSize)), !0), i = Kr(Xr(e, "left"), !0),
                        r = Kr(Xr(e, "right")), a = Kr(Xr(e, "top"), !0), o = Kr(Xr(e, "bottom")), s = $r(e, "x"),
                        l = $r(e, "y");
                    return {
                        fullSize: n,
                        leftAndTop: i.concat(a),
                        rightAndBottom: r.concat(l).concat(o).concat(s),
                        chartArea: Xr(e, "chartArea"),
                        vertical: i.concat(r).concat(l),
                        horizontal: a.concat(o).concat(s)
                    }
                }(t.boxes), l = s.vertical, c = s.horizontal;
            Ie(t.boxes, (t => {
                "function" == typeof t.beforeLayout && t.beforeLayout()
            }));
            const u = l.reduce(((t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1,
                d = Object.freeze({
                    outerWidth: e,
                    outerHeight: n,
                    padding: r,
                    availableWidth: a,
                    availableHeight: o,
                    vBoxMaxWidth: a / 2 / u,
                    hBoxMaxHeight: o / 2
                }), h = Object.assign({}, r);
            ta(h, Mi(i));
            const f = Object.assign({maxPadding: h, w: a, h: o, x: r.left, y: r.top}, r), p = function (t, e) {
                const n = function (t) {
                    const e = {};
                    for (const n of t) {
                        const {stack: t, pos: i, stackWeight: r} = n;
                        if (!t || !Jr.includes(i)) continue;
                        const a = e[t] || (e[t] = {count: 0, placed: 0, weight: 0, size: 0});
                        a.count++, a.weight += r
                    }
                    return e
                }(t), {vBoxMaxWidth: i, hBoxMaxHeight: r} = e;
                let a, o, s;
                for (a = 0, o = t.length; a < o; ++a) {
                    s = t[a];
                    const {fullSize: o} = s.box, l = n[s.stack], c = l && s.stackWeight / l.weight;
                    s.horizontal ? (s.width = c ? c * i : o && e.availableWidth, s.height = r) : (s.width = i, s.height = c ? c * r : o && e.availableHeight)
                }
                return n
            }(l.concat(c), d);
            ia(s.fullSize, f, d, p), ia(l, f, d, p), ia(c, f, d, p) && ia(l, f, d, p), function (t) {
                const e = t.maxPadding;

                function n(n) {
                    const i = Math.max(e[n] - t[n], 0);
                    return t[n] += i, i
                }

                t.y += n("top"), t.x += n("left"), n("right"), n("bottom")
            }(f), aa(s.leftAndTop, f, d, p), f.x += f.w, f.y += f.h, aa(s.rightAndBottom, f, d, p), t.chartArea = {
                left: f.left,
                top: f.top,
                right: f.left + f.w,
                bottom: f.top + f.h,
                height: f.h,
                width: f.w
            }, Ie(s.chartArea, (e => {
                const n = e.box;
                Object.assign(n, t.chartArea), n.update(f.w, f.h, {left: 0, top: 0, right: 0, bottom: 0})
            }))
        }
    };

    class sa {
        acquireContext(t, e) {
        }

        releaseContext(t) {
            return !1
        }

        addEventListener(t, e, n) {
        }

        removeEventListener(t, e, n) {
        }

        getDevicePixelRatio() {
            return 1
        }

        getMaximumSize(t, e, n, i) {
            return e = Math.max(0, e || t.width), n = n || t.height, {
                width: e,
                height: Math.max(0, i ? Math.floor(e / i) : n)
            }
        }

        isAttached(t) {
            return !0
        }

        updateConfig(t) {
        }
    }

    class la extends sa {
        acquireContext(t) {
            return t && t.getContext && t.getContext("2d") || null
        }

        updateConfig(t) {
            t.options.animation = !1
        }
    }

    const ca = "$chartjs", ua = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
    }, da = t => null === t || "" === t, ha = !!$i && {passive: !0};

    function fa(t, e, n) {
        t && t.canvas && t.canvas.removeEventListener(e, n, ha)
    }

    function pa(t, e) {
        for (const n of t) if (n === e || n.contains(e)) return !0
    }

    function ga(t, e, n) {
        const i = t.canvas, r = new MutationObserver((t => {
            let e = !1;
            for (const n of t) e = e || pa(n.addedNodes, i), e = e && !pa(n.removedNodes, i);
            e && n()
        }));
        return r.observe(document, {childList: !0, subtree: !0}), r
    }

    function ma(t, e, n) {
        const i = t.canvas, r = new MutationObserver((t => {
            let e = !1;
            for (const n of t) e = e || pa(n.removedNodes, i), e = e && !pa(n.addedNodes, i);
            e && n()
        }));
        return r.observe(document, {childList: !0, subtree: !0}), r
    }

    const Ma = new Map;
    let ya = 0;

    function ba() {
        const t = window.devicePixelRatio;
        t !== ya && (ya = t, Ma.forEach(((e, n) => {
            n.currentDevicePixelRatio !== t && e()
        })))
    }

    function xa(t, e, n) {
        const i = t.canvas, r = i && Wi(i);
        if (!r) return;
        const a = kn(((t, e) => {
            const i = r.clientWidth;
            n(t, e), i < r.clientWidth && n()
        }), window), o = new ResizeObserver((t => {
            const e = t[0], n = e.contentRect.width, i = e.contentRect.height;
            0 === n && 0 === i || a(n, i)
        }));
        return o.observe(r), function (t, e) {
            Ma.size || window.addEventListener("resize", ba), Ma.set(t, e)
        }(t, a), o
    }

    function Aa(t, e, n) {
        n && n.disconnect(), "resize" === e && function (t) {
            Ma.delete(t), Ma.size || window.removeEventListener("resize", ba)
        }(t)
    }

    function va(t, e, n) {
        const i = t.canvas, r = kn((e => {
            null !== t.ctx && n(function (t, e) {
                const n = ua[t.type] || t.type, {x: i, y: r} = Gi(t, e);
                return {type: n, chart: e, native: t, x: void 0 !== i ? i : null, y: void 0 !== r ? r : null}
            }(e, t))
        }), t);
        return function (t, e, n) {
            t && t.addEventListener(e, n, ha)
        }(i, e, r), r
    }

    class Na extends sa {
        acquireContext(t, e) {
            const n = t && t.getContext && t.getContext("2d");
            return n && n.canvas === t ? (function (t, e) {
                const n = t.style, i = t.getAttribute("height"), r = t.getAttribute("width");
                if (t[ca] = {
                    initial: {
                        height: i,
                        width: r,
                        style: {display: n.display, height: n.height, width: n.width}
                    }
                }, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", da(r)) {
                    const e = Ki(t, "width");
                    void 0 !== e && (t.width = e)
                }
                if (da(i)) if ("" === t.style.height) t.height = t.width / (e || 2); else {
                    const e = Ki(t, "height");
                    void 0 !== e && (t.height = e)
                }
            }(t, e), n) : null
        }

        releaseContext(t) {
            const e = t.canvas;
            if (!e[ca]) return !1;
            const n = e[ca].initial;
            ["height", "width"].forEach((t => {
                const i = n[t];
                ke(i) ? e.removeAttribute(t) : e.setAttribute(t, i)
            }));
            const i = n.style || {};
            return Object.keys(i).forEach((t => {
                e.style[t] = i[t]
            })), e.width = e.width, delete e[ca], !0
        }

        addEventListener(t, e, n) {
            this.removeEventListener(t, e);
            const i = t.$proxies || (t.$proxies = {}), r = {attach: ga, detach: ma, resize: xa}[e] || va;
            i[e] = r(t, e, n)
        }

        removeEventListener(t, e) {
            const n = t.$proxies || (t.$proxies = {}), i = n[e];
            i && (({attach: Aa, detach: Aa, resize: Aa}[e] || fa)(t, e, i), n[e] = void 0)
        }

        getDevicePixelRatio() {
            return window.devicePixelRatio
        }

        getMaximumSize(t, e, n, i) {
            return function (t, e, n, i) {
                const r = Yi(t), a = Zi(r, "margin"), o = Qi(r.maxWidth, t, "clientWidth") || Xe,
                    s = Qi(r.maxHeight, t, "clientHeight") || Xe, l = function (t, e, n) {
                        let i, r;
                        if (void 0 === e || void 0 === n) {
                            const a = t && Wi(t);
                            if (a) {
                                const t = a.getBoundingClientRect(), o = Yi(a), s = Zi(o, "border", "width"),
                                    l = Zi(o, "padding");
                                e = t.width - l.width - s.width, n = t.height - l.height - s.height, i = Qi(o.maxWidth, a, "clientWidth"), r = Qi(o.maxHeight, a, "clientHeight")
                            } else e = t.clientWidth, n = t.clientHeight
                        }
                        return {width: e, height: n, maxWidth: i || Xe, maxHeight: r || Xe}
                    }(t, e, n);
                let {width: c, height: u} = l;
                if ("content-box" === r.boxSizing) {
                    const t = Zi(r, "border", "width"), e = Zi(r, "padding");
                    c -= e.width + t.width, u -= e.height + t.height
                }
                return c = Math.max(0, c - a.width), u = Math.max(0, i ? c / i : u - a.height), c = Ji(Math.min(c, o, l.maxWidth)), u = Ji(Math.min(u, s, l.maxHeight)), c && !u && (u = Ji(c / 2)), (void 0 !== e || void 0 !== n) && i && l.height && u > l.height && (u = l.height, c = Ji(Math.floor(u * i))), {
                    width: c,
                    height: u
                }
            }(t, e, n, i)
        }

        isAttached(t) {
            const e = t && Wi(t);
            return !(!e || !e.isConnected)
        }
    }

    class Da {
        static defaults = {};
        static defaultRoutes = void 0;
        x;
        y;
        active = !1;
        options;
        $animations;

        tooltipPosition(t) {
            const {x: e, y: n} = this.getProps(["x", "y"], t);
            return {x: e, y: n}
        }

        hasValue() {
            return on(this.x) && on(this.y)
        }

        getProps(t, e) {
            const n = this.$animations;
            if (!e || !n) return this;
            const i = {};
            return t.forEach((t => {
                i[t] = n[t] && n[t].active() ? n[t]._to : this[t]
            })), i
        }
    }

    function ka(t, e, n, i, r) {
        const a = Ce(i, 0), o = Math.min(Ce(r, t.length), t.length);
        let s, l, c, u = 0;
        for (n = Math.ceil(n), r && (s = r - i, n = s / Math.floor(s / n)), c = a; c < 0;) u++, c = Math.round(a + u * n);
        for (l = Math.max(a, 0); l < o; l++) l === c && (e.push(t[l]), u++, c = Math.round(a + u * n))
    }

    const Ta = (t, e, n) => "top" === e || "left" === e ? t[e] + n : t[e] - n, Sa = (t, e) => Math.min(e || t, t);

    function wa(t, e) {
        const n = [], i = t.length / e, r = t.length;
        let a = 0;
        for (; a < r; a += i) n.push(t[Math.floor(a)]);
        return n
    }

    function Ea(t, e, n) {
        const i = t.ticks.length, r = Math.min(e, i - 1), a = t._startPixel, o = t._endPixel, s = 1e-6;
        let l, c = t.getPixelForTick(r);
        if (!(n && (l = 1 === i ? Math.max(c - a, o - c) : 0 === e ? (t.getPixelForTick(1) - c) / 2 : (c - t.getPixelForTick(r - 1)) / 2, c += r < e ? l : -l, c < a - s || c > o + s))) return c
    }

    function Ca(t) {
        return t.drawTicks ? t.tickLength : 0
    }

    function za(t, e) {
        if (!t.display) return 0;
        const n = yi(t.font, e), i = Mi(t.padding);
        return (Te(t.text) ? t.text.length : 1) * n.lineHeight + i.height
    }

    function ja(t, e, n) {
        let i = Tn(t);
        return (n && "right" !== e || !n && "right" === e) && (i = (t => "left" === t ? "right" : "right" === t ? "left" : t)(i)), i
    }

    class Ia extends Da {
        constructor(t) {
            super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0
        }

        init(t) {
            this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax)
        }

        parse(t, e) {
            return t
        }

        getUserBounds() {
            let {_userMin: t, _userMax: e, _suggestedMin: n, _suggestedMax: i} = this;
            return t = Ee(t, Number.POSITIVE_INFINITY), e = Ee(e, Number.NEGATIVE_INFINITY), n = Ee(n, Number.POSITIVE_INFINITY), i = Ee(i, Number.NEGATIVE_INFINITY), {
                min: Ee(t, n),
                max: Ee(e, i),
                minDefined: we(t),
                maxDefined: we(e)
            }
        }

        getMinMax(t) {
            let e, {min: n, max: i, minDefined: r, maxDefined: a} = this.getUserBounds();
            if (r && a) return {min: n, max: i};
            const o = this.getMatchingVisibleMetas();
            for (let s = 0, l = o.length; s < l; ++s) e = o[s].controller.getMinMax(this, t), r || (n = Math.min(n, e.min)), a || (i = Math.max(i, e.max));
            return n = a && n > i ? i : n, i = r && n > i ? n : i, {min: Ee(n, Ee(i, n)), max: Ee(i, Ee(n, i))}
        }

        getPadding() {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0
            }
        }

        getTicks() {
            return this.ticks
        }

        getLabels() {
            const t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
        }

        getLabelItems(t = this.chart.chartArea) {
            return this._labelItems || (this._labelItems = this._computeLabelItems(t))
        }

        beforeLayout() {
            this._cache = {}, this._dataLimitsCached = !1
        }

        beforeUpdate() {
            je(this.options.beforeUpdate, [this])
        }

        update(t, e, n) {
            const {beginAtZero: i, grace: r, ticks: a} = this.options, o = a.sampleSize;
            this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = n = Object.assign({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, n), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + n.left + n.right : this.height + n.top + n.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = function (t, e, n) {
                const {min: i, max: r} = t, a = ze(e, (r - i) / 2), o = (t, e) => n && 0 === t ? 0 : t + e;
                return {min: o(i, -Math.abs(a)), max: o(r, a)}
            }(this, r, i), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
            const s = o < this.ticks.length;
            this._convertTicksToLabels(s ? wa(this.ticks, o) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a.display && (a.autoSkip || "auto" === a.source) && (this.ticks = function (t, e) {
                const n = t.options.ticks, i = function (t) {
                    const e = t.options.offset, n = t._tickSize(), i = t._length / n + (e ? 0 : 1),
                        r = t._maxLength / n;
                    return Math.floor(Math.min(i, r))
                }(t), r = Math.min(n.maxTicksLimit || i, i), a = n.major.enabled ? function (t) {
                    const e = [];
                    let n, i;
                    for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n);
                    return e
                }(e) : [], o = a.length, s = a[0], l = a[o - 1], c = [];
                if (o > r) return function (t, e, n, i) {
                    let r, a = 0, o = n[0];
                    for (i = Math.ceil(i), r = 0; r < t.length; r++) r === o && (e.push(t[r]), a++, o = n[a * i])
                }(e, c, a, o / r), c;
                const u = function (t, e, n) {
                    const i = function (t) {
                        const e = t.length;
                        let n, i;
                        if (e < 2) return !1;
                        for (i = t[0], n = 1; n < e; ++n) if (t[n] - t[n - 1] !== i) return !1;
                        return i
                    }(t), r = e.length / n;
                    if (!i) return Math.max(r, 1);
                    const a = function (t) {
                        const e = [], n = Math.sqrt(t);
                        let i;
                        for (i = 1; i < n; i++) t % i == 0 && (e.push(i), e.push(t / i));
                        return n === (0 | n) && e.push(n), e.sort(((t, e) => t - e)).pop(), e
                    }(i);
                    for (let t = 0, e = a.length - 1; t < e; t++) {
                        const e = a[t];
                        if (e > r) return e
                    }
                    return Math.max(r, 1)
                }(a, e, r);
                if (o > 0) {
                    let t, n;
                    const i = o > 1 ? Math.round((l - s) / (o - 1)) : null;
                    for (ka(e, c, u, ke(i) ? 0 : s - i, s), t = 0, n = o - 1; t < n; t++) ka(e, c, u, a[t], a[t + 1]);
                    return ka(e, c, u, l, ke(i) ? e.length : l + i), c
                }
                return ka(e, c, u), c
            }(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), s && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
        }

        configure() {
            let t, e, n = this.options.reverse;
            this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, n = !n), this._startPixel = t, this._endPixel = e, this._reversePixels = n, this._length = e - t, this._alignToPixels = this.options.alignToPixels
        }

        afterUpdate() {
            je(this.options.afterUpdate, [this])
        }

        beforeSetDimensions() {
            je(this.options.beforeSetDimensions, [this])
        }

        setDimensions() {
            this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
        }

        afterSetDimensions() {
            je(this.options.afterSetDimensions, [this])
        }

        _callHooks(t) {
            this.chart.notifyPlugins(t, this.getContext()), je(this.options[t], [this])
        }

        beforeDataLimits() {
            this._callHooks("beforeDataLimits")
        }

        determineDataLimits() {
        }

        afterDataLimits() {
            this._callHooks("afterDataLimits")
        }

        beforeBuildTicks() {
            this._callHooks("beforeBuildTicks")
        }

        buildTicks() {
            return []
        }

        afterBuildTicks() {
            this._callHooks("afterBuildTicks")
        }

        beforeTickToLabelConversion() {
            je(this.options.beforeTickToLabelConversion, [this])
        }

        generateTickLabels(t) {
            const e = this.options.ticks;
            let n, i, r;
            for (n = 0, i = t.length; n < i; n++) r = t[n], r.label = je(e.callback, [r.value, n, t], this)
        }

        afterTickToLabelConversion() {
            je(this.options.afterTickToLabelConversion, [this])
        }

        beforeCalculateLabelRotation() {
            je(this.options.beforeCalculateLabelRotation, [this])
        }

        calculateLabelRotation() {
            const t = this.options, e = t.ticks, n = Sa(this.ticks.length, t.ticks.maxTicksLimit),
                i = e.minRotation || 0, r = e.maxRotation;
            let a, o, s, l = i;
            if (!this._isVisible() || !e.display || i >= r || n <= 1 || !this.isHorizontal()) return void (this.labelRotation = i);
            const c = this._getLabelSizes(), u = c.widest.width, d = c.highest.height,
                h = mn(this.chart.width - u, 0, this.maxWidth);
            a = t.offset ? this.maxWidth / n : h / (n - 1), u + 6 > a && (a = h / (n - (t.offset ? .5 : 1)), o = this.maxHeight - Ca(t.grid) - e.padding - za(t.title, this.chart.options.font), s = Math.sqrt(u * u + d * d), l = cn(Math.min(Math.asin(mn((c.highest.height + 6) / a, -1, 1)), Math.asin(mn(o / s, -1, 1)) - Math.asin(mn(d / s, -1, 1)))), l = Math.max(i, Math.min(r, l))), this.labelRotation = l
        }

        afterCalculateLabelRotation() {
            je(this.options.afterCalculateLabelRotation, [this])
        }

        afterAutoSkip() {
        }

        beforeFit() {
            je(this.options.beforeFit, [this])
        }

        fit() {
            const t = {width: 0, height: 0}, {chart: e, options: {ticks: n, title: i, grid: r}} = this,
                a = this._isVisible(), o = this.isHorizontal();
            if (a) {
                const a = za(i, e.options.font);
                if (o ? (t.width = this.maxWidth, t.height = Ca(r) + a) : (t.height = this.maxHeight, t.width = Ca(r) + a), n.display && this.ticks.length) {
                    const {first: e, last: i, widest: r, highest: a} = this._getLabelSizes(), s = 2 * n.padding,
                        l = ln(this.labelRotation), c = Math.cos(l), u = Math.sin(l);
                    if (o) {
                        const e = n.mirror ? 0 : u * r.width + c * a.height;
                        t.height = Math.min(this.maxHeight, t.height + e + s)
                    } else {
                        const e = n.mirror ? 0 : c * r.width + u * a.height;
                        t.width = Math.min(this.maxWidth, t.width + e + s)
                    }
                    this._calculatePadding(e, i, u, c)
                }
            }
            this._handleMargins(), o ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom)
        }

        _calculatePadding(t, e, n, i) {
            const {ticks: {align: r, padding: a}, position: o} = this.options, s = 0 !== this.labelRotation,
                l = "top" !== o && "x" === this.axis;
            if (this.isHorizontal()) {
                const o = this.getPixelForTick(0) - this.left,
                    c = this.right - this.getPixelForTick(this.ticks.length - 1);
                let u = 0, d = 0;
                s ? l ? (u = i * t.width, d = n * e.height) : (u = n * t.height, d = i * e.width) : "start" === r ? d = e.width : "end" === r ? u = t.width : "inner" !== r && (u = t.width / 2, d = e.width / 2), this.paddingLeft = Math.max((u - o + a) * this.width / (this.width - o), 0), this.paddingRight = Math.max((d - c + a) * this.width / (this.width - c), 0)
            } else {
                let n = e.height / 2, i = t.height / 2;
                "start" === r ? (n = 0, i = t.height) : "end" === r && (n = e.height, i = 0), this.paddingTop = n + a, this.paddingBottom = i + a
            }
        }

        _handleMargins() {
            this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
        }

        afterFit() {
            je(this.options.afterFit, [this])
        }

        isHorizontal() {
            const {axis: t, position: e} = this.options;
            return "top" === e || "bottom" === e || "x" === t
        }

        isFullSize() {
            return this.options.fullSize
        }

        _convertTicksToLabels(t) {
            let e, n;
            for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, n = t.length; e < n; e++) ke(t[e].label) && (t.splice(e, 1), n--, e--);
            this.afterTickToLabelConversion()
        }

        _getLabelSizes() {
            let t = this._labelSizes;
            if (!t) {
                const e = this.options.ticks.sampleSize;
                let n = this.ticks;
                e < n.length && (n = wa(n, e)), this._labelSizes = t = this._computeLabelSizes(n, n.length, this.options.ticks.maxTicksLimit)
            }
            return t
        }

        _computeLabelSizes(t, e, n) {
            const {ctx: i, _longestTextCache: r} = this, a = [], o = [], s = Math.floor(e / Sa(e, n));
            let l, c, u, d, h, f, p, g, m, M, y, b = 0, x = 0;
            for (l = 0; l < e; l += s) {
                if (d = t[l].label, h = this._resolveTickFontOptions(l), i.font = f = h.string, p = r[f] = r[f] || {
                    data: {},
                    gc: []
                }, g = h.lineHeight, m = M = 0, ke(d) || Te(d)) {
                    if (Te(d)) for (c = 0, u = d.length; c < u; ++c) y = d[c], ke(y) || Te(y) || (m = Jn(i, p.data, p.gc, m, y), M += g)
                } else m = Jn(i, p.data, p.gc, m, d), M = g;
                a.push(m), o.push(M), b = Math.max(m, b), x = Math.max(M, x)
            }
            !function (t, e) {
                Ie(t, (t => {
                    const n = t.gc, i = n.length / 2;
                    let r;
                    if (i > e) {
                        for (r = 0; r < i; ++r) delete t.data[n[r]];
                        n.splice(0, i)
                    }
                }))
            }(r, e);
            const A = a.indexOf(b), v = o.indexOf(x), N = t => ({width: a[t] || 0, height: o[t] || 0});
            return {first: N(0), last: N(e - 1), widest: N(A), highest: N(v), widths: a, heights: o}
        }

        getLabelForValue(t) {
            return t
        }

        getPixelForValue(t, e) {
            return NaN
        }

        getValueForPixel(t) {
        }

        getPixelForTick(t) {
            const e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
        }

        getPixelForDecimal(t) {
            this._reversePixels && (t = 1 - t);
            const e = this._startPixel + t * this._length;
            return mn(this._alignToPixels ? $n(this.chart, e, 0) : e, -32768, 32767)
        }

        getDecimalForPixel(t) {
            const e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e
        }

        getBasePixel() {
            return this.getPixelForValue(this.getBaseValue())
        }

        getBaseValue() {
            const {min: t, max: e} = this;
            return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
        }

        getContext(t) {
            const e = this.ticks || [];
            if (t >= 0 && t < e.length) {
                const n = e[t];
                return n.$context || (n.$context = function (t, e, n) {
                    return xi(t, {tick: n, index: e, type: "tick"})
                }(this.getContext(), t, n))
            }
            return this.$context || (this.$context = xi(this.chart.getContext(), {scale: this, type: "scale"}))
        }

        _tickSize() {
            const t = this.options.ticks, e = ln(this.labelRotation), n = Math.abs(Math.cos(e)),
                i = Math.abs(Math.sin(e)), r = this._getLabelSizes(), a = t.autoSkipPadding || 0,
                o = r ? r.widest.width + a : 0, s = r ? r.highest.height + a : 0;
            return this.isHorizontal() ? s * n > o * i ? o / n : s / i : s * i < o * n ? s / n : o / i
        }

        _isVisible() {
            const t = this.options.display;
            return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0
        }

        _computeGridLineItems(t) {
            const e = this.axis, n = this.chart, i = this.options, {grid: r, position: a, border: o} = i, s = r.offset,
                l = this.isHorizontal(), c = this.ticks.length + (s ? 1 : 0), u = Ca(r), d = [],
                h = o.setContext(this.getContext()), f = h.display ? h.width : 0, p = f / 2, g = function (t) {
                    return $n(n, t, f)
                };
            let m, M, y, b, x, A, v, N, D, k, T, S;
            if ("top" === a) m = g(this.bottom), A = this.bottom - u, N = m - p, k = g(t.top) + p, S = t.bottom; else if ("bottom" === a) m = g(this.top), k = t.top, S = g(t.bottom) - p, A = m + p, N = this.top + u; else if ("left" === a) m = g(this.right), x = this.right - u, v = m - p, D = g(t.left) + p, T = t.right; else if ("right" === a) m = g(this.left), D = t.left, T = g(t.right) - p, x = m + p, v = this.left + u; else if ("x" === e) {
                if ("center" === a) m = g((t.top + t.bottom) / 2 + .5); else if (Se(a)) {
                    const t = Object.keys(a)[0], e = a[t];
                    m = g(this.chart.scales[t].getPixelForValue(e))
                }
                k = t.top, S = t.bottom, A = m + p, N = A + u
            } else if ("y" === e) {
                if ("center" === a) m = g((t.left + t.right) / 2); else if (Se(a)) {
                    const t = Object.keys(a)[0], e = a[t];
                    m = g(this.chart.scales[t].getPixelForValue(e))
                }
                x = m - p, v = x - u, D = t.left, T = t.right
            }
            const w = Ce(i.ticks.maxTicksLimit, c), E = Math.max(1, Math.ceil(c / w));
            for (M = 0; M < c; M += E) {
                const t = this.getContext(M), e = r.setContext(t), i = o.setContext(t), a = e.lineWidth, c = e.color,
                    u = i.dash || [], h = i.dashOffset, f = e.tickWidth, p = e.tickColor, g = e.tickBorderDash || [],
                    m = e.tickBorderDashOffset;
                y = Ea(this, M, s), void 0 !== y && (b = $n(n, y, a), l ? x = v = D = T = b : A = N = k = S = b, d.push({
                    tx1: x,
                    ty1: A,
                    tx2: v,
                    ty2: N,
                    x1: D,
                    y1: k,
                    x2: T,
                    y2: S,
                    width: a,
                    color: c,
                    borderDash: u,
                    borderDashOffset: h,
                    tickWidth: f,
                    tickColor: p,
                    tickBorderDash: g,
                    tickBorderDashOffset: m
                }))
            }
            return this._ticksLength = c, this._borderValue = m, d
        }

        _computeLabelItems(t) {
            const e = this.axis, n = this.options, {position: i, ticks: r} = n, a = this.isHorizontal(),
                o = this.ticks, {align: s, crossAlign: l, padding: c, mirror: u} = r, d = Ca(n.grid), h = d + c,
                f = u ? -c : h, p = -ln(this.labelRotation), g = [];
            let m, M, y, b, x, A, v, N, D, k, T, S, w = "middle";
            if ("top" === i) A = this.bottom - f, v = this._getXAxisLabelAlignment(); else if ("bottom" === i) A = this.top + f, v = this._getXAxisLabelAlignment(); else if ("left" === i) {
                const t = this._getYAxisLabelAlignment(d);
                v = t.textAlign, x = t.x
            } else if ("right" === i) {
                const t = this._getYAxisLabelAlignment(d);
                v = t.textAlign, x = t.x
            } else if ("x" === e) {
                if ("center" === i) A = (t.top + t.bottom) / 2 + h; else if (Se(i)) {
                    const t = Object.keys(i)[0], e = i[t];
                    A = this.chart.scales[t].getPixelForValue(e) + h
                }
                v = this._getXAxisLabelAlignment()
            } else if ("y" === e) {
                if ("center" === i) x = (t.left + t.right) / 2 - h; else if (Se(i)) {
                    const t = Object.keys(i)[0], e = i[t];
                    x = this.chart.scales[t].getPixelForValue(e)
                }
                v = this._getYAxisLabelAlignment(d).textAlign
            }
            "y" === e && ("start" === s ? w = "top" : "end" === s && (w = "bottom"));
            const E = this._getLabelSizes();
            for (m = 0, M = o.length; m < M; ++m) {
                y = o[m], b = y.label;
                const t = r.setContext(this.getContext(m));
                N = this.getPixelForTick(m) + r.labelOffset, D = this._resolveTickFontOptions(m), k = D.lineHeight, T = Te(b) ? b.length : 1;
                const e = T / 2, n = t.color, s = t.textStrokeColor, c = t.textStrokeWidth;
                let d, h = v;
                if (a ? (x = N, "inner" === v && (h = m === M - 1 ? this.options.reverse ? "left" : "right" : 0 === m ? this.options.reverse ? "right" : "left" : "center"), S = "top" === i ? "near" === l || 0 !== p ? -T * k + k / 2 : "center" === l ? -E.highest.height / 2 - e * k + k : -E.highest.height + k / 2 : "near" === l || 0 !== p ? k / 2 : "center" === l ? E.highest.height / 2 - e * k : E.highest.height - T * k, u && (S *= -1), 0 === p || t.showLabelBackdrop || (x += k / 2 * Math.sin(p))) : (A = N, S = (1 - T) * k / 2), t.showLabelBackdrop) {
                    const e = Mi(t.backdropPadding), n = E.heights[m], i = E.widths[m];
                    let r = S - e.top, a = 0 - e.left;
                    switch (w) {
                        case"middle":
                            r -= n / 2;
                            break;
                        case"bottom":
                            r -= n
                    }
                    switch (v) {
                        case"center":
                            a -= i / 2;
                            break;
                        case"right":
                            a -= i;
                            break;
                        case"inner":
                            m === M - 1 ? a -= i : m > 0 && (a -= i / 2)
                    }
                    d = {left: a, top: r, width: i + e.width, height: n + e.height, color: t.backdropColor}
                }
                g.push({
                    label: b,
                    font: D,
                    textOffset: S,
                    options: {
                        rotation: p,
                        color: n,
                        strokeColor: s,
                        strokeWidth: c,
                        textAlign: h,
                        textBaseline: w,
                        translation: [x, A],
                        backdrop: d
                    }
                })
            }
            return g
        }

        _getXAxisLabelAlignment() {
            const {position: t, ticks: e} = this.options;
            if (-ln(this.labelRotation)) return "top" === t ? "left" : "right";
            let n = "center";
            return "start" === e.align ? n = "left" : "end" === e.align ? n = "right" : "inner" === e.align && (n = "inner"), n
        }

        _getYAxisLabelAlignment(t) {
            const {position: e, ticks: {crossAlign: n, mirror: i, padding: r}} = this.options, a = t + r,
                o = this._getLabelSizes().widest.width;
            let s, l;
            return "left" === e ? i ? (l = this.right + r, "near" === n ? s = "left" : "center" === n ? (s = "center", l += o / 2) : (s = "right", l += o)) : (l = this.right - a, "near" === n ? s = "right" : "center" === n ? (s = "center", l -= o / 2) : (s = "left", l = this.left)) : "right" === e ? i ? (l = this.left + r, "near" === n ? s = "right" : "center" === n ? (s = "center", l -= o / 2) : (s = "left", l -= o)) : (l = this.left + a, "near" === n ? s = "left" : "center" === n ? (s = "center", l += o / 2) : (s = "right", l = this.right)) : s = "right", {
                textAlign: s,
                x: l
            }
        }

        _computeLabelArea() {
            if (this.options.ticks.mirror) return;
            const t = this.chart, e = this.options.position;
            return "left" === e || "right" === e ? {
                top: 0,
                left: this.left,
                bottom: t.height,
                right: this.right
            } : "top" === e || "bottom" === e ? {top: this.top, left: 0, bottom: this.bottom, right: t.width} : void 0
        }

        drawBackground() {
            const {ctx: t, options: {backgroundColor: e}, left: n, top: i, width: r, height: a} = this;
            e && (t.save(), t.fillStyle = e, t.fillRect(n, i, r, a), t.restore())
        }

        getLineWidthForValue(t) {
            const e = this.options.grid;
            if (!this._isVisible() || !e.display) return 0;
            const n = this.ticks.findIndex((e => e.value === t));
            return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0
        }

        drawGrid(t) {
            const e = this.options.grid, n = this.ctx,
                i = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
            let r, a;
            const o = (t, e, i) => {
                i.width && i.color && (n.save(), n.lineWidth = i.width, n.strokeStyle = i.color, n.setLineDash(i.borderDash || []), n.lineDashOffset = i.borderDashOffset, n.beginPath(), n.moveTo(t.x, t.y), n.lineTo(e.x, e.y), n.stroke(), n.restore())
            };
            if (e.display) for (r = 0, a = i.length; r < a; ++r) {
                const t = i[r];
                e.drawOnChartArea && o({x: t.x1, y: t.y1}, {x: t.x2, y: t.y2}, t), e.drawTicks && o({
                    x: t.tx1,
                    y: t.ty1
                }, {x: t.tx2, y: t.ty2}, {
                    color: t.tickColor,
                    width: t.tickWidth,
                    borderDash: t.tickBorderDash,
                    borderDashOffset: t.tickBorderDashOffset
                })
            }
        }

        drawBorder() {
            const {chart: t, ctx: e, options: {border: n, grid: i}} = this, r = n.setContext(this.getContext()),
                a = n.display ? r.width : 0;
            if (!a) return;
            const o = i.setContext(this.getContext(0)).lineWidth, s = this._borderValue;
            let l, c, u, d;
            this.isHorizontal() ? (l = $n(t, this.left, a) - a / 2, c = $n(t, this.right, o) + o / 2, u = d = s) : (u = $n(t, this.top, a) - a / 2, d = $n(t, this.bottom, o) + o / 2, l = c = s), e.save(), e.lineWidth = r.width, e.strokeStyle = r.color, e.beginPath(), e.moveTo(l, u), e.lineTo(c, d), e.stroke(), e.restore()
        }

        drawLabels(t) {
            if (!this.options.ticks.display) return;
            const e = this.ctx, n = this._computeLabelArea();
            n && ni(e, n);
            const i = this.getLabelItems(t);
            for (const t of i) {
                const n = t.options, i = t.font;
                li(e, t.label, 0, t.textOffset, i, n)
            }
            n && ii(e)
        }

        drawTitle() {
            const {ctx: t, options: {position: e, title: n, reverse: i}} = this;
            if (!n.display) return;
            const r = yi(n.font), a = Mi(n.padding), o = n.align;
            let s = r.lineHeight / 2;
            "bottom" === e || "center" === e || Se(e) ? (s += a.bottom, Te(n.text) && (s += r.lineHeight * (n.text.length - 1))) : s += a.top;
            const {titleX: l, titleY: c, maxWidth: u, rotation: d} = function (t, e, n, i) {
                const {top: r, left: a, bottom: o, right: s, chart: l} = t, {chartArea: c, scales: u} = l;
                let d, h, f, p = 0;
                const g = o - r, m = s - a;
                if (t.isHorizontal()) {
                    if (h = Sn(i, a, s), Se(n)) {
                        const t = Object.keys(n)[0], i = n[t];
                        f = u[t].getPixelForValue(i) + g - e
                    } else f = "center" === n ? (c.bottom + c.top) / 2 + g - e : Ta(t, n, e);
                    d = s - a
                } else {
                    if (Se(n)) {
                        const t = Object.keys(n)[0], i = n[t];
                        h = u[t].getPixelForValue(i) - m + e
                    } else h = "center" === n ? (c.left + c.right) / 2 - m + e : Ta(t, n, e);
                    f = Sn(i, o, r), p = "left" === n ? -Ke : Ke
                }
                return {titleX: h, titleY: f, maxWidth: d, rotation: p}
            }(this, s, e, o);
            li(t, n.text, 0, 0, r, {
                color: n.color,
                maxWidth: u,
                rotation: d,
                textAlign: ja(o, e, i),
                textBaseline: "middle",
                translation: [l, c]
            })
        }

        draw(t) {
            this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
        }

        _layers() {
            const t = this.options, e = t.ticks && t.ticks.z || 0, n = Ce(t.grid && t.grid.z, -1),
                i = Ce(t.border && t.border.z, 0);
            return this._isVisible() && this.draw === Ia.prototype.draw ? [{
                z: n, draw: t => {
                    this.drawBackground(), this.drawGrid(t), this.drawTitle()
                }
            }, {
                z: i, draw: () => {
                    this.drawBorder()
                }
            }, {
                z: e, draw: t => {
                    this.drawLabels(t)
                }
            }] : [{
                z: e, draw: t => {
                    this.draw(t)
                }
            }]
        }

        getMatchingVisibleMetas(t) {
            const e = this.chart.getSortedVisibleDatasetMetas(), n = this.axis + "AxisID", i = [];
            let r, a;
            for (r = 0, a = e.length; r < a; ++r) {
                const a = e[r];
                a[n] !== this.id || t && a.type !== t || i.push(a)
            }
            return i
        }

        _resolveTickFontOptions(t) {
            return yi(this.options.ticks.setContext(this.getContext(t)).font)
        }

        _maxDigits() {
            const t = this._resolveTickFontOptions(0).lineHeight;
            return (this.isHorizontal() ? this.width : this.height) / t
        }
    }

    class _a {
        constructor(t, e, n) {
            this.type = t, this.scope = e, this.override = n, this.items = Object.create(null)
        }

        isForType(t) {
            return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
        }

        register(t) {
            const e = Object.getPrototypeOf(t);
            let n;
            (function (t) {
                return "id" in t && "defaults" in t
            })(e) && (n = this.register(e));
            const i = this.items, r = t.id, a = this.scope + "." + r;
            if (!r) throw new Error("class does not have id: " + t);
            return r in i || (i[r] = t, function (t, e, n) {
                const i = Re(Object.create(null), [n ? Gn.get(n) : {}, Gn.get(e), t.defaults]);
                Gn.set(e, i), t.defaultRoutes && function (t, e) {
                    Object.keys(e).forEach((n => {
                        const i = n.split("."), r = i.pop(), a = [t].concat(i).join("."), o = e[n].split("."),
                            s = o.pop(), l = o.join(".");
                        Gn.route(a, r, l, s)
                    }))
                }(e, t.defaultRoutes), t.descriptors && Gn.describe(e, t.descriptors)
            }(t, a, n), this.override && Gn.override(t.id, t.overrides)), a
        }

        get(t) {
            return this.items[t]
        }

        unregister(t) {
            const e = this.items, n = t.id, i = this.scope;
            n in e && delete e[n], i && n in Gn[i] && (delete Gn[i][n], this.override && delete Qn[n])
        }
    }

    class Oa {
        constructor() {
            this.controllers = new _a(wr, "datasets", !0), this.elements = new _a(Da, "elements"), this.plugins = new _a(Object, "plugins"), this.scales = new _a(Ia, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
        }

        add(...t) {
            this._each("register", t)
        }

        remove(...t) {
            this._each("unregister", t)
        }

        addControllers(...t) {
            this._each("register", t, this.controllers)
        }

        addElements(...t) {
            this._each("register", t, this.elements)
        }

        addPlugins(...t) {
            this._each("register", t, this.plugins)
        }

        addScales(...t) {
            this._each("register", t, this.scales)
        }

        getController(t) {
            return this._get(t, this.controllers, "controller")
        }

        getElement(t) {
            return this._get(t, this.elements, "element")
        }

        getPlugin(t) {
            return this._get(t, this.plugins, "plugin")
        }

        getScale(t) {
            return this._get(t, this.scales, "scale")
        }

        removeControllers(...t) {
            this._each("unregister", t, this.controllers)
        }

        removeElements(...t) {
            this._each("unregister", t, this.elements)
        }

        removePlugins(...t) {
            this._each("unregister", t, this.plugins)
        }

        removeScales(...t) {
            this._each("unregister", t, this.scales)
        }

        _each(t, e, n) {
            [...e].forEach((e => {
                const i = n || this._getRegistryForType(e);
                n || i.isForType(e) || i === this.plugins && e.id ? this._exec(t, i, e) : Ie(e, (e => {
                    const i = n || this._getRegistryForType(e);
                    this._exec(t, i, e)
                }))
            }))
        }

        _exec(t, e, n) {
            const i = Qe(t);
            je(n["before" + i], [], n), e[t](n), je(n["after" + i], [], n)
        }

        _getRegistryForType(t) {
            for (let e = 0; e < this._typedRegistries.length; e++) {
                const n = this._typedRegistries[e];
                if (n.isForType(t)) return n
            }
            return this.plugins
        }

        _get(t, e, n) {
            const i = e.get(t);
            if (void 0 === i) throw new Error('"' + t + '" is not a registered ' + n + ".");
            return i
        }
    }

    var La = new Oa;

    class Ua {
        constructor() {
            this._init = []
        }

        notify(t, e, n, i) {
            "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
            const r = i ? this._descriptors(t).filter(i) : this._descriptors(t), a = this._notify(r, t, e, n);
            return "afterDestroy" === e && (this._notify(r, t, "stop"), this._notify(this._init, t, "uninstall")), a
        }

        _notify(t, e, n, i) {
            i = i || {};
            for (const r of t) {
                const t = r.plugin;
                if (!1 === je(t[n], [e, i, r.options], t) && i.cancelable) return !1
            }
            return !0
        }

        invalidate() {
            ke(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
        }

        _descriptors(t) {
            if (this._cache) return this._cache;
            const e = this._cache = this._createDescriptors(t);
            return this._notifyStateChanges(t), e
        }

        _createDescriptors(t, e) {
            const n = t && t.config, i = Ce(n.options && n.options.plugins, {}), r = function (t) {
                const e = {}, n = [], i = Object.keys(La.plugins.items);
                for (let t = 0; t < i.length; t++) n.push(La.getPlugin(i[t]));
                const r = t.plugins || [];
                for (let t = 0; t < r.length; t++) {
                    const i = r[t];
                    -1 === n.indexOf(i) && (n.push(i), e[i.id] = !0)
                }
                return {plugins: n, localIds: e}
            }(n);
            return !1 !== i || e ? function (t, {plugins: e, localIds: n}, i, r) {
                const a = [], o = t.getContext();
                for (const s of e) {
                    const e = s.id, l = Ra(i[e], r);
                    null !== l && a.push({plugin: s, options: Va(t.config, {plugin: s, local: n[e]}, l, o)})
                }
                return a
            }(t, r, i, e) : []
        }

        _notifyStateChanges(t) {
            const e = this._oldCache || [], n = this._cache,
                i = (t, e) => t.filter((t => !e.some((e => t.plugin.id === e.plugin.id))));
            this._notify(i(e, n), t, "stop"), this._notify(i(n, e), t, "start")
        }
    }

    function Ra(t, e) {
        return e || !1 !== t ? !0 === t ? {} : t : null
    }

    function Va(t, {plugin: e, local: n}, i, r) {
        const a = t.pluginScopeKeys(e), o = t.getOptionScopes(i, a);
        return n && e.defaults && o.push(e.defaults), t.createResolver(o, r, [""], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0
        })
    }

    function Fa(t, e) {
        const n = Gn.datasets[t] || {};
        return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || "x"
    }

    function Pa(t) {
        if ("x" === t || "y" === t || "r" === t) return t
    }

    function Wa(t, ...e) {
        if (Pa(t)) return t;
        for (const i of e) {
            const e = i.axis || ("top" === (n = i.position) || "bottom" === n ? "x" : "left" === n || "right" === n ? "y" : void 0) || t.length > 1 && Pa(t[0].toLowerCase());
            if (e) return e
        }
        var n;
        throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)
    }

    function Qa(t, e, n) {
        if (n[e + "AxisID"] === t) return {axis: e}
    }

    function Ya(t) {
        const e = t.options || (t.options = {});
        e.plugins = Ce(e.plugins, {}), e.scales = function (t, e) {
            const n = Qn[t.type] || {scales: {}}, i = e.scales || {}, r = Fa(t.type, e), a = Object.create(null);
            return Object.keys(i).forEach((e => {
                const o = i[e];
                if (!Se(o)) return console.error(`Invalid scale configuration for scale: ${e}`);
                if (o._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${e}`);
                const s = Wa(e, o, function (t, e) {
                    if (e.data && e.data.datasets) {
                        const n = e.data.datasets.filter((e => e.xAxisID === t || e.yAxisID === t));
                        if (n.length) return Qa(t, "x", n[0]) || Qa(t, "y", n[0])
                    }
                    return {}
                }(e, t), Gn.scales[o.type]), l = function (t, e) {
                    return t === e ? "_index_" : "_value_"
                }(s, r), c = n.scales || {};
                a[e] = Ve(Object.create(null), [{axis: s}, o, c[s], c[l]])
            })), t.data.datasets.forEach((n => {
                const r = n.type || t.type, o = n.indexAxis || Fa(r, e), s = (Qn[r] || {}).scales || {};
                Object.keys(s).forEach((t => {
                    const e = function (t, e) {
                        let n = t;
                        return "_index_" === t ? n = e : "_value_" === t && (n = "x" === e ? "y" : "x"), n
                    }(t, o), r = n[e + "AxisID"] || e;
                    a[r] = a[r] || Object.create(null), Ve(a[r], [{axis: e}, i[r], s[t]])
                }))
            })), Object.keys(a).forEach((t => {
                const e = a[t];
                Ve(e, [Gn.scales[e.type], Gn.scale])
            })), a
        }(t, e)
    }

    function Ba(t) {
        return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t
    }

    const Za = new Map, Ha = new Set;

    function Ga(t, e) {
        let n = Za.get(t);
        return n || (n = e(), Za.set(t, n), Ha.add(n)), n
    }

    const Ja = (t, e, n) => {
        const i = We(e, n);
        void 0 !== i && t.add(i)
    };

    class Xa {
        constructor(t) {
            this._config = function (t) {
                return (t = t || {}).data = Ba(t.data), Ya(t), t
            }(t), this._scopeCache = new Map, this._resolverCache = new Map
        }

        get platform() {
            return this._config.platform
        }

        get type() {
            return this._config.type
        }

        set type(t) {
            this._config.type = t
        }

        get data() {
            return this._config.data
        }

        set data(t) {
            this._config.data = Ba(t)
        }

        get options() {
            return this._config.options
        }

        set options(t) {
            this._config.options = t
        }

        get plugins() {
            return this._config.plugins
        }

        update() {
            const t = this._config;
            this.clearCache(), Ya(t)
        }

        clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear()
        }

        datasetScopeKeys(t) {
            return Ga(t, (() => [[`datasets.${t}`, ""]]))
        }

        datasetAnimationScopeKeys(t, e) {
            return Ga(`${t}.transition.${e}`, (() => [[`datasets.${t}.transitions.${e}`, `transitions.${e}`], [`datasets.${t}`, ""]]))
        }

        datasetElementScopeKeys(t, e) {
            return Ga(`${t}-${e}`, (() => [[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]]))
        }

        pluginScopeKeys(t) {
            const e = t.id;
            return Ga(`${this.type}-plugin-${e}`, (() => [[`plugins.${e}`, ...t.additionalOptionScopes || []]]))
        }

        _cachedScopes(t, e) {
            const n = this._scopeCache;
            let i = n.get(t);
            return i && !e || (i = new Map, n.set(t, i)), i
        }

        getOptionScopes(t, e, n) {
            const {options: i, type: r} = this, a = this._cachedScopes(t, n), o = a.get(e);
            if (o) return o;
            const s = new Set;
            e.forEach((e => {
                t && (s.add(t), e.forEach((e => Ja(s, t, e)))), e.forEach((t => Ja(s, i, t))), e.forEach((t => Ja(s, Qn[r] || {}, t))), e.forEach((t => Ja(s, Gn, t))), e.forEach((t => Ja(s, Yn, t)))
            }));
            const l = Array.from(s);
            return 0 === l.length && l.push(Object.create(null)), Ha.has(e) && a.set(e, l), l
        }

        chartOptionScopes() {
            const {options: t, type: e} = this;
            return [t, Qn[e] || {}, Gn.datasets[e] || {}, {type: e}, Gn, Yn]
        }

        resolveNamedOptions(t, e, n, i = [""]) {
            const r = {$shared: !0}, {resolver: a, subPrefixes: o} = $a(this._resolverCache, t, i);
            let s = a;
            (function (t, e) {
                const {isScriptable: n, isIndexable: i} = Ni(t);
                for (const r of e) {
                    const e = n(r), a = i(r), o = (a || e) && t[r];
                    if (e && (Be(o) || Ka(o)) || a && Te(o)) return !0
                }
                return !1
            })(a, e) && (r.$shared = !1, s = vi(a, n = Be(n) ? n() : n, this.createResolver(t, n, o)));
            for (const t of e) r[t] = s[t];
            return r
        }

        createResolver(t, e, n = [""], i) {
            const {resolver: r} = $a(this._resolverCache, t, n);
            return Se(e) ? vi(r, e, void 0, i) : r
        }
    }

    function $a(t, e, n) {
        let i = t.get(e);
        i || (i = new Map, t.set(e, i));
        const r = n.join();
        let a = i.get(r);
        return a || (a = {
            resolver: Ai(e, n),
            subPrefixes: n.filter((t => !t.toLowerCase().includes("hover")))
        }, i.set(r, a)), a
    }

    const Ka = t => Se(t) && Object.getOwnPropertyNames(t).some((e => Be(t[e]))),
        qa = ["top", "bottom", "left", "right", "chartArea"];

    function to(t, e) {
        return "top" === t || "bottom" === t || -1 === qa.indexOf(t) && "x" === e
    }

    function eo(t, e) {
        return function (n, i) {
            return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t]
        }
    }

    function no(t) {
        const e = t.chart, n = e.options.animation;
        e.notifyPlugins("afterRender"), je(n && n.onComplete, [t], e)
    }

    function io(t) {
        const e = t.chart, n = e.options.animation;
        je(n && n.onProgress, [t], e)
    }

    function ro(t) {
        return Pi() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t
    }

    const ao = {}, oo = t => {
        const e = ro(t);
        return Object.values(ao).filter((t => t.canvas === e)).pop()
    };

    function so(t, e, n) {
        const i = Object.keys(t);
        for (const r of i) {
            const i = +r;
            if (i >= e) {
                const a = t[r];
                delete t[r], (n > 0 || i > e) && (t[i + n] = a)
            }
        }
    }

    function lo(t, e, n) {
        return t.options.clip ? t[n] : e[n]
    }

    class co {
        static defaults = Gn;
        static instances = ao;
        static overrides = Qn;
        static registry = La;
        static version = "4.4.3";
        static getChart = oo;

        static register(...t) {
            La.add(...t), uo()
        }

        static unregister(...t) {
            La.remove(...t), uo()
        }

        constructor(t, e) {
            const n = this.config = new Xa(e), i = ro(t), r = oo(i);
            if (r) throw new Error("Canvas is already in use. Chart with ID '" + r.id + "' must be destroyed before the canvas with ID '" + r.canvas.id + "' can be reused.");
            const a = n.createResolver(n.chartOptionScopes(), this.getContext());
            this.platform = new (n.platform || function (t) {
                return !Pi() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? la : Na
            }(i)), this.platform.updateConfig(n);
            const o = this.platform.acquireContext(i, a.aspectRatio), s = o && o.canvas, l = s && s.height,
                c = s && s.width;
            this.id = De(), this.ctx = o, this.canvas = s, this.width = c, this.height = l, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Ua, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = function (t, e) {
                let n;
                return function (...i) {
                    return e ? (clearTimeout(n), n = setTimeout(t, e, i)) : t.apply(this, i), e
                }
            }((t => this.update(t)), a.resizeDelay || 0), this._dataChanges = [], ao[this.id] = this, o && s ? (hr.listen(this, "complete", no), hr.listen(this, "progress", io), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item")
        }

        get aspectRatio() {
            const {options: {aspectRatio: t, maintainAspectRatio: e}, width: n, height: i, _aspectRatio: r} = this;
            return ke(t) ? e && r ? r : i ? n / i : null : t
        }

        get data() {
            return this.config.data
        }

        set data(t) {
            this.config.data = t
        }

        get options() {
            return this._options
        }

        set options(t) {
            this.config.options = t
        }

        get registry() {
            return La
        }

        _initialize() {
            return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Xi(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
        }

        clear() {
            return Kn(this.canvas, this.ctx), this
        }

        stop() {
            return hr.stop(this), this
        }

        resize(t, e) {
            hr.running(this) ? this._resizeBeforeDraw = {width: t, height: e} : this._resize(t, e)
        }

        _resize(t, e) {
            const n = this.options, i = this.canvas, r = n.maintainAspectRatio && this.aspectRatio,
                a = this.platform.getMaximumSize(i, t, e, r),
                o = n.devicePixelRatio || this.platform.getDevicePixelRatio(), s = this.width ? "resize" : "attach";
            this.width = a.width, this.height = a.height, this._aspectRatio = this.aspectRatio, Xi(this, o, !0) && (this.notifyPlugins("resize", {size: a}), je(n.onResize, [this, a], this), this.attached && this._doResize(s) && this.render())
        }

        ensureScalesHaveIDs() {
            Ie(this.options.scales || {}, ((t, e) => {
                t.id = e
            }))
        }

        buildOrUpdateScales() {
            const t = this.options, e = t.scales, n = this.scales,
                i = Object.keys(n).reduce(((t, e) => (t[e] = !1, t)), {});
            let r = [];
            e && (r = r.concat(Object.keys(e).map((t => {
                const n = e[t], i = Wa(t, n), r = "r" === i, a = "x" === i;
                return {
                    options: n,
                    dposition: r ? "chartArea" : a ? "bottom" : "left",
                    dtype: r ? "radialLinear" : a ? "category" : "linear"
                }
            })))), Ie(r, (e => {
                const r = e.options, a = r.id, o = Wa(a, r), s = Ce(r.type, e.dtype);
                void 0 !== r.position && to(r.position, o) === to(e.dposition) || (r.position = e.dposition), i[a] = !0;
                let l = null;
                a in n && n[a].type === s ? l = n[a] : (l = new (La.getScale(s))({
                    id: a,
                    type: s,
                    ctx: this.ctx,
                    chart: this
                }), n[l.id] = l), l.init(r, t)
            })), Ie(i, ((t, e) => {
                t || delete n[e]
            })), Ie(n, (t => {
                oa.configure(this, t, t.options), oa.addBox(this, t)
            }))
        }

        _updateMetasets() {
            const t = this._metasets, e = this.data.datasets.length, n = t.length;
            if (t.sort(((t, e) => t.index - e.index)), n > e) {
                for (let t = e; t < n; ++t) this._destroyDatasetMeta(t);
                t.splice(e, n - e)
            }
            this._sortedMetasets = t.slice(0).sort(eo("order", "index"))
        }

        _removeUnreferencedMetasets() {
            const {_metasets: t, data: {datasets: e}} = this;
            t.length > e.length && delete this._stacks, t.forEach(((t, n) => {
                0 === e.filter((e => e === t._dataset)).length && this._destroyDatasetMeta(n)
            }))
        }

        buildOrUpdateControllers() {
            const t = [], e = this.data.datasets;
            let n, i;
            for (this._removeUnreferencedMetasets(), n = 0, i = e.length; n < i; n++) {
                const i = e[n];
                let r = this.getDatasetMeta(n);
                const a = i.type || this.config.type;
                if (r.type && r.type !== a && (this._destroyDatasetMeta(n), r = this.getDatasetMeta(n)), r.type = a, r.indexAxis = i.indexAxis || Fa(a, this.options), r.order = i.order || 0, r.index = n, r.label = "" + i.label, r.visible = this.isDatasetVisible(n), r.controller) r.controller.updateIndex(n), r.controller.linkScales(); else {
                    const e = La.getController(a), {datasetElementType: i, dataElementType: o} = Gn.datasets[a];
                    Object.assign(e, {
                        dataElementType: La.getElement(o),
                        datasetElementType: i && La.getElement(i)
                    }), r.controller = new e(this, n), t.push(r.controller)
                }
            }
            return this._updateMetasets(), t
        }

        _resetElements() {
            Ie(this.data.datasets, ((t, e) => {
                this.getDatasetMeta(e).controller.reset()
            }), this)
        }

        reset() {
            this._resetElements(), this.notifyPlugins("reset")
        }

        update(t) {
            const e = this.config;
            e.update();
            const n = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
                i = this._animationsDisabled = !n.animation;
            if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", {
                mode: t,
                cancelable: !0
            })) return;
            const r = this.buildOrUpdateControllers();
            this.notifyPlugins("beforeElementsUpdate");
            let a = 0;
            for (let t = 0, e = this.data.datasets.length; t < e; t++) {
                const {controller: e} = this.getDatasetMeta(t), n = !i && -1 === r.indexOf(e);
                e.buildOrUpdateElements(n), a = Math.max(+e.getMaxOverflow(), a)
            }
            a = this._minPadding = n.layout.autoPadding ? a : 0, this._updateLayout(a), i || Ie(r, (t => {
                t.reset()
            })), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {mode: t}), this._layers.sort(eo("z", "_idx"));
            const {_active: o, _lastEvent: s} = this;
            s ? this._eventHandler(s, !0) : o.length && this._updateHoverStyles(o, o, !0), this.render()
        }

        _updateScales() {
            Ie(this.scales, (t => {
                oa.removeBox(this, t)
            })), this.ensureScalesHaveIDs(), this.buildOrUpdateScales()
        }

        _checkEventBindings() {
            const t = this.options, e = new Set(Object.keys(this._listeners)), n = new Set(t.events);
            Ze(e, n) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), this.bindEvents())
        }

        _updateHiddenIndices() {
            const {_hiddenIndices: t} = this, e = this._getUniformDataChanges() || [];
            for (const {method: n, start: i, count: r} of e) so(t, i, "_removeElements" === n ? -r : r)
        }

        _getUniformDataChanges() {
            const t = this._dataChanges;
            if (!t || !t.length) return;
            this._dataChanges = [];
            const e = this.data.datasets.length,
                n = e => new Set(t.filter((t => t[0] === e)).map(((t, e) => e + "," + t.splice(1).join(",")))),
                i = n(0);
            for (let t = 1; t < e; t++) if (!Ze(i, n(t))) return;
            return Array.from(i).map((t => t.split(","))).map((t => ({method: t[1], start: +t[2], count: +t[3]})))
        }

        _updateLayout(t) {
            if (!1 === this.notifyPlugins("beforeLayout", {cancelable: !0})) return;
            oa.update(this, this.width, this.height, t);
            const e = this.chartArea, n = e.width <= 0 || e.height <= 0;
            this._layers = [], Ie(this.boxes, (t => {
                n && "chartArea" === t.position || (t.configure && t.configure(), this._layers.push(...t._layers()))
            }), this), this._layers.forEach(((t, e) => {
                t._idx = e
            })), this.notifyPlugins("afterLayout")
        }

        _updateDatasets(t) {
            if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {mode: t, cancelable: !0})) {
                for (let t = 0, e = this.data.datasets.length; t < e; ++t) this.getDatasetMeta(t).controller.configure();
                for (let e = 0, n = this.data.datasets.length; e < n; ++e) this._updateDataset(e, Be(t) ? t({datasetIndex: e}) : t);
                this.notifyPlugins("afterDatasetsUpdate", {mode: t})
            }
        }

        _updateDataset(t, e) {
            const n = this.getDatasetMeta(t), i = {meta: n, index: t, mode: e, cancelable: !0};
            !1 !== this.notifyPlugins("beforeDatasetUpdate", i) && (n.controller._update(e), i.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", i))
        }

        render() {
            !1 !== this.notifyPlugins("beforeRender", {cancelable: !0}) && (hr.has(this) ? this.attached && !hr.running(this) && hr.start(this) : (this.draw(), no({chart: this})))
        }

        draw() {
            let t;
            if (this._resizeBeforeDraw) {
                const {width: t, height: e} = this._resizeBeforeDraw;
                this._resize(t, e), this._resizeBeforeDraw = null
            }
            if (this.clear(), this.width <= 0 || this.height <= 0) return;
            if (!1 === this.notifyPlugins("beforeDraw", {cancelable: !0})) return;
            const e = this._layers;
            for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
            for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
            this.notifyPlugins("afterDraw")
        }

        _getSortedDatasetMetas(t) {
            const e = this._sortedMetasets, n = [];
            let i, r;
            for (i = 0, r = e.length; i < r; ++i) {
                const r = e[i];
                t && !r.visible || n.push(r)
            }
            return n
        }

        getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0)
        }

        _drawDatasets() {
            if (!1 === this.notifyPlugins("beforeDatasetsDraw", {cancelable: !0})) return;
            const t = this.getSortedVisibleDatasetMetas();
            for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
            this.notifyPlugins("afterDatasetsDraw")
        }

        _drawDataset(t) {
            const e = this.ctx, n = t._clip, i = !n.disabled, r = function (t, e) {
                const {xScale: n, yScale: i} = t;
                return n && i ? {
                    left: lo(n, e, "left"),
                    right: lo(n, e, "right"),
                    top: lo(i, e, "top"),
                    bottom: lo(i, e, "bottom")
                } : e
            }(t, this.chartArea), a = {meta: t, index: t.index, cancelable: !0};
            !1 !== this.notifyPlugins("beforeDatasetDraw", a) && (i && ni(e, {
                left: !1 === n.left ? 0 : r.left - n.left,
                right: !1 === n.right ? this.width : r.right + n.right,
                top: !1 === n.top ? 0 : r.top - n.top,
                bottom: !1 === n.bottom ? this.height : r.bottom + n.bottom
            }), t.controller.draw(), i && ii(e), a.cancelable = !1, this.notifyPlugins("afterDatasetDraw", a))
        }

        isPointInArea(t) {
            return ei(t, this.chartArea, this._minPadding)
        }

        getElementsAtEventForMode(t, e, n, i) {
            const r = Gr.modes[e];
            return "function" == typeof r ? r(this, t, n, i) : []
        }

        getDatasetMeta(t) {
            const e = this.data.datasets[t], n = this._metasets;
            let i = n.filter((t => t && t._dataset === e)).pop();
            return i || (i = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: e && e.order || 0,
                index: t,
                _dataset: e,
                _parsed: [],
                _sorted: !1
            }, n.push(i)), i
        }

        getContext() {
            return this.$context || (this.$context = xi(null, {chart: this, type: "chart"}))
        }

        getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length
        }

        isDatasetVisible(t) {
            const e = this.data.datasets[t];
            if (!e) return !1;
            const n = this.getDatasetMeta(t);
            return "boolean" == typeof n.hidden ? !n.hidden : !e.hidden
        }

        setDatasetVisibility(t, e) {
            this.getDatasetMeta(t).hidden = !e
        }

        toggleDataVisibility(t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t]
        }

        getDataVisibility(t) {
            return !this._hiddenIndices[t]
        }

        _updateVisibility(t, e, n) {
            const i = n ? "show" : "hide", r = this.getDatasetMeta(t), a = r.controller._resolveAnimations(void 0, i);
            Ye(e) ? (r.data[e].hidden = !n, this.update()) : (this.setDatasetVisibility(t, n), a.update(r, {visible: n}), this.update((e => e.datasetIndex === t ? i : void 0)))
        }

        hide(t, e) {
            this._updateVisibility(t, e, !1)
        }

        show(t, e) {
            this._updateVisibility(t, e, !0)
        }

        _destroyDatasetMeta(t) {
            const e = this._metasets[t];
            e && e.controller && e.controller._destroy(), delete this._metasets[t]
        }

        _stop() {
            let t, e;
            for (this.stop(), hr.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t)
        }

        destroy() {
            this.notifyPlugins("beforeDestroy");
            const {canvas: t, ctx: e} = this;
            this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Kn(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete ao[this.id], this.notifyPlugins("afterDestroy")
        }

        toBase64Image(...t) {
            return this.canvas.toDataURL(...t)
        }

        bindEvents() {
            this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
        }

        bindUserEvents() {
            const t = this._listeners, e = this.platform, n = (n, i) => {
                e.addEventListener(this, n, i), t[n] = i
            }, i = (t, e, n) => {
                t.offsetX = e, t.offsetY = n, this._eventHandler(t)
            };
            Ie(this.options.events, (t => n(t, i)))
        }

        bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {});
            const t = this._responsiveListeners, e = this.platform, n = (n, i) => {
                e.addEventListener(this, n, i), t[n] = i
            }, i = (n, i) => {
                t[n] && (e.removeEventListener(this, n, i), delete t[n])
            }, r = (t, e) => {
                this.canvas && this.resize(t, e)
            };
            let a;
            const o = () => {
                i("attach", o), this.attached = !0, this.resize(), n("resize", r), n("detach", a)
            };
            a = () => {
                this.attached = !1, i("resize", r), this._stop(), this._resize(0, 0), n("attach", o)
            }, e.isAttached(this.canvas) ? o() : a()
        }

        unbindEvents() {
            Ie(this._listeners, ((t, e) => {
                this.platform.removeEventListener(this, e, t)
            })), this._listeners = {}, Ie(this._responsiveListeners, ((t, e) => {
                this.platform.removeEventListener(this, e, t)
            })), this._responsiveListeners = void 0
        }

        updateHoverStyle(t, e, n) {
            const i = n ? "set" : "remove";
            let r, a, o, s;
            for ("dataset" === e && (r = this.getDatasetMeta(t[0].datasetIndex), r.controller["_" + i + "DatasetHoverStyle"]()), o = 0, s = t.length; o < s; ++o) {
                a = t[o];
                const e = a && this.getDatasetMeta(a.datasetIndex).controller;
                e && e[i + "HoverStyle"](a.element, a.datasetIndex, a.index)
            }
        }

        getActiveElements() {
            return this._active || []
        }

        setActiveElements(t) {
            const e = this._active || [], n = t.map((({datasetIndex: t, index: e}) => {
                const n = this.getDatasetMeta(t);
                if (!n) throw new Error("No dataset found at index " + t);
                return {datasetIndex: t, element: n.data[e], index: e}
            }));
            !_e(n, e) && (this._active = n, this._lastEvent = null, this._updateHoverStyles(n, e))
        }

        notifyPlugins(t, e, n) {
            return this._plugins.notify(this, t, e, n)
        }

        isPluginEnabled(t) {
            return 1 === this._plugins._cache.filter((e => e.plugin.id === t)).length
        }

        _updateHoverStyles(t, e, n) {
            const i = this.options.hover,
                r = (t, e) => t.filter((t => !e.some((e => t.datasetIndex === e.datasetIndex && t.index === e.index)))),
                a = r(e, t), o = n ? t : r(t, e);
            a.length && this.updateHoverStyle(a, i.mode, !1), o.length && i.mode && this.updateHoverStyle(o, i.mode, !0)
        }

        _eventHandler(t, e) {
            const n = {event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t)},
                i = e => (e.options.events || this.options.events).includes(t.native.type);
            if (!1 === this.notifyPlugins("beforeEvent", n, i)) return;
            const r = this._handleEvent(t, e, n.inChartArea);
            return n.cancelable = !1, this.notifyPlugins("afterEvent", n, i), (r || n.changed) && this.render(), this
        }

        _handleEvent(t, e, n) {
            const {_active: i = [], options: r} = this, a = e, o = this._getActiveElements(t, i, n, a),
                s = function (t) {
                    return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type
                }(t), l = function (t, e, n, i) {
                    return n && "mouseout" !== t.type ? i ? e : t : null
                }(t, this._lastEvent, n, s);
            n && (this._lastEvent = null, je(r.onHover, [t, o, this], this), s && je(r.onClick, [t, o, this], this));
            const c = !_e(o, i);
            return (c || e) && (this._active = o, this._updateHoverStyles(o, i, e)), this._lastEvent = l, c
        }

        _getActiveElements(t, e, n, i) {
            if ("mouseout" === t.type) return [];
            if (!n) return e;
            const r = this.options.hover;
            return this.getElementsAtEventForMode(t, r.mode, r, i)
        }
    }

    function uo() {
        return Ie(co.instances, (t => t._plugins.invalidate()))
    }

    function ho(t, e, n, i) {
        return {x: n + t * Math.cos(e), y: i + t * Math.sin(e)}
    }

    function fo(t, e, n, i, r, a) {
        const {x: o, y: s, startAngle: l, pixelMargin: c, innerRadius: u} = e,
            d = Math.max(e.outerRadius + i + n - c, 0), h = u > 0 ? u + i + n + c : 0;
        let f = 0;
        const p = r - l;
        if (i) {
            const t = ((u > 0 ? u - i : 0) + (d > 0 ? d - i : 0)) / 2;
            f = (p - (0 !== t ? p * t / (t + i) : p)) / 2
        }
        const g = (p - Math.max(.001, p * d - n / He) / d) / 2, m = l + g + f, M = r - g - f, {
                outerStart: y,
                outerEnd: b,
                innerStart: x,
                innerEnd: A
            } = function (t, e, n, i) {
                const r = pi(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]), a = (n - e) / 2,
                    o = Math.min(a, i * e / 2), s = t => {
                        const e = (n - Math.min(a, t)) * i / 2;
                        return mn(t, 0, Math.min(a, e))
                    };
                return {
                    outerStart: s(r.outerStart),
                    outerEnd: s(r.outerEnd),
                    innerStart: mn(r.innerStart, 0, o),
                    innerEnd: mn(r.innerEnd, 0, o)
                }
            }(e, h, d, M - m), v = d - y, N = d - b, D = m + y / v, k = M - b / N, T = h + x, S = h + A, w = m + x / T,
            E = M - A / S;
        if (t.beginPath(), a) {
            const e = (D + k) / 2;
            if (t.arc(o, s, d, D, e), t.arc(o, s, d, e, k), b > 0) {
                const e = ho(N, k, o, s);
                t.arc(e.x, e.y, b, k, M + Ke)
            }
            const n = ho(S, M, o, s);
            if (t.lineTo(n.x, n.y), A > 0) {
                const e = ho(S, E, o, s);
                t.arc(e.x, e.y, A, M + Ke, E + Math.PI)
            }
            const i = (M - A / h + (m + x / h)) / 2;
            if (t.arc(o, s, h, M - A / h, i, !0), t.arc(o, s, h, i, m + x / h, !0), x > 0) {
                const e = ho(T, w, o, s);
                t.arc(e.x, e.y, x, w + Math.PI, m - Ke)
            }
            const r = ho(v, m, o, s);
            if (t.lineTo(r.x, r.y), y > 0) {
                const e = ho(v, D, o, s);
                t.arc(e.x, e.y, y, m - Ke, D)
            }
        } else {
            t.moveTo(o, s);
            const e = Math.cos(D) * d + o, n = Math.sin(D) * d + s;
            t.lineTo(e, n);
            const i = Math.cos(k) * d + o, r = Math.sin(k) * d + s;
            t.lineTo(i, r)
        }
        t.closePath()
    }

    function po(t, e, n = e) {
        t.lineCap = Ce(n.borderCapStyle, e.borderCapStyle), t.setLineDash(Ce(n.borderDash, e.borderDash)), t.lineDashOffset = Ce(n.borderDashOffset, e.borderDashOffset), t.lineJoin = Ce(n.borderJoinStyle, e.borderJoinStyle), t.lineWidth = Ce(n.borderWidth, e.borderWidth), t.strokeStyle = Ce(n.borderColor, e.borderColor)
    }

    function go(t, e, n) {
        t.lineTo(n.x, n.y)
    }

    function mo(t, e, n = {}) {
        const i = t.length, {start: r = 0, end: a = i - 1} = n, {start: o, end: s} = e, l = Math.max(r, o),
            c = Math.min(a, s), u = r < o && a < o || r > s && a > s;
        return {count: i, start: l, loop: e.loop, ilen: c < l && !u ? i + c - l : c - l}
    }

    function Mo(t, e, n, i) {
        const {points: r, options: a} = e, {count: o, start: s, loop: l, ilen: c} = mo(r, n, i), u = function (t) {
            return t.stepped ? ri : t.tension || "monotone" === t.cubicInterpolationMode ? ai : go
        }(a);
        let d, h, f, {move: p = !0, reverse: g} = i || {};
        for (d = 0; d <= c; ++d) h = r[(s + (g ? c - d : d)) % o], h.skip || (p ? (t.moveTo(h.x, h.y), p = !1) : u(t, f, h, g, a.stepped), f = h);
        return l && (h = r[(s + (g ? c : 0)) % o], u(t, f, h, g, a.stepped)), !!l
    }

    function yo(t, e, n, i) {
        const r = e.points, {count: a, start: o, ilen: s} = mo(r, n, i), {move: l = !0, reverse: c} = i || {};
        let u, d, h, f, p, g, m = 0, M = 0;
        const y = t => (o + (c ? s - t : t)) % a, b = () => {
            f !== p && (t.lineTo(m, p), t.lineTo(m, f), t.lineTo(m, g))
        };
        for (l && (d = r[y(0)], t.moveTo(d.x, d.y)), u = 0; u <= s; ++u) {
            if (d = r[y(u)], d.skip) continue;
            const e = d.x, n = d.y, i = 0 | e;
            i === h ? (n < f ? f = n : n > p && (p = n), m = (M * m + e) / ++M) : (b(), t.lineTo(e, n), h = i, M = 0, f = p = n), g = n
        }
        b()
    }

    function bo(t) {
        const e = t.options, n = e.borderDash && e.borderDash.length;
        return t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || n ? Mo : yo
    }

    const xo = "function" == typeof Path2D;

    class Ao extends Da {
        static id = "line";
        static defaults = {
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            borderWidth: 3,
            capBezierPoints: !0,
            cubicInterpolationMode: "default",
            fill: !1,
            spanGaps: !1,
            stepped: !1,
            tension: 0
        };
        static defaultRoutes = {backgroundColor: "backgroundColor", borderColor: "borderColor"};
        static descriptors = {_scriptable: !0, _indexable: t => "borderDash" !== t && "fill" !== t};

        constructor(t) {
            super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t)
        }

        updateControlPoints(t, e) {
            const n = this.options;
            if ((n.tension || "monotone" === n.cubicInterpolationMode) && !n.stepped && !this._pointsUpdated) {
                const i = n.spanGaps ? this._loop : this._fullLoop;
                Fi(this._points, n, t, i, e), this._pointsUpdated = !0
            }
        }

        set points(t) {
            this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1
        }

        get points() {
            return this._points
        }

        get segments() {
            return this._segments || (this._segments = function (t, e) {
                const n = t.points, i = t.options.spanGaps, r = n.length;
                if (!r) return [];
                const a = !!t._loop, {start: o, end: s} = function (t, e, n, i) {
                    let r = 0, a = e - 1;
                    if (n && !i) for (; r < e && !t[r].skip;) r++;
                    for (; r < e && t[r].skip;) r++;
                    for (r %= e, n && (a += r); a > r && t[a % e].skip;) a--;
                    return a %= e, {start: r, end: a}
                }(n, r, a, i);
                return function (t, e, n, i) {
                    return i && i.setContext && n ? function (t, e, n, i) {
                        const r = t._chart.getContext(), a = cr(t.options), {
                            _datasetIndex: o,
                            options: {spanGaps: s}
                        } = t, l = n.length, c = [];
                        let u = a, d = e[0].start, h = d;

                        function f(t, e, i, r) {
                            const a = s ? -1 : 1;
                            if (t !== e) {
                                for (t += l; n[t % l].skip;) t -= a;
                                for (; n[e % l].skip;) e += a;
                                t % l != e % l && (c.push({
                                    start: t % l,
                                    end: e % l,
                                    loop: i,
                                    style: r
                                }), u = r, d = e % l)
                            }
                        }

                        for (const t of e) {
                            d = s ? d : t.start;
                            let e, a = n[d % l];
                            for (h = d + 1; h <= t.end; h++) {
                                const s = n[h % l];
                                e = cr(i.setContext(xi(r, {
                                    type: "segment",
                                    p0: a,
                                    p1: s,
                                    p0DataIndex: (h - 1) % l,
                                    p1DataIndex: h % l,
                                    datasetIndex: o
                                }))), ur(e, u) && f(d, h - 1, t.loop, u), a = s, u = e
                            }
                            d < h - 1 && f(d, h - 1, t.loop, u)
                        }
                        return c
                    }(t, e, n, i) : e
                }(t, !0 === i ? [{start: o, end: s, loop: a}] : function (t, e, n, i) {
                    const r = t.length, a = [];
                    let o, s = e, l = t[e];
                    for (o = e + 1; o <= n; ++o) {
                        const n = t[o % r];
                        n.skip || n.stop ? l.skip || (i = !1, a.push({
                            start: e % r,
                            end: (o - 1) % r,
                            loop: i
                        }), e = s = n.stop ? o : null) : (s = o, l.skip && (e = o)), l = n
                    }
                    return null !== s && a.push({start: e % r, end: s % r, loop: i}), a
                }(n, o, s < o ? s + r : s, !!t._fullLoop && 0 === o && s === r - 1), n, e)
            }(this, this.options.segment))
        }

        first() {
            const t = this.segments, e = this.points;
            return t.length && e[t[0].start]
        }

        last() {
            const t = this.segments, e = this.points, n = t.length;
            return n && e[t[n - 1].end]
        }

        interpolate(t, e) {
            const n = this.options, i = t[e], r = this.points, a = lr(this, {property: e, start: i, end: i});
            if (!a.length) return;
            const o = [], s = function (t) {
                return t.stepped ? tr : t.tension || "monotone" === t.cubicInterpolationMode ? er : qi
            }(n);
            let l, c;
            for (l = 0, c = a.length; l < c; ++l) {
                const {start: c, end: u} = a[l], d = r[c], h = r[u];
                if (d === h) {
                    o.push(d);
                    continue
                }
                const f = s(d, h, Math.abs((i - d[e]) / (h[e] - d[e])), n.stepped);
                f[e] = t[e], o.push(f)
            }
            return 1 === o.length ? o[0] : o
        }

        pathSegment(t, e, n) {
            return bo(this)(t, this, e, n)
        }

        path(t, e, n) {
            const i = this.segments, r = bo(this);
            let a = this._loop;
            e = e || 0, n = n || this.points.length - e;
            for (const o of i) a &= r(t, this, o, {start: e, end: e + n - 1});
            return !!a
        }

        draw(t, e, n, i) {
            const r = this.options || {};
            (this.points || []).length && r.borderWidth && (t.save(), function (t, e, n, i) {
                xo && !e.options.segment ? function (t, e, n, i) {
                    let r = e._path;
                    r || (r = e._path = new Path2D, e.path(r, n, i) && r.closePath()), po(t, e.options), t.stroke(r)
                }(t, e, n, i) : function (t, e, n, i) {
                    const {segments: r, options: a} = e, o = bo(e);
                    for (const s of r) po(t, a, s.style), t.beginPath(), o(t, e, s, {
                        start: n,
                        end: n + i - 1
                    }) && t.closePath(), t.stroke()
                }(t, e, n, i)
            }(t, this, n, i), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0)
        }
    }

    function vo(t, e, n, i) {
        const r = t.options, {[n]: a} = t.getProps([n], i);
        return Math.abs(e - a) < r.radius + r.hitRadius
    }

    function No(t, e) {
        const {x: n, y: i, base: r, width: a, height: o} = t.getProps(["x", "y", "base", "width", "height"], e);
        let s, l, c, u, d;
        return t.horizontal ? (d = o / 2, s = Math.min(n, r), l = Math.max(n, r), c = i - d, u = i + d) : (d = a / 2, s = n - d, l = n + d, c = Math.min(i, r), u = Math.max(i, r)), {
            left: s,
            top: c,
            right: l,
            bottom: u
        }
    }

    function Do(t, e, n, i) {
        return t ? 0 : mn(e, n, i)
    }

    function ko(t, e, n, i) {
        const r = null === e, a = null === n, o = t && !(r && a) && No(t, i);
        return o && (r || Mn(e, o.left, o.right)) && (a || Mn(n, o.top, o.bottom))
    }

    function To(t, e) {
        t.rect(e.x, e.y, e.w, e.h)
    }

    function So(t, e, n = {}) {
        const i = t.x !== n.x ? -e : 0, r = t.y !== n.y ? -e : 0, a = (t.x + t.w !== n.x + n.w ? e : 0) - i,
            o = (t.y + t.h !== n.y + n.h ? e : 0) - r;
        return {x: t.x + i, y: t.y + r, w: t.w + a, h: t.h + o, radius: t.radius}
    }

    var wo = Object.freeze({
        __proto__: null, ArcElement: class extends Da {
            static id = "arc";
            static defaults = {
                borderAlign: "center",
                borderColor: "#fff",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: void 0,
                borderRadius: 0,
                borderWidth: 2,
                offset: 0,
                spacing: 0,
                angle: void 0,
                circular: !0
            };
            static defaultRoutes = {backgroundColor: "backgroundColor"};
            static descriptors = {_scriptable: !0, _indexable: t => "borderDash" !== t};
            circumference;
            endAngle;
            fullCircles;
            innerRadius;
            outerRadius;
            pixelMargin;
            startAngle;

            constructor(t) {
                super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t)
            }

            inRange(t, e, n) {
                const i = this.getProps(["x", "y"], n), {angle: r, distance: a} = dn(i, {x: t, y: e}), {
                        startAngle: o,
                        endAngle: s,
                        innerRadius: l,
                        outerRadius: c,
                        circumference: u
                    } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], n),
                    d = (this.options.spacing + this.options.borderWidth) / 2, h = Ce(u, s - o) >= Ge || gn(r, o, s),
                    f = Mn(a, l + d, c + d);
                return h && f
            }

            getCenterPoint(t) {
                const {
                    x: e,
                    y: n,
                    startAngle: i,
                    endAngle: r,
                    innerRadius: a,
                    outerRadius: o
                } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t), {
                    offset: s,
                    spacing: l
                } = this.options, c = (i + r) / 2, u = (a + o + l + s) / 2;
                return {x: e + Math.cos(c) * u, y: n + Math.sin(c) * u}
            }

            tooltipPosition(t) {
                return this.getCenterPoint(t)
            }

            draw(t) {
                const {options: e, circumference: n} = this, i = (e.offset || 0) / 4, r = (e.spacing || 0) / 2,
                    a = e.circular;
                if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = n > Ge ? Math.floor(n / Ge) : 0, 0 === n || this.innerRadius < 0 || this.outerRadius < 0) return;
                t.save();
                const o = (this.startAngle + this.endAngle) / 2;
                t.translate(Math.cos(o) * i, Math.sin(o) * i);
                const s = i * (1 - Math.sin(Math.min(He, n || 0)));
                t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, function (t, e, n, i, r) {
                    const {fullCircles: a, startAngle: o, circumference: s} = e;
                    let l = e.endAngle;
                    if (a) {
                        fo(t, e, n, i, l, r);
                        for (let e = 0; e < a; ++e) t.fill();
                        isNaN(s) || (l = o + (s % Ge || Ge))
                    }
                    fo(t, e, n, i, l, r), t.fill()
                }(t, this, s, r, a), function (t, e, n, i, r) {
                    const {fullCircles: a, startAngle: o, circumference: s, options: l} = e, {
                        borderWidth: c,
                        borderJoinStyle: u,
                        borderDash: d,
                        borderDashOffset: h
                    } = l, f = "inner" === l.borderAlign;
                    if (!c) return;
                    t.setLineDash(d || []), t.lineDashOffset = h, f ? (t.lineWidth = 2 * c, t.lineJoin = u || "round") : (t.lineWidth = c, t.lineJoin = u || "bevel");
                    let p = e.endAngle;
                    if (a) {
                        fo(t, e, n, i, p, r);
                        for (let e = 0; e < a; ++e) t.stroke();
                        isNaN(s) || (p = o + (s % Ge || Ge))
                    }
                    f && function (t, e, n) {
                        const {startAngle: i, pixelMargin: r, x: a, y: o, outerRadius: s, innerRadius: l} = e;
                        let c = r / s;
                        t.beginPath(), t.arc(a, o, s, i - c, n + c), l > r ? (c = r / l, t.arc(a, o, l, n + c, i - c, !0)) : t.arc(a, o, r, n + Ke, i - Ke), t.closePath(), t.clip()
                    }(t, e, p), a || (fo(t, e, n, i, p, r), t.stroke())
                }(t, this, s, r, a), t.restore()
            }
        }, BarElement: class extends Da {
            static id = "bar";
            static defaults = {
                borderSkipped: "start",
                borderWidth: 0,
                borderRadius: 0,
                inflateAmount: "auto",
                pointStyle: void 0
            };
            static defaultRoutes = {backgroundColor: "backgroundColor", borderColor: "borderColor"};

            constructor(t) {
                super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t)
            }

            draw(t) {
                const {inflateAmount: e, options: {borderColor: n, backgroundColor: i}} = this, {
                    inner: r,
                    outer: a
                } = function (t) {
                    const e = No(t), n = e.right - e.left, i = e.bottom - e.top, r = function (t, e, n) {
                        const i = t.options.borderWidth, r = t.borderSkipped, a = gi(i);
                        return {
                            t: Do(r.top, a.top, 0, n),
                            r: Do(r.right, a.right, 0, e),
                            b: Do(r.bottom, a.bottom, 0, n),
                            l: Do(r.left, a.left, 0, e)
                        }
                    }(t, n / 2, i / 2), a = function (t, e, n) {
                        const {enableBorderRadius: i} = t.getProps(["enableBorderRadius"]), r = t.options.borderRadius,
                            a = mi(r), o = Math.min(e, n), s = t.borderSkipped, l = i || Se(r);
                        return {
                            topLeft: Do(!l || s.top || s.left, a.topLeft, 0, o),
                            topRight: Do(!l || s.top || s.right, a.topRight, 0, o),
                            bottomLeft: Do(!l || s.bottom || s.left, a.bottomLeft, 0, o),
                            bottomRight: Do(!l || s.bottom || s.right, a.bottomRight, 0, o)
                        }
                    }(t, n / 2, i / 2);
                    return {
                        outer: {x: e.left, y: e.top, w: n, h: i, radius: a},
                        inner: {
                            x: e.left + r.l,
                            y: e.top + r.t,
                            w: n - r.l - r.r,
                            h: i - r.t - r.b,
                            radius: {
                                topLeft: Math.max(0, a.topLeft - Math.max(r.t, r.l)),
                                topRight: Math.max(0, a.topRight - Math.max(r.t, r.r)),
                                bottomLeft: Math.max(0, a.bottomLeft - Math.max(r.b, r.l)),
                                bottomRight: Math.max(0, a.bottomRight - Math.max(r.b, r.r))
                            }
                        }
                    }
                }(this), o = (s = a.radius).topLeft || s.topRight || s.bottomLeft || s.bottomRight ? ci : To;
                var s;
                t.save(), a.w === r.w && a.h === r.h || (t.beginPath(), o(t, So(a, e, r)), t.clip(), o(t, So(r, -e, a)), t.fillStyle = n, t.fill("evenodd")), t.beginPath(), o(t, So(r, e)), t.fillStyle = i, t.fill(), t.restore()
            }

            inRange(t, e, n) {
                return ko(this, t, e, n)
            }

            inXRange(t, e) {
                return ko(this, t, null, e)
            }

            inYRange(t, e) {
                return ko(this, null, t, e)
            }

            getCenterPoint(t) {
                const {x: e, y: n, base: i, horizontal: r} = this.getProps(["x", "y", "base", "horizontal"], t);
                return {x: r ? (e + i) / 2 : e, y: r ? n : (n + i) / 2}
            }

            getRange(t) {
                return "x" === t ? this.width / 2 : this.height / 2
            }
        }, LineElement: Ao, PointElement: class extends Da {
            static id = "point";
            parsed;
            skip;
            stop;
            static defaults = {
                borderWidth: 1,
                hitRadius: 1,
                hoverBorderWidth: 1,
                hoverRadius: 4,
                pointStyle: "circle",
                radius: 3,
                rotation: 0
            };
            static defaultRoutes = {backgroundColor: "backgroundColor", borderColor: "borderColor"};

            constructor(t) {
                super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t)
            }

            inRange(t, e, n) {
                const i = this.options, {x: r, y: a} = this.getProps(["x", "y"], n);
                return Math.pow(t - r, 2) + Math.pow(e - a, 2) < Math.pow(i.hitRadius + i.radius, 2)
            }

            inXRange(t, e) {
                return vo(this, t, "x", e)
            }

            inYRange(t, e) {
                return vo(this, t, "y", e)
            }

            getCenterPoint(t) {
                const {x: e, y: n} = this.getProps(["x", "y"], t);
                return {x: e, y: n}
            }

            size(t) {
                let e = (t = t || this.options || {}).radius || 0;
                return e = Math.max(e, e && t.hoverRadius || 0), 2 * (e + (e && t.borderWidth || 0))
            }

            draw(t, e) {
                const n = this.options;
                this.skip || n.radius < .1 || !ei(this, e, this.size(n) / 2) || (t.strokeStyle = n.borderColor, t.lineWidth = n.borderWidth, t.fillStyle = n.backgroundColor, qn(t, n, this.x, this.y))
            }

            getRange() {
                const t = this.options || {};
                return t.radius + t.hitRadius
            }
        }
    });
    const Eo = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
        Co = Eo.map((t => t.replace("rgb(", "rgba(").replace(")", ", 0.5)")));

    function zo(t) {
        return Eo[t % Eo.length]
    }

    function jo(t) {
        return Co[t % Co.length]
    }

    function Io(t) {
        let e;
        for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0;
        return !1
    }

    var _o = {
        id: "colors", defaults: {enabled: !0, forceOverride: !1}, beforeLayout(t, e, n) {
            if (!n.enabled) return;
            const {data: {datasets: i}, options: r} = t.config, {elements: a} = r;
            if (!n.forceOverride && (Io(i) || (o = r) && (o.borderColor || o.backgroundColor) || a && Io(a))) return;
            var o;
            const s = function (t) {
                let e = 0;
                return (n, i) => {
                    const r = t.getDatasetMeta(i).controller;
                    r instanceof Ur ? e = function (t, e) {
                        return t.backgroundColor = t.data.map((() => zo(e++))), e
                    }(n, e) : r instanceof Rr ? e = function (t, e) {
                        return t.backgroundColor = t.data.map((() => jo(e++))), e
                    }(n, e) : r && (e = function (t, e) {
                        return t.borderColor = zo(e), t.backgroundColor = jo(e), ++e
                    }(n, e))
                }
            }(t);
            i.forEach(s)
        }
    };

    function Oo(t) {
        if (t._decimated) {
            const e = t._data;
            delete t._decimated, delete t._data, Object.defineProperty(t, "data", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: e
            })
        }
    }

    function Lo(t) {
        t.data.datasets.forEach((t => {
            Oo(t)
        }))
    }

    var Uo = {
        id: "decimation", defaults: {algorithm: "min-max", enabled: !1}, beforeElementsUpdate: (t, e, n) => {
            if (!n.enabled) return void Lo(t);
            const i = t.width;
            t.data.datasets.forEach(((e, r) => {
                const {_data: a, indexAxis: o} = e, s = t.getDatasetMeta(r), l = a || e.data;
                if ("y" === bi([o, t.options.indexAxis])) return;
                if (!s.controller.supportsDecimation) return;
                const c = t.scales[s.xAxisID];
                if ("linear" !== c.type && "time" !== c.type) return;
                if (t.options.parsing) return;
                let u, {start: d, count: h} = function (t, e) {
                    const n = e.length;
                    let i, r = 0;
                    const {iScale: a} = t, {min: o, max: s, minDefined: l, maxDefined: c} = a.getUserBounds();
                    return l && (r = mn(bn(e, a.axis, o).lo, 0, n - 1)), i = c ? mn(bn(e, a.axis, s).hi + 1, r, n) - r : n - r, {
                        start: r,
                        count: i
                    }
                }(s, l);
                if (h <= (n.threshold || 4 * i)) Oo(e); else {
                    switch (ke(a) && (e._data = l, delete e.data, Object.defineProperty(e, "data", {
                        configurable: !0,
                        enumerable: !0,
                        get: function () {
                            return this._decimated
                        },
                        set: function (t) {
                            this._data = t
                        }
                    })), n.algorithm) {
                        case"lttb":
                            u = function (t, e, n, i, r) {
                                const a = r.samples || i;
                                if (a >= n) return t.slice(e, e + n);
                                const o = [], s = (n - 2) / (a - 2);
                                let l = 0;
                                const c = e + n - 1;
                                let u, d, h, f, p, g = e;
                                for (o[l++] = t[g], u = 0; u < a - 2; u++) {
                                    let i, r = 0, a = 0;
                                    const c = Math.floor((u + 1) * s) + 1 + e,
                                        m = Math.min(Math.floor((u + 2) * s) + 1, n) + e, M = m - c;
                                    for (i = c; i < m; i++) r += t[i].x, a += t[i].y;
                                    r /= M, a /= M;
                                    const y = Math.floor(u * s) + 1 + e,
                                        b = Math.min(Math.floor((u + 1) * s) + 1, n) + e, {x, y: A} = t[g];
                                    for (h = f = -1, i = y; i < b; i++) f = .5 * Math.abs((x - r) * (t[i].y - A) - (x - t[i].x) * (a - A)), f > h && (h = f, d = t[i], p = i);
                                    o[l++] = d, g = p
                                }
                                return o[l++] = t[c], o
                            }(l, d, h, i, n);
                            break;
                        case"min-max":
                            u = function (t, e, n, i) {
                                let r, a, o, s, l, c, u, d, h, f, p = 0, g = 0;
                                const m = [], M = e + n - 1, y = t[e].x, b = t[M].x - y;
                                for (r = e; r < e + n; ++r) {
                                    a = t[r], o = (a.x - y) / b * i, s = a.y;
                                    const e = 0 | o;
                                    if (e === l) s < h ? (h = s, c = r) : s > f && (f = s, u = r), p = (g * p + a.x) / ++g; else {
                                        const n = r - 1;
                                        if (!ke(c) && !ke(u)) {
                                            const e = Math.min(c, u), i = Math.max(c, u);
                                            e !== d && e !== n && m.push({
                                                ...t[e],
                                                x: p
                                            }), i !== d && i !== n && m.push({...t[i], x: p})
                                        }
                                        r > 0 && n !== d && m.push(t[n]), m.push(a), l = e, g = 0, h = f = s, c = u = d = r
                                    }
                                }
                                return m
                            }(l, d, h, i);
                            break;
                        default:
                            throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)
                    }
                    e._decimated = u
                }
            }))
        }, destroy(t) {
            Lo(t)
        }
    };

    function Ro(t, e, n, i) {
        if (i) return;
        let r = e[t], a = n[t];
        return "angle" === t && (r = pn(r), a = pn(a)), {property: t, start: r, end: a}
    }

    function Vo(t, e, n) {
        for (; e > t; e--) {
            const t = n[e];
            if (!isNaN(t.x) && !isNaN(t.y)) break
        }
        return e
    }

    function Fo(t, e, n, i) {
        return t && e ? i(t[n], e[n]) : t ? t[n] : e ? e[n] : 0
    }

    function Po(t, e) {
        let n = [], i = !1;
        return Te(t) ? (i = !0, n = t) : n = function (t, e) {
            const {x: n = null, y: i = null} = t || {}, r = e.points, a = [];
            return e.segments.forEach((({start: t, end: e}) => {
                e = Vo(t, e, r);
                const o = r[t], s = r[e];
                null !== i ? (a.push({x: o.x, y: i}), a.push({x: s.x, y: i})) : null !== n && (a.push({
                    x: n,
                    y: o.y
                }), a.push({x: n, y: s.y}))
            })), a
        }(t, e), n.length ? new Ao({points: n, options: {tension: 0}, _loop: i, _fullLoop: i}) : null
    }

    function Wo(t) {
        return t && !1 !== t.fill
    }

    function Qo(t, e, n) {
        let i = t[e].fill;
        const r = [e];
        let a;
        if (!n) return i;
        for (; !1 !== i && -1 === r.indexOf(i);) {
            if (!we(i)) return i;
            if (a = t[i], !a) return !1;
            if (a.visible) return i;
            r.push(i), i = a.fill
        }
        return !1
    }

    function Yo(t, e, n) {
        const i = function (t) {
            const e = t.options, n = e.fill;
            let i = Ce(n && n.target, n);
            return void 0 === i && (i = !!e.backgroundColor), !1 !== i && null !== i && (!0 === i ? "origin" : i)
        }(t);
        if (Se(i)) return !isNaN(i.value) && i;
        let r = parseFloat(i);
        return we(r) && Math.floor(r) === r ? function (t, e, n, i) {
            return "-" !== t && "+" !== t || (n = e + n), !(n === e || n < 0 || n >= i) && n
        }(i[0], e, r, n) : ["origin", "start", "end", "stack", "shape"].indexOf(i) >= 0 && i
    }

    function Bo(t, e, n) {
        const i = [];
        for (let r = 0; r < n.length; r++) {
            const a = n[r], {first: o, last: s, point: l} = Zo(a, e, "x");
            if (!(!l || o && s)) if (o) i.unshift(l); else if (t.push(l), !s) break
        }
        t.push(...i)
    }

    function Zo(t, e, n) {
        const i = t.interpolate(e, n);
        if (!i) return {};
        const r = i[n], a = t.segments, o = t.points;
        let s = !1, l = !1;
        for (let t = 0; t < a.length; t++) {
            const e = a[t], i = o[e.start][n], c = o[e.end][n];
            if (Mn(r, i, c)) {
                s = r === i, l = r === c;
                break
            }
        }
        return {first: s, last: l, point: i}
    }

    class Ho {
        constructor(t) {
            this.x = t.x, this.y = t.y, this.radius = t.radius
        }

        pathSegment(t, e, n) {
            const {x: i, y: r, radius: a} = this;
            return e = e || {start: 0, end: Ge}, t.arc(i, r, a, e.end, e.start, !0), !n.bounds
        }

        interpolate(t) {
            const {x: e, y: n, radius: i} = this, r = t.angle;
            return {x: e + Math.cos(r) * i, y: n + Math.sin(r) * i, angle: r}
        }
    }

    function Go(t, e, n) {
        const i = function (t) {
            const {chart: e, fill: n, line: i} = t;
            if (we(n)) return function (t, e) {
                const n = t.getDatasetMeta(e);
                return n && t.isDatasetVisible(e) ? n.dataset : null
            }(e, n);
            if ("stack" === n) return function (t) {
                const {scale: e, index: n, line: i} = t, r = [], a = i.segments, o = i.points, s = function (t, e) {
                    const n = [], i = t.getMatchingVisibleMetas("line");
                    for (let t = 0; t < i.length; t++) {
                        const r = i[t];
                        if (r.index === e) break;
                        r.hidden || n.unshift(r.dataset)
                    }
                    return n
                }(e, n);
                s.push(Po({x: null, y: e.bottom}, i));
                for (let t = 0; t < a.length; t++) {
                    const e = a[t];
                    for (let t = e.start; t <= e.end; t++) Bo(r, o[t], s)
                }
                return new Ao({points: r, options: {}})
            }(t);
            if ("shape" === n) return !0;
            const r = function (t) {
                return (t.scale || {}).getPointPositionForValue ? function (t) {
                    const {scale: e, fill: n} = t, i = e.options, r = e.getLabels().length,
                        a = i.reverse ? e.max : e.min, o = function (t, e, n) {
                            let i;
                            return i = "start" === t ? n : "end" === t ? e.options.reverse ? e.min : e.max : Se(t) ? t.value : e.getBaseValue(), i
                        }(n, e, a), s = [];
                    if (i.grid.circular) {
                        const t = e.getPointPositionForValue(0, a);
                        return new Ho({x: t.x, y: t.y, radius: e.getDistanceFromCenterForValue(o)})
                    }
                    for (let t = 0; t < r; ++t) s.push(e.getPointPositionForValue(t, o));
                    return s
                }(t) : function (t) {
                    const {scale: e = {}, fill: n} = t, i = function (t, e) {
                        let n = null;
                        return "start" === t ? n = e.bottom : "end" === t ? n = e.top : Se(t) ? n = e.getPixelForValue(t.value) : e.getBasePixel && (n = e.getBasePixel()), n
                    }(n, e);
                    if (we(i)) {
                        const t = e.isHorizontal();
                        return {x: t ? i : null, y: t ? null : i}
                    }
                    return null
                }(t)
            }(t);
            return r instanceof Ho ? r : Po(r, i)
        }(e), {line: r, scale: a, axis: o} = e, s = r.options, l = s.fill, c = s.backgroundColor, {
            above: u = c,
            below: d = c
        } = l || {};
        i && r.points.length && (ni(t, n), function (t, e) {
            const {line: n, target: i, above: r, below: a, area: o, scale: s} = e, l = n._loop ? "angle" : e.axis;
            t.save(), "x" === l && a !== r && (Jo(t, i, o.top), Xo(t, {
                line: n,
                target: i,
                color: r,
                scale: s,
                property: l
            }), t.restore(), t.save(), Jo(t, i, o.bottom)), Xo(t, {
                line: n,
                target: i,
                color: a,
                scale: s,
                property: l
            }), t.restore()
        }(t, {line: r, target: i, above: u, below: d, area: n, scale: a, axis: o}), ii(t))
    }

    function Jo(t, e, n) {
        const {segments: i, points: r} = e;
        let a = !0, o = !1;
        t.beginPath();
        for (const s of i) {
            const {start: i, end: l} = s, c = r[i], u = r[Vo(i, l, r)];
            a ? (t.moveTo(c.x, c.y), a = !1) : (t.lineTo(c.x, n), t.lineTo(c.x, c.y)), o = !!e.pathSegment(t, s, {move: o}), o ? t.closePath() : t.lineTo(u.x, n)
        }
        t.lineTo(e.first().x, n), t.closePath(), t.clip()
    }

    function Xo(t, e) {
        const {line: n, target: i, property: r, color: a, scale: o} = e, s = function (t, e, n) {
            const i = t.segments, r = t.points, a = e.points, o = [];
            for (const t of i) {
                let {start: i, end: s} = t;
                s = Vo(i, s, r);
                const l = Ro(n, r[i], r[s], t.loop);
                if (!e.segments) {
                    o.push({source: t, target: l, start: r[i], end: r[s]});
                    continue
                }
                const c = lr(e, l);
                for (const e of c) {
                    const i = Ro(n, a[e.start], a[e.end], e.loop), s = sr(t, r, i);
                    for (const t of s) o.push({
                        source: t,
                        target: e,
                        start: {[n]: Fo(l, i, "start", Math.max)},
                        end: {[n]: Fo(l, i, "end", Math.min)}
                    })
                }
            }
            return o
        }(n, i, r);
        for (const {source: e, target: l, start: c, end: u} of s) {
            const {style: {backgroundColor: s = a} = {}} = e, d = !0 !== i;
            t.save(), t.fillStyle = s, $o(t, o, d && Ro(r, c, u)), t.beginPath();
            const h = !!n.pathSegment(t, e);
            let f;
            if (d) {
                h ? t.closePath() : Ko(t, i, u, r);
                const e = !!i.pathSegment(t, l, {move: h, reverse: !0});
                f = h && e, f || Ko(t, i, c, r)
            }
            t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore()
        }
    }

    function $o(t, e, n) {
        const {top: i, bottom: r} = e.chart.chartArea, {property: a, start: o, end: s} = n || {};
        "x" === a && (t.beginPath(), t.rect(o, i, s - o, r - i), t.clip())
    }

    function Ko(t, e, n, i) {
        const r = e.interpolate(n, i);
        r && t.lineTo(r.x, r.y)
    }

    var qo = {
        id: "filler", afterDatasetsUpdate(t, e, n) {
            const i = (t.data.datasets || []).length, r = [];
            let a, o, s, l;
            for (o = 0; o < i; ++o) a = t.getDatasetMeta(o), s = a.dataset, l = null, s && s.options && s instanceof Ao && (l = {
                visible: t.isDatasetVisible(o),
                index: o,
                fill: Yo(s, o, i),
                chart: t,
                axis: a.controller.options.indexAxis,
                scale: a.vScale,
                line: s
            }), a.$filler = l, r.push(l);
            for (o = 0; o < i; ++o) l = r[o], l && !1 !== l.fill && (l.fill = Qo(r, o, n.propagate))
        }, beforeDraw(t, e, n) {
            const i = "beforeDraw" === n.drawTime, r = t.getSortedVisibleDatasetMetas(), a = t.chartArea;
            for (let e = r.length - 1; e >= 0; --e) {
                const n = r[e].$filler;
                n && (n.line.updateControlPoints(a, n.axis), i && n.fill && Go(t.ctx, n, a))
            }
        }, beforeDatasetsDraw(t, e, n) {
            if ("beforeDatasetsDraw" !== n.drawTime) return;
            const i = t.getSortedVisibleDatasetMetas();
            for (let e = i.length - 1; e >= 0; --e) {
                const n = i[e].$filler;
                Wo(n) && Go(t.ctx, n, t.chartArea)
            }
        }, beforeDatasetDraw(t, e, n) {
            const i = e.meta.$filler;
            Wo(i) && "beforeDatasetDraw" === n.drawTime && Go(t.ctx, i, t.chartArea)
        }, defaults: {propagate: !0, drawTime: "beforeDatasetDraw"}
    };
    const ts = (t, e) => {
        let {boxHeight: n = e, boxWidth: i = e} = t;
        return t.usePointStyle && (n = Math.min(n, e), i = t.pointStyleWidth || Math.min(i, e)), {
            boxWidth: i,
            boxHeight: n,
            itemHeight: Math.max(e, n)
        }
    };

    class es extends Da {
        constructor(t) {
            super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
        }

        update(t, e, n) {
            this.maxWidth = t, this.maxHeight = e, this._margins = n, this.setDimensions(), this.buildLabels(), this.fit()
        }

        setDimensions() {
            this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height)
        }

        buildLabels() {
            const t = this.options.labels || {};
            let e = je(t.generateLabels, [this.chart], this) || [];
            t.filter && (e = e.filter((e => t.filter(e, this.chart.data)))), t.sort && (e = e.sort(((e, n) => t.sort(e, n, this.chart.data)))), this.options.reverse && e.reverse(), this.legendItems = e
        }

        fit() {
            const {options: t, ctx: e} = this;
            if (!t.display) return void (this.width = this.height = 0);
            const n = t.labels, i = yi(n.font), r = i.size, a = this._computeTitleHeight(), {
                boxWidth: o,
                itemHeight: s
            } = ts(n, r);
            let l, c;
            e.font = i.string, this.isHorizontal() ? (l = this.maxWidth, c = this._fitRows(a, r, o, s) + 10) : (c = this.maxHeight, l = this._fitCols(a, i, o, s) + 10), this.width = Math.min(l, t.maxWidth || this.maxWidth), this.height = Math.min(c, t.maxHeight || this.maxHeight)
        }

        _fitRows(t, e, n, i) {
            const {ctx: r, maxWidth: a, options: {labels: {padding: o}}} = this, s = this.legendHitBoxes = [],
                l = this.lineWidths = [0], c = i + o;
            let u = t;
            r.textAlign = "left", r.textBaseline = "middle";
            let d = -1, h = -c;
            return this.legendItems.forEach(((t, f) => {
                const p = n + e / 2 + r.measureText(t.text).width;
                (0 === f || l[l.length - 1] + p + 2 * o > a) && (u += c, l[l.length - (f > 0 ? 0 : 1)] = 0, h += c, d++), s[f] = {
                    left: 0,
                    top: h,
                    row: d,
                    width: p,
                    height: i
                }, l[l.length - 1] += p + o
            })), u
        }

        _fitCols(t, e, n, i) {
            const {ctx: r, maxHeight: a, options: {labels: {padding: o}}} = this, s = this.legendHitBoxes = [],
                l = this.columnSizes = [], c = a - t;
            let u = o, d = 0, h = 0, f = 0, p = 0;
            return this.legendItems.forEach(((t, a) => {
                const {itemWidth: g, itemHeight: m} = function (t, e, n, i, r) {
                    const a = function (t, e, n, i) {
                        let r = t.text;
                        return r && "string" != typeof r && (r = r.reduce(((t, e) => t.length > e.length ? t : e))), e + n.size / 2 + i.measureText(r).width
                    }(i, t, e, n), o = function (t, e, n) {
                        let i = t;
                        return "string" != typeof e.text && (i = ns(e, n)), i
                    }(r, i, e.lineHeight);
                    return {itemWidth: a, itemHeight: o}
                }(n, e, r, t, i);
                a > 0 && h + m + 2 * o > c && (u += d + o, l.push({
                    width: d,
                    height: h
                }), f += d + o, p++, d = h = 0), s[a] = {
                    left: f,
                    top: h,
                    col: p,
                    width: g,
                    height: m
                }, d = Math.max(d, g), h += m + o
            })), u += d, l.push({width: d, height: h}), u
        }

        adjustHitBoxes() {
            if (!this.options.display) return;
            const t = this._computeTitleHeight(), {
                legendHitBoxes: e,
                options: {align: n, labels: {padding: i}, rtl: r}
            } = this, a = nr(r, this.left, this.width);
            if (this.isHorizontal()) {
                let r = 0, o = Sn(n, this.left + i, this.right - this.lineWidths[r]);
                for (const s of e) r !== s.row && (r = s.row, o = Sn(n, this.left + i, this.right - this.lineWidths[r])), s.top += this.top + t + i, s.left = a.leftForLtr(a.x(o), s.width), o += s.width + i
            } else {
                let r = 0, o = Sn(n, this.top + t + i, this.bottom - this.columnSizes[r].height);
                for (const s of e) s.col !== r && (r = s.col, o = Sn(n, this.top + t + i, this.bottom - this.columnSizes[r].height)), s.top = o, s.left += this.left + i, s.left = a.leftForLtr(a.x(s.left), s.width), o += s.height + i
            }
        }

        isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position
        }

        draw() {
            if (this.options.display) {
                const t = this.ctx;
                ni(t, this), this._draw(), ii(t)
            }
        }

        _draw() {
            const {options: t, columnSizes: e, lineWidths: n, ctx: i} = this, {align: r, labels: a} = t, o = Gn.color,
                s = nr(t.rtl, this.left, this.width), l = yi(a.font), {padding: c} = a, u = l.size, d = u / 2;
            let h;
            this.drawTitle(), i.textAlign = s.textAlign("left"), i.textBaseline = "middle", i.lineWidth = .5, i.font = l.string;
            const {boxWidth: f, boxHeight: p, itemHeight: g} = ts(a, u), m = this.isHorizontal(),
                M = this._computeTitleHeight();
            h = m ? {x: Sn(r, this.left + c, this.right - n[0]), y: this.top + c + M, line: 0} : {
                x: this.left + c,
                y: Sn(r, this.top + M + c, this.bottom - e[0].height),
                line: 0
            }, ir(this.ctx, t.textDirection);
            const y = g + c;
            this.legendItems.forEach(((b, x) => {
                i.strokeStyle = b.fontColor, i.fillStyle = b.fontColor;
                const A = i.measureText(b.text).width, v = s.textAlign(b.textAlign || (b.textAlign = a.textAlign)),
                    N = f + d + A;
                let D = h.x, k = h.y;
                if (s.setWidth(this.width), m ? x > 0 && D + N + c > this.right && (k = h.y += y, h.line++, D = h.x = Sn(r, this.left + c, this.right - n[h.line])) : x > 0 && k + y > this.bottom && (D = h.x = D + e[h.line].width + c, h.line++, k = h.y = Sn(r, this.top + M + c, this.bottom - e[h.line].height)), function (t, e, n) {
                    if (isNaN(f) || f <= 0 || isNaN(p) || p < 0) return;
                    i.save();
                    const r = Ce(n.lineWidth, 1);
                    if (i.fillStyle = Ce(n.fillStyle, o), i.lineCap = Ce(n.lineCap, "butt"), i.lineDashOffset = Ce(n.lineDashOffset, 0), i.lineJoin = Ce(n.lineJoin, "miter"), i.lineWidth = r, i.strokeStyle = Ce(n.strokeStyle, o), i.setLineDash(Ce(n.lineDash, [])), a.usePointStyle) {
                        const o = {
                            radius: p * Math.SQRT2 / 2,
                            pointStyle: n.pointStyle,
                            rotation: n.rotation,
                            borderWidth: r
                        }, l = s.xPlus(t, f / 2);
                        ti(i, o, l, e + d, a.pointStyleWidth && f)
                    } else {
                        const a = e + Math.max((u - p) / 2, 0), o = s.leftForLtr(t, f), l = mi(n.borderRadius);
                        i.beginPath(), Object.values(l).some((t => 0 !== t)) ? ci(i, {
                            x: o,
                            y: a,
                            w: f,
                            h: p,
                            radius: l
                        }) : i.rect(o, a, f, p), i.fill(), 0 !== r && i.stroke()
                    }
                    i.restore()
                }(s.x(D), k, b), D = ((t, e, n, i) => t === (i ? "left" : "right") ? n : "center" === t ? (e + n) / 2 : e)(v, D + f + d, m ? D + N : this.right, t.rtl), function (t, e, n) {
                    li(i, n.text, t, e + g / 2, l, {strikethrough: n.hidden, textAlign: s.textAlign(n.textAlign)})
                }(s.x(D), k, b), m) h.x += N + c; else if ("string" != typeof b.text) {
                    const t = l.lineHeight;
                    h.y += ns(b, t) + c
                } else h.y += y
            })), rr(this.ctx, t.textDirection)
        }

        drawTitle() {
            const t = this.options, e = t.title, n = yi(e.font), i = Mi(e.padding);
            if (!e.display) return;
            const r = nr(t.rtl, this.left, this.width), a = this.ctx, o = e.position, s = n.size / 2, l = i.top + s;
            let c, u = this.left, d = this.width;
            if (this.isHorizontal()) d = Math.max(...this.lineWidths), c = this.top + l, u = Sn(t.align, u, this.right - d); else {
                const e = this.columnSizes.reduce(((t, e) => Math.max(t, e.height)), 0);
                c = l + Sn(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight())
            }
            const h = Sn(o, u, u + d);
            a.textAlign = r.textAlign(Tn(o)), a.textBaseline = "middle", a.strokeStyle = e.color, a.fillStyle = e.color, a.font = n.string, li(a, e.text, h, c, n)
        }

        _computeTitleHeight() {
            const t = this.options.title, e = yi(t.font), n = Mi(t.padding);
            return t.display ? e.lineHeight + n.height : 0
        }

        _getLegendItemAt(t, e) {
            let n, i, r;
            if (Mn(t, this.left, this.right) && Mn(e, this.top, this.bottom)) for (r = this.legendHitBoxes, n = 0; n < r.length; ++n) if (i = r[n], Mn(t, i.left, i.left + i.width) && Mn(e, i.top, i.top + i.height)) return this.legendItems[n];
            return null
        }

        handleEvent(t) {
            const e = this.options;
            if (!function (t, e) {
                return !("mousemove" !== t && "mouseout" !== t || !e.onHover && !e.onLeave) || !(!e.onClick || "click" !== t && "mouseup" !== t)
            }(t.type, e)) return;
            const n = this._getLegendItemAt(t.x, t.y);
            if ("mousemove" === t.type || "mouseout" === t.type) {
                const a = this._hoveredItem,
                    o = (r = n, null !== (i = a) && null !== r && i.datasetIndex === r.datasetIndex && i.index === r.index);
                a && !o && je(e.onLeave, [t, a, this], this), this._hoveredItem = n, n && !o && je(e.onHover, [t, n, this], this)
            } else n && je(e.onClick, [t, n, this], this);
            var i, r
        }
    }

    function ns(t, e) {
        return e * (t.text ? t.text.length : 0)
    }

    var is = {
        id: "legend",
        _element: es,
        start(t, e, n) {
            const i = t.legend = new es({ctx: t.ctx, options: n, chart: t});
            oa.configure(t, i, n), oa.addBox(t, i)
        },
        stop(t) {
            oa.removeBox(t, t.legend), delete t.legend
        },
        beforeUpdate(t, e, n) {
            const i = t.legend;
            oa.configure(t, i, n), i.options = n
        },
        afterUpdate(t) {
            const e = t.legend;
            e.buildLabels(), e.adjustHitBoxes()
        },
        afterEvent(t, e) {
            e.replay || t.legend.handleEvent(e.event)
        },
        defaults: {
            display: !0,
            position: "top",
            align: "center",
            fullSize: !0,
            reverse: !1,
            weight: 1e3,
            onClick(t, e, n) {
                const i = e.datasetIndex, r = n.chart;
                r.isDatasetVisible(i) ? (r.hide(i), e.hidden = !0) : (r.show(i), e.hidden = !1)
            },
            onHover: null,
            onLeave: null,
            labels: {
                color: t => t.chart.options.color, boxWidth: 40, padding: 10, generateLabels(t) {
                    const e = t.data.datasets, {
                        labels: {
                            usePointStyle: n,
                            pointStyle: i,
                            textAlign: r,
                            color: a,
                            useBorderRadius: o,
                            borderRadius: s
                        }
                    } = t.legend.options;
                    return t._getSortedDatasetMetas().map((t => {
                        const l = t.controller.getStyle(n ? 0 : void 0), c = Mi(l.borderWidth);
                        return {
                            text: e[t.index].label,
                            fillStyle: l.backgroundColor,
                            fontColor: a,
                            hidden: !t.visible,
                            lineCap: l.borderCapStyle,
                            lineDash: l.borderDash,
                            lineDashOffset: l.borderDashOffset,
                            lineJoin: l.borderJoinStyle,
                            lineWidth: (c.width + c.height) / 4,
                            strokeStyle: l.borderColor,
                            pointStyle: i || l.pointStyle,
                            rotation: l.rotation,
                            textAlign: r || l.textAlign,
                            borderRadius: o && (s || l.borderRadius),
                            datasetIndex: t.index
                        }
                    }), this)
                }
            },
            title: {color: t => t.chart.options.color, display: !1, position: "center", text: ""}
        },
        descriptors: {
            _scriptable: t => !t.startsWith("on"),
            labels: {_scriptable: t => !["generateLabels", "filter", "sort"].includes(t)}
        }
    };

    class rs extends Da {
        constructor(t) {
            super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
        }

        update(t, e) {
            const n = this.options;
            if (this.left = 0, this.top = 0, !n.display) return void (this.width = this.height = this.right = this.bottom = 0);
            this.width = this.right = t, this.height = this.bottom = e;
            const i = Te(n.text) ? n.text.length : 1;
            this._padding = Mi(n.padding);
            const r = i * yi(n.font).lineHeight + this._padding.height;
            this.isHorizontal() ? this.height = r : this.width = r
        }

        isHorizontal() {
            const t = this.options.position;
            return "top" === t || "bottom" === t
        }

        _drawArgs(t) {
            const {top: e, left: n, bottom: i, right: r, options: a} = this, o = a.align;
            let s, l, c, u = 0;
            return this.isHorizontal() ? (l = Sn(o, n, r), c = e + t, s = r - n) : ("left" === a.position ? (l = n + t, c = Sn(o, i, e), u = -.5 * He) : (l = r - t, c = Sn(o, e, i), u = .5 * He), s = i - e), {
                titleX: l,
                titleY: c,
                maxWidth: s,
                rotation: u
            }
        }

        draw() {
            const t = this.ctx, e = this.options;
            if (!e.display) return;
            const n = yi(e.font), i = n.lineHeight / 2 + this._padding.top, {
                titleX: r,
                titleY: a,
                maxWidth: o,
                rotation: s
            } = this._drawArgs(i);
            li(t, e.text, 0, 0, n, {
                color: e.color,
                maxWidth: o,
                rotation: s,
                textAlign: Tn(e.align),
                textBaseline: "middle",
                translation: [r, a]
            })
        }
    }

    var as = {
        id: "title",
        _element: rs,
        start(t, e, n) {
            !function (t, e) {
                const n = new rs({ctx: t.ctx, options: e, chart: t});
                oa.configure(t, n, e), oa.addBox(t, n), t.titleBlock = n
            }(t, n)
        },
        stop(t) {
            const e = t.titleBlock;
            oa.removeBox(t, e), delete t.titleBlock
        },
        beforeUpdate(t, e, n) {
            const i = t.titleBlock;
            oa.configure(t, i, n), i.options = n
        },
        defaults: {
            align: "center",
            display: !1,
            font: {weight: "bold"},
            fullSize: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        },
        defaultRoutes: {color: "color"},
        descriptors: {_scriptable: !0, _indexable: !1}
    };
    const os = new WeakMap;
    var ss = {
        id: "subtitle",
        start(t, e, n) {
            const i = new rs({ctx: t.ctx, options: n, chart: t});
            oa.configure(t, i, n), oa.addBox(t, i), os.set(t, i)
        },
        stop(t) {
            oa.removeBox(t, os.get(t)), os.delete(t)
        },
        beforeUpdate(t, e, n) {
            const i = os.get(t);
            oa.configure(t, i, n), i.options = n
        },
        defaults: {
            align: "center",
            display: !1,
            font: {weight: "normal"},
            fullSize: !0,
            padding: 0,
            position: "top",
            text: "",
            weight: 1500
        },
        defaultRoutes: {color: "color"},
        descriptors: {_scriptable: !0, _indexable: !1}
    };
    const ls = {
        average(t) {
            if (!t.length) return !1;
            let e, n, i = new Set, r = 0, a = 0;
            for (e = 0, n = t.length; e < n; ++e) {
                const n = t[e].element;
                if (n && n.hasValue()) {
                    const t = n.tooltipPosition();
                    i.add(t.x), r += t.y, ++a
                }
            }
            return {x: [...i].reduce(((t, e) => t + e)) / i.size, y: r / a}
        }, nearest(t, e) {
            if (!t.length) return !1;
            let n, i, r, a = e.x, o = e.y, s = Number.POSITIVE_INFINITY;
            for (n = 0, i = t.length; n < i; ++n) {
                const i = t[n].element;
                if (i && i.hasValue()) {
                    const t = hn(e, i.getCenterPoint());
                    t < s && (s = t, r = i)
                }
            }
            if (r) {
                const t = r.tooltipPosition();
                a = t.x, o = t.y
            }
            return {x: a, y: o}
        }
    };

    function cs(t, e) {
        return e && (Te(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
    }

    function us(t) {
        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
    }

    function ds(t, e) {
        const {element: n, datasetIndex: i, index: r} = e, a = t.getDatasetMeta(i).controller, {
            label: o,
            value: s
        } = a.getLabelAndValue(r);
        return {
            chart: t,
            label: o,
            parsed: a.getParsed(r),
            raw: t.data.datasets[i].data[r],
            formattedValue: s,
            dataset: a.getDataset(),
            dataIndex: r,
            datasetIndex: i,
            element: n
        }
    }

    function hs(t, e) {
        const n = t.chart.ctx, {body: i, footer: r, title: a} = t, {boxWidth: o, boxHeight: s} = e, l = yi(e.bodyFont),
            c = yi(e.titleFont), u = yi(e.footerFont), d = a.length, h = r.length, f = i.length, p = Mi(e.padding);
        let g = p.height, m = 0, M = i.reduce(((t, e) => t + e.before.length + e.lines.length + e.after.length), 0);
        M += t.beforeBody.length + t.afterBody.length, d && (g += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), M && (g += f * (e.displayColors ? Math.max(s, l.lineHeight) : l.lineHeight) + (M - f) * l.lineHeight + (M - 1) * e.bodySpacing), h && (g += e.footerMarginTop + h * u.lineHeight + (h - 1) * e.footerSpacing);
        let y = 0;
        const b = function (t) {
            m = Math.max(m, n.measureText(t).width + y)
        };
        return n.save(), n.font = c.string, Ie(t.title, b), n.font = l.string, Ie(t.beforeBody.concat(t.afterBody), b), y = e.displayColors ? o + 2 + e.boxPadding : 0, Ie(i, (t => {
            Ie(t.before, b), Ie(t.lines, b), Ie(t.after, b)
        })), y = 0, n.font = u.string, Ie(t.footer, b), n.restore(), m += p.width, {width: m, height: g}
    }

    function fs(t, e, n, i) {
        const {x: r, width: a} = n, {width: o, chartArea: {left: s, right: l}} = t;
        let c = "center";
        return "center" === i ? c = r <= (s + l) / 2 ? "left" : "right" : r <= a / 2 ? c = "left" : r >= o - a / 2 && (c = "right"), function (t, e, n, i) {
            const {x: r, width: a} = i, o = n.caretSize + n.caretPadding;
            return "left" === t && r + a + o > e.width || "right" === t && r - a - o < 0 || void 0
        }(c, t, e, n) && (c = "center"), c
    }

    function ps(t, e, n) {
        const i = n.yAlign || e.yAlign || function (t, e) {
            const {y: n, height: i} = e;
            return n < i / 2 ? "top" : n > t.height - i / 2 ? "bottom" : "center"
        }(t, n);
        return {xAlign: n.xAlign || e.xAlign || fs(t, e, n, i), yAlign: i}
    }

    function gs(t, e, n, i) {
        const {caretSize: r, caretPadding: a, cornerRadius: o} = t, {xAlign: s, yAlign: l} = n, c = r + a, {
            topLeft: u,
            topRight: d,
            bottomLeft: h,
            bottomRight: f
        } = mi(o);
        let p = function (t, e) {
            let {x: n, width: i} = t;
            return "right" === e ? n -= i : "center" === e && (n -= i / 2), n
        }(e, s);
        const g = function (t, e, n) {
            let {y: i, height: r} = t;
            return "top" === e ? i += n : i -= "bottom" === e ? r + n : r / 2, i
        }(e, l, c);
        return "center" === l ? "left" === s ? p += c : "right" === s && (p -= c) : "left" === s ? p -= Math.max(u, h) + r : "right" === s && (p += Math.max(d, f) + r), {
            x: mn(p, 0, i.width - e.width),
            y: mn(g, 0, i.height - e.height)
        }
    }

    function ms(t, e, n) {
        const i = Mi(n.padding);
        return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - i.right : t.x + i.left
    }

    function Ms(t) {
        return cs([], us(t))
    }

    function ys(t, e) {
        const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return n ? t.override(n) : t
    }

    const bs = {
        beforeTitle: Ne, title(t) {
            if (t.length > 0) {
                const e = t[0], n = e.chart.data.labels, i = n ? n.length : 0;
                if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || "";
                if (e.label) return e.label;
                if (i > 0 && e.dataIndex < i) return n[e.dataIndex]
            }
            return ""
        }, afterTitle: Ne, beforeBody: Ne, beforeLabel: Ne, label(t) {
            if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
            let e = t.dataset.label || "";
            e && (e += ": ");
            const n = t.formattedValue;
            return ke(n) || (e += n), e
        }, labelColor(t) {
            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
            return {
                borderColor: e.borderColor,
                backgroundColor: e.backgroundColor,
                borderWidth: e.borderWidth,
                borderDash: e.borderDash,
                borderDashOffset: e.borderDashOffset,
                borderRadius: 0
            }
        }, labelTextColor() {
            return this.options.bodyColor
        }, labelPointStyle(t) {
            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
            return {pointStyle: e.pointStyle, rotation: e.rotation}
        }, afterLabel: Ne, afterBody: Ne, beforeFooter: Ne, footer: Ne, afterFooter: Ne
    };

    function xs(t, e, n, i) {
        const r = t[e].call(n, i);
        return void 0 === r ? bs[e].call(n, i) : r
    }

    class As extends Da {
        static positioners = ls;

        constructor(t) {
            super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
        }

        initialize(t) {
            this.options = t, this._cachedAnimations = void 0, this.$context = void 0
        }

        _resolveAnimations() {
            const t = this._cachedAnimations;
            if (t) return t;
            const e = this.chart, n = this.options.setContext(this.getContext()),
                i = n.enabled && e.options.animation && n.animations, r = new mr(this.chart, i);
            return i._cacheable && (this._cachedAnimations = Object.freeze(r)), r
        }

        getContext() {
            return this.$context || (this.$context = xi(this.chart.getContext(), {
                tooltip: this,
                tooltipItems: this._tooltipItems,
                type: "tooltip"
            }))
        }

        getTitle(t, e) {
            const {callbacks: n} = e, i = xs(n, "beforeTitle", this, t), r = xs(n, "title", this, t),
                a = xs(n, "afterTitle", this, t);
            let o = [];
            return o = cs(o, us(i)), o = cs(o, us(r)), o = cs(o, us(a)), o
        }

        getBeforeBody(t, e) {
            return Ms(xs(e.callbacks, "beforeBody", this, t))
        }

        getBody(t, e) {
            const {callbacks: n} = e, i = [];
            return Ie(t, (t => {
                const e = {before: [], lines: [], after: []}, r = ys(n, t);
                cs(e.before, us(xs(r, "beforeLabel", this, t))), cs(e.lines, xs(r, "label", this, t)), cs(e.after, us(xs(r, "afterLabel", this, t))), i.push(e)
            })), i
        }

        getAfterBody(t, e) {
            return Ms(xs(e.callbacks, "afterBody", this, t))
        }

        getFooter(t, e) {
            const {callbacks: n} = e, i = xs(n, "beforeFooter", this, t), r = xs(n, "footer", this, t),
                a = xs(n, "afterFooter", this, t);
            let o = [];
            return o = cs(o, us(i)), o = cs(o, us(r)), o = cs(o, us(a)), o
        }

        _createItems(t) {
            const e = this._active, n = this.chart.data, i = [], r = [], a = [];
            let o, s, l = [];
            for (o = 0, s = e.length; o < s; ++o) l.push(ds(this.chart, e[o]));
            return t.filter && (l = l.filter(((e, i, r) => t.filter(e, i, r, n)))), t.itemSort && (l = l.sort(((e, i) => t.itemSort(e, i, n)))), Ie(l, (e => {
                const n = ys(t.callbacks, e);
                i.push(xs(n, "labelColor", this, e)), r.push(xs(n, "labelPointStyle", this, e)), a.push(xs(n, "labelTextColor", this, e))
            })), this.labelColors = i, this.labelPointStyles = r, this.labelTextColors = a, this.dataPoints = l, l
        }

        update(t, e) {
            const n = this.options.setContext(this.getContext()), i = this._active;
            let r, a = [];
            if (i.length) {
                const t = ls[n.position].call(this, i, this._eventPosition);
                a = this._createItems(n), this.title = this.getTitle(a, n), this.beforeBody = this.getBeforeBody(a, n), this.body = this.getBody(a, n), this.afterBody = this.getAfterBody(a, n), this.footer = this.getFooter(a, n);
                const e = this._size = hs(this, n), o = Object.assign({}, t, e), s = ps(this.chart, n, o),
                    l = gs(n, o, s, this.chart);
                this.xAlign = s.xAlign, this.yAlign = s.yAlign, r = {
                    opacity: 1,
                    x: l.x,
                    y: l.y,
                    width: e.width,
                    height: e.height,
                    caretX: t.x,
                    caretY: t.y
                }
            } else 0 !== this.opacity && (r = {opacity: 0});
            this._tooltipItems = a, this.$context = void 0, r && this._resolveAnimations().update(this, r), t && n.external && n.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay: e
            })
        }

        drawCaret(t, e, n, i) {
            const r = this.getCaretPosition(t, n, i);
            e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3)
        }

        getCaretPosition(t, e, n) {
            const {xAlign: i, yAlign: r} = this, {caretSize: a, cornerRadius: o} = n, {
                topLeft: s,
                topRight: l,
                bottomLeft: c,
                bottomRight: u
            } = mi(o), {x: d, y: h} = t, {width: f, height: p} = e;
            let g, m, M, y, b, x;
            return "center" === r ? (b = h + p / 2, "left" === i ? (g = d, m = g - a, y = b + a, x = b - a) : (g = d + f, m = g + a, y = b - a, x = b + a), M = g) : (m = "left" === i ? d + Math.max(s, c) + a : "right" === i ? d + f - Math.max(l, u) - a : this.caretX, "top" === r ? (y = h, b = y - a, g = m - a, M = m + a) : (y = h + p, b = y + a, g = m + a, M = m - a), x = y), {
                x1: g,
                x2: m,
                x3: M,
                y1: y,
                y2: b,
                y3: x
            }
        }

        drawTitle(t, e, n) {
            const i = this.title, r = i.length;
            let a, o, s;
            if (r) {
                const l = nr(n.rtl, this.x, this.width);
                for (t.x = ms(this, n.titleAlign, n), e.textAlign = l.textAlign(n.titleAlign), e.textBaseline = "middle", a = yi(n.titleFont), o = n.titleSpacing, e.fillStyle = n.titleColor, e.font = a.string, s = 0; s < r; ++s) e.fillText(i[s], l.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + o, s + 1 === r && (t.y += n.titleMarginBottom - o)
            }
        }

        _drawColorBox(t, e, n, i, r) {
            const a = this.labelColors[n], o = this.labelPointStyles[n], {boxHeight: s, boxWidth: l} = r,
                c = yi(r.bodyFont), u = ms(this, "left", r), d = i.x(u),
                h = s < c.lineHeight ? (c.lineHeight - s) / 2 : 0, f = e.y + h;
            if (r.usePointStyle) {
                const e = {radius: Math.min(l, s) / 2, pointStyle: o.pointStyle, rotation: o.rotation, borderWidth: 1},
                    n = i.leftForLtr(d, l) + l / 2, c = f + s / 2;
                t.strokeStyle = r.multiKeyBackground, t.fillStyle = r.multiKeyBackground, qn(t, e, n, c), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, qn(t, e, n, c)
            } else {
                t.lineWidth = Se(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
                const e = i.leftForLtr(d, l), n = i.leftForLtr(i.xPlus(d, 1), l - 2), o = mi(a.borderRadius);
                Object.values(o).some((t => 0 !== t)) ? (t.beginPath(), t.fillStyle = r.multiKeyBackground, ci(t, {
                    x: e,
                    y: f,
                    w: l,
                    h: s,
                    radius: o
                }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), ci(t, {
                    x: n,
                    y: f + 1,
                    w: l - 2,
                    h: s - 2,
                    radius: o
                }), t.fill()) : (t.fillStyle = r.multiKeyBackground, t.fillRect(e, f, l, s), t.strokeRect(e, f, l, s), t.fillStyle = a.backgroundColor, t.fillRect(n, f + 1, l - 2, s - 2))
            }
            t.fillStyle = this.labelTextColors[n]
        }

        drawBody(t, e, n) {
            const {body: i} = this, {
                bodySpacing: r,
                bodyAlign: a,
                displayColors: o,
                boxHeight: s,
                boxWidth: l,
                boxPadding: c
            } = n, u = yi(n.bodyFont);
            let d = u.lineHeight, h = 0;
            const f = nr(n.rtl, this.x, this.width), p = function (n) {
                e.fillText(n, f.x(t.x + h), t.y + d / 2), t.y += d + r
            }, g = f.textAlign(a);
            let m, M, y, b, x, A, v;
            for (e.textAlign = a, e.textBaseline = "middle", e.font = u.string, t.x = ms(this, g, n), e.fillStyle = n.bodyColor, Ie(this.beforeBody, p), h = o && "right" !== g ? "center" === a ? l / 2 + c : l + 2 + c : 0, b = 0, A = i.length; b < A; ++b) {
                for (m = i[b], M = this.labelTextColors[b], e.fillStyle = M, Ie(m.before, p), y = m.lines, o && y.length && (this._drawColorBox(e, t, b, f, n), d = Math.max(u.lineHeight, s)), x = 0, v = y.length; x < v; ++x) p(y[x]), d = u.lineHeight;
                Ie(m.after, p)
            }
            h = 0, d = u.lineHeight, Ie(this.afterBody, p), t.y -= r
        }

        drawFooter(t, e, n) {
            const i = this.footer, r = i.length;
            let a, o;
            if (r) {
                const s = nr(n.rtl, this.x, this.width);
                for (t.x = ms(this, n.footerAlign, n), t.y += n.footerMarginTop, e.textAlign = s.textAlign(n.footerAlign), e.textBaseline = "middle", a = yi(n.footerFont), e.fillStyle = n.footerColor, e.font = a.string, o = 0; o < r; ++o) e.fillText(i[o], s.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + n.footerSpacing
            }
        }

        drawBackground(t, e, n, i) {
            const {xAlign: r, yAlign: a} = this, {x: o, y: s} = t, {width: l, height: c} = n, {
                topLeft: u,
                topRight: d,
                bottomLeft: h,
                bottomRight: f
            } = mi(i.cornerRadius);
            e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, e.lineWidth = i.borderWidth, e.beginPath(), e.moveTo(o + u, s), "top" === a && this.drawCaret(t, e, n, i), e.lineTo(o + l - d, s), e.quadraticCurveTo(o + l, s, o + l, s + d), "center" === a && "right" === r && this.drawCaret(t, e, n, i), e.lineTo(o + l, s + c - f), e.quadraticCurveTo(o + l, s + c, o + l - f, s + c), "bottom" === a && this.drawCaret(t, e, n, i), e.lineTo(o + h, s + c), e.quadraticCurveTo(o, s + c, o, s + c - h), "center" === a && "left" === r && this.drawCaret(t, e, n, i), e.lineTo(o, s + u), e.quadraticCurveTo(o, s, o + u, s), e.closePath(), e.fill(), i.borderWidth > 0 && e.stroke()
        }

        _updateAnimationTarget(t) {
            const e = this.chart, n = this.$animations, i = n && n.x, r = n && n.y;
            if (i || r) {
                const n = ls[t.position].call(this, this._active, this._eventPosition);
                if (!n) return;
                const a = this._size = hs(this, t), o = Object.assign({}, n, this._size), s = ps(e, t, o),
                    l = gs(t, o, s, e);
                i._to === l.x && r._to === l.y || (this.xAlign = s.xAlign, this.yAlign = s.yAlign, this.width = a.width, this.height = a.height, this.caretX = n.x, this.caretY = n.y, this._resolveAnimations().update(this, l))
            }
        }

        _willRender() {
            return !!this.opacity
        }

        draw(t) {
            const e = this.options.setContext(this.getContext());
            let n = this.opacity;
            if (!n) return;
            this._updateAnimationTarget(e);
            const i = {width: this.width, height: this.height}, r = {x: this.x, y: this.y};
            n = Math.abs(n) < .001 ? 0 : n;
            const a = Mi(e.padding),
                o = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
            e.enabled && o && (t.save(), t.globalAlpha = n, this.drawBackground(r, t, i, e), ir(t, e.textDirection), r.y += a.top, this.drawTitle(r, t, e), this.drawBody(r, t, e), this.drawFooter(r, t, e), rr(t, e.textDirection), t.restore())
        }

        getActiveElements() {
            return this._active || []
        }

        setActiveElements(t, e) {
            const n = this._active, i = t.map((({datasetIndex: t, index: e}) => {
                const n = this.chart.getDatasetMeta(t);
                if (!n) throw new Error("Cannot find a dataset at index " + t);
                return {datasetIndex: t, element: n.data[e], index: e}
            })), r = !_e(n, i), a = this._positionChanged(i, e);
            (r || a) && (this._active = i, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0))
        }

        handleEvent(t, e, n = !0) {
            if (e && this._ignoreReplayEvents) return !1;
            this._ignoreReplayEvents = !1;
            const i = this.options, r = this._active || [], a = this._getActiveElements(t, r, e, n),
                o = this._positionChanged(a, t), s = e || !_e(a, r) || o;
            return s && (this._active = a, (i.enabled || i.external) && (this._eventPosition = {
                x: t.x,
                y: t.y
            }, this.update(!0, e))), s
        }

        _getActiveElements(t, e, n, i) {
            const r = this.options;
            if ("mouseout" === t.type) return [];
            if (!i) return e.filter((t => this.chart.data.datasets[t.datasetIndex] && void 0 !== this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index)));
            const a = this.chart.getElementsAtEventForMode(t, r.mode, r, n);
            return r.reverse && a.reverse(), a
        }

        _positionChanged(t, e) {
            const {caretX: n, caretY: i, options: r} = this, a = ls[r.position].call(this, t, e);
            return !1 !== a && (n !== a.x || i !== a.y)
        }
    }

    var vs = {
        id: "tooltip",
        _element: As,
        positioners: ls,
        afterInit(t, e, n) {
            n && (t.tooltip = new As({chart: t, options: n}))
        },
        beforeUpdate(t, e, n) {
            t.tooltip && t.tooltip.initialize(n)
        },
        reset(t, e, n) {
            t.tooltip && t.tooltip.initialize(n)
        },
        afterDraw(t) {
            const e = t.tooltip;
            if (e && e._willRender()) {
                const n = {tooltip: e};
                if (!1 === t.notifyPlugins("beforeTooltipDraw", {...n, cancelable: !0})) return;
                e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", n)
            }
        },
        afterEvent(t, e) {
            if (t.tooltip) {
                const n = e.replay;
                t.tooltip.handleEvent(e.event, n, e.inChartArea) && (e.changed = !0)
            }
        },
        defaults: {
            enabled: !0,
            external: null,
            position: "average",
            backgroundColor: "rgba(0,0,0,0.8)",
            titleColor: "#fff",
            titleFont: {weight: "bold"},
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: "left",
            bodyColor: "#fff",
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: "left",
            footerColor: "#fff",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: {weight: "bold"},
            footerAlign: "left",
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (t, e) => e.bodyFont.size,
            boxWidth: (t, e) => e.bodyFont.size,
            multiKeyBackground: "#fff",
            displayColors: !0,
            boxPadding: 0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            animation: {duration: 400, easing: "easeOutQuart"},
            animations: {
                numbers: {type: "number", properties: ["x", "y", "width", "height", "caretX", "caretY"]},
                opacity: {easing: "linear", duration: 200}
            },
            callbacks: bs
        },
        defaultRoutes: {bodyFont: "font", footerFont: "font", titleFont: "font"},
        descriptors: {
            _scriptable: t => "filter" !== t && "itemSort" !== t && "external" !== t,
            _indexable: !1,
            callbacks: {_scriptable: !1, _indexable: !1},
            animation: {_fallback: !1},
            animations: {_fallback: "animation"}
        },
        additionalOptionScopes: ["interaction"]
    }, Ns = Object.freeze({
        __proto__: null,
        Colors: _o,
        Decimation: Uo,
        Filler: qo,
        Legend: is,
        SubTitle: ss,
        Title: as,
        Tooltip: vs
    });

    function Ds(t) {
        const e = this.getLabels();
        return t >= 0 && t < e.length ? e[t] : t
    }

    function ks(t, e, {horizontal: n, minRotation: i}) {
        const r = ln(i), a = (n ? Math.sin(r) : Math.cos(r)) || .001, o = .75 * e * ("" + t).length;
        return Math.min(e / a, o)
    }

    class Ts extends Ia {
        constructor(t) {
            super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0
        }

        parse(t, e) {
            return ke(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t
        }

        handleTickRangeOptions() {
            const {beginAtZero: t} = this.options, {minDefined: e, maxDefined: n} = this.getUserBounds();
            let {min: i, max: r} = this;
            const a = t => i = e ? i : t, o = t => r = n ? r : t;
            if (t) {
                const t = nn(i), e = nn(r);
                t < 0 && e < 0 ? o(0) : t > 0 && e > 0 && a(0)
            }
            if (i === r) {
                let e = 0 === r ? 1 : Math.abs(.05 * r);
                o(r + e), t || a(i - e)
            }
            this.min = i, this.max = r
        }

        getTickLimit() {
            const t = this.options.ticks;
            let e, {maxTicksLimit: n, stepSize: i} = t;
            return i ? (e = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1, e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${e} ticks. Limiting to 1000.`), e = 1e3)) : (e = this.computeTickLimit(), n = n || 11), n && (e = Math.min(n, e)), e
        }

        computeTickLimit() {
            return Number.POSITIVE_INFINITY
        }

        buildTicks() {
            const t = this.options, e = t.ticks;
            let n = this.getTickLimit();
            n = Math.max(2, n);
            const i = function (t, e) {
                const n = [], {
                        bounds: i,
                        step: r,
                        min: a,
                        max: o,
                        precision: s,
                        count: l,
                        maxTicks: c,
                        maxDigits: u,
                        includeBounds: d
                    } = t, h = r || 1, f = c - 1, {min: p, max: g} = e, m = !ke(a), M = !ke(o), y = !ke(l),
                    b = (g - p) / (u + 1);
                let x, A, v, N, D = an((g - p) / f / h) * h;
                if (D < 1e-14 && !m && !M) return [{value: p}, {value: g}];
                N = Math.ceil(g / D) - Math.floor(p / D), N > f && (D = an(N * D / f / h) * h), ke(s) || (x = Math.pow(10, s), D = Math.ceil(D * x) / x), "ticks" === i ? (A = Math.floor(p / D) * D, v = Math.ceil(g / D) * D) : (A = p, v = g), m && M && r && function (t, e) {
                    const n = Math.round(t);
                    return n - e <= t && n + e >= t
                }((o - a) / r, D / 1e3) ? (N = Math.round(Math.min((o - a) / D, c)), D = (o - a) / N, A = a, v = o) : y ? (A = m ? a : A, v = M ? o : v, N = l - 1, D = (v - A) / N) : (N = (v - A) / D, N = rn(N, Math.round(N), D / 1e3) ? Math.round(N) : Math.ceil(N));
                const k = Math.max(un(D), un(A));
                x = Math.pow(10, ke(s) ? k : s), A = Math.round(A * x) / x, v = Math.round(v * x) / x;
                let T = 0;
                for (m && (d && A !== a ? (n.push({value: a}), A < a && T++, rn(Math.round((A + T * D) * x) / x, a, ks(a, b, t)) && T++) : A < a && T++); T < N; ++T) {
                    const t = Math.round((A + T * D) * x) / x;
                    if (M && t > o) break;
                    n.push({value: t})
                }
                return M && d && v !== o ? n.length && rn(n[n.length - 1].value, o, ks(o, b, t)) ? n[n.length - 1].value = o : n.push({value: o}) : M && v !== o || n.push({value: v}), n
            }({
                maxTicks: n,
                bounds: t.bounds,
                min: t.min,
                max: t.max,
                precision: e.precision,
                step: e.stepSize,
                count: e.count,
                maxDigits: this._maxDigits(),
                horizontal: this.isHorizontal(),
                minRotation: e.minRotation || 0,
                includeBounds: !1 !== e.includeBounds
            }, this._range || this);
            return "ticks" === t.bounds && sn(i, this, "value"), t.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), i
        }

        configure() {
            const t = this.ticks;
            let e = this.min, n = this.max;
            if (super.configure(), this.options.offset && t.length) {
                const i = (n - e) / Math.max(t.length - 1, 1) / 2;
                e -= i, n += i
            }
            this._startValue = e, this._endValue = n, this._valueRange = n - e
        }

        getLabelForValue(t) {
            return Fn(t, this.chart.options.locale, this.options.ticks.format)
        }
    }

    class Ss extends Ts {
        static id = "linear";
        static defaults = {ticks: {callback: Wn.formatters.numeric}};

        determineDataLimits() {
            const {min: t, max: e} = this.getMinMax(!0);
            this.min = we(t) ? t : 0, this.max = we(e) ? e : 1, this.handleTickRangeOptions()
        }

        computeTickLimit() {
            const t = this.isHorizontal(), e = t ? this.width : this.height, n = ln(this.options.ticks.minRotation),
                i = (t ? Math.sin(n) : Math.cos(n)) || .001, r = this._resolveTickFontOptions(0);
            return Math.ceil(e / Math.min(40, r.lineHeight / i))
        }

        getPixelForValue(t) {
            return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
        }

        getValueForPixel(t) {
            return this._startValue + this.getDecimalForPixel(t) * this._valueRange
        }
    }

    const ws = t => Math.floor(en(t)), Es = (t, e) => Math.pow(10, ws(t) + e);

    function Cs(t) {
        return 1 == t / Math.pow(10, ws(t))
    }

    function zs(t, e, n) {
        const i = Math.pow(10, n), r = Math.floor(t / i);
        return Math.ceil(e / i) - r
    }

    class js extends Ia {
        static id = "logarithmic";
        static defaults = {ticks: {callback: Wn.formatters.logarithmic, major: {enabled: !0}}};

        constructor(t) {
            super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0
        }

        parse(t, e) {
            const n = Ts.prototype.parse.apply(this, [t, e]);
            if (0 !== n) return we(n) && n > 0 ? n : null;
            this._zero = !0
        }

        determineDataLimits() {
            const {min: t, max: e} = this.getMinMax(!0);
            this.min = we(t) ? Math.max(0, t) : null, this.max = we(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !we(this._userMin) && (this.min = t === Es(this.min, 0) ? Es(this.min, -1) : Es(this.min, 0)), this.handleTickRangeOptions()
        }

        handleTickRangeOptions() {
            const {minDefined: t, maxDefined: e} = this.getUserBounds();
            let n = this.min, i = this.max;
            const r = e => n = t ? n : e, a = t => i = e ? i : t;
            n === i && (n <= 0 ? (r(1), a(10)) : (r(Es(n, -1)), a(Es(i, 1)))), n <= 0 && r(Es(i, -1)), i <= 0 && a(Es(n, 1)), this.min = n, this.max = i
        }

        buildTicks() {
            const t = this.options, e = function (t, {min: e, max: n}) {
                e = Ee(t.min, e);
                const i = [], r = ws(e);
                let a = function (t, e) {
                    let n = ws(e - t);
                    for (; zs(t, e, n) > 10;) n++;
                    for (; zs(t, e, n) < 10;) n--;
                    return Math.min(n, ws(t))
                }(e, n), o = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
                const s = Math.pow(10, a), l = r > a ? Math.pow(10, r) : 0, c = Math.round((e - l) * o) / o,
                    u = Math.floor((e - l) / s / 10) * s * 10;
                let d = Math.floor((c - u) / Math.pow(10, a)),
                    h = Ee(t.min, Math.round((l + u + d * Math.pow(10, a)) * o) / o);
                for (; h < n;) i.push({
                    value: h,
                    major: Cs(h),
                    significand: d
                }), d >= 10 ? d = d < 15 ? 15 : 20 : d++, d >= 20 && (a++, d = 2, o = a >= 0 ? 1 : o), h = Math.round((l + u + d * Math.pow(10, a)) * o) / o;
                const f = Ee(t.max, h);
                return i.push({value: f, major: Cs(f), significand: d}), i
            }({min: this._userMin, max: this._userMax}, this);
            return "ticks" === t.bounds && sn(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e
        }

        getLabelForValue(t) {
            return void 0 === t ? "0" : Fn(t, this.chart.options.locale, this.options.ticks.format)
        }

        configure() {
            const t = this.min;
            super.configure(), this._startValue = en(t), this._valueRange = en(this.max) - en(t)
        }

        getPixelForValue(t) {
            return void 0 !== t && 0 !== t || (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (en(t) - this._startValue) / this._valueRange)
        }

        getValueForPixel(t) {
            const e = this.getDecimalForPixel(t);
            return Math.pow(10, this._startValue + e * this._valueRange)
        }
    }

    function Is(t) {
        const e = t.ticks;
        if (e.display && t.display) {
            const t = Mi(e.backdropPadding);
            return Ce(e.font && e.font.size, Gn.font.size) + t.height
        }
        return 0
    }

    function _s(t, e, n, i, r) {
        return t === i || t === r ? {start: e - n / 2, end: e + n / 2} : t < i || t > r ? {
            start: e - n,
            end: e
        } : {start: e, end: e + n}
    }

    function Os(t, e, n, i, r) {
        const a = Math.abs(Math.sin(n)), o = Math.abs(Math.cos(n));
        let s = 0, l = 0;
        i.start < e.l ? (s = (e.l - i.start) / a, t.l = Math.min(t.l, e.l - s)) : i.end > e.r && (s = (i.end - e.r) / a, t.r = Math.max(t.r, e.r + s)), r.start < e.t ? (l = (e.t - r.start) / o, t.t = Math.min(t.t, e.t - l)) : r.end > e.b && (l = (r.end - e.b) / o, t.b = Math.max(t.b, e.b + l))
    }

    function Ls(t, e, n) {
        const i = t.drawingArea, {extra: r, additionalAngle: a, padding: o, size: s} = n,
            l = t.getPointPosition(e, i + r + o, a), c = Math.round(cn(pn(l.angle + Ke))), u = function (t, e, n) {
                return 90 === n || 270 === n ? t -= e / 2 : (n > 270 || n < 90) && (t -= e), t
            }(l.y, s.h, c), d = function (t) {
                return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
            }(c), h = (f = l.x, p = s.w, "right" === (g = d) ? f -= p : "center" === g && (f -= p / 2), f);
        var f, p, g;
        return {visible: !0, x: l.x, y: u, textAlign: d, left: h, top: u, right: h + s.w, bottom: u + s.h}
    }

    function Us(t, e) {
        if (!e) return !0;
        const {left: n, top: i, right: r, bottom: a} = t;
        return !(ei({x: n, y: i}, e) || ei({x: n, y: a}, e) || ei({x: r, y: i}, e) || ei({x: r, y: a}, e))
    }

    function Rs(t, e, n) {
        const {left: i, top: r, right: a, bottom: o} = n, {backdropColor: s} = e;
        if (!ke(s)) {
            const n = mi(e.borderRadius), l = Mi(e.backdropPadding);
            t.fillStyle = s;
            const c = i - l.left, u = r - l.top, d = a - i + l.width, h = o - r + l.height;
            Object.values(n).some((t => 0 !== t)) ? (t.beginPath(), ci(t, {
                x: c,
                y: u,
                w: d,
                h,
                radius: n
            }), t.fill()) : t.fillRect(c, u, d, h)
        }
    }

    function Vs(t, e, n, i) {
        const {ctx: r} = t;
        if (n) r.arc(t.xCenter, t.yCenter, e, 0, Ge); else {
            let n = t.getPointPosition(0, e);
            r.moveTo(n.x, n.y);
            for (let a = 1; a < i; a++) n = t.getPointPosition(a, e), r.lineTo(n.x, n.y)
        }
    }

    class Fs extends Ts {
        static id = "radialLinear";
        static defaults = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0},
            grid: {circular: !1},
            startAngle: 0,
            ticks: {showLabelBackdrop: !0, callback: Wn.formatters.numeric},
            pointLabels: {
                backdropColor: void 0,
                backdropPadding: 2,
                display: !0,
                font: {size: 10},
                callback: t => t,
                padding: 5,
                centerPointLabels: !1
            }
        };
        static defaultRoutes = {
            "angleLines.color": "borderColor",
            "pointLabels.color": "color",
            "ticks.color": "color"
        };
        static descriptors = {angleLines: {_fallback: "grid"}};

        constructor(t) {
            super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = []
        }

        setDimensions() {
            const t = this._padding = Mi(Is(this.options) / 2), e = this.width = this.maxWidth - t.width,
                n = this.height = this.maxHeight - t.height;
            this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + n / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, n) / 2)
        }

        determineDataLimits() {
            const {min: t, max: e} = this.getMinMax(!1);
            this.min = we(t) && !isNaN(t) ? t : 0, this.max = we(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions()
        }

        computeTickLimit() {
            return Math.ceil(this.drawingArea / Is(this.options))
        }

        generateTickLabels(t) {
            Ts.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map(((t, e) => {
                const n = je(this.options.pointLabels.callback, [t, e], this);
                return n || 0 === n ? n : ""
            })).filter(((t, e) => this.chart.getDataVisibility(e)))
        }

        fit() {
            const t = this.options;
            t.display && t.pointLabels.display ? function (t) {
                const e = {
                        l: t.left + t._padding.left,
                        r: t.right - t._padding.right,
                        t: t.top + t._padding.top,
                        b: t.bottom - t._padding.bottom
                    }, n = Object.assign({}, e), i = [], r = [], a = t._pointLabels.length, o = t.options.pointLabels,
                    s = o.centerPointLabels ? He / a : 0;
                for (let d = 0; d < a; d++) {
                    const a = o.setContext(t.getPointLabelContext(d));
                    r[d] = a.padding;
                    const h = t.getPointPosition(d, t.drawingArea + r[d], s), f = yi(a.font),
                        p = (l = t.ctx, c = f, u = Te(u = t._pointLabels[d]) ? u : [u], {
                            w: Xn(l, c.string, u),
                            h: u.length * c.lineHeight
                        });
                    i[d] = p;
                    const g = pn(t.getIndexAngle(d) + s), m = Math.round(cn(g));
                    Os(n, e, g, _s(m, h.x, p.w, 0, 180), _s(m, h.y, p.h, 90, 270))
                }
                var l, c, u;
                t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b), t._pointLabelItems = function (t, e, n) {
                    const i = [], r = t._pointLabels.length, a = t.options, {
                        centerPointLabels: o,
                        display: s
                    } = a.pointLabels, l = {extra: Is(a) / 2, additionalAngle: o ? He / r : 0};
                    let c;
                    for (let a = 0; a < r; a++) {
                        l.padding = n[a], l.size = e[a];
                        const r = Ls(t, a, l);
                        i.push(r), "auto" === s && (r.visible = Us(r, c), r.visible && (c = r))
                    }
                    return i
                }(t, i, r)
            }(this) : this.setCenterPoint(0, 0, 0, 0)
        }

        setCenterPoint(t, e, n, i) {
            this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((n - i) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, n, i))
        }

        getIndexAngle(t) {
            return pn(t * (Ge / (this._pointLabels.length || 1)) + ln(this.options.startAngle || 0))
        }

        getDistanceFromCenterForValue(t) {
            if (ke(t)) return NaN;
            const e = this.drawingArea / (this.max - this.min);
            return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
        }

        getValueForDistanceFromCenter(t) {
            if (ke(t)) return NaN;
            const e = t / (this.drawingArea / (this.max - this.min));
            return this.options.reverse ? this.max - e : this.min + e
        }

        getPointLabelContext(t) {
            const e = this._pointLabels || [];
            if (t >= 0 && t < e.length) {
                const n = e[t];
                return function (t, e, n) {
                    return xi(t, {label: n, index: e, type: "pointLabel"})
                }(this.getContext(), t, n)
            }
        }

        getPointPosition(t, e, n = 0) {
            const i = this.getIndexAngle(t) - Ke + n;
            return {x: Math.cos(i) * e + this.xCenter, y: Math.sin(i) * e + this.yCenter, angle: i}
        }

        getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
        }

        getBasePosition(t) {
            return this.getPointPositionForValue(t || 0, this.getBaseValue())
        }

        getPointLabelPosition(t) {
            const {left: e, top: n, right: i, bottom: r} = this._pointLabelItems[t];
            return {left: e, top: n, right: i, bottom: r}
        }

        drawBackground() {
            const {backgroundColor: t, grid: {circular: e}} = this.options;
            if (t) {
                const n = this.ctx;
                n.save(), n.beginPath(), Vs(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), n.closePath(), n.fillStyle = t, n.fill(), n.restore()
            }
        }

        drawGrid() {
            const t = this.ctx, e = this.options, {angleLines: n, grid: i, border: r} = e, a = this._pointLabels.length;
            let o, s, l;
            if (e.pointLabels.display && function (t, e) {
                const {ctx: n, options: {pointLabels: i}} = t;
                for (let r = e - 1; r >= 0; r--) {
                    const e = t._pointLabelItems[r];
                    if (!e.visible) continue;
                    const a = i.setContext(t.getPointLabelContext(r));
                    Rs(n, a, e);
                    const o = yi(a.font), {x: s, y: l, textAlign: c} = e;
                    li(n, t._pointLabels[r], s, l + o.lineHeight / 2, o, {
                        color: a.color,
                        textAlign: c,
                        textBaseline: "middle"
                    })
                }
            }(this, a), i.display && this.ticks.forEach(((t, e) => {
                if (0 !== e || 0 === e && this.min < 0) {
                    s = this.getDistanceFromCenterForValue(t.value);
                    const n = this.getContext(e), o = i.setContext(n), l = r.setContext(n);
                    !function (t, e, n, i, r) {
                        const a = t.ctx, o = e.circular, {color: s, lineWidth: l} = e;
                        !o && !i || !s || !l || n < 0 || (a.save(), a.strokeStyle = s, a.lineWidth = l, a.setLineDash(r.dash), a.lineDashOffset = r.dashOffset, a.beginPath(), Vs(t, n, o, i), a.closePath(), a.stroke(), a.restore())
                    }(this, o, s, a, l)
                }
            })), n.display) {
                for (t.save(), o = a - 1; o >= 0; o--) {
                    const i = n.setContext(this.getPointLabelContext(o)), {color: r, lineWidth: a} = i;
                    a && r && (t.lineWidth = a, t.strokeStyle = r, t.setLineDash(i.borderDash), t.lineDashOffset = i.borderDashOffset, s = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), l = this.getPointPosition(o, s), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke())
                }
                t.restore()
            }
        }

        drawBorder() {
        }

        drawLabels() {
            const t = this.ctx, e = this.options, n = e.ticks;
            if (!n.display) return;
            const i = this.getIndexAngle(0);
            let r, a;
            t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(i), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach(((i, o) => {
                if (0 === o && this.min >= 0 && !e.reverse) return;
                const s = n.setContext(this.getContext(o)), l = yi(s.font);
                if (r = this.getDistanceFromCenterForValue(this.ticks[o].value), s.showLabelBackdrop) {
                    t.font = l.string, a = t.measureText(i.label).width, t.fillStyle = s.backdropColor;
                    const e = Mi(s.backdropPadding);
                    t.fillRect(-a / 2 - e.left, -r - l.size / 2 - e.top, a + e.width, l.size + e.height)
                }
                li(t, i.label, 0, -r, l, {
                    color: s.color,
                    strokeColor: s.textStrokeColor,
                    strokeWidth: s.textStrokeWidth
                })
            })), t.restore()
        }

        drawTitle() {
        }
    }

    const Ps = {
        millisecond: {common: !0, size: 1, steps: 1e3},
        second: {common: !0, size: 1e3, steps: 60},
        minute: {common: !0, size: 6e4, steps: 60},
        hour: {common: !0, size: 36e5, steps: 24},
        day: {common: !0, size: 864e5, steps: 30},
        week: {common: !1, size: 6048e5, steps: 4},
        month: {common: !0, size: 2628e6, steps: 12},
        quarter: {common: !1, size: 7884e6, steps: 4},
        year: {common: !0, size: 3154e7}
    }, Ws = Object.keys(Ps);

    function Qs(t, e) {
        return t - e
    }

    function Ys(t, e) {
        if (ke(e)) return null;
        const n = t._adapter, {parser: i, round: r, isoWeekday: a} = t._parseOpts;
        let o = e;
        return "function" == typeof i && (o = i(o)), we(o) || (o = "string" == typeof i ? n.parse(o, i) : n.parse(o)), null === o ? null : (r && (o = "week" !== r || !on(a) && !0 !== a ? n.startOf(o, r) : n.startOf(o, "isoWeek", a)), +o)
    }

    function Bs(t, e, n, i) {
        const r = Ws.length;
        for (let a = Ws.indexOf(t); a < r - 1; ++a) {
            const t = Ps[Ws[a]], r = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
            if (t.common && Math.ceil((n - e) / (r * t.size)) <= i) return Ws[a]
        }
        return Ws[r - 1]
    }

    function Zs(t, e, n) {
        if (n) {
            if (n.length) {
                const {lo: i, hi: r} = yn(n, e);
                t[n[i] >= e ? n[i] : n[r]] = !0
            }
        } else t[e] = !0
    }

    function Hs(t, e, n) {
        const i = [], r = {}, a = e.length;
        let o, s;
        for (o = 0; o < a; ++o) s = e[o], r[s] = o, i.push({value: s, major: !1});
        return 0 !== a && n ? function (t, e, n, i) {
            const r = t._adapter, a = +r.startOf(e[0].value, i), o = e[e.length - 1].value;
            let s, l;
            for (s = a; s <= o; s = +r.add(s, 1, i)) l = n[s], l >= 0 && (e[l].major = !0);
            return e
        }(t, i, r, n) : i
    }

    class Gs extends Ia {
        static id = "time";
        static defaults = {
            bounds: "data",
            adapters: {},
            time: {parser: !1, unit: !1, round: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {}},
            ticks: {source: "auto", callback: !1, major: {enabled: !1}}
        };

        constructor(t) {
            super(t), this._cache = {
                data: [],
                labels: [],
                all: []
            }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0
        }

        init(t, e = {}) {
            const n = t.time || (t.time = {}), i = this._adapter = new Wr(t.adapters.date);
            i.init(e), Ve(n.displayFormats, i.formats()), this._parseOpts = {
                parser: n.parser,
                round: n.round,
                isoWeekday: n.isoWeekday
            }, super.init(t), this._normalized = e.normalized
        }

        parse(t, e) {
            return void 0 === t ? null : Ys(this, t)
        }

        beforeLayout() {
            super.beforeLayout(), this._cache = {data: [], labels: [], all: []}
        }

        determineDataLimits() {
            const t = this.options, e = this._adapter, n = t.time.unit || "day";
            let {min: i, max: r, minDefined: a, maxDefined: o} = this.getUserBounds();

            function s(t) {
                a || isNaN(t.min) || (i = Math.min(i, t.min)), o || isNaN(t.max) || (r = Math.max(r, t.max))
            }

            a && o || (s(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || s(this.getMinMax(!1))), i = we(i) && !isNaN(i) ? i : +e.startOf(Date.now(), n), r = we(r) && !isNaN(r) ? r : +e.endOf(Date.now(), n) + 1, this.min = Math.min(i, r - 1), this.max = Math.max(i + 1, r)
        }

        _getLabelBounds() {
            const t = this.getLabelTimestamps();
            let e = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY;
            return t.length && (e = t[0], n = t[t.length - 1]), {min: e, max: n}
        }

        buildTicks() {
            const t = this.options, e = t.time, n = t.ticks,
                i = "labels" === n.source ? this.getLabelTimestamps() : this._generate();
            "ticks" === t.bounds && i.length && (this.min = this._userMin || i[0], this.max = this._userMax || i[i.length - 1]);
            const r = this.min, a = function (t, e, n) {
                let i = 0, r = t.length;
                for (; i < r && t[i] < e;) i++;
                for (; r > i && t[r - 1] > n;) r--;
                return i > 0 || r < t.length ? t.slice(i, r) : t
            }(i, r, this.max);
            return this._unit = e.unit || (n.autoSkip ? Bs(e.minUnit, this.min, this.max, this._getLabelCapacity(r)) : function (t, e, n, i, r) {
                for (let a = Ws.length - 1; a >= Ws.indexOf(n); a--) {
                    const n = Ws[a];
                    if (Ps[n].common && t._adapter.diff(r, i, n) >= e - 1) return n
                }
                return Ws[n ? Ws.indexOf(n) : 0]
            }(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = n.major.enabled && "year" !== this._unit ? function (t) {
                for (let e = Ws.indexOf(t) + 1, n = Ws.length; e < n; ++e) if (Ps[Ws[e]].common) return Ws[e]
            }(this._unit) : void 0, this.initOffsets(i), t.reverse && a.reverse(), Hs(this, a, this._majorUnit)
        }

        afterAutoSkip() {
            this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t => +t.value)))
        }

        initOffsets(t = []) {
            let e, n, i = 0, r = 0;
            this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), i = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, n = this.getDecimalForValue(t[t.length - 1]), r = 1 === t.length ? n : (n - this.getDecimalForValue(t[t.length - 2])) / 2);
            const a = t.length < 3 ? .5 : .25;
            i = mn(i, 0, a), r = mn(r, 0, a), this._offsets = {start: i, end: r, factor: 1 / (i + 1 + r)}
        }

        _generate() {
            const t = this._adapter, e = this.min, n = this.max, i = this.options, r = i.time,
                a = r.unit || Bs(r.minUnit, e, n, this._getLabelCapacity(e)), o = Ce(i.ticks.stepSize, 1),
                s = "week" === a && r.isoWeekday, l = on(s) || !0 === s, c = {};
            let u, d, h = e;
            if (l && (h = +t.startOf(h, "isoWeek", s)), h = +t.startOf(h, l ? "day" : a), t.diff(n, e, a) > 1e5 * o) throw new Error(e + " and " + n + " are too far apart with stepSize of " + o + " " + a);
            const f = "data" === i.ticks.source && this.getDataTimestamps();
            for (u = h, d = 0; u < n; u = +t.add(u, o, a), d++) Zs(c, u, f);
            return u !== n && "ticks" !== i.bounds && 1 !== d || Zs(c, u, f), Object.keys(c).sort(Qs).map((t => +t))
        }

        getLabelForValue(t) {
            const e = this._adapter, n = this.options.time;
            return n.tooltipFormat ? e.format(t, n.tooltipFormat) : e.format(t, n.displayFormats.datetime)
        }

        format(t, e) {
            const n = this.options.time.displayFormats, i = this._unit, r = e || n[i];
            return this._adapter.format(t, r)
        }

        _tickFormatFunction(t, e, n, i) {
            const r = this.options, a = r.ticks.callback;
            if (a) return je(a, [t, e, n], this);
            const o = r.time.displayFormats, s = this._unit, l = this._majorUnit, c = s && o[s], u = l && o[l],
                d = n[e], h = l && u && d && d.major;
            return this._adapter.format(t, i || (h ? u : c))
        }

        generateTickLabels(t) {
            let e, n, i;
            for (e = 0, n = t.length; e < n; ++e) i = t[e], i.label = this._tickFormatFunction(i.value, e, t)
        }

        getDecimalForValue(t) {
            return null === t ? NaN : (t - this.min) / (this.max - this.min)
        }

        getPixelForValue(t) {
            const e = this._offsets, n = this.getDecimalForValue(t);
            return this.getPixelForDecimal((e.start + n) * e.factor)
        }

        getValueForPixel(t) {
            const e = this._offsets, n = this.getDecimalForPixel(t) / e.factor - e.end;
            return this.min + n * (this.max - this.min)
        }

        _getLabelSize(t) {
            const e = this.options.ticks, n = this.ctx.measureText(t).width,
                i = ln(this.isHorizontal() ? e.maxRotation : e.minRotation), r = Math.cos(i), a = Math.sin(i),
                o = this._resolveTickFontOptions(0).size;
            return {w: n * r + o * a, h: n * a + o * r}
        }

        _getLabelCapacity(t) {
            const e = this.options.time, n = e.displayFormats, i = n[e.unit] || n.millisecond,
                r = this._tickFormatFunction(t, 0, Hs(this, [t], this._majorUnit), i), a = this._getLabelSize(r),
                o = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1;
            return o > 0 ? o : 1
        }

        getDataTimestamps() {
            let t, e, n = this._cache.data || [];
            if (n.length) return n;
            const i = this.getMatchingVisibleMetas();
            if (this._normalized && i.length) return this._cache.data = i[0].controller.getAllParsedValues(this);
            for (t = 0, e = i.length; t < e; ++t) n = n.concat(i[t].controller.getAllParsedValues(this));
            return this._cache.data = this.normalize(n)
        }

        getLabelTimestamps() {
            const t = this._cache.labels || [];
            let e, n;
            if (t.length) return t;
            const i = this.getLabels();
            for (e = 0, n = i.length; e < n; ++e) t.push(Ys(this, i[e]));
            return this._cache.labels = this._normalized ? t : this.normalize(t)
        }

        normalize(t) {
            return Nn(t.sort(Qs))
        }
    }

    function Js(t, e, n) {
        let i, r, a, o, s = 0, l = t.length - 1;
        n ? (e >= t[s].pos && e <= t[l].pos && ({lo: s, hi: l} = bn(t, "pos", e)), ({pos: i, time: a} = t[s]), ({
            pos: r,
            time: o
        } = t[l])) : (e >= t[s].time && e <= t[l].time && ({lo: s, hi: l} = bn(t, "time", e)), ({
            time: i,
            pos: a
        } = t[s]), ({time: r, pos: o} = t[l]));
        const c = r - i;
        return c ? a + (o - a) * (e - i) / c : a
    }

    var Xs = Object.freeze({
        __proto__: null,
        CategoryScale: class extends Ia {
            static id = "category";
            static defaults = {ticks: {callback: Ds}};

            constructor(t) {
                super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = []
            }

            init(t) {
                const e = this._addedLabels;
                if (e.length) {
                    const t = this.getLabels();
                    for (const {index: n, label: i} of e) t[n] === i && t.splice(n, 1);
                    this._addedLabels = []
                }
                super.init(t)
            }

            parse(t, e) {
                if (ke(t)) return null;
                const n = this.getLabels();
                return ((t, e) => null === t ? null : mn(Math.round(t), 0, e))(e = isFinite(e) && n[e] === t ? e : function (t, e, n, i) {
                    const r = t.indexOf(e);
                    return -1 === r ? ((t, e, n, i) => ("string" == typeof e ? (n = t.push(e) - 1, i.unshift({
                        index: n,
                        label: e
                    })) : isNaN(e) && (n = null), n))(t, e, n, i) : r !== t.lastIndexOf(e) ? n : r
                }(n, t, Ce(e, t), this._addedLabels), n.length - 1)
            }

            determineDataLimits() {
                const {minDefined: t, maxDefined: e} = this.getUserBounds();
                let {min: n, max: i} = this.getMinMax(!0);
                "ticks" === this.options.bounds && (t || (n = 0), e || (i = this.getLabels().length - 1)), this.min = n, this.max = i
            }

            buildTicks() {
                const t = this.min, e = this.max, n = this.options.offset, i = [];
                let r = this.getLabels();
                r = 0 === t && e === r.length - 1 ? r : r.slice(t, e + 1), this._valueRange = Math.max(r.length - (n ? 0 : 1), 1), this._startValue = this.min - (n ? .5 : 0);
                for (let n = t; n <= e; n++) i.push({value: n});
                return i
            }

            getLabelForValue(t) {
                return Ds.call(this, t)
            }

            configure() {
                super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
            }

            getPixelForValue(t) {
                return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
            }

            getPixelForTick(t) {
                const e = this.ticks;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
            }

            getValueForPixel(t) {
                return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
            }

            getBasePixel() {
                return this.bottom
            }
        },
        LinearScale: Ss,
        LogarithmicScale: js,
        RadialLinearScale: Fs,
        TimeScale: Gs,
        TimeSeriesScale: class extends Gs {
            static id = "timeseries";
            static defaults = Gs.defaults;

            constructor(t) {
                super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0
            }

            initOffsets() {
                const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
                this._minPos = Js(e, this.min), this._tableRange = Js(e, this.max) - this._minPos, super.initOffsets(t)
            }

            buildLookupTable(t) {
                const {min: e, max: n} = this, i = [], r = [];
                let a, o, s, l, c;
                for (a = 0, o = t.length; a < o; ++a) l = t[a], l >= e && l <= n && i.push(l);
                if (i.length < 2) return [{time: e, pos: 0}, {time: n, pos: 1}];
                for (a = 0, o = i.length; a < o; ++a) c = i[a + 1], s = i[a - 1], l = i[a], Math.round((c + s) / 2) !== l && r.push({
                    time: l,
                    pos: a / (o - 1)
                });
                return r
            }

            _generate() {
                const t = this.min, e = this.max;
                let n = super.getDataTimestamps();
                return n.includes(t) && n.length || n.splice(0, 0, t), n.includes(e) && 1 !== n.length || n.push(e), n.sort(((t, e) => t - e))
            }

            _getTimestampsForTable() {
                let t = this._cache.all || [];
                if (t.length) return t;
                const e = this.getDataTimestamps(), n = this.getLabelTimestamps();
                return t = e.length && n.length ? this.normalize(e.concat(n)) : e.length ? e : n, t = this._cache.all = t, t
            }

            getDecimalForValue(t) {
                return (Js(this._table, t) - this._minPos) / this._tableRange
            }

            getValueForPixel(t) {
                const e = this._offsets, n = this.getDecimalForPixel(t) / e.factor - e.end;
                return Js(this._table, n * this._tableRange + this._minPos, !0)
            }
        }
    });
    const $s = [Vr, wo, Ns, Xs];

    function Ks(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    var qs;
    co.register.apply(co, function (t) {
        if (Array.isArray(t)) return Ks(t)
    }(qs = $s) || function (t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(qs) || function (t, e) {
        if (t) {
            if ("string" == typeof t) return Ks(t, e);
            var n = {}.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ks(t, e) : void 0
        }
    }(qs) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }());
    const tl = function () {
        var t = (0, a.useRef)(null), e = (0, a.useRef)(null);
        return (0, a.useEffect)((function () {
            var n = t.current, i = null == n ? void 0 : n.getContext("2d");
            if (n && i) {
                var r = window.devicePixelRatio || 1;
                n.width = n.offsetWidth * r, n.height = n.offsetHeight * r, i.scale(r, r), e.current && e.current.destroy(), e.current = new co(i, {
                    type: "bar",
                    data: {
                        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
                        datasets: [{
                            label: "Personal Expenses",
                            data: [500, 1e3, 750, 900, 1200, 700, 850],
                            backgroundColor: "#64CFF6",
                            borderColor: "#64CFF6",
                            borderWidth: 1
                        }, {
                            label: "Team Expenses",
                            data: [5e3, 1e4, 7500, 9e3, 12e3, 7e3, 8500],
                            backgroundColor: "#6359E9",
                            borderColor: "#6359E9",
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: !0,
                        scales: {
                            x: {beginAtZero: !0, title: {display: !0, text: ""}},
                            y: {beginAtZero: !0, title: {display: !0, text: ""}}
                        }
                    }
                })
            }
            return function () {
                e.current && e.current.destroy()
            }
        }), []), a.createElement("canvas", {ref: t, style: {width: "660px", height: "400px"}})
    }, el = function () {
        return a.createElement("div", {className: Zt.analyticsCardContainer}, a.createElement("h2", null, "Analytics"), a.createElement(tl, null))
    };
    var nl = r(865), il = {};
    il.styleTagTransform = b(), il.setAttributes = g(), il.insert = f().bind(null, "head"), il.domAPI = d(), il.insertStyleElement = M(), c()(nl.A, il);
    const rl = nl.A && nl.A.locals ? nl.A.locals : void 0, al = function (t) {
            var e = t.amount, n = t.text, i = t.imgUrl;
            return a.createElement(a.Fragment, null, a.createElement("div", {className: rl.expenseDisplay}, a.createElement("img", {
                src: i,
                alt: "iconUp"
            }), a.createElement("span", {className: rl.amount}, "$", e), a.createElement("span", {className: rl.text}, n)))
        },
        ol = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjUyOTMgNy44NDk2MVY0LjUwNzQ2QzE1LjUyOTMgMy43MTMwOSAxNS41MjkzIDMuMzE1OSAxNS4zNjIgMy4wNzE4MUMxNS4yMTU4IDIuODU4NTUgMTQuOTg5MyAyLjcxMzY3IDE0LjczNDQgMi42NzAzQzE0LjQ0MjcgMi42MjA2NSAxNC4wODIxIDIuNzg3MSAxMy4zNjA4IDMuMTE5OTlMNC44ODg3OCA3LjAzMDE1QzQuMjQ1NTMgNy4zMjcwMyAzLjkyMzkxIDcuNDc1NDcgMy42ODgzNCA3LjcwNTdDMy40ODAwOSA3LjkwOTIyIDMuMzIxMTIgOC4xNTc2NyAzLjIyMzYgOC40MzIwNUMzLjExMzI4IDguNzQyNDEgMy4xMTMyOCA5LjA5NjY0IDMuMTEzMjggOS44MDUxVjE0LjUzNTJNMTYuMDA2OCAxNC4wNTc2SDE2LjAxNjRNMy4xMTMyOCAxMC45MDU5TDMuMTEzMjggMTcuMjA5NEMzLjExMzI4IDE4LjI3OTIgMy4xMTMyOCAxOC44MTQxIDMuMzIxNDggMTkuMjIyN0MzLjUwNDYxIDE5LjU4MjEgMy43OTY4MyAxOS44NzQzIDQuMTU2MjQgMjAuMDU3NEM0LjU2NDg1IDIwLjI2NTYgNS4wOTk3NCAyMC4yNjU2IDYuMTY5NTMgMjAuMjY1NkgxNy4yNDg0QzE4LjMxODIgMjAuMjY1NiAxOC44NTMxIDIwLjI2NTYgMTkuMjYxNyAyMC4wNTc0QzE5LjYyMTEgMTkuODc0MyAxOS45MTM0IDE5LjU4MjEgMjAuMDk2NSAxOS4yMjI3QzIwLjMwNDcgMTguODE0MSAyMC4zMDQ3IDE4LjI3OTIgMjAuMzA0NyAxNy4yMDk0VjEwLjkwNTlDMjAuMzA0NyA5LjgzNjA3IDIwLjMwNDcgOS4zMDExOCAyMC4wOTY1IDguODkyNTdDMTkuOTEzNCA4LjUzMzE2IDE5LjYyMTEgOC4yNDA5NCAxOS4yNjE3IDguMDU3ODFDMTguODUzMSA3Ljg0OTYxIDE4LjMxODIgNy44NDk2MSAxNy4yNDg0IDcuODQ5NjFMNi4xNjk1MyA3Ljg0OTYxQzUuMDk5NzQgNy44NDk2MSA0LjU2NDg1IDcuODQ5NjEgNC4xNTYyNCA4LjA1NzhDMy43OTY4MyA4LjI0MDk0IDMuNTA0NjEgOC41MzMxNSAzLjMyMTQ4IDguODkyNTdDMy4xMTMyOCA5LjMwMTE4IDMuMTEzMjggOS44MzYwNyAzLjExMzI4IDEwLjkwNTlaTTE2LjQ4NDQgMTQuMDU3NkMxNi40ODQ0IDE0LjMyMTQgMTYuMjcwNiAxNC41MzUyIDE2LjAwNjggMTQuNTM1MkMxNS43NDMxIDE0LjUzNTIgMTUuNTI5MyAxNC4zMjE0IDE1LjUyOTMgMTQuMDU3NkMxNS41MjkzIDEzLjc5MzkgMTUuNzQzMSAxMy41ODAxIDE2LjAwNjggMTMuNTgwMUMxNi4yNzA2IDEzLjU4MDEgMTYuNDg0NCAxMy43OTM5IDE2LjQ4NDQgMTQuMDU3NloiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS45MTAxNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
        sl = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMiIgaWQ9IkxheWVyXzIiPjxwYXRoIGQ9Ik0xOSwyNmExLDEsMCwwLDEtLjcxLS4yOSwxLDEsMCwwLDEsMC0xLjQyTDI2LjU5LDE2bC04LjMtOC4yOWExLDEsMCwwLDEsMS40Mi0xLjQybDksOWExLDEsMCwwLDEsMCwxLjQybC05LDlBMSwxLDAsMCwxLDE5LDI2WiIvPjxwYXRoIGQ9Ik0yOCwxN0g0YTEsMSwwLDAsMSwwLTJIMjhhMSwxLDAsMCwxLDAsMloiLz48L2c+PGcgaWQ9ImZyYW1lIj48cmVjdCBjbGFzcz0iY2xzLTEiIGhlaWdodD0iMzIiIHdpZHRoPSIzMiIvPjwvZz48L3N2Zz4=";
    var ll = r(719), cl = {};
    cl.styleTagTransform = b(), cl.setAttributes = g(), cl.insert = f().bind(null, "head"), cl.domAPI = d(), cl.insertStyleElement = M(), c()(ll.A, cl);
    const ul = ll.A && ll.A.locals ? ll.A.locals : void 0;

    function dl(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
                var i, r, a, o, s = [], l = !0, c = !1;
                try {
                    if (a = (n = n.call(t)).next, 0 === e) {
                        if (Object(n) !== n) return;
                        l = !1
                    } else for (; !(l = (i = a.call(n)).done) && (s.push(i.value), s.length !== e); l = !0) ;
                } catch (t) {
                    c = !0, r = t
                } finally {
                    try {
                        if (!l && null != n.return && (o = n.return(), Object(o) !== o)) return
                    } finally {
                        if (c) throw r
                    }
                }
                return s
            }
        }(t, e) || function (t, e) {
            if (t) {
                if ("string" == typeof t) return hl(t, e);
                var n = {}.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hl(t, e) : void 0
            }
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function hl(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    var fl = [{name: "Transaction 1", date: "2023-01-01", amount: 100, status: "Purchase"}, {
        name: "Transaction 2",
        date: "2023-01-05",
        amount: 200,
        status: "Return"
    }, {name: "Transaction 1", date: "2023-01-01", amount: 100, status: "Purchase"}, {
        name: "Adobe After Effect",
        date: "2023-01-05",
        amount: 200,
        status: "Return"
    }, {name: "Adobe After Effect", date: "2023-01-01", amount: 100, status: "Purchase"}, {
        name: "Adobe After Effect",
        date: "2023-01-05",
        amount: 200,
        status: "Return"
    }];
    const pl = function () {
        var t = dl((0, a.useState)(""), 2), e = t[0], n = t[1], i = dl((0, a.useState)(""), 2), r = i[0], o = i[1],
            s = dl((0, a.useState)([]), 2), l = s[0], c = s[1];
        return a.useEffect((function () {
            e.length >= 3 ? c(fl.filter((function (t) {
                return t.name.toLowerCase().includes(e.toLowerCase())
            }))) : c(fl)
        }), [e]), a.createElement("div", {className: ul.transactionContainer}, a.createElement("div", {className: ul.filterContainer}, a.createElement("h2", null, "Transactions"), a.createElement("input", {
            type: "text",
            placeholder: "Search...",
            value: e,
            onChange: function (t) {
                return n(t.target.value)
            },
            className: ul.searchInput
        }), a.createElement("input", {
            type: "date", value: r, onChange: function (t) {
                return o(t.target.value)
            }, className: ul.dateInput
        })), a.createElement("div", {className: ul.transactionList}, a.createElement("div", {className: ul.transactionHeader}, a.createElement("span", null, "Name"), a.createElement("span", null, "Date"), a.createElement("span", null, "Amount"), a.createElement("span", null, "Status")), 0 === l.length ? a.createElement("div", null, "No transactions found") : l.map((function (t, e) {
            return a.createElement("div", {
                key: e,
                className: ul.transactionItem
            }, a.createElement("span", {className: ul.transactionName}, t.name), a.createElement("span", {className: ul.transactionDate}, (n = t.date, new Date(n).toLocaleDateString("en-US", {
                weekday: "short",
                day: "2-digit",
                month: "short",
                year: "numeric"
            }))), a.createElement("span", {className: ul.transactionAmount}, "$", t.amount), a.createElement("span", {className: ul.transactionStatus}, t.status));
            var n
        }))))
    };
    var gl = r(385), ml = {};
    ml.styleTagTransform = b(), ml.setAttributes = g(), ml.insert = f().bind(null, "head"), ml.domAPI = d(), ml.insertStyleElement = M(), c()(gl.A, ml);
    const Ml = gl.A && gl.A.locals ? gl.A.locals : void 0;
    var yl = r(801), bl = {};
    bl.styleTagTransform = b(), bl.setAttributes = g(), bl.insert = f().bind(null, "head"), bl.domAPI = d(), bl.insertStyleElement = M(), c()(yl.A, bl);
    const xl = yl.A && yl.A.locals ? yl.A.locals : void 0, Al = function (t) {
        var e = t.balance, n = t.cardNumber, i = t.issueDate, r = t.onManageCards, o = t.onTransfer;
        return a.createElement("div", {className: xl.cardContainer}, a.createElement("h2", null, "My Card"), a.createElement("h3", null, "Total Card Balance"), a.createElement("h3", null, "$", e.toFixed(3)), a.createElement("div", {className: xl.cardInfo}, a.createElement("h4", {className: xl.balance}, "Current Balance: $", e.toFixed(3)), a.createElement("img", {
            src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDciIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA0NyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjM3MDcgMi45NzQxOEgyOS45NjI5VjI0LjgzNjdIMTcuMzcwN1YyLjk3NDE4WiIgZmlsbD0iI0ZGNUYwMCIvPgo8cGF0aCBkPSJNOC44NTYyIDM1Ljg0MDlWMzMuNTIzNEM4Ljg1NjIgMzIuNjM0OCA4LjI5NjQzIDMyLjA1NTYgNy4zMzY5NSAzMi4wNTU2QzYuODU3MzEgMzIuMDU1NiA2LjMzNzYgMzIuMjEwMSA1Ljk3Nzc3IDMyLjcxMjNDNS42OTgwNiAzMi4yODczIDUuMjk4MzYgMzIuMDU1NiA0LjY5ODcxIDMyLjA1NTZDNC4yOTg4MiAzMi4wNTU2IDMuODk5MjkgMzIuMTcxNCAzLjU3OTM0IDMyLjU5NjNWMzIuMTMyOEgyLjczOTg3VjM1Ljg0MDlIMy41NzkzNFYzMy43OTM3QzMuNTc5MzQgMzMuMTM3MiAzLjkzOTE3IDMyLjgyOCA0LjQ5ODk0IDMyLjgyOEM1LjA1ODM1IDMyLjgyOCA1LjMzODQyIDMzLjE3NTcgNS4zMzg0MiAzMy43OTM3VjM1Ljg0MDlINi4xNzc4OVYzMy43OTM3QzYuMTc3ODkgMzMuMTM3MiA2LjU3NzQyIDMyLjgyOCA3LjA5NzEzIDMyLjgyOEM3LjY1NjkgMzIuODI4IDcuOTM2NjEgMzMuMTc1NyA3LjkzNjYxIDMzLjc5MzdWMzUuODQwOUg4Ljg1NjJaTTIxLjI4ODMgMzIuMTMyOEgxOS45MjkzVjMxLjAxMjdIMTkuMDg5OFYzMi4xMzI4SDE4LjMzMDNWMzIuODY2NkgxOS4wODk2VjM0LjU2NjNDMTkuMDg5NiAzNS40MTYyIDE5LjQ0OTQgMzUuOTE4MiAyMC40MDg5IDM1LjkxODJDMjAuNzY4NyAzNS45MTgyIDIxLjE2ODMgMzUuODAyNCAyMS40NDgzIDM1LjY0NzlMMjEuMjA4MyAzNC45NTI1QzIwLjk2ODUgMzUuMTA3IDIwLjY4ODggMzUuMTQ1NyAyMC40ODg5IDM1LjE0NTdDMjAuMDg5MiAzNS4xNDU3IDE5LjkyOTMgMzQuOTE0IDE5LjkyOTMgMzQuNTI3NlYzMi44NjY2SDIxLjI4ODNWMzIuMTMyOFpNMjguNDA0IDMyLjA1NTRDMjcuOTI0MyAzMi4wNTU0IDI3LjYwNDYgMzIuMjg3MyAyNy40MDQ2IDMyLjU5NjNWMzIuMTMyOEgyNi41NjUxVjM1Ljg0MDlIMjcuNDA0NlYzMy43NTUxQzI3LjQwNDYgMzMuMTM3MiAyNy42ODQzIDMyLjc4OTUgMjguMjA0IDMyLjc4OTVDMjguMzYzOSAzMi43ODk1IDI4LjU2MzkgMzIuODI4MiAyOC43MjM3IDMyLjg2NjhMMjguOTYzNiAzMi4wOTQzQzI4LjgwMzcgMzIuMDU1NiAyOC41NjM5IDMyLjA1NTYgMjguNDA0IDMyLjA1NTZWMzIuMDU1NFpNMTcuNjUwNyAzMi40NDE4QzE3LjI1MDggMzIuMTcxNCAxNi42OTEyIDMyLjA1NTYgMTYuMDkxNSAzMi4wNTU2QzE1LjEzMjIgMzIuMDU1NiAxNC40OTI3IDMyLjUxOTEgMTQuNDkyNyAzMy4yNTNDMTQuNDkyNyAzMy44NzExIDE0Ljk3MjQgMzQuMjE4NiAxNS44MTE4IDM0LjMzNDZMMTYuMjExNSAzNC4zNzMzQzE2LjY1MTMgMzQuNDUwMyAxNi44OTExIDM0LjU2NjMgMTYuODkxMSAzNC43NTk1QzE2Ljg5MTEgMzUuMDI5OCAxNi41NzE0IDM1LjIyMyAxNi4wMTE2IDM1LjIyM0MxNS40NTIgMzUuMjIzIDE1LjAxMjIgMzUuMDI5OCAxNC43MzI0IDM0LjgzNjdMMTQuMzMyNiAzNS40NTQ3QzE0Ljc3MjQgMzUuNzYzNyAxNS4zNzIxIDM1LjkxODIgMTUuOTcxNSAzNS45MTgyQzE3LjA5MDkgMzUuOTE4MiAxNy43MzA2IDM1LjQxNjIgMTcuNzMwNiAzNC43MjA4QzE3LjczMDYgMzQuMDY0MSAxNy4yMTA5IDMzLjcxNjQgMTYuNDExMyAzMy42MDA3TDE2LjAxMTYgMzMuNTYyQzE1LjY1MTggMzMuNTIzMiAxNS4zNzIxIDMzLjQ0NjIgMTUuMzcyMSAzMy4yMTQ0QzE1LjM3MjEgMzIuOTQ0IDE1LjY1MTggMzIuNzg5NSAxNi4wOTE1IDMyLjc4OTVDMTYuNTcxNCAzMi43ODk1IDE3LjA1MSAzMi45ODI1IDE3LjI5MDggMzMuMDk4NUwxNy42NTA3IDMyLjQ0MThaTTM5Ljk1NjkgMzIuMDU1NkMzOS40NzcgMzIuMDU1NiAzOS4xNTczIDMyLjI4NzMgMzguOTU3MyAzMi41OTYzVjMyLjEzMjhIMzguMTE3OVYzNS44NDA5SDM4Ljk1NzNWMzMuNzU1MUMzOC45NTczIDMzLjEzNzIgMzkuMjM3MiAzMi43ODk1IDM5Ljc1NjcgMzIuNzg5NUMzOS45MTY4IDMyLjc4OTUgNDAuMTE2NyAzMi44MjgyIDQwLjI3NjYgMzIuODY2OEw0MC41MTY1IDMyLjA5NDNDNDAuMzU2NiAzMi4wNTU2IDQwLjExNjggMzIuMDU1NiAzOS45NTY5IDMyLjA1NTZaTTI5LjI0MzQgMzMuOTg2OUMyOS4yNDM0IDM1LjEwNyAzMC4wNDI5IDM1LjkxODIgMzEuMjgyMiAzNS45MTgyQzMxLjg0MTggMzUuOTE4MiAzMi4yNDE1IDM1LjgwMjQgMzIuNjQxMiAzNS40OTM0TDMyLjI0MTUgMzQuODM2N0MzMS45MjE4IDM1LjA2ODUgMzEuNjAyIDM1LjE4NDMgMzEuMjQyMiAzNS4xODQzQzMwLjU2MjYgMzUuMTg0MyAzMC4wODI5IDM0LjcyMDggMzAuMDgyOSAzMy45ODY5QzMwLjA4MjkgMzMuMjkxNyAzMC41NjI2IDMyLjgyOCAzMS4yNDIyIDMyLjc4OTVDMzEuNjAyIDMyLjc4OTUgMzEuOTIxOCAzMi45MDUzIDMyLjI0MTUgMzMuMTM3MkwzMi42NDEyIDMyLjQ4MDVDMzIuMjQxNSAzMi4xNzE0IDMxLjg0MTggMzIuMDU1NiAzMS4yODIyIDMyLjA1NTZDMzAuMDQyOSAzMi4wNTU2IDI5LjI0MzQgMzIuODY2OCAyOS4yNDM0IDMzLjk4NjlaTTM2Ljk5ODcgMzMuOTg2OVYzMi4xMzI4SDM2LjE1OTJWMzIuNTk2M0MzNS44NzkzIDMyLjI0ODggMzUuNDc5NiAzMi4wNTU2IDM0Ljk1OTkgMzIuMDU1NkMzMy44ODA2IDMyLjA1NTYgMzMuMDQxMSAzMi44NjY4IDMzLjA0MTEgMzMuOTg2OUMzMy4wNDExIDM1LjEwNyAzMy44ODA2IDM1LjkxODIgMzQuOTU5OSAzNS45MTgyQzM1LjUxOTUgMzUuOTE4MiAzNS45MTk0IDM1LjcyNTEgMzYuMTU5MiAzNS4zNzc0VjM1Ljg0MDlIMzYuOTk4N1YzMy45ODY5Wk0zMy45MjA1IDMzLjk4NjlDMzMuOTIwNSAzMy4zMzAyIDM0LjM2MDIgMzIuNzg5NSAzNS4wNzk3IDMyLjc4OTVDMzUuNzU5MyAzMi43ODk1IDM2LjIzOTEgMzMuMjkxNyAzNi4yMzkxIDMzLjk4NjlDMzYuMjM5MSAzNC42NDM1IDM1Ljc1OTMgMzUuMTg0MyAzNS4wNzk3IDM1LjE4NDNDMzQuMzYwMiAzNS4xNDU1IDMzLjkyMDUgMzQuNjQzNSAzMy45MjA1IDMzLjk4NjlaTTIzLjg4NjggMzIuMDU1NkMyMi43Njc1IDMyLjA1NTYgMjEuOTY3OSAzMi44MjggMjEuOTY3OSAzMy45ODY5QzIxLjk2NzkgMzUuMTQ1NyAyMi43NjczIDM1LjkxODIgMjMuOTI2NyAzNS45MTgyQzI0LjQ4NjMgMzUuOTE4MiAyNS4wNDYxIDM1Ljc2MzcgMjUuNDg1OCAzNS40MTYyTDI1LjA4NTkgMzQuODM2N0MyNC43NjYyIDM1LjA2ODUgMjQuMzY2NSAzNS4yMjMgMjMuOTY2OCAzNS4yMjNDMjMuNDQ3MSAzNS4yMjMgMjIuOTI3MyAzNC45OTEyIDIyLjgwNzMgMzQuMzM0NEgyNS42NDU3VjM0LjAyNTZDMjUuNjg1OCAzMi44MjggMjQuOTY2MSAzMi4wNTU2IDIzLjg4NjYgMzIuMDU1NkgyMy44ODY4Wk0yMy44ODY4IDMyLjc1MDhDMjQuNDA2NCAzMi43NTA4IDI0Ljc2NjQgMzMuMDYgMjQuODQ2MSAzMy42Mzk0SDIyLjg0NzRDMjIuOTI3MyAzMy4xMzcyIDIzLjI4NzIgMzIuNzUwOCAyMy44ODY4IDMyLjc1MDhaTTQ0LjcxMzggMzMuOTg2OVYzMC42NjVINDMuODc0NFYzMi41OTYzQzQzLjU5NDUgMzIuMjQ4OCA0My4xOTQ4IDMyLjA1NTYgNDIuNjc1MSAzMi4wNTU2QzQxLjU5NTggMzIuMDU1NiA0MC43NTYzIDMyLjg2NjggNDAuNzU2MyAzMy45ODY5QzQwLjc1NjMgMzUuMTA3IDQxLjU5NTggMzUuOTE4MiA0Mi42NzUxIDM1LjkxODJDNDMuMjM0OCAzNS45MTgyIDQzLjYzNDUgMzUuNzI1MSA0My44NzQ0IDM1LjM3NzRWMzUuODQwOUg0NC43MTM4VjMzLjk4NjlaTTQxLjYzNTggMzMuOTg2OUM0MS42MzU4IDMzLjMzMDIgNDIuMDc1NCAzMi43ODk1IDQyLjc5NTEgMzIuNzg5NUM0My40NzQ3IDMyLjc4OTUgNDMuOTU0MyAzMy4yOTE3IDQzLjk1NDMgMzMuOTg2OUM0My45NTQzIDM0LjY0MzUgNDMuNDc0NyAzNS4xODQzIDQyLjc5NTEgMzUuMTg0M0M0Mi4wNzU0IDM1LjE0NTUgNDEuNjM1OCAzNC42NDM1IDQxLjYzNTggMzMuOTg2OVpNMTMuNTczMSAzMy45ODY5VjMyLjEzMjhIMTIuNzMzNlYzMi41OTYzQzEyLjQ1MzcgMzIuMjQ4OCAxMi4wNTQgMzIuMDU1NiAxMS41MzQzIDMyLjA1NTZDMTAuNDU1IDMyLjA1NTYgOS42MTU1NiAzMi44NjY4IDkuNjE1NTYgMzMuOTg2OUM5LjYxNTU2IDM1LjEwNyAxMC40NTUgMzUuOTE4MiAxMS41MzQzIDM1LjkxODJDMTIuMDk0MSAzNS45MTgyIDEyLjQ5MzggMzUuNzI1MSAxMi43MzM2IDM1LjM3NzRWMzUuODQwOUgxMy41NzMxVjMzLjk4NjlaTTEwLjQ1NSAzMy45ODY5QzEwLjQ1NSAzMy4zMzAyIDEwLjg5NDggMzIuNzg5NSAxMS42MTQzIDMyLjc4OTVDMTIuMjkzOSAzMi43ODk1IDEyLjc3MzcgMzMuMjkxNyAxMi43NzM3IDMzLjk4NjlDMTIuNzczNyAzNC42NDM1IDEyLjI5MzkgMzUuMTg0MyAxMS42MTQzIDM1LjE4NDNDMTAuODk0OCAzNS4xNDU1IDEwLjQ1NSAzNC42NDM1IDEwLjQ1NSAzMy45ODY5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE4LjE3IDEzLjkwNTVDMTguMTcgOS40NjM1MyAyMC4zMjg2IDUuNTIzNTYgMjMuNjQ2NSAyLjk3NDE2QzIxLjIwODIgMS4xMjAxMyAxOC4xMzAyIDAgMTQuNzcyMyAwQzYuODE2OSAwIDAuMzgwOTgxIDYuMjE4NzYgMC4zODA5ODEgMTMuOTA1NUMwLjM4MDk4MSAyMS41OTIxIDYuODE2OSAyNy44MTEgMTQuNzcyMSAyNy44MTFDMTguMTMgMjcuODExIDIxLjIwOCAyNi42OTA5IDIzLjY0NjUgMjQuODM2N0MyMC4zMjg2IDIyLjMyNiAxOC4xNyAxOC4zNDc1IDE4LjE3IDEzLjkwNTVaIiBmaWxsPSIjRUIwMDFCIi8+CjxwYXRoIGQ9Ik00Ni45NTE5IDEzLjkwNTVDNDYuOTUxOSAyMS41OTIxIDQwLjUxNiAyNy44MTEgMzIuNTYwOCAyNy44MTFDMjkuMjAyOSAyNy44MTEgMjYuMTI0OSAyNi42OTA5IDIzLjY4NjQgMjQuODM2N0MyNy4wNDQzIDIyLjI4NzQgMjkuMTYzIDE4LjM0NzUgMjkuMTYzIDEzLjkwNTVDMjkuMTYzIDkuNDYzNTMgMjcuMDA0MiA1LjUyMzU2IDIzLjY4NjQgMi45NzQxNkMyNi4xMjQ3IDEuMTIwMTMgMjkuMjAyOSAwIDMyLjU2MDggMEM0MC41MTYgMCA0Ni45NTIxIDYuMjU3NDcgNDYuOTUyMSAxMy45MDU1SDQ2Ljk1MTlaIiBmaWxsPSIjRjc5RTFCIi8+Cjwvc3ZnPgo=",
            alt: "mastercard"
        }), a.createElement("p", {className: xl.cardNumber}, n), a.createElement("p", {className: xl.issueDate}, i)), a.createElement("div", {className: xl.buttonsContainer}, a.createElement("button", {
            className: xl.manageButton,
            onClick: r
        }, "Manage Cards"), a.createElement("button", {className: xl.transferButton, onClick: o}, "Transfer")))
    };
    var vl = r(356), Nl = {};
    Nl.styleTagTransform = b(), Nl.setAttributes = g(), Nl.insert = f().bind(null, "head"), Nl.domAPI = d(), Nl.insertStyleElement = M(), c()(vl.A, Nl);
    const Dl = vl.A && vl.A.locals ? vl.A.locals : void 0, kl = function (t) {
        var e = t.text, n = void 0 === e ? "View Full Report" : e;
        return a.createElement("div", {className: Dl.fullReportContainer}, a.createElement("button", {
            className: Dl.fullReportBtn,
            onClick: function () {
                console.log("Click")
            }
        }, n, a.createElement("img", {src: sl, alt: "arrowIcon"})))
    };
    var Tl = r(159), Sl = {};
    Sl.styleTagTransform = b(), Sl.setAttributes = g(), Sl.insert = f().bind(null, "head"), Sl.domAPI = d(), Sl.insertStyleElement = M(), c()(Tl.A, Sl);
    const wl = Tl.A && Tl.A.locals ? Tl.A.locals : void 0, El = "label";

    function Cl(t, e) {
        "function" == typeof t ? t(e) : t && (t.current = e)
    }

    function zl(t, e) {
        t.labels = e
    }

    function jl(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : El;
        const i = [];
        t.datasets = e.map((e => {
            const r = t.datasets.find((t => t[n] === e[n]));
            return r && e.data && !i.includes(r) ? (i.push(r), Object.assign(r, e), r) : {...e}
        }))
    }

    function Il(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : El;
        const n = {labels: [], datasets: []};
        return zl(n, t.labels), jl(n, t.datasets, e), n
    }

    function _l(t, e) {
        const {
            height: n = 150,
            width: i = 300,
            redraw: r = !1,
            datasetIdKey: o,
            type: s,
            data: l,
            options: c,
            plugins: u = [],
            fallbackContent: d,
            updateMode: h,
            ...f
        } = t, p = (0, a.useRef)(null), g = (0, a.useRef)(), m = () => {
            p.current && (g.current = new co(p.current, {
                type: s,
                data: Il(l, o),
                options: c && {...c},
                plugins: u
            }), Cl(e, g.current))
        }, M = () => {
            Cl(e, null), g.current && (g.current.destroy(), g.current = null)
        };
        return (0, a.useEffect)((() => {
            !r && g.current && c && function (t, e) {
                const n = t.options;
                n && e && Object.assign(n, e)
            }(g.current, c)
        }), [r, c]), (0, a.useEffect)((() => {
            !r && g.current && zl(g.current.config.data, l.labels)
        }), [r, l.labels]), (0, a.useEffect)((() => {
            !r && g.current && l.datasets && jl(g.current.config.data, l.datasets, o)
        }), [r, l.datasets]), (0, a.useEffect)((() => {
            g.current && (r ? (M(), setTimeout(m)) : g.current.update(h))
        }), [r, c, l.labels, l.datasets, h]), (0, a.useEffect)((() => {
            g.current && (M(), setTimeout(m))
        }), [s]), (0, a.useEffect)((() => (m(), () => M())), []), a.createElement("canvas", Object.assign({
            ref: p,
            role: "img",
            height: n,
            width: i
        }, f), d)
    }

    const Ol = (0, a.forwardRef)(_l);

    function Ll(t, e) {
        return co.register(e), (0, a.forwardRef)(((e, n) => a.createElement(Ol, Object.assign({}, e, {
            ref: n,
            type: t
        }))))
    }

    const Ul = Ll("doughnut", Ur), Rl = function () {
        return a.createElement("div", {className: wl.categoryContainer}, a.createElement("h2", null, "Activity Category"), a.createElement(Ul, {
            data: {
                labels: ["Red", "Green", "Blue"],
                datasets: [{
                    label: "My Doughnut Chart",
                    data: [300, 50, 100],
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                    hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
                }]
            }, options: {
                plugins: {
                    legend: {position: "top"}, tooltip: {
                        callbacks: {
                            label: function (t) {
                                return "".concat(t.label, ": ").concat(t.raw)
                            }
                        }
                    }
                }
            }
        }), a.createElement(kl, {
            image: sl, onClick: function () {
                console.log("Button clicked!")
            }
        }))
    }, Vl = function () {
        return a.createElement("div", {className: Ml.dashboardContainer}, a.createElement("div", {className: Ml.mainBlock}, a.createElement("h1", null, "Welcome back, Bazil", a.createElement("span", null, a.createElement("img", {
            src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0idXJsKCNwYXR0ZXJuMF8xMTRfNTI4KSIvPgo8ZGVmcz4KPHBhdHRlcm4gaWQ9InBhdHRlcm4wXzExNF81MjgiIHBhdHRlcm5Db250ZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj4KPHVzZSB4bGluazpocmVmPSIjaW1hZ2UwXzExNF81MjgiIHRyYW5zZm9ybT0ic2NhbGUoMC4wMSkiLz4KPC9wYXR0ZXJuPgo8aW1hZ2UgaWQ9ImltYWdlMF8xMTRfNTI4IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHUUFBQUJrQ0FZQUFBQnc0cFZVQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBZ0FFbEVRVlI0bk8yZGU3eGRWWFh2djJPdS9UajdQSEpPRWtnQ0V0NEI0UkI1R0MxcXJXQjVTQlI1cHlpMFJTdlVxbGVsdmJYdC9kamJmRW9mM3MrbmVyVVc3L1Zkdk1yRktCU1FxaFJMVUpGYTVBMkg1QkxlaVJMSTZ5VG51ZGRlYTQ3N3g1eHpQZmJaSnpuaEpJS1k4Zm1zcy9aZXJ6M20vTTN4bkdPdUEvdG9IKzJqZmJTUDl0RSsya2N2WjFMVjZLWG00Y1dRdk5RTTdBMTZZcXYyTTBuL1pDdnVIUUdHeDVKdFp4N1R2VkZFOUtYbWJWZjBpZ05rNVVvMVYvd3g4elp1aXhjMFcyYnVSSnoyajdha2Z5eTJsWWxFSDN0MnNuSHZ5bE1sZWFuNW5JNWVjWUFFVWxYNTN1TmIrK3g0NzhFanNUMXhJdFlEUnB2U1A1RXdPVHllWFAvMzUvWTkrbEx6MklsZXNZQVVhZFVxalg2Ky85alNWaHhkTU5yVVE4WmpuVFBhdEQ5WTlPN2V6NjBVc1M4MWYwWDZ0UUFrMEpXcnRCR1o4VXZIbXZaZDQwMEd4bHA2LytaazhpTjNmSERCNkV2Tlc2QmZLMEFDdmVjckkyOFpqZldmeG1KZE5CYnpWSGR0em1uZis3RHNlS241QWpBdk5RTjdtbFJWMW03YTFQZlRkVnZtcUdySDluMzF2WDAvYkU0bWwweTBkTHdTNldERmpIemxvbFZhKzJYejJvbGUxaEtpRHgxMU9Kb2VCV1liWXhNUHlSczNUT3pxbnFkZTBFV2p6WGpCNWdtellIVENEbXlldE05dkh0NSszNStldVdpcy9kcmYvc2VSWTNzaWUwTlBUV3h2UTY3LzRxVzkveDFlV3RmNFpRbUlEZzMyYWl1K0RuZzdFcGlVWVpTdm92RmZ5NGxQRDA5Mzc5cE4ydmY4dHZpZ0hYRjA1TFlkeVJIYko5TUZ3MlBhdlcxY2IvclU3L1N0YnIvKzRpK1BMZXV0cEovc2JVUmp2YlhvVTM5emJ0Y1BYaXpmb3pjdFdLaVJuR1BUOUNDVXRXTlI3Y1lEei83RitPNDg0MlVKU0hyL2tzOFp3eCs1YjFMZ1VnQ2V3K2c1Y3R4alA5dlpNMVJWUHJONjVLaVI4V2pGOEFUTGhpZlNoZHNuNUY5bGJ1L2ZmV3VGcE1WclAzTGRqbmYwZEZVdTZhdVo1L3RxOFZVZk9tM09sdDNoVjFkVEdXOHQrZ3NzSDdOV2V6VzFxRlhVNmdhUWN3Zk8yM3p2VEorMVZ3SFIxVlJhdFVPdVVESExUVVNmaUhrTW96ZEdyMzN5dXlKMFZBMjYrcFFLODU3YmptaDN6cUtBQkZZRllBeVJDK1M0b1Z0M3hjTkZxelNhTXpGeTZmWkovZmp3dUM0Q3J2M0JSL3ZmVHlscVYvbmI3MDk4dUtmS0FUMVZlZVR5MzJwOGZjWnR2T3VneHNTa1hvZmxuV290bWlwcUhTQTJWVUEzdGtTTzJ2K2N6U016ZWQ1ZU0rcTZpaWl1SC9JZGpGeHRJdDR1Um41TERPOFRrVnZzZlVmZXF3OGNlV0xIRy91ZlcrREFFTWVlK0EwRFJHSGZBK1ptZmVRMUYreUtqMit0a1BUTHZ6L25tdTBUOGljbzZVQkRUbnZmMTBjdkwxOGwyajNSdkthbnhxYmU3cWozT3cvb3EyYmF6amlSejRtUmQySUFJMzR6SUlJWUFXVlJWWG4zVEorMzF3Q0pYM1hJdVNMeU5qR09NUkd2ZWtRUXc0bXEvRVFmUFBMQ0tUZmEzbUV3YVE2RUJ5R0FJbEU0WGtQTU4zWG9wUGZNaEovYlBqcm41djV1ODd0emU4ekdlVDNtekwvNzdzaXh4Zk5YbmpkM3VEdml4ejFWM2Q3YjRMQ1pQTE41NXlIbkkzS1ppR3RmMXRhMlRWWGZOSlBud2Q1MGU0MjhQZ0JSQWlQVFBOSlFsZXYwZ1NQZlc3eE5sdDA3anBpZk9TQjg1MHNFVkVEcUlGMStiNEFvQXZteVBuclNSMmZDMHZYdm4vT2Qvb2IrYzM4WEx3ejBWczlZdVZvcnhmTkgxeHIzZHpmTTVucVUySFhyZE03T25xV0tFU05YVWV4OG1YYS9kTWJkTnRNTGQ1Y2lJdzNIRUI0TWcwZ0VVc0YxTklnUVljeVg5S0ZYZjZpTnJjK1ZWWlVCRTBGVUFWTUQwd1dtQjZnQmthQ1YvNmxEcjE4NUU3NTZiZDgxQXcxWk83Zk81TWtMbW9jV3p5MWJKcTA1cHJLMnUycTNOeFpTM2RsejBuc09PVk1NeDdyQmxtOUZTY0ZJMEFpdjF0VlVkdmE4ck9VenVlakZrQmdkd2xCZ0ZEZlNUUTBxZFVTNi9NZ1hRZVN6K3REZ24yVTNIL2ZJTjhEY1ZiSWg2dG1WQ2tnTlRCMU10d1BIWGZOWCt1Z2JQcTI2YzBkbDVRcUo1M2ViNzgzcnEyd2M2SzMzcTJycGVqUE14cDRvM1Y3cFkzTG5EWXd1Q2UwU1ljcjR5YzQ1Q2VrYTNUWi95VXo2YmE4QllxUjJ2WWcweTE2cjQxcE1vVU9qTHNlR3lDZjBrZU92QWhEQmt0cmZRY3h6bWVvaUlqUDBwdXBVVjlUbDdYc3ZVQVhNUjFqN20xOVd2V2luazFPLzgvcjZ1am5kOXRtQk9sdmIrMkRaTW1sMXZhcXhaWkhJbEVBeWtDcEdSSlpuVW1BSzB0RnVUOFNkVHl0bVJtcHI3MG5Jc3NjMkkvSnBDWWdJSUJZSk5zSFV3RFJBdXIzNnFRRHljWDNraEUrcEluTDhReHVRNmpzUU01SkxpZmRVTlF6SnV0dE13d0VqVlVEZXc5cU4zOVNod1dsVElTS2lQVko5YXM1Q25oY3B4eVFBaTBWMm5oRjRZTWxyZ0xuU0JrSXVMcUc5RGd4Ly9yaVo5TnRleldVWk8vN1hHTzRObGx3MEJiR2dYdldZT2tnREl0K2hwZ1lTWGNtanIvdmZxaGc1OXFmM0llWWlNQzB2UmFDKy84SXo4SUNZYmc5S0Z4QmRnTm52Ty9yZ0dUM1Q4YmIwWUlZUEZObXRLRG9uZTN5NTQwdG1wQ3dsNGJ2aHBaVVFBRm4yaTNGSnFtZURQT05zaUlKTkFjMDlKMU56b0JndktjNkR1b0kxSjEranEwK3B5REgvY1NzaWx5T1JPclVGU09xZUplcU12VlFMTnFYaGJJeEVaMUJ2M2FyM256TFFrYmRaVE9kYXpCSUJCMFF3NE5KcHcwc0pNL2EwOW5xMlY1YXRlVTRpUFF0a0t3Q2FBQWxZNjAxQ0pWZGY1VkYrS1l1U0cvU3BVN3JrbUo5Y2c1aS96RlNYVFVHdDI5eXY0RHkzT2tUZEhwZzZZTjVFZDNTbnJqMzl3RDNhSmlOSEVSQUpPOU1KazJJTUpvZHR2SFhodEJJYjZKZVNmcGVsNjlZQTU0S1pSTVJMU2Vwc2dncWxHTVA0RG8wYWdEbWJDYjFCMTcraElhKys0Mi9CZkQ1ck9Za0hSY2w2QkFOVTNiM1NjTTlUTXdoNnV3NmRkdkFlYTVEcUV2QnNGRlJVWndraGVGeW1FY3ZnTHZ0cVQvQVgzMzM0Nnd6Mno4VkV4d0V0aEorWmlLL0pDVStVc3FzNk5IZ2hsbThpeGlCQkd2eG9OaFhQam9LMklHMkJ4a0FMa0R0STA3TTVkdjhKMXUyNEFaVjNPdTU5VE9KVWxQK1I4Q2NCMndRbXdiWkE5Vm5Vbmk3SC9QdGpzMjJ2ZlhESkRwUStWTjE0VUVWVjBWVEJKUlhMVzJxeHFXS3RmZCtjczU3LzhzNmVQV3NKYWQxNXlLbWllaWRpemtjNENpT0RZdVF5eGR4dUgxanlmWDM0aU1YaFdoa2MramJJSDROeG5SN1VGNVo4T0VVRmw5YVBkS0pUcU5SdTQrbFdINzIxZDRINXFRTWc5ZmNudWFRRXZTMVZCeFlOb0FaaURzWkVQOUxIVGo5aE51M1ZodzliS05DWHRjbi9LVXRKb1RtUXhTUkcyS1duTlh1VkZabXJFR29kWlUwNEU0M3Uxb2VQWHBZZFd2cklaMUEraWVCR3NJMDlPTFowby9QQVBEQ21DNGhPSm81dlp5enBnZWhzSkhvTUltOVB2QXJNVkZmUUpWVnZuK280dDlvc1JNMXFYWFBHRzE5OGcrdEhsSUgzL0laZGRyem9maEcrNzlLd3p3b1FWUVRoZUNFRVFNYkZHV0ZLeVYyMkNKVTc5T0ZqVHM5dVBPN0JQd1grVDZhZU5QWFNVa3kxaXdzQVRkMXRVUmVJT1JHdC9BaTBUcXB2UTJTakM0K0RUUXJQS0lKUzg4WStaQWJNQUNLMzZaclR6bnlSalQ2NkZPem03ZlJTVXNZZ2Q0TUJrZGZzNnZHemw1Q2lhS280TjlSVUlhcmk0Z1FCa1I0dzM5R2gxMXpvR0VlaCtUNlFIMlM2UGtoS2NjUWhRTlYxS0xVUXA3eWFxSG9uVVdTUTJqdkFqTHBtSk9RcXJNaVlqK3lwZVhBTWlPbkdSRGZyMmpPbVpwdDMyZDVvTUg4K1UxVlV1MlJrOXdraTdEOXk2OElGTzN2OHJBRHhrMHozNTd5cHM2Y1NJVlI4aXFQbWYwYnFxUHhmSFRyaE1nQVpISXFKR3hlQlBBTGVlSmRVVndIcEVFVGlEYmlhUTVGb3RZdmlLeXZBSkdpRWs3aWd2a0xuQUVRNUw2YUNUenJWRUxsTzE1eCsyVzQxV3UxZ3JySkt2VkgrbUJ1WHNpMnhPdzhRWnkwaEl2TFZMRDBTVWh1WjJxamthb2NxSUJYVWZFV0hYdnZIQUhMaUhjT2tsZVZnZm82Tm5UZGttNFhuRkZvbkFlQ3FIL0hSWXBRZkF1c1I4NGVJQ1hrVkQ2ck5Pc0ZSeURUN0FSS3luVWErb210UC84ak1HMndHMjFSeStYUDd3UXlZN1A2OUMwajA5Sk5mUTdnL1owQnhZaExtTWJ6S2lXcStRNDJBK2FRK2V2SW5BR1Rwajlaam96TVJ0cUd4c3dNYWwxc2tCVW1SQWlnU0xVSXFQOEpVaDhDc3pCT1Fpa3ZSQkE4dTQ1WXNXMXpXTVovV3RhZDlZbGR0MVh0ZTJ3OXlVQTV5Z1FLclNHNUxDci9namdPNzhMUm1MeUVyU0EzbUVySkkzS3NNNDExWlU4azdRZXArZEJ1QVA5TkhmL056cWhnWlhEMEVjaUZvakRhOXBNUk9Va3BEejBzS2ZuTkdlaTRxdDBKME8ySys2RlA2WU5WTG1zVU5FTTE3eDRRSkwyLzhYUWYvbWE0NTlWTTdUZDkzeDI4cWpBNUtkcVRJWnZnd1JZUUUyTXNxQzBCZXUyNk5FVDBiR0hFLzYxTWo0QU8xZ3JxUXVnL21Ja0QvaUxWditZWU9YVlNUVjk5K084cDdBSFcyeEc4MlJPSkZhZkVnWjNQc3BoK0p2bzlFMTRQYzRneTNBRDY5b2o1L3B2ak1RRWhNaXBPaWRBUjBBa1N1Wk0xYnJ0UDFiMmgwYktpYWQva1c1N3RPZHFSZFZSVjhGQkVHZGVYMC9iN0hVaWR5NGhOM2lURnZCMGJkeUV4Y1k3TWNYcVdRdC9KcXpGUUF2WmhvMDQxNno5bmRjc3dQcmtYNWM4Uzd3eUhvQ3dVcVJVT1pUVlpWOGZQc1BXQnVSTXpYUWU0bVRHNnA0bHppNEJvSGppMmFES090Ylk1UFV3L1BYc0ZvOVhaOTlMZEtFMG82ZFB3Z3lvV2wzb1dkaUZQV00rMEhlbmFjdlAvaE03NTZ0cVQzSGZrV0l2bFhSSHBjNXJXZVoyQk5OcDFXR0xXaHc2T2ZVRS9lSVlmZE1henIzdjVaTlBxUW16ZXBlM1VYcEtLZFpTM3RRRnVJWG9tMUh3VjdwSk9TOEZzdVE2ekpEclQ1QXBBaWxWNGs2aUcvenJwZ1Uyd1RUYTlEN1E4aFdZanFsWkF1eUJ5R2NHMHBmZUwzcGJSSitPeExoRklMaVp6WHMvd1hOM2JxdnowT0NJQStlTlNiRWI2TFJMMHVpK3NUZmFaQ0hyU1ozQnNLZTRtR29Ib21SeTE3am5YM3IwTE1CYzVsRFRGRW9mQkJCWXlDOWZzY0VGQ2JvdllUWU44SGRtSGUwUzNzNUVZMEdVV2lHcVkyMzgzMnFjVkpqKzlvQlV6NDNpcWZMMTdYQm9qRFBNOXJsVUd4MlRFUy9jdWVzNTc3bTA1OXQxZXl2WEw4WXo4R2ZUc3doazN5dkZYSm5jVWIvT0F4VlFBR3dmNllKKzQ3bk9yMlMxSHVkRVBHQjMyMmFLQjlwbGpFVFZibDlnUXdFU0wvRGN4dHdDZ0ltazZTamp5TnhpTklwUWZUT0tDUTBDVGZpL0VnQ1dxTEVWOTdJMTlNeDdpZGlrNXIyUGZlRk81cjF2MElPQS9zWkc2a082d2tDeE5WZUZzQWg1SGFIeFBQUFpxVWMxSFdPZ3dTa0JEMEZWeFpnV3llSlBPYUFFUVF2UlRrRVJ0dnRjbjJKMUdiSUkxRm1LNkZUTnVqS202RVcrZW1hbFlzMGdiYzdPaVhEd2lBTEYxekczQU9tdWFnMkE2Z21JS0JkaVZDaXhDN21xbzlta3JsTEdBajROU0VXQzhwTnBlNGRza0xwRXF5NDVtVDB4MGJER0tJZWhkamF0T1hXeWtPak53aEVPY3hkcTU2blEwdDBkV0hkblU2c1VmZzFnZU9laFhXdmczRGZpaFBvdHdoSnoyK0tUdi82TkxsMk9nR1RMM3VwbXZyM2pzSzFZZ2hzcWVncHdVa0drT2o4eEN6QldQdUFOUG43Z2t4U0Npa3c3dXprRTBUMjVqV3RzZlFaQXd4TlNyOWh5QlJoU20yb0xEWHhMcWZWUkJUbUI3b2FFTkNOc0RiRUd0M2JVUEM1OVFpTmoycFovbW0rOXY3Y3RZU2t0NXp4SCt4Tm4xUzRVdXFmRUpGVmhHWm4rdURSMzFOSHo1dU1ZQWMrL0Izd1Y2RUpqRTI1SzFDc1ljVzlnR1lMT0x1UWV3dFlBL0h5a1dnTFhlNTd4aHl3K3FjQWljOW1rd1NiMzRVRzQ4aWxXNHFjNDlBS3JXMjM1cEs2dTJHaG83dmRKMFdLeWw5MWlDTGl6cDBwN1o5OWx1U2RrN0Z6d3FRK0tlSG5nejZHWlMya2h1dEl2d3V0QjdTaDQ0NUYwQ09lK2c3a0s2QVZremFwRE1vK0pnaTFPOENhQTNoT2lRNUdPVUtINEo3cnlhazNQMm90UllianhDL01JUnRUV0xxQTFRSERrZE1WTzZOOXQ1UmRacFVGVkdMTVFXK3RNaWZyNkNVS005QUJEQk1CUTNCNmhRYzIxRUJvWE1LWlhiWlhtUzVsdFJlbTBlaU1vQ1lHL1NScFI5WFJXVHdnWnNRdVJpU0ZtbVRMSGRWWXJhZ3cwTkt3cjJWNGZPSVhZanFYK1hxd3FzT1AwZWZUbTZsK2NLanFJMko2Z05VNXg3c254RVNqaUdkVXR4N0x6bE5uV1NVcm9NY0ZKT3J5U3gxVTBXbDZyMjFBRXptTVhiQ3dYOVUyQ3VBaU95ZngyVStSMVEwenU2TW9GekYwUEhYNmwxdmFNaXhkLzhMeXJzaFNSd29TVjRhVk9LOG9Mb2NBSUxhVDJDMEQwMi9tSVBpd0xBVDI0ZzNyUU9iWXJvR3FNNDdtRXk5YWNGZGJ0czBUZDA2RGxVRVJVS0pVWkVYQ1U1SEtGMHEyckFLYUNXWEdDbDhEczlvbHhqM2ZjK3JMTFdzeTc2RWVNQlVVS3FGWU02RXhsL01uTWtmNnRvVEQ1VEIvL3cycXBkQWtqZ3BDVm5lZG50U3lGK0ZFVzN0bjRKV3dYNHZHRmM3dVozbTVzZEJVNkxHQUxWNUIvdG5CRU5jOU1weWdHeWFZbHRKZGw1RC9xMEVtdVNCcUVRKzJ4RGxuUitrUW4yeVVpTDNPUXRneTBEa0RxRWVOSHhMLzl3OUNrakY2dldvbjZMTEpwYUthZmVhaTlBbFpIajFkYVJ5anc0dGU3ME0vblFWcXU5R1c0bWJNZlIyeGFaZTYvbFJYWndUelR2M01xeXRJUForRzQvUzNQeUVCNk9mMnZ5REtLbXpkakNDWkZpTGpXTVVpeEM4SU9zRHpseWQ1VzBLUVdkbHFnM0JmUmVwSWtTSXVDMTNUc0xqaWpZTWJGS2JvclptcDdMZTlOUXpvRi9KREYrbWc0VnNsaTREcGhaR3pBSEFIZnJvYjF3c2cvL3hMYXhlQm1ucVNuWDhOSzR0MUZ3Vko3MmttR1pKVDdjVE8zcmp6WThyYWpIMUhtcHpEL0wzRkZJYlU0QngrN1E1Z2RyVXpYS1dlQ2NEemZWUUNEYUxLWitDelNqYURhbWdwb0tLUWIyRXFFUStxNklGd1hPdWNtVHRsRG4yMlU5UXhiWC9hcFUxVGh4OVJ3cW9CQkVQaFFxMVBQNUFHNmk5VmgvOWphczQ5aWZYb3ZwZVNDMXBxRUFKZXg4SW9qNE5UOWFwTmg2bnRlM3BKYWlWcUY3WCt2ekYvdG8ySUthQW9hUnhFMjBsQ0VwVWlWQ3NNK28yUlNTWEl0K1FnblI0bGVWWGRtbW10cUxjZGdTajd5VkV3b1JaS2QvbFFURlREZnZzSjZoKzgvK05WS0w0TlBEMlJCTTN3cTJsTlBjZ2RWeGhkSkFXQk5XUHMrYmtiOVBxdmg3MEQ5eE5maW8zcEVwQ2h4cWJqNjYwU1d2YjA2aTFTRlNoT25leDB3c0JBRzIzSFRrd21pYll5UW5BWWlLZm1FeERGYVhQa1dXWjRXd2EwS3ROQTFwd3k3T2xKVjZWRWZuelFacmFYZmlndHNMbnFiSElucG1nT21uOUwwektiNE0ra3lVVFNjZ3IxY09GWWVhdzVpVkZBRDJmNnNpZFdMMGQxU3VjSW04QkxVajlNOVFuRnRWTnk4WmJONkJwaWhoRGJkNnIzS3h3RmlnR0NVbnpld3ZBSkJOajNzVlZwRnJCT3dwZVF0cGM0OXlGSkhNdVBFZ2x4eW03ek1jcFlUMUxVSGNhK1FnK1BOWkY4NkphV3VjSUhRQnBYMUVVamozNS9PakNvZlU2YjFwUVh2L0VlbVBsdHhWK0VVcDZWRnZrRVc4eHhxaVJTWXNLb0NjZzlsNWdIYUtYT3d1YkFFVVB6SFZ5UFB4ek5Ka0VFYW9EQjdoMGlOcTJyYk9FMkZaTU9qbUpxcVZTcnpyMXBCYnJ3VkJidUtjVU9FaStaU21lRHAyUW5RL2VsamlRSkFlQ0lqQXd0OTNUS2dHeWNhUDJQRDFNZi92dmJOaEExMWhhbmJkdE1qNWdPa0FBWk5ualR4aVYwNEJObWVlVU5yMHh6cmoyS3FDYTJ4Z1hMK3dIeWI5aGJZTFlEN3FKQXgrSld5ZHhyUjNQWTV0dVlWTzFiejZtVnFPY1JtbVhrTElOYVkyTkFOWmwyR3ZGK1JoRnJZK0h0Q2dabXZkUVVGdGxCUEoybFR5eTRCVVdYSGNQUkRaM0VpaXRIbEY4WWdhSXFwb0pRMThyWm9vVVRCNkVIUjAzODBZbjlkRFZiU3RYcDREeTJuVnJ4S2Fub1hZck5rWTFoblNTVXJGQkNEUHdSdDRFOVdYcllLOUI5UmpFZnNDQjRqclhUbTRqSGQ4T1FLVjdEbEdqcHl3TkhTVWtCOG5Hazg3TnRaWktvMTRDQTdXNHR5OFUxVnVJZTdRd3dpWERxWjIwYUxBeHFCb3YvT0p0dVNsTFNPaXYxTzdYRVJCQXg1dk4zcEZKNXE2NmEzMXBrbitKU0hON1FtMGtOZ3VlN0c3dHVxVCt0VTg5SkVhV284a0lkaEpYU1RKSkhqR0hHRVBKRFY5RUlYRDdNS3Jub1BhdlVLdmFhdExhc1EwUnhkUzZxUFQybDFYU3JpUkVMYTNSVWU4RUNLWlNLSUNnc05tQ1FXK1A2bjMwWGpUSlU2V2orRjI5bWd2SGJNR09GR0lSSTZXK3pnQVJFVzBKWmp4Tyt1YjE3ajlGTlkyTzJ1ZkdKdTI4MFpGNCtjclYyakdYWHdMbCtIWC9LY3JaYURxdTZhUUhKSUJDM21qeDNraVdoc2owL3R2QXJzREduMitOYkFGU0pLcFE2NTliNlBDdzdVeENMSnEyU0p0TlVFdXRwejRWREI4TU92ZTM3Q0xuQTZnSVFobUJYRG9LMGw4d3hWclVoRzNpWmF6VU93SUNzQ09wajR3bjByY2psYVh0eHQwK1dWczNPbW5Ua1ZnT25kZ3kvZ2U3QWdSQVRucjhoNktjaTZhVGFpY2duUUE3anZQQ0NpT3hPQzhpVWJHemprdkdSdDZqYWVLTWVOOUFvWVV6bFpDVVpNeXQ0VFNWQ0ZNeDVYdlZPc2ZJZjFiclV5bVNac2RDSnJub3NrNlZqdnlBV2dlaXF1YlJlWmdibVRLTlhYNXhXdG1vSDhJTGNaeldKMXA2NEJmdWFwWktWVmFza0hTa1pXNFpiV3IvanRoZWVNbFhkNVRld0RBdEtDZXV1MDFVTDBadEM1MXdrbUxIZmFxa01IUWtzQk5TRFJiYm5DQnRUdFJCcVRSNk4wc1VLdDFEWjNhU2pxa1Nra3k2SmVlVjdocEZJREpnSXJMTzB5d21DYzlKdldDMDJjRFEvYVZnTHdpQU4zMjJDQVNFd0xCRWFicDFXa0JXaUtSakUrbUdac3YyeGJGOVIvdXJKLzdpYlYyUGo0eW5YeHVkWU43b09GZWQrc250bjZTRG16d1ZsTWR2RXVVeXRXcXhBWlN3YithcEVuYzFpS0MyUld0c0ZGQ2llaGRSbzc2Zkc2YUZUdThvSGVXUm5jWk4xQ29pUXFVcktnQ1JYMmNpUmNUTmhkZzQySlB3RzRxR01xS3d0akdBWWR2RkpEZ0lLYW91bmE4Mmo2R21TQWRnc2M5TkN3aUE2V3ZjTjk0eU9obHp1SXlNdjczOS9OV1g5SDkzUjlOK1lXVFN6cTBhTHIvd0N5TmZ1dUxhSGZ1MVh6Y1ZsSFhYQ3J6UHFlcW1seElQQ25FK0dzVXA0V1JzRE5RaWxZaEtkeU4wcENsMytrNGt4RitUVHJZQXFEUUs5cWtJR3RhQkVUbkRiWk9RL2ltNnpab0hwcGxuVnNDZ0lCMGFRTE41Yk9OS2dJcXVmMFlqQStjUFA3dFRRRllNU2p3ZUo3ZU54OW8zMXRKM2ZmRGFrU2xlMVUwZjZMOWFqRnplMnkwYjVuU1o0M29pYy9YS1c4YmV1WEwxVXpzMTluTEN1cStLOERIWGdBUjBBdkMyUlp1NHRTSUp0am1PYmJtMUl0WHVSaUZIbFpZN3ZjMjFuU29oS1duc2t0R1ZMalAxR1FWYll5b0FGcHVFZTkxM0xVbFVrbVVQcGhoeVZaOHlTbkFUWHA3SDFBUFNRVG9VSHBhMm9MOWo2dVJqWi9RK01KN0lnNU14ODVxSmZQS2l6Mitkc29MMTM2L3MvOGJjM3VwWmZWMzhwTDliSnZycjBac1hWdzk0Ly9YM3Q5NjArdjV0SGRlR0E4ang2LzVCNGFxc01DQ05DK29yQm0yU2pvOGdvbFFhTlNTUzh1Z3ZqbkIyTFNFb1JEWGpWaXQwU2piNjc2YWEvNDV0T1FPdWFyMDZUWnphOGxQRzZ0TkRtbVdsRTlSL3o3Y1VUVktzcG1pYWRKSU9RRzZiY21TNmpsdTVTbXNiSmthdUhtL0pHOGRpM1RJeDBicmszLzVrL3ZxcFY2cDgrZ2Z4MHI0dSs3cis3a2o3R21iVG5DNzd3dnBEcS9lczZQRGFpa0RwQTBmK2d5Qi9Fa3I0UTMxVk1wRmc0eGFtVXFQU2s5WGJGbGh0Lzl5aEZRWFB4eWJxd3B4c21RUzVqZ21HV2wzbk43YzJVVlZNTGFMV1cvSFhSV2hZNkVNRk5FS0pFSXhMczF2M3ZDQVJtaVJvR3BPMllqUnBZdU1ZMjV6bzJOTUN2OUYvM3BhNzI0NU5UNzkzelk3NU84YjA1dkZZajV1STJkSGRIYjN0MWcvMURVMTMvZmVIZE43OFhnWUc1akd5cEU4MlRYZWQ3eE94RHh6NWVSRzVQSy9jRitLUkdERlE3YTJUTFMzSVdBM2d0TE0rTFNKTUJhR3dGWThwdEVhYXBMRUZoRnAvTGEvVk5yNnlSQ3RvL2xZN0p4enF3M2hyblNGdkpkaTBoYlppYk5KRTR5WTI3ZmlxK2NmN0g5eHl0S3dzVnYzdEFoQ0E1VmVQTGhvZFQ3N1hWWlBEZXF0czZPMktQdnExOS9hKzZEZDNGa2xYRWVtUlI2ekNtUFBCOVhVeW1SRFZxejVqWFFTaGcyUzAxMWRBbTJvb2VrRWRySEFCTEFYU3BxVTEyblJxcmxHaDBsV1FraXkxWHNHOUR0aWdpSE5yRlcrOG5YclNWZ3ROWXljZHJXYm50cU1mblh2ZTFzKzBINTlSb2R4Wi83aGxUcjFTK1VKdlhRYTdhekxjMnlVM21UbWovK3NmT3J3TGQzZEpWeC9hcFFPVjd5UHlsb3dwOGF4bDNCWEFtTFdFbEkrVkFtOVY0aDJUYUtKZ29OcFg5OU0yNmtGd2N4NEJFQkNYQTRQTWs5SzA1YVFraWJHdG1LS2JYS0RuMDdvZU5YLzUxaWx2MDU0UklPRGU3amtRai94K1R5MDZwN2VtbzcxMTgyeHZsWnNYYkczY3ZXTEY5TFppSnFRL1BYS08xdmtoY0VJeG95cEZRRXFjZGdLbG5YeStTa0xWU21IbWpqWWdnSkRTU0pvcHlaaGJVbGVwR1V4WDFjVWJxcWptRTFDcUpwLzVVMXpWbzdWT1hTVXQ1eVhhenQyaThKNjU1MjM1NSttNDNpMzY4K3NuRDUvVFNDL3RxWnRHVDVjWjd1MktOdlNZNU81ZnBJODgvWWZMbHJWMjkza1prL2NkZmFDUzNvVndpT09zckk2aytHVmF6c01NWlFjSFFLMEhJZGlNTkFQQm5RK2VydElhYldJVGl5QkVqWXF2aGxmdkRSdFE0NjhYSDVhb2w0N0VlVmFwOTZ3NjA2MzlEMjVaM200NzJscTNlN1JTMVN5K2MyeHBiNzI2dEZFbjdlbUtobnVNM2Rab0pCdTZYOVhZdEVTa3MrTGNCZW05UzQ2eG92OGgwRi9XU0cxc1RzR2tNREZrUXNtT2tDMFhEQVc3UVN3Q0dLSDBWRzBPamlwcG9pVGVsaUJDVkhmdmlNdzhLdlhHWENWUGphUVdteVorNXJHamp3dnd0TkY0Mlp6elI2WjlVZk9MQWlUUVNsWHo1aldUaS9zYTBkeDZwRWwzVDIyNFAyVjR3UUo1MGYvK29YWFBrV2NZby8rS3J6VHJ0T0MxZk5CTFFUWjEybFlsRWpLdlNwYlZEWmxkd21xcEVGbDdvRlFoblV4SW15NWxJaUpJTGZLVlNMNll1cGluS2haVFR3ZUdzREd5dkxYdi9DMXJkdGIrV1FGU3BLR2hvVnAzOTdIbXNNTms1eStQbkFHbDl4enhZUVRuZ1VqMnAvZ3hwMUI0WUxMMytaYXp4NlVwVjlkWjJoWklocUJQVXg5cHErdnNaQ0xKakxhSUlCWGpWVmNiSUhzSWpFN05lOWxRY3MvaFZ3TWZ5SUpHYVBPNndrZFhkaU8rM0RQVVEwbTJpQ2RNRWhYOFl0VTg1NlNwLyt5amE1dDRZRndlTTIwbXFGOXE0S1p1VEFHUUhJaWRxS2tOa3BxMzlsKzRhZDEwRnhUcFpRdUlLcWIxczhPL1llRGkzT050ODdiQzVGWldjK3MraTFTYzRTMnVxcUk4ZFpwSmlVOXpZRU5LSkhVSnhyVGxVeWZxOG1FaGIrV0x0OHNTc2hNd2pEbTEvNXhOajgrMDNYdDFCZFZzU0FSYk5YTi9UOVAwRmkycWh1SkNtQkNVS1lTQTJkVmtPdzlJTWY1ODRUcUxkMlBGcWJwUVR5VVJxaTdvYzJXZ0p2T2dKREs1eHNzVzNlU0xjcWFoM1FZRFhzWVNFa2lIQm12eDlyR2JSVGd6dHlGUzJQdTYya3hDUWlWaDlzWUlTZ0ZITVU3MEg5UmFYSEZlaWlheFM0R2tzVk5mclZiWmlHcytPRG9uREFGWUw4YThkWGZCeUpyM2NpZGR2WDl2cTlaOU0zRHFGRHRpUXFHekI4R1hkd3JlMEVNZVk3Ui9VYzEzTmtXdHorQ21DVGFOWFZ5UnhpNWhHSUxEbmFzb2dQVVFuVHB3M2d0UHZKaTJ2bXhWVnBIazFFMmoxZTNWczlUYUcwb0w4YTJiY3RYRXVpM05aK2cwVkhtRWVXenZPVkhzMk53TDlqR0wyMnhRZmFxNUNyUzdWRkV3U3pEZ1YwUkNBdWtxb25qaDRpOG92TGZFdWFrNkNmRkxCQ1JiTkJPV0JaU0Q4dXg3SVJoMHM2OHRsNHRLazB3NmJDdjJ4M2FaSFdMaXd5RUFBQUkvU1VSQlZKbzFHUEFySWlHQlpBVnBiZlg2eTIycW55MGFWVTFhTG9lVWhza2hsMDl5MzFOQ0lLNmxHTUptVXFQYXlXSHczNEhPU1k0U1BVT1V2R1cyWU1Ddm1JUVVhZXoyZzY0UTFYK0M4RzhsQkRHVmdwUjQyeEtXbjBtN1BkRmlydEhiRG05SEVnOXNHbXhLeTZuQ3p2UXN0bkxxd0FYUFA3a24ydlVyQ3dqQXhQY1BlTE0xZkJ0WUVQUy9lQ09mRy9vb1M2dUl1Rm0rTE4zaVJTZXZEa2x6TUd3eGVwOFdrRDBLQnZ5S0F3SXdmdXVCaTYyMU53SW5BUzV3RStjQ1M4aHZHWU5RUVkwZzZxdlJ4YWZQUTNMUkZ0SW8xcUxXcGM5RFNVKytoRHVqUFE0R3ZBSUFBWGhoMWY2OVhkM3lXU0I3b2FWSTVQNGpra2FJY1pLUkJYeUJmQlk0Uzh1SDVHS1FEcHRDNmdzY3l2UzAydlNVdVJjTVA3T24yL0tLQUNUUXRwdm1uMjh3WHdDZDc0NkV3TkVnWWMyR2NRbEhLUlZPaEJKUDY5MWl2MmE5a0FFdTBMTkV5U2tENzl6KzFONW93eXNLRUhEL2JUT3h5VmRBbG1jSFJmSmtJd2FNK0VvWHllZEtyS0orbjlWalphK0R5dWdab3VUVXZRVUd2QUlCQVZCRnR0ODQ3NzBnZncvc1h6N3JnTWdBS1ZWSGhCcmNLVUFBM0pkVWVPZCtaMi81K2Q3ay9SVUpTS0RoVy9ybmFsSzVTcFQzazc5YVlyZEo0ZXNUbGZvZjd1Ny90WDB4OUlvR0pOQzJmOW4vQk1IK0QrQjBkcWZOS2crQlhqbHcvcGJiOXhwemJmUnJBVWlnTFRmUEc2eWtjam5LYVNvY1M4ZjI2NU5nVmh1YmZuWE9CZHQrOHN2bThkY0trQ0x0dUtGdmZpcGRpdzNKQVloWVZMWkZMZk5zNzRwTkcxOXEzdmJSUHRwSCsyZ2Y3YU45dEkvMjBaNm0vdzhpT2hydGE5eWVjQUFBQUFCSlJVNUVya0pnZ2c9PSIvPgo8L2RlZnM+Cjwvc3ZnPgo=",
            alt: "emodji"
        }))), a.createElement("div", {
            style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "25px"
            }
        }, a.createElement(al, {
            imgUrl: ol,
            amount: 632..toFixed(3),
            text: "Total Income"
        }), a.createElement(al, {
            imgUrl: ol,
            amount: 632..toFixed(3),
            text: "Total Outcome"
        })), a.createElement(el, null), a.createElement(pl, {
            name: "Sample Transaction",
            date: "2023-01-01",
            amount: 100,
            status: "Completed"
        })), a.createElement("div", {className: Ml.secondaryBlock}, a.createElement(Al, {
            balance: 330.58,
            cardNumber: "4400 3879 9824 0009",
            issueDate: "09/25",
            onManageCards: function () {
                console.log("Manage Cards clicked")
            },
            onTransfer: function () {
                console.log("Transfer clicked")
            }
        }), a.createElement(Rl, null)))
    }, Fl = function () {
        return a.createElement(a.Fragment, null, "Accounts")
    }, Pl = function () {
        return a.createElement(a.Fragment, null)
    }, Wl = function () {
        return a.createElement(a.Fragment, null, "Welcome")
    }, Ql = function () {
        return a.createElement(a.Fragment, null, "Analytics PAge")
    }, Yl = function () {
        return a.createElement(a.Fragment, null)
    }, Bl = function () {
        return a.createElement(a.Fragment, null, "Security Page")
    };

    function Zl(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    var Hl = (0, a.createContext)(void 0), Gl = function (t) {
        var e = t.children, n = function (t, e) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var i, r, a, o, s = [], l = !0, c = !1;
                    try {
                        if (a = (n = n.call(t)).next, 0 === e) {
                            if (Object(n) !== n) return;
                            l = !1
                        } else for (; !(l = (i = a.call(n)).done) && (s.push(i.value), s.length !== e); l = !0) ;
                    } catch (t) {
                        c = !0, r = t
                    } finally {
                        try {
                            if (!l && null != n.return && (o = n.return(), Object(o) !== o)) return
                        } finally {
                            if (c) throw r
                        }
                    }
                    return s
                }
            }(t, e) || function (t, e) {
                if (t) {
                    if ("string" == typeof t) return Zl(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Zl(t, e) : void 0
                }
            }(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }((0, a.useState)(null), 2), i = n[0], r = n[1];
        return a.createElement(Hl.Provider, {
            value: {
                user: i, register: function (t, e, n) {
                    console.log("User registered:", {username: t, email: e, password: n}), r(t)
                }, logout: function () {
                    r(null)
                }
            }
        }, e)
    }, Jl = function () {
        var t = (0, a.useContext)(Hl);
        if (void 0 === t) throw new Error("useAuth must be used within an AuthProvider");
        return t
    }, Xl = r(65), $l = {};
    $l.styleTagTransform = b(), $l.setAttributes = g(), $l.insert = f().bind(null, "head"), $l.domAPI = d(), $l.insertStyleElement = M(), c()(Xl.A, $l);
    const Kl = Xl.A && Xl.A.locals ? Xl.A.locals : void 0, ql = r.p + "assets/logoImage.jpg";

    function tc(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
                var i, r, a, o, s = [], l = !0, c = !1;
                try {
                    if (a = (n = n.call(t)).next, 0 === e) {
                        if (Object(n) !== n) return;
                        l = !1
                    } else for (; !(l = (i = a.call(n)).done) && (s.push(i.value), s.length !== e); l = !0) ;
                } catch (t) {
                    c = !0, r = t
                } finally {
                    try {
                        if (!l && null != n.return && (o = n.return(), Object(o) !== o)) return
                    } finally {
                        if (c) throw r
                    }
                }
                return s
            }
        }(t, e) || function (t, e) {
            if (t) {
                if ("string" == typeof t) return ec(t, e);
                var n = {}.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ec(t, e) : void 0
            }
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function ec(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    const nc = function () {
        var t = tc((0, a.useState)(""), 2), e = t[0], n = t[1], i = tc((0, a.useState)(""), 2), r = i[0], o = i[1],
            s = tc((0, a.useState)(""), 2), l = s[0], c = s[1], u = tc((0, a.useState)(""), 2), d = u[0], h = u[1],
            f = tc((0, a.useState)(!1), 2), p = f[0], g = f[1], m = tc((0, a.useState)(null), 2), M = m[0], y = m[1],
            b = Jl().register, x = pt();
        return a.createElement("div", {className: Kl["page-container"]}, a.createElement("img", {
            width: 256,
            height: 256,
            src: ql,
            alt: "logoImage"
        }), a.createElement("form", {
            className: Kl["form-container"], onSubmit: function (t) {
                t.preventDefault(), l === d ? p ? (y(null), b(e, r, l), x("/dashboard")) : y("You must accept the terms and conditions.") : y("Passwords do not match!")
            }
        }, a.createElement("div", null, a.createElement("label", {htmlFor: "username"}, "Username:"), a.createElement("input", {
            type: "text",
            id: "username",
            value: e,
            onChange: function (t) {
                return n(t.target.value)
            },
            required: !0
        })), a.createElement("div", null, a.createElement("label", {htmlFor: "email"}, "Email:"), a.createElement("input", {
            type: "email",
            id: "email",
            value: r,
            onChange: function (t) {
                return o(t.target.value)
            },
            required: !0
        })), a.createElement("div", null, a.createElement("label", {htmlFor: "password"}, "Password:"), a.createElement("input", {
            type: "password",
            id: "password",
            value: l,
            onChange: function (t) {
                return c(t.target.value)
            },
            required: !0
        })), a.createElement("div", null, a.createElement("label", {htmlFor: "confirmPassword"}, "Confirm Password:"), a.createElement("input", {
            type: "password",
            id: "confirmPassword",
            value: d,
            onChange: function (t) {
                return h(t.target.value)
            },
            required: !0
        })), a.createElement("div", {className: Kl["checkbox-container"]}, a.createElement("input", {
            type: "checkbox",
            id: "acceptedTerms",
            checked: p,
            onChange: function (t) {
                return g(t.target.checked)
            },
            required: !0
        }), a.createElement("label", {htmlFor: "acceptedTerms"}, "I accept the terms and conditions")), M && a.createElement("div", {className: Kl["error-message"]}, M), a.createElement("button", {type: "submit"}, "Register")))
    }, ic = function () {
        return a.createElement(a.Fragment, null, "Help Page")
    };
    var rc = r(911), ac = {};
    ac.styleTagTransform = b(), ac.setAttributes = g(), ac.insert = f().bind(null, "head"), ac.domAPI = d(), ac.insertStyleElement = M(), c()(rc.A, ac);
    const oc = rc.A && rc.A.locals ? rc.A.locals : void 0;

    function sc(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    var lc = r(500), cc = {};
    cc.styleTagTransform = b(), cc.setAttributes = g(), cc.insert = f().bind(null, "head"), cc.domAPI = d(), cc.insertStyleElement = M(), c()(lc.A, cc), lc.A && lc.A.locals && lc.A.locals;
    var uc = r(740), dc = {};
    dc.styleTagTransform = b(), dc.setAttributes = g(), dc.insert = f().bind(null, "head"), dc.domAPI = d(), dc.insertStyleElement = M(), c()(uc.A, dc), uc.A && uc.A.locals && uc.A.locals;
    var hc = r(581), fc = {};
    fc.styleTagTransform = b(), fc.setAttributes = g(), fc.insert = f().bind(null, "head"), fc.domAPI = d(), fc.insertStyleElement = M(), c()(hc.A, fc);
    const pc = hc.A && hc.A.locals ? hc.A.locals : void 0, gc = function () {
        var t = function () {
            var t = function (t, e) {
                return function (t) {
                    if (Array.isArray(t)) return t
                }(t) || function (t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var i, r, a, o, s = [], l = !0, c = !1;
                        try {
                            if (a = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                l = !1
                            } else for (; !(l = (i = a.call(n)).done) && (s.push(i.value), s.length !== e); l = !0) ;
                        } catch (t) {
                            c = !0, r = t
                        } finally {
                            try {
                                if (!l && null != n.return && (o = n.return(), Object(o) !== o)) return
                            } finally {
                                if (c) throw r
                            }
                        }
                        return s
                    }
                }(t, e) || function (t, e) {
                    if (t) {
                        if ("string" == typeof t) return sc(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? sc(t, e) : void 0
                    }
                }(t, e) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }((0, a.useState)((function () {
                return localStorage.getItem("theme") || "light"
            })), 2), e = t[0], n = t[1];
            return (0, a.useEffect)((function () {
                document.body.setAttribute("data-theme", e), localStorage.setItem("theme", e)
            }), [e]), {
                theme: e, toggleTheme: function () {
                    n((function (t) {
                        return "light" === t ? "dark" : "light"
                    }))
                }
            }
        }(), e = t.theme, n = t.toggleTheme;
        return a.createElement("button", {className: pc.themeToggleButton, onClick: n}, "light" === e ? "🌞" : "🌜")
    };
    var mc = r(481), Mc = {};
    Mc.styleTagTransform = b(), Mc.setAttributes = g(), Mc.insert = f().bind(null, "head"), Mc.domAPI = d(), Mc.insertStyleElement = M(), c()(mc.A, Mc);
    const yc = mc.A && mc.A.locals ? mc.A.locals : void 0;
    var bc = r(861), xc = {};
    xc.styleTagTransform = b(), xc.setAttributes = g(), xc.insert = f().bind(null, "head"), xc.domAPI = d(), xc.insertStyleElement = M(), c()(bc.A, xc);
    const Ac = bc.A && bc.A.locals ? bc.A.locals : void 0, vc = function () {
        var t = Jl(), e = t.user, n = t.logout, i = pt();
        return (0, a.useEffect)((function () {
            e || i("/signup")
        }), [e, i]), a.createElement("div", {className: Ac.menu}, a.createElement("ul", null, a.createElement("li", null, "Go To Profile"), a.createElement("li", null, "Settings Account"), a.createElement("li", {
            onClick: function () {
                n(), i("/signup")
            }
        }, "Log Out")))
    }, Nc = r.p + "shared/icons/down.png";

    function Dc(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    const kc = function (t) {
        var e = t.firstName, n = t.lastName, i = t.position, r = t.avatarUrl, o = function (t, e) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var i, r, a, o, s = [], l = !0, c = !1;
                    try {
                        if (a = (n = n.call(t)).next, 0 === e) {
                            if (Object(n) !== n) return;
                            l = !1
                        } else for (; !(l = (i = a.call(n)).done) && (s.push(i.value), s.length !== e); l = !0) ;
                    } catch (t) {
                        c = !0, r = t
                    } finally {
                        try {
                            if (!l && null != n.return && (o = n.return(), Object(o) !== o)) return
                        } finally {
                            if (c) throw r
                        }
                    }
                    return s
                }
            }(t, e) || function (t, e) {
                if (t) {
                    if ("string" == typeof t) return Dc(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Dc(t, e) : void 0
                }
            }(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }((0, a.useState)(!1), 2), s = o[0], l = o[1];
        return a.createElement("div", {className: yc.userAvatarContainer}, a.createElement("img", {
            src: r,
            alt: "".concat(e, " ").concat(n),
            className: yc.avatar
        }), a.createElement("div", {className: yc.userInfo}, a.createElement("div", {className: yc.name}, e, " ", n), a.createElement("div", {className: yc.position}, i)), a.createElement("img", {
            src: Nc,
            alt: "MenuIcon",
            className: yc.menuIcon,
            onClick: function () {
                l(!s)
            }
        }), s && a.createElement(vc, null))
    }, Tc = r.p + "shared/icons/avatar.png", Sc = function () {
        var t = function (t) {
            return t.isActive ? oc.activeTab : ""
        }, e = [{
            name: "Dashboard",
            icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyMyAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxLjAzNTIgOC44MjY3MlY0LjQ5MDY2QzIxLjAzNTIgMy4xNDQgMjAuNDIzOSAyLjU5OTYxIDE4LjkwNTMgMi41OTk2MUgxNS4wNDY4QzEzLjUyODIgMi41OTk2MSAxMi45MTcgMy4xNDQgMTIuOTE3IDQuNDkwNjZWOC44MTcxN0MxMi45MTcgMTAuMTczNCAxMy41MjgyIDEwLjcwODIgMTUuMDQ2OCAxMC43MDgySDE4LjkwNTNDMjAuNDIzOSAxMC43MTc4IDIxLjAzNTIgMTAuMTczNCAyMS4wMzUyIDguODI2NzJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjEuMDM1MiAxOS41NzEzVjE1LjcxMjhDMjEuMDM1MiAxNC4xOTQzIDIwLjQyMzkgMTMuNTgzIDE4LjkwNTMgMTMuNTgzSDE1LjA0NjhDMTMuNTI4MiAxMy41ODMgMTIuOTE3IDE0LjE5NDMgMTIuOTE3IDE1LjcxMjhWMTkuNTcxM0MxMi45MTcgMjEuMDg5OSAxMy41MjgyIDIxLjcwMTIgMTUuMDQ2OCAyMS43MDEySDE4LjkwNTNDMjAuNDIzOSAyMS43MDEyIDIxLjAzNTIgMjEuMDg5OSAyMS4wMzUyIDE5LjU3MTNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAuMDUxOCA4LjgyNjcyVjQuNDkwNjZDMTAuMDUxOCAzLjE0NCA5LjQ0MDUxIDIuNTk5NjEgNy45MjE5MyAyLjU5OTYxSDQuMDYzNDJDMi41NDQ4NCAyLjU5OTYxIDEuOTMzNTkgMy4xNDQgMS45MzM1OSA0LjQ5MDY2VjguODE3MTdDMS45MzM1OSAxMC4xNzM0IDIuNTQ0ODQgMTAuNzA4MiA0LjA2MzQyIDEwLjcwODJINy45MjE5M0M5LjQ0MDUxIDEwLjcxNzggMTAuMDUxOCAxMC4xNzM0IDEwLjA1MTggOC44MjY3MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMC4wNTE4IDE5LjU3MTNWMTUuNzEyOEMxMC4wNTE4IDE0LjE5NDMgOS40NDA1MSAxMy41ODMgNy45MjE5MyAxMy41ODNINC4wNjM0MkMyLjU0NDg0IDEzLjU4MyAxLjkzMzU5IDE0LjE5NDMgMS45MzM1OSAxNS43MTI4VjE5LjU3MTNDMS45MzM1OSAyMS4wODk5IDIuNTQ0ODQgMjEuNzAxMiA0LjA2MzQyIDIxLjcwMTJINy45MjE5M0M5LjQ0MDUxIDIxLjcwMTIgMTAuMDUxOCAyMS4wODk5IDEwLjA1MTggMTkuNTcxM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
            path: "/dashboard"
        }, {
            name: "Settings",
            icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjcwOSAxNS4wMDk4QzEzLjI5MTQgMTUuMDA5OCAxNC41NzQyIDEzLjcyNyAxNC41NzQyIDEyLjE0NDVDMTQuNTc0MiAxMC41NjIxIDEzLjI5MTQgOS4yNzkzIDExLjcwOSA5LjI3OTNDMTAuMTI2NiA5LjI3OTMgOC44NDM3NSAxMC41NjIxIDguODQzNzUgMTIuMTQ0NUM4Ljg0Mzc1IDEzLjcyNyAxMC4xMjY2IDE1LjAwOTggMTEuNzA5IDE1LjAwOThaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuOTEwMTYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTguMTM0MSAxNC43NDkzQzE4LjAxODUgMTUuMDExMiAxNy45ODQgMTUuMzAxNyAxOC4wMzUxIDE1LjU4MzNDMTguMDg2MSAxNS44NjUgMTguMjIwNCAxNi4xMjQ5IDE4LjQyMDYgMTYuMzI5NUwxOC40NzI3IDE2LjM4MTZDMTguNjM0MSAxNi41NDI5IDE4Ljc2MjIgMTYuNzM0NCAxOC44NDk2IDE2Ljk0NTJDMTguOTM3IDE3LjE1NiAxOC45ODIgMTcuMzgyIDE4Ljk4MiAxNy42MTAyQzE4Ljk4MiAxNy44Mzg0IDE4LjkzNyAxOC4wNjQ0IDE4Ljg0OTYgMTguMjc1MkMxOC43NjIyIDE4LjQ4NiAxOC42MzQxIDE4LjY3NzUgMTguNDcyNyAxOC44Mzg4QzE4LjMxMTQgMTkuMDAwMiAxOC4xMTk5IDE5LjEyODMgMTcuOTA5MSAxOS4yMTU3QzE3LjY5ODMgMTkuMzAzMSAxNy40NzIzIDE5LjM0ODEgMTcuMjQ0MSAxOS4zNDgxQzE3LjAxNTkgMTkuMzQ4MSAxNi43ODk5IDE5LjMwMzEgMTYuNTc5MSAxOS4yMTU3QzE2LjM2ODMgMTkuMTI4MyAxNi4xNzY4IDE5LjAwMDIgMTYuMDE1NSAxOC44Mzg4TDE1Ljk2MzQgMTguNzg2N0MxNS43NTg4IDE4LjU4NjUgMTUuNDk4OSAxOC40NTIyIDE1LjIxNzIgMTguNDAxMkMxNC45MzU2IDE4LjM1MDEgMTQuNjQ1MSAxOC4zODQ2IDE0LjM4MzIgMTguNTAwMUMxNC4xMjY0IDE4LjYxMDIgMTMuOTA3NCAxOC43OTMgMTMuNzUzMSAxOS4wMjU5QzEzLjU5ODggMTkuMjU4OCAxMy41MTYxIDE5LjUzMTggMTMuNTE0OSAxOS44MTEyVjE5Ljk1ODhDMTMuNTE0OSAyMC40MTk0IDEzLjMzMiAyMC44NjEgMTMuMDA2MyAyMS4xODY3QzEyLjY4MDcgMjEuNTEyNCAxMi4yMzkgMjEuNjk1MyAxMS43Nzg0IDIxLjY5NTNDMTEuMzE3OSAyMS42OTUzIDEwLjg3NjIgMjEuNTEyNCAxMC41NTA1IDIxLjE4NjdDMTAuMjI0OSAyMC44NjEgMTAuMDQxOSAyMC40MTk0IDEwLjA0MTkgMTkuOTU4OFYxOS44ODA3QzEwLjAzNTIgMTkuNTkzMyA5Ljk0MjE5IDE5LjMxNDYgOS43NzQ5NiAxOS4wODA3QzkuNjA3NzMgMTguODQ2OSA5LjM3NDAyIDE4LjY2ODggOS4xMDQyMyAxOC41Njk2QzguODQyMzUgMTguNDU0IDguNTUxODUgMTguNDE5NSA4LjI3MDE5IDE4LjQ3MDZDNy45ODg1MyAxOC41MjE3IDcuNzI4NjMgMTguNjU2IDcuNTI0IDE4Ljg1NjFMNy40NzE5MSAxOC45MDgyQzcuMzEwNjQgMTkuMDY5NyA3LjExOTEyIDE5LjE5NzggNi45MDgzMSAxOS4yODUxQzYuNjk3NSAxOS4zNzI1IDYuNDcxNTQgMTkuNDE3NSA2LjI0MzMzIDE5LjQxNzVDNi4wMTUxMyAxOS40MTc1IDUuNzg5MTYgMTkuMzcyNSA1LjU3ODM1IDE5LjI4NTFDNS4zNjc1NSAxOS4xOTc4IDUuMTc2MDMgMTkuMDY5NyA1LjAxNDc1IDE4LjkwODJDNC44NTMzIDE4Ljc0NjkgNC43MjUyMiAxOC41NTU0IDQuNjM3ODMgMTguMzQ0NkM0LjU1MDQ0IDE4LjEzMzggNC41MDU0NiAxNy45MDc4IDQuNTA1NDYgMTcuNjc5NkM0LjUwNTQ2IDE3LjQ1MTQgNC41NTA0NCAxNy4yMjU1IDQuNjM3ODMgMTcuMDE0N0M0LjcyNTIyIDE2LjgwMzkgNC44NTMzIDE2LjYxMjMgNS4wMTQ3NSAxNi40NTExTDUuMDY2ODUgMTYuMzk5QzUuMjY3MDEgMTYuMTk0MyA1LjQwMTI5IDE1LjkzNDQgNS40NTIzNiAxNS42NTI4QzUuNTAzNDMgMTUuMzcxMSA1LjQ2ODk1IDE1LjA4MDYgNS4zNTMzNyAxNC44MTg3QzUuMjQzMzEgMTQuNTYxOSA1LjA2MDU2IDE0LjM0MjkgNC44Mjc2MiAxNC4xODg3QzQuNTk0NjcgMTQuMDM0NCA0LjMyMTcgMTMuOTUxNiA0LjA0MjMxIDEzLjk1MDVIMy44OTQ3MUMzLjQzNDE2IDEzLjk1MDUgMi45OTI0NyAxMy43Njc1IDIuNjY2ODEgMTMuNDQxOUMyLjM0MTE2IDEzLjExNjIgMi4xNTgyIDEyLjY3NDUgMi4xNTgyIDEyLjIxNEMyLjE1ODIgMTEuNzUzNCAyLjM0MTE2IDExLjMxMTggMi42NjY4MSAxMC45ODYxQzIuOTkyNDcgMTAuNjYwNCAzLjQzNDE2IDEwLjQ3NzUgMy44OTQ3MSAxMC40Nzc1SDMuOTcyODVDNC4yNjAyNCAxMC40NzA4IDQuNTM4OTYgMTAuMzc3NyA0Ljc3Mjc3IDEwLjIxMDVDNS4wMDY1OSAxMC4wNDMzIDUuMTg0NjkgOS44MDk1NyA1LjI4MzkxIDkuNTM5NzdDNS4zOTk0OSA5LjI3Nzg5IDUuNDMzOTcgOC45ODc0IDUuMzgyOSA4LjcwNTc0QzUuMzMxODMgOC40MjQwOCA1LjE5NzU1IDguMTY0MTggNC45OTczOSA3Ljk1OTU1TDQuOTQ1MjkgNy45MDc0NkM0Ljc4Mzg0IDcuNzQ2MTggNC42NTU3NiA3LjU1NDY3IDQuNTY4MzcgNy4zNDM4NkM0LjQ4MDk4IDcuMTMzMDUgNC40MzYgNi45MDcwOCA0LjQzNiA2LjY3ODg4QzQuNDM2IDYuNDUwNjggNC40ODA5OCA2LjIyNDcxIDQuNTY4MzcgNi4wMTM5QzQuNjU1NzYgNS44MDMwOSA0Ljc4Mzg0IDUuNjExNTggNC45NDUyOSA1LjQ1MDNDNS4xMDY1NyA1LjI4ODg1IDUuMjk4MDkgNS4xNjA3NiA1LjUwODg5IDUuMDczMzhDNS43MTk3IDQuOTg1OTkgNS45NDU2NyA0Ljk0MTAxIDYuMTczODcgNC45NDEwMUM2LjQwMjA4IDQuOTQxMDEgNi42MjgwNCA0Ljk4NTk5IDYuODM4ODUgNS4wNzMzOEM3LjA0OTY2IDUuMTYwNzYgNy4yNDExOCA1LjI4ODg1IDcuNDAyNDUgNS40NTAzTDcuNDU0NTQgNS41MDI0QzcuNjU5MTcgNS43MDI1NiA3LjkxOTA3IDUuODM2ODQgOC4yMDA3MyA1Ljg4NzlDOC40ODIzOSA1LjkzODk3IDguNzcyODkgNS45MDQ1IDkuMDM0NzcgNS43ODg5Mkg5LjEwNDIzQzkuMzYxMDMgNS42Nzg4NiA5LjU4MDA0IDUuNDk2MTEgOS43MzQzMSA1LjI2MzE2QzkuODg4NTggNS4wMzAyMiA5Ljk3MTM2IDQuNzU3MjUgOS45NzI0OCA0LjQ3Nzg2VjQuMzMwMjZDOS45NzI0OCAzLjg2OTcxIDEwLjE1NTQgMy40MjgwMiAxMC40ODExIDMuMTAyMzZDMTAuODA2NyAyLjc3NjcgMTEuMjQ4NCAyLjU5Mzc1IDExLjcwOSAyLjU5Mzc1QzEyLjE2OTUgMi41OTM3NSAxMi42MTEyIDIuNzc2NyAxMi45MzY5IDMuMTAyMzZDMTMuMjYyNSAzLjQyODAyIDEzLjQ0NTUgMy44Njk3MSAxMy40NDU1IDQuMzMwMjZWNC40MDg0QzEzLjQ0NjYgNC42ODc3OSAxMy41Mjk0IDQuOTYwNzYgMTMuNjgzNyA1LjE5MzdDMTMuODM3OSA1LjQyNjY1IDE0LjA1NjkgNS42MDk0IDE0LjMxMzcgNS43MTk0NkMxNC41NzU2IDUuODM1MDQgMTQuODY2MSA1Ljg2OTUxIDE1LjE0NzggNS44MTg0NEMxNS40Mjk0IDUuNzY3MzcgMTUuNjg5MyA1LjYzMzEgMTUuODk0IDUuNDMyOTRMMTUuOTQ2MSA1LjM4MDg0QzE2LjEwNzMgNS4yMTkzOSAxNi4yOTg4IDUuMDkxMyAxNi41MDk3IDUuMDAzOTJDMTYuNzIwNSA0LjkxNjUzIDE2Ljk0NjQgNC44NzE1NSAxNy4xNzQ2IDQuODcxNTVDMTcuNDAyOCA0Ljg3MTU1IDE3LjYyODggNC45MTY1MyAxNy44Mzk2IDUuMDAzOTJDMTguMDUwNCA1LjA5MTMgMTguMjQxOSA1LjIxOTM5IDE4LjQwMzIgNS4zODA4NEMxOC41NjQ3IDUuNTQyMTIgMTguNjkyNyA1LjczMzYzIDE4Ljc4MDEgNS45NDQ0NEMxOC44Njc1IDYuMTU1MjUgMTguOTEyNSA2LjM4MTIyIDE4LjkxMjUgNi42MDk0MkMxOC45MTI1IDYuODM3NjIgMTguODY3NSA3LjA2MzU5IDE4Ljc4MDEgNy4yNzQ0QzE4LjY5MjcgNy40ODUyMSAxOC41NjQ3IDcuNjc2NzIgMTguNDAzMiA3LjgzOEwxOC4zNTExIDcuODkwMDlDMTguMTUxIDguMDk0NzIgMTguMDE2NyA4LjM1NDYyIDE3Ljk2NTYgOC42MzYyOEMxNy45MTQ1IDguOTE3OTMgMTcuOTQ5IDkuMjA4NDMgMTguMDY0NiA5LjQ3MDMxVjkuNTM5NzdDMTguMTc0NyA5Ljc5NjU3IDE4LjM1NzQgMTAuMDE1NiAxOC41OTA0IDEwLjE2OTlDMTguODIzMyAxMC4zMjQxIDE5LjA5NjMgMTAuNDA2OSAxOS4zNzU3IDEwLjQwOEgxOS41MjMzQzE5Ljk4MzggMTAuNDA4IDIwLjQyNTUgMTAuNTkxIDIwLjc1MTIgMTAuOTE2NkMyMS4wNzY4IDExLjI0MjMgMjEuMjU5OCAxMS42ODQgMjEuMjU5OCAxMi4xNDQ1QzIxLjI1OTggMTIuNjA1MSAyMS4wNzY4IDEzLjA0NjggMjAuNzUxMiAxMy4zNzI0QzIwLjQyNTUgMTMuNjk4MSAxOS45ODM4IDEzLjg4MSAxOS41MjMzIDEzLjg4MUgxOS40NDUxQzE5LjE2NTcgMTMuODgyMSAxOC44OTI4IDEzLjk2NDkgMTguNjU5OCAxNC4xMTkyQzE4LjQyNjkgMTQuMjczNSAxOC4yNDQxIDE0LjQ5MjUgMTguMTM0MSAxNC43NDkzWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjkxMDE2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
            path: "/settings"
        }, {
            name: "Analytics",
            icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjM0OTYgMTkuNzgxMlYxMy4wOTU3TTExLjcwOSAxOS43ODEyVjEwLjIzMDVNNC4wNjgzNiAxOS43ODEyTDQuMDY4MzYgMTUuOTYwOU0xMy4wNTI1IDUuNDgxMzVMMTcuOTg4NyA3LjMzMjQ1TTEwLjU2MTcgNS44Mzc5OUw1LjIxNDY3IDkuODQ4MjdNMjAuMzYyNiA2LjgyOTc2QzIwLjkyMjEgNy4zODkyMyAyMC45MjIxIDguMjk2MzEgMjAuMzYyNiA4Ljg1NTc5QzE5LjgwMzEgOS40MTUyNiAxOC44OTYxIDkuNDE1MjYgMTguMzM2NiA4Ljg1NTc5QzE3Ljc3NzEgOC4yOTYzMSAxNy43NzcxIDcuMzg5MjMgMTguMzM2NiA2LjgyOTc2QzE4Ljg5NjEgNi4yNzAyOSAxOS44MDMxIDYuMjcwMjkgMjAuMzYyNiA2LjgyOTc2Wk01LjA4MTM3IDkuNjk0OTlDNS42NDA4NCAxMC4yNTQ1IDUuNjQwODQgMTEuMTYxNSA1LjA4MTM3IDExLjcyMUM0LjUyMTkgMTIuMjgwNSAzLjYxNDgyIDEyLjI4MDUgMy4wNTUzNSAxMS43MjFDMi40OTU4NyAxMS4xNjE1IDIuNDk1ODcgMTAuMjU0NSAzLjA1NTM1IDkuNjk0OTlDMy42MTQ4MiA5LjEzNTUyIDQuNTIxOSA5LjEzNTUyIDUuMDgxMzcgOS42OTQ5OVpNMTIuNzIyIDMuOTY0NTNDMTMuMjgxNSA0LjUyNCAxMy4yODE1IDUuNDMxMDggMTIuNzIyIDUuOTkwNTVDMTIuMTYyNSA2LjU1MDAyIDExLjI1NTQgNi41NTAwMiAxMC42OTYgNS45OTA1NUMxMC4xMzY1IDUuNDMxMDggMTAuMTM2NSA0LjUyNCAxMC42OTYgMy45NjQ1M0MxMS4yNTU0IDMuNDA1MDUgMTIuMTYyNSAzLjQwNTA1IDEyLjcyMiAzLjk2NDUzWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjkxMDE2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
            path: "/analytics"
        }, {name: "My Wallet", icon: ol, path: "/wallet"}, {
            name: "Accounts",
            icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuMDY4MzYgMTkuNTI1NEM1LjI5OTIyIDE3LjE1OTMgOC4zMjc5OSAxNS43MDUxIDExLjY2NDEgMTUuNzA1MUMxNS4wMDAxIDE1LjcwNTEgMTguMDI4OSAxNy4xNTkzIDIwLjI1OTggMTkuNTI1NE0xNS45NjE5IDcuNTg2OTFDMTUuOTYxOSA5Ljk2MDU1IDE0LjAzNzcgMTEuODg0OCAxMS42NjQxIDExLjg4NDhDOS4yOTA0MiAxMS44ODQ4IDcuMzY2MjEgOS45NjA1NSA3LjM2NjIxIDcuNTg2OTFDNy4zNjYyMSA1LjIxMzI4IDkuMjkwNDIgMy4yODkwNiAxMS42NjQxIDMuMjg5MDZDMTQuMDM3NyAzLjI4OTA2IDE1Ljk2MTkgNS4yMTMyOCAxNS45NjE5IDcuNTg2OTFaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuOTEwMTYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
            path: "/accounts"
        }];
        return a.createElement("nav", {className: oc.sidebar}, a.createElement(Pt, {to: "/"}, a.createElement("img", {
            src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExNF82NDEpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNy4wNzM5IDE1LjQxOEMzNy41MjU1IDE1LjM0MzcgMzcuOTg2OSAxNS40ODkgMzguMzE1OCAxNS44MDg2QzQyLjEzOTcgMTkuNTI2OCA0NC4yNDU2IDI0LjUwMzIgNDQuMjQ1NiAyOS44MjFDNDQuMjQ1NiA0MC42MDQ3IDM1LjQ3MjkgNDkuMzc4IDI0LjY4OTYgNDkuMzc4QzE1Ljc2OTcgNDkuMzc4IDcuOTg4NDQgNDMuMzM5IDUuNzY2OSAzNC42OTI0QzUuMzQ1OTMgMzMuMDUxOSA1LjEzMjUxIDMxLjQxMzEgNS4xMzI1MSAyOS44MjFDNS4xMzI1MSAyNi42OTU4IDUuODYyNTcgMjMuNjkxNSA3LjMwMjQ1IDIwLjg5MTlDOC43MTk0NiAxOC4xMzk2IDEwLjgwMzEgMTUuNzI5NSAxMy4zMjgzIDEzLjkyMTVDMTMuMzQzIDEzLjkxMSAxMy4zNTc5IDEzLjkwMDggMTMuMzczIDEzLjg5MDhDMTMuNDY2IDEzLjgyOTQgMTMuNTY1NCAxMy43NTY3IDEzLjY3MDcgMTMuNjc5NkwxMy42ODE1IDEzLjY3MTdDMTMuNjkyMiAxMy42NjM5IDEzLjcwMjkgMTMuNjU2MSAxMy43MTM2IDEzLjY0ODJDMTMuNzU1NyAxMy42MTc0IDEzLjc5NzggMTMuNTg2NiAxMy44NDAxIDEzLjU1NjFDMTcuODU1MyAxMC42ODI5IDIwLjM3NyA2LjIyODg0IDIwLjc2MjYgMS4zMzMwOEMyMC44MDA2IDAuODQ5OTA0IDIxLjA3ODEgMC40MTc5NDEgMjEuNTAxOCAwLjE4MjMzNEMyMS45MjU0IC0wLjA1MzE3NjQgMjIuNDM4NSAtMC4wNjA5ODgyIDIyLjg2OTEgMC4xNjE1MDNDMjcuODE1MSAyLjcxNzg4IDMxLjQ0NjEgNy4yNzM4OSAzMi44MzA5IDEyLjY2MTJDMzMuMjUyIDE0LjMwMTQgMzMuNDY1NCAxNS45NDAyIDMzLjQ2NTQgMTcuNTMyOEMzMy40NjU0IDE4LjM2MjggMzMuNDExMyAxOS4xOTA1IDMzLjMwMzggMjAuMDEzNEMzNC4zODI0IDE4Ljg3NDMgMzUuMjk5MiAxNy41ODU3IDM2LjAyMSAxNi4xODM2QzM2LjIzMDggMTUuNzc2IDM2LjYyMTUgMTUuNDkyIDM3LjA3MzkgMTUuNDE4Wk0yMy45NDA5IDM1LjkxMTRDMjcuMjQ2NSAzNS45MTE0IDI5LjkyNjIgMzMuMjMxNyAyOS45MjYyIDI5LjkyNjFDMjkuOTI2MiAyNi42MjA2IDI3LjI0NjUgMjMuOTQwOSAyMy45NDA5IDIzLjk0MDlDMjAuNjM1NCAyMy45NDA5IDE3Ljk1NTcgMjYuNjIwNiAxNy45NTU3IDI5LjkyNjFDMTcuOTU1NyAzMy4yMzE3IDIwLjYzNTQgMzUuOTExNCAyMy45NDA5IDM1LjkxMTRaIiBmaWxsPSIjNjM1OUU5Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTE0XzY0MSI+CjxyZWN0IHdpZHRoPSI0OS4zNzgyIiBoZWlnaHQ9IjQ5LjM3ODIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
            alt: "logotype"
        }), a.createElement("span", {className: oc.logoTitle}, "coc.")), e.map((function (e, n) {
            return a.createElement(Pt, {to: e.path, key: n, className: t}, a.createElement("img", {
                src: e.icon,
                alt: "logotype"
            }), e.name)
        })), a.createElement("hr", {className: oc.customLine}), a.createElement(Pt, {
            to: "/security",
            className: t
        }, a.createElement("img", {
            src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguOTc4NTIgMTEuMzA5NkwxMC44ODg3IDEzLjIxOTdMMTUuMTg2NSA4LjkyMTg3TTE5LjQ4NDQgMTEuNzg3MUMxOS40ODQ0IDE2LjQ3NTEgMTQuMzcwOSAxOS44ODQ2IDEyLjUxMDQgMjAuOTcwMUMxMi4yOTg5IDIxLjA5MzQgMTIuMTkzMiAyMS4xNTUxIDEyLjA0NCAyMS4xODcxQzExLjkyODIgMjEuMjExOSAxMS43NTkzIDIxLjIxMTkgMTEuNjQzNSAyMS4xODcxQzExLjQ5NDMgMjEuMTU1MSAxMS4zODg2IDIxLjA5MzQgMTEuMTc3MSAyMC45NzAxQzkuMzE2NTggMTkuODg0NiA0LjIwMzEyIDE2LjQ3NTEgNC4yMDMxMiAxMS43ODcxVjcuMjE5NTRDNC4yMDMxMiA2LjQ1NTk0IDQuMjAzMTIgNi4wNzQxNSA0LjMyODAxIDUuNzQ1OTVDNC40MzgzNCA1LjQ1NjAzIDQuNjE3NjEgNS4xOTczMyA0Ljg1MDM0IDQuOTkyMjNDNS4xMTM3OSA0Ljc2MDA2IDUuNDcxMjggNC42MjYgNi4xODYyNSA0LjM1Nzg4TDExLjMwNzIgMi40Mzc1M0MxMS41MDU3IDIuMzYzMDggMTEuNjA1IDIuMzI1ODUgMTEuNzA3MiAyLjMxMTA5QzExLjc5NzcgMi4yOTggMTEuODg5OCAyLjI5OCAxMS45ODAzIDIuMzExMDlDMTIuMDgyNSAyLjMyNTg1IDEyLjE4MTggMi4zNjMwOCAxMi4zODAzIDIuNDM3NTNMMTcuNTAxMiA0LjM1Nzg4QzE4LjIxNjIgNC42MjYgMTguNTczNyA0Ljc2MDA2IDE4LjgzNzIgNC45OTIyM0MxOS4wNjk5IDUuMTk3MzMgMTkuMjQ5MiA1LjQ1NjAzIDE5LjM1OTUgNS43NDU5NUMxOS40ODQ0IDYuMDc0MTUgMTkuNDg0NCA2LjQ1NTk0IDE5LjQ4NDQgNy4yMTk1NFYxMS43ODcxWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjkxMDE2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
            alt: "logotype"
        }), "Security"), a.createElement(Pt, {
            to: "/help",
            className: t
        }, a.createElement("img", {
            src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDE5NTUgOS4yNzE0OEM5LjI0NDA5IDguNjMzMTcgOS42ODczIDguMDk0OTMgMTAuMjcwNyA3Ljc1MjA4QzEwLjg1NCA3LjQwOTIzIDExLjUzOTkgNy4yODM5MSAxMi4yMDY4IDcuMzk4M0MxMi44NzM3IDcuNTEyNjkgMTMuNDc4NiA3Ljg1OTQyIDEzLjkxNDQgOC4zNzcwOEMxNC4zNTAyIDguODk0NzQgMTQuNTg4NyA5LjU0OTkxIDE0LjU4NzcgMTAuMjI2NkMxNC41ODc3IDEyLjEzNjcgMTEuNzIyNCAxMy4wOTE4IDExLjcyMjQgMTMuMDkxOE0xMS43OTg4IDE2LjkxMjFIMTEuODA4NE0yMS4zNDk2IDEyLjEzNjdDMjEuMzQ5NiAxNy40MTE1IDE3LjA3MzYgMjEuNjg3NSAxMS43OTg4IDIxLjY4NzVDNi41MjQwOCAyMS42ODc1IDIuMjQ4MDUgMTcuNDExNSAyLjI0ODA1IDEyLjEzNjdDMi4yNDgwNSA2Ljg2MTk3IDYuNTI0MDggMi41ODU5NCAxMS43OTg4IDIuNTg1OTRDMTcuMDczNiAyLjU4NTk0IDIxLjM0OTYgNi44NjE5NyAyMS4zNDk2IDEyLjEzNjdaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuOTEwMTYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
            alt: "logotype"
        }), "Help Centre"), a.createElement(gc, null), a.createElement(kc, {
            firstName: "Bazil",
            lastName: "",
            position: "Software Developer",
            avatarUrl: Tc
        }))
    };
    var wc = r(436), Ec = {};
    Ec.styleTagTransform = b(), Ec.setAttributes = g(), Ec.insert = f().bind(null, "head"), Ec.domAPI = d(), Ec.insertStyleElement = M(), c()(wc.A, Ec);
    const Cc = wc.A && wc.A.locals ? wc.A.locals : void 0, zc = function () {
        var t = Jl().user;
        return a.createElement("div", {className: Cc.layout}, t && a.createElement(Sc, null), " ", a.createElement("main", {className: Cc.content}, a.createElement(Tt, null), " "))
    }, jc = function () {
        return a.createElement(a.StrictMode, null, a.createElement(Ut, null, a.createElement(Gl, null, a.createElement(Et, null, a.createElement(St, {
            path: "/",
            element: a.createElement(zc, null)
        }, a.createElement(St, {path: "signup", element: a.createElement(nc, null)}), a.createElement(St, {
            path: "/",
            element: a.createElement(Wl, null)
        }), a.createElement(St, {
            path: "dashboard",
            element: a.createElement(Vl, null)
        }), a.createElement(St, {
            path: "accounts",
            element: a.createElement(Fl, null)
        }), a.createElement(St, {
            path: "wallet",
            element: a.createElement(Pl, null)
        }), a.createElement(St, {
            path: "analytics",
            element: a.createElement(Ql, null)
        }), a.createElement(St, {
            path: "settings",
            element: a.createElement(Yl, null)
        }), a.createElement(St, {
            path: "security",
            element: a.createElement(Bl, null)
        }), a.createElement(St, {path: "help", element: a.createElement(ic, null)}))))))
    };
    s.createRoot(document.getElementById("root")).render(a.createElement(a.StrictMode, null, a.createElement(jc, null)))
})();
//# sourceMappingURL=main.js.map