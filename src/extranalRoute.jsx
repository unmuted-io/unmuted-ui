import { lazy } from 'react';

const ErrorPage = lazy(() => import("./views/maint/errorPage"))
const OfflineUi = lazy(() => import("./views/maint/offlineUi"))
const CommingSoon = lazy(() => import("./views/maint/commingSoon"))
const AuthSingin = lazy(() => import("./views/authentication/authSingin"))
const ProfileSetting = lazy(() => import("./views/authentication/profileSetting"))
const Reset = lazy(() => import("./views/authentication/resetPassword"))
const ChangePassword = lazy(() => import("./views/authentication/changePassword"))
const AuthSingup1 = lazy(() => import("./views/authentication/authSingup1"))
const AuthSingup = lazy(() => import("./views/authentication/authSingup"))
const AuthSingin2 = lazy(() => import("./views/authentication/authSingin2"))
const AuthSingin1 = lazy(() => import("./views/authentication/authSingin1"))


const RouteList = [
  /* External */
  { exact: true, path: "/maint/error-page", name: "Error", component: ErrorPage },
  { exact: true, path: "/maint/offline-ui", name: "Offline Ui", component: OfflineUi },
  { exact: true, path: "/maint/comming-soon", name: "Comming Soon", component: CommingSoon },
  { exact: true, path: "/maint/auth-singin", name: "Singin", component: AuthSingin },
  { exact: true, path: "/maint/profile-setting", name: "Profile Setting", component: ProfileSetting },
  { exact: true, path: "/maint/reset", name: "Reset", component: Reset },
  { exact: true, path: "/maint/change-password", name: "Change Password", component: ChangePassword },
  { exact: true, path: "/maint/singup1", name: "Singup1", component: AuthSingup1 },
  { exact: true, path: "/maint/singup", name: "Singup", component: AuthSingup },
  { exact: true, path: "/maint/singin2", name: "singin2", component: AuthSingin2 },
  { exact: true, path: "/maint/singin1", name: "Singin1", component: AuthSingin1 },
]

export default RouteList