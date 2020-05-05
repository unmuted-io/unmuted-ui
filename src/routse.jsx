import { lazy } from 'react'

const Homepage = lazy(() => import('./views/homepage/homepage.tsx'))
const LoggedInHomepage = lazy(() => import('./redux/connectors/LoggedInHomepageConnector'))
const UploadVideoWizard = lazy(() => import('./redux/connectors/UploadVidoConnector'))
const ViewVideo = lazy(() => import('./views/viewVideo/viewVideo'))

/* Auth */
const Register = lazy(() => import('./redux/connectors/RegisterConnector'))
const AuthUsername = lazy(() => import('./views/authentication/authUsername'))
const LoginConnector = lazy(() => import('./redux/connectors/AuthSinginConnector'))

/* User */
const UserAccount = lazy(() => import('./views/Account/UserAccount'))
const RecentlyViewed = lazy(() => import('./views/recentlyViewed/recentlyViewed'))
const Alarts = lazy(() => import('./views/ui-element/basic/alarts'))
const Buttons = lazy(() => import('./views/ui-element/basic/buttons'))
const Badges = lazy(() => import('./views/ui-element/basic/badges'))
const BreadcrumbPagination = lazy(() => import('./views/ui-element/basic/breadcrumbPagination'))
const Cards = lazy(() => import('./views/ui-element/basic/cards'))
const BasicGrid = lazy(() => import('./views/ui-element/basic/basicGrid'))
const Modals = lazy(() => import('./views/ui-element/basic/modals'))
const NavsTabs = lazy(() => import('./views/ui-element/basic/navsTabs'))
const Progresses = lazy(() => import('./views/ui-element/basic/progress'))
const Spinners = lazy(() => import('./views/ui-element/basic/spinners'))
const Toasts = lazy(() => import('./views/ui-element/basic/toasts'))
const ExtraUi = lazy(() => import('./views/ui-element/basic/othersUi'))
const TooltipPopover = lazy(() => import('./views/ui-element/basic/tooltipPopover'))
const Typography = lazy(() => import('./views/ui-element/basic/typography'))
const Collapse = lazy(() => import('./views/ui-element/basic/collapse'))
const Sweetalert = lazy(() => import('./views/ui-element/advance/sweetalert'))
//const Gridstack = lazy(() => import("./views/ui-element/advance/gridstack"))
const ModalAdbance = lazy(() => import('./views/ui-element/advance/modal'))
const Notification = lazy(() => import('./views/ui-element/advance/notification'))
const Nestable = lazy(() => import('./views/ui-element/advance/nestable'))
const Pnotify = lazy(() => import('./views/ui-element/advance/pnotify'))
const Rating = lazy(() => import('./views/ui-element/advance/rating'))
/* const Rangeslider = lazy(() => import("./views/ui-element/advance/rangeslider"))
const Sliders = lazy(() => import("./views/ui-element/advance/sliders"))
const Tour = lazy(() => import("./views/ui-element/advance/tours"))
const Treeview = lazy(() => import("./views/ui-element/advance/treeview"))
const Toolbar = lazy(() => import("./views/ui-element/advance/toolbar"))
const Usercard = lazy(() => import("./views/ui-element/advance/usercard"))
const Timeline = lazy(() => import("./views/ui-element/advance/timeline")) */
const Note = lazy(() => import('./views/note/note'))
const FormElements = lazy(() => import('./views/forms/elements/formElements'))
const FormElementsAdvance = lazy(() => import('./views/forms/elements-advance/formElementsAdvance'))
const FormValidation = lazy(() => import('./views/forms/validation/formValidation'))
const FormMasking = lazy(() => import('./views/forms/masking/formMasking'))
const FormWizard = lazy(() => import('./views/forms/wizard/formWizard'))
const FileUpload = lazy(() => import('./views/fileupload/fileUpload'))
const ImageCropper = lazy(() => import('./views/cropper/imageCropper'))
const Chat = lazy(() => import('./views/chat/chat'))
const SamplePage = lazy(() => import('./views/others/samplePage'))
const FeatherIcons = lazy(() => import('./views/icons/iconFeather'))
const FlagIcons = lazy(() => import('./views/icons/iconFlag'))
const Animations = lazy(() => import('./views/ui-element/animations'))
const FixedLayout = lazy(() => import('./views/layouts/fixed'))
const FixedNavbar = lazy(() => import('./views/layouts/navBarFixes'))
const CollapesMenu = lazy(() => import('./views/layouts/collapesMenu'))
const TemplateLayout = lazy(() => import('./views/prebuild/horizontal'))
const BoxLayout = lazy(() => import('./views/layouts/box'))
const RtlLayout = lazy(() => import('./views/layouts/rtl'))
const LightLayout = lazy(() => import('./views/layouts/light'))
const DarkLayout = lazy(() => import('./views/layouts/dark'))
const ColorIcon = lazy(() => import('./views/layouts/colorIcon'))
const Layout2 = lazy(() => import('./views/prebuild/layout2'))
const Layout3 = lazy(() => import('./views/prebuild/layout3'))
const Layout4 = lazy(() => import('./views/prebuild/layout4'))
const Layout5 = lazy(() => import('./views/prebuild/layout5'))
const Layout6 = lazy(() => import('./views/prebuild/layout6'))
//const Layout7 = lazy(() => import("./views/prebuild/layout7"))
const Layout8 = lazy(() => import('./views/prebuild/layout8'))
/* const Layout9 = lazy(() => import("./views/prebuild/layout9"))
const Layout10 = lazy(() => import("./views/prebuild/layout10"))
const Layout11 = lazy(() => import("./views/prebuild/layout11"))
const Layout12 = lazy(() => import("./views/prebuild/layout12")) */

const RouteList = [
  /* Homepage */
  { exact: true, path: '/', name: 'Homepage', component: Homepage },
  { exact: true, path: '/welcome', name: 'Logged In Homepage', component: LoggedInHomepage },
  { exact: true, protected: true, path: '/username', name: 'Choose Username', component: AuthUsername },

  /* Videos */
  { exact: true, protected: true, path: '/upload', name: 'Upload Video', component: UploadVideoWizard },
  { exact: false, path: '/videos/:rand', name: 'View Video', component: ViewVideo },

  /* Auth */
  { exact: true, protected: false, path: '/login', name: 'Login', component: LoginConnector },
  { exact: true, protected: false, path: '/register', name: 'Register', component: Register },

  /* User-Specific */
  { exact: true, protected: true, path: '/recently-viewed', name: 'Recently Viewed', component: RecentlyViewed },
  { exact: true, protected: true, path: '/user/account', name: 'User Account', component: UserAccount },

  /* Layout */
  { exact: true, path: '/layout/fixed', name: 'fixed', component: FixedLayout },
  { exact: true, path: '/layout/navbar-fixed', name: 'Nav Fixed', component: FixedNavbar },
  { exact: true, path: '/layout/collapse-menu', name: 'Nav collapse', component: CollapesMenu },
  { exact: true, path: '/layout/horizontal', name: 'Nav collapse', component: TemplateLayout },
  { exact: true, path: '/layout/box', name: 'Box Layout', component: BoxLayout },
  { exact: true, path: '/layout/rtl', name: 'Rtl Layout', component: RtlLayout },
  { exact: true, path: '/layout/light', name: 'Light Layout', component: LightLayout },
  { exact: true, path: '/layout/dark', name: 'Dark Layout', component: DarkLayout },
  { exact: true, path: '/layout/color-icon', name: 'Color Icon', component: ColorIcon },
  /* UI basic */
  { exact: true, path: '/ui/basic/alarts', name: 'Alarts', component: Alarts },
  { exact: true, path: '/ui/basic/buttons', name: 'Buttons', component: Buttons },
  { exact: true, path: '/ui/basic/badges', name: 'Badges', component: Badges },
  {
    exact: true,
    path: '/ui/basic/breadcrumb-pagination',
    name: 'Breadcrumb Pagination',
    component: BreadcrumbPagination,
  },
  { exact: true, path: '/ui/basic/cards', name: 'Cards', component: Cards },
  { exact: true, path: '/ui/basic/grid', name: 'Basic Grid', component: BasicGrid },
  { exact: true, path: '/ui/basic/modals', name: 'Modals', component: Modals },
  { exact: true, path: '/ui/basic/navs-tabs', name: 'Navs Tabs', component: NavsTabs },
  { exact: true, path: '/ui/basic/progresses', name: 'Progresses', component: Progresses },
  { exact: true, path: '/ui/basic/spinners', name: 'Spinners', component: Spinners },
  { exact: true, path: '/ui/basic/toasts', name: 'Toasts', component: Toasts },
  { exact: true, path: '/ui/basic/extraUi', name: 'ExtraUi', component: ExtraUi },
  { exact: true, path: '/ui/basic/tooltipPopover', name: 'TooltipPopover', component: TooltipPopover },
  { exact: true, path: '/ui/basic/typography', name: 'Typography', component: Typography },
  { exact: true, path: '/ui/basic/collapse', name: 'Collapse', component: Collapse },
  /* UI Advance */
  { exact: true, path: '/ui/advance/sweetalert', name: 'Sweetalert', component: Sweetalert },
  //{ exact: true, path: "/ui/advance/gridstack", name: "Gridstack", component: Gridstack },
  { exact: true, path: '/ui/advance/modalAdbance', name: 'ModalAdbance', component: ModalAdbance },
  { exact: true, path: '/ui/advance/notification', name: 'Notification', component: Notification },
  { exact: true, path: '/ui/advance/nestable', name: 'Nestable', component: Nestable },
  { exact: true, path: '/ui/advance/pnotify', name: 'Pnotify', component: Pnotify },
  { exact: true, path: '/ui/advance/rating', name: 'Rating', component: Rating },
  /* { exact: true, path: "/ui/advance/rangeslider", name: "Rangeslider", component: Rangeslider },
  { exact: true, path: "/ui/advance/sliders", name: "Sliders", component: Sliders },
  { exact: true, path: "/ui/advance/tour", name: "Tour", component: Tour },
  { exact: true, path: "/ui/advance/treeview", name: "Treeview", component: Treeview },
  { exact: true, path: "/ui/advance/toolbar", name: "Toolbar", component: Toolbar },
  { exact: true, path: "/ui/advance/usercard", name: "Usercard", component: Usercard },
  { exact: true, path: "/ui/advance/timeline", name: "Timeline", component: Timeline },
   */
  /* App */
  { exact: true, path: '/app/note', name: 'Note', component: Note },
  { exact: true, path: '/app/chat', name: 'Chat', component: Chat },
  /* Icon */
  { exact: true, path: '/icon/feather', name: 'Feather Icons', component: FeatherIcons },
  { exact: true, path: '/icon/flag', name: 'Flag Icons', component: FlagIcons },
  /* Form */
  { exact: true, path: '/form/basic/elements', name: 'Form Elements', component: FormElements },
  { exact: true, path: '/form/advance/elements', name: 'FormE lements Advance', component: FormElementsAdvance },
  { exact: true, path: '/form/validation', name: 'Form Validation', component: FormValidation },
  { exact: true, path: '/form/masking', name: 'Form Masking', component: FormMasking },
  { exact: true, path: '/form/wizard', name: 'Form Wizard', component: FormWizard },
  /* Extension */
  { exact: true, path: '/extension/fileUpload', name: 'FileUpload', component: FileUpload },
  { exact: true, path: '/extension/image-cropper', name: 'Image Cropper', component: ImageCropper },
  /* Other pages */
  { exact: true, path: '/page/sample-page', name: 'Sample Page', component: SamplePage },
  { exact: true, path: '/page/animations', name: 'Animations', component: Animations },

  /* Layouts */
  { exact: true, path: '/layout/layout2', name: 'Layout2', component: Layout2 },
  { exact: true, path: '/layout/layout3', name: 'Layout3', component: Layout3 },
  { exact: true, path: '/layout/layout4', name: 'Layout4', component: Layout4 },
  { exact: true, path: '/layout/layout5', name: 'Layout5', component: Layout5 },
  { exact: true, path: '/layout/layout6', name: 'Layout6', component: Layout6 },
  //{ exact: true, path: "/layout/layout7", name: "Layout7", component: Layout7 },
  { exact: true, path: '/layout/layout8', name: 'Layout8', component: Layout8 },
  /*   { exact: true, path: "/layout/layout9", name: "Layout9", component: Layout9 },
    { exact: true, path: "/layout/layout10", name: "Layout10", component: Layout10 },
    { exact: true, path: "/layout/layout11", name: "Layout11", component: Layout11 },
    { exact: true, path: "/layout/layout12", name: "Layout12", component: Layout12 }, */
]

export default RouteList
