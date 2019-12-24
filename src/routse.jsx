import { lazy } from 'react';

const Analytic = lazy(() => import("./views/dashboard/analytic"))
const Sales = lazy(() => import("./views/dashboard/sales"))
const Crypto = lazy(() => import("./views/dashboard/crypto"))
const Project = lazy(() => import("./views/dashboard/project"))
const HelpDesk = lazy(() => import("./views/dashboard/helpdesk"))
const StatistcWidget = lazy(() => import("./views/widget/statisticWidget"))
const DataWidget = lazy(() => import("./views/widget/dataWidget"))
const ChartWidget = lazy(() => import("./views/widget/chartWidget"))
const Alarts = lazy(() => import("./views/ui-element/basic/alarts"))
const Buttons = lazy(() => import("./views/ui-element/basic/buttons"))
const Badges = lazy(() => import("./views/ui-element/basic/badges"))
const BreadcrumbPagination = lazy(() => import("./views/ui-element/basic/breadcrumbPagination"))
const Cards = lazy(() => import("./views/ui-element/basic/cards"))
const Carousel = lazy(() => import("./views/ui-element/basic/carousel"))
const BasicGrid = lazy(() => import("./views/ui-element/basic/basicGrid"))
const Modals = lazy(() => import("./views/ui-element/basic/modals"))
const NavsTabs = lazy(() => import("./views/ui-element/basic/navsTabs"))
const Progresses = lazy(() => import("./views/ui-element/basic/progress"))
const Spinners = lazy(() => import("./views/ui-element/basic/spinners"))
const Toasts = lazy(() => import("./views/ui-element/basic/toasts"))
const ExtraUi = lazy(() => import("./views/ui-element/basic/othersUi"))
const TooltipPopover = lazy(() => import("./views/ui-element/basic/tooltipPopover"))
const Typography = lazy(() => import("./views/ui-element/basic/typography"))
const Collapse = lazy(() => import("./views/ui-element/basic/collapse"))
const Sweetalert = lazy(() => import("./views/ui-element/advance/sweetalert"))
const Datepicker = lazy(() => import("./views/ui-element/advance/datepicker"))
//const Gridstack = lazy(() => import("./views/ui-element/advance/gridstack"))
const Lightbox = lazy(() => import("./views/ui-element/advance/lightbox"))
const ModalAdbance = lazy(() => import("./views/ui-element/advance/modal"))
const Notification = lazy(() => import("./views/ui-element/advance/notification"))
const Nestable = lazy(() => import("./views/ui-element/advance/nestable"))
const Pnotify = lazy(() => import("./views/ui-element/advance/pnotify"))
const Rating = lazy(() => import("./views/ui-element/advance/rating"))
/* const Rangeslider = lazy(() => import("./views/ui-element/advance/rangeslider"))
const Sliders = lazy(() => import("./views/ui-element/advance/sliders"))
const Highlighter = lazy(() => import("./views/ui-element/advance/highlighter"))
const Tour = lazy(() => import("./views/ui-element/advance/tours"))
const Treeview = lazy(() => import("./views/ui-element/advance/treeview"))
const Toolbar = lazy(() => import("./views/ui-element/advance/toolbar"))
const Usercard = lazy(() => import("./views/ui-element/advance/usercard"))
const Timeline = lazy(() => import("./views/ui-element/advance/timeline")) */
const Todos = lazy(() => import("./views/todo/todo"))
const Note = lazy(() => import("./views/note/note"))
const FormElements = lazy(() => import("./views/forms/elements/formElements"))
const FormElementsAdvance = lazy(() => import("./views/forms/elements-advance/formElementsAdvance"))
const FormValidation = lazy(() => import("./views/forms/validation/formValidation"))
const FormMasking = lazy(() => import("./views/forms/masking/formMasking"))
const FormWizard = lazy(() => import("./views/forms/wizard/formWizard"))
const BasicBtTable = lazy(() => import("./views/table/bootstrap/basicTable"))
const SizingTable = lazy(() => import("./views/table/bootstrap/sizingTable"))
const BorderTable = lazy(() => import("./views/table/bootstrap/borderTable"))
const StylingTable = lazy(() => import("./views/table/bootstrap/stylingTable"))
const FullCalendar = lazy(() => import("./views/calendar/fullCalendar"))
const FileUpload = lazy(() => import("./views/fileupload/fileUpload"))
const TinymceEditor = lazy(() => import("./views/editor/tinymceEditor"))
const CkClassicEditor = lazy(() => import("./views/editor/ck-editor/ckClassicEditor"))
const CkBalloonEditor = lazy(() => import("./views/editor/ck-editor/ckBallonEditor"))
const CkInlineEditor = lazy(() => import("./views/editor/ck-editor/ckInlineEditor"))
const CkDocumentEditor = lazy(() => import("./views/editor/ck-editor/ckDocumnetEditor"))
const ImageCropper = lazy(() => import("./views/cropper/imageCropper"))
const AmCharts = lazy(() => import("./views/chart/amChart"))
const ChartJs = lazy(() => import("./views/chart/chartJs"))
const EChart = lazy(() => import("./views/chart/eChart"))
const GoogleChart = lazy(() => import("./views/chart/googleChart"))
const PeityChart = lazy(() => import("./views/chart/peityChart"))
const GoogleMap = lazy(() => import("./views/maps/googleMap/googleMap"))
const StaticVectorMap = lazy(() => import("./views/maps/vectorMap/vectorMap"))
const GalleryGrid = lazy(() => import("./views/gallery/galleryGrid"))
const GalleryMasonry = lazy(() => import("./views/gallery/galleryMasonry"))
const GalleryAdvance = lazy(() => import("./views/gallery/galleryAdvance"))
const Chat = lazy(() => import("./views/chat/chat"))
const Email = lazy(() => import("./views/email/email"))
const SamplePage = lazy(() => import("./views/others/samplePage"))
const FeatherIcons = lazy(() => import("./views/icons/iconFeather"))
const FlagIcons = lazy(() => import("./views/icons/iconFlag"))
const Animations = lazy(() => import("./views/ui-element/animations"))
const Invoice = lazy(() => import("./views/invoice/invoice"))
const InvoiceSummary = lazy(() => import("./views/invoice/invoiceSummary"))
const InvoiceList = lazy(() => import("./views/invoice/invoiceList"))
const SearchOne = lazy(() => import("./views/search/search1"))
const SearchTwo = lazy(() => import("./views/search/search2"))
const SearchThree = lazy(() => import("./views/search/search3"))
const FooTable = lazy(() => import("./views/table/footable/fooTable"))
const EditableTable = lazy(() => import("./views/table/editable/editableTable"))
const DataTable = lazy(() => import("./views/table/datatable/dataTable"))
const TaskList = lazy(() => import("./views/task/taskList"))
const TaskBoard = lazy(() => import("./views/task/taskBoard"))
const TaskDetails = lazy(() => import("./views/task/taskDetail"))
const StaticLayout = lazy(() => import("./views/layouts/static"))
const FixedLayout = lazy(() => import("./views/layouts/fixed"))
const FixedNavbar = lazy(() => import("./views/layouts/navBarFixes"))
const CollapesMenu = lazy(() => import("./views/layouts/collapesMenu"))
const TemplateLayout = lazy(() => import("./views/prebuild/horizontal"))
const BoxLayout = lazy(() => import("./views/layouts/box"))
const RtlLayout = lazy(() => import("./views/layouts/rtl"))
const LightLayout = lazy(() => import("./views/layouts/light"))
const DarkLayout = lazy(() => import("./views/layouts/dark"))
const ColorIcon = lazy(() => import("./views/layouts/colorIcon"))
const Layout2 = lazy(() => import("./views/prebuild/layout2"))
const Layout3 = lazy(() => import("./views/prebuild/layout3"))
const Layout4 = lazy(() => import("./views/prebuild/layout4"))
const Layout5 = lazy(() => import("./views/prebuild/layout5"))
const Layout6 = lazy(() => import("./views/prebuild/layout6"))
//const Layout7 = lazy(() => import("./views/prebuild/layout7"))
const Layout8 = lazy(() => import("./views/prebuild/layout8"))
/* const Layout9 = lazy(() => import("./views/prebuild/layout9"))
const Layout10 = lazy(() => import("./views/prebuild/layout10"))
const Layout11 = lazy(() => import("./views/prebuild/layout11"))
const Layout12 = lazy(() => import("./views/prebuild/layout12")) */


const RouteList = [
  /* Dashboard */
  { exact: true, path: "/dashboard/default", name: "Analytic", component: Analytic },
  { exact: true, path: "/dashboard/sales", name: "Sales", component: Sales },
  { exact: true, path: "/dashboard/crypto", name: "Crypto", component: Crypto },
  { exact: true, path: "/dashboard/project", name: "Project", component: Project },
  { exact: true, path: "/dashboard/helpDesk", name: "HelpDesk", component: HelpDesk },
  { exact: true, path: "/widget/statistc", name: "Statistc Widget", component: StatistcWidget },
  { exact: true, path: "/widget/data", name: "Data Widget", component: DataWidget },
  { exact: true, path: "/widget/chart", name: "Chart Widget", component: ChartWidget },
  /* Layout */
  { exact: true, path: "/layout/static", name: "Static", component: StaticLayout },
  { exact: true, path: "/layout/fixed", name: "fixed", component: FixedLayout },
  { exact: true, path: "/layout/navbar-fixed", name: "Nav Fixed", component: FixedNavbar },
  { exact: true, path: "/layout/collapse-menu", name: "Nav collapse", component: CollapesMenu },
  { exact: true, path: "/layout/horizontal", name: "Nav collapse", component: TemplateLayout },
  { exact: true, path: "/layout/box", name: "Box Layout", component: BoxLayout },
  { exact: true, path: "/layout/rtl", name: "Rtl Layout", component: RtlLayout },
  { exact: true, path: "/layout/light", name: "Light Layout", component: LightLayout },
  { exact: true, path: "/layout/dark", name: "Dark Layout", component: DarkLayout },
  { exact: true, path: "/layout/color-icon", name: "Color Icon", component: ColorIcon },
  /* UI basic */
  { exact: true, path: "/ui/basic/alarts", name: "Alarts", component: Alarts },
  { exact: true, path: "/ui/basic/buttons", name: "Buttons", component: Buttons },
  { exact: true, path: "/ui/basic/badges", name: "Badges", component: Badges },
  { exact: true, path: "/ui/basic/breadcrumb-pagination", name: "Breadcrumb Pagination", component: BreadcrumbPagination },
  { exact: true, path: "/ui/basic/cards", name: "Cards", component: Cards },
  { exact: true, path: "/ui/basic/carousel", name: "Carousel", component: Carousel },
  { exact: true, path: "/ui/basic/grid", name: "Basic Grid", component: BasicGrid },
  { exact: true, path: "/ui/basic/modals", name: "Modals", component: Modals },
  { exact: true, path: "/ui/basic/navs-tabs", name: "Navs Tabs", component: NavsTabs },
  { exact: true, path: "/ui/basic/progresses", name: "Progresses", component: Progresses },
  { exact: true, path: "/ui/basic/spinners", name: "Spinners", component: Spinners },
  { exact: true, path: "/ui/basic/toasts", name: "Toasts", component: Toasts },
  { exact: true, path: "/ui/basic/extraUi", name: "ExtraUi", component: ExtraUi },
  { exact: true, path: "/ui/basic/tooltipPopover", name: "TooltipPopover", component: TooltipPopover },
  { exact: true, path: "/ui/basic/typography", name: "Typography", component: Typography },
  { exact: true, path: "/ui/basic/collapse", name: "Collapse", component: Collapse },
  /* UI Advance */
  { exact: true, path: "/ui/advance/sweetalert", name: "Sweetalert", component: Sweetalert },
  { exact: true, path: "/ui/advance/datepicker", name: "Datepicker", component: Datepicker },
  //{ exact: true, path: "/ui/advance/gridstack", name: "Gridstack", component: Gridstack },
  { exact: true, path: "/ui/advance/lightbox", name: "Lightbox", component: Lightbox },
  { exact: true, path: "/ui/advance/modalAdbance", name: "ModalAdbance", component: ModalAdbance },
  { exact: true, path: "/ui/advance/notification", name: "Notification", component: Notification },
  { exact: true, path: "/ui/advance/nestable", name: "Nestable", component: Nestable },
  { exact: true, path: "/ui/advance/pnotify", name: "Pnotify", component: Pnotify },
  { exact: true, path: "/ui/advance/rating", name: "Rating", component: Rating },
  /* { exact: true, path: "/ui/advance/rangeslider", name: "Rangeslider", component: Rangeslider },
  { exact: true, path: "/ui/advance/sliders", name: "Sliders", component: Sliders },
  { exact: true, path: "/ui/advance/highlighter", name: "Highlighter", component: Highlighter },
  { exact: true, path: "/ui/advance/tour", name: "Tour", component: Tour },
  { exact: true, path: "/ui/advance/treeview", name: "Treeview", component: Treeview },
  { exact: true, path: "/ui/advance/toolbar", name: "Toolbar", component: Toolbar },
  { exact: true, path: "/ui/advance/usercard", name: "Usercard", component: Usercard },
  { exact: true, path: "/ui/advance/timeline", name: "Timeline", component: Timeline },
   */
  /* App */
  { exact: true, path: "/app/todos", name: "Todos", component: Todos },
  { exact: true, path: "/app/note", name: "Note", component: Note },
  { exact: true, path: "/app/chat", name: "Chat", component: Chat },
  { exact: true, path: "/app/email", name: "Email", component: Email },
  /* Icon */
  { exact: true, path: "/icon/feather", name: "Feather Icons", component: FeatherIcons },
  { exact: true, path: "/icon/flag", name: "Flag Icons", component: FlagIcons },
  /* Form */
  { exact: true, path: "/form/basic/elements", name: "Form Elements", component: FormElements },
  { exact: true, path: "/form/advance/elements", name: "FormE lements Advance", component: FormElementsAdvance },
  { exact: true, path: "/form/validation", name: "Form Validation", component: FormValidation },
  { exact: true, path: "/form/masking", name: "Form Masking", component: FormMasking },
  { exact: true, path: "/form/wizard", name: "Form Wizard", component: FormWizard },
  /* Table */
  { exact: true, path: "/table/bt/basic", name: "Basic Table", component: BasicBtTable },
  { exact: true, path: "/table/bt/sizing", name: "Sizing Table", component: SizingTable },
  { exact: true, path: "/table/bt/border", name: "Border Table", component: BorderTable },
  { exact: true, path: "/table/bt/styling", name: "Styling Table", component: StylingTable },
  { exact: true, path: "/table/data", name: "Data Table", component: DataTable },
  { exact: true, path: "/table/data/editable", name: "Editable Table", component: EditableTable },
  { exact: true, path: "/table/data/foo", name: "Foo Table", component: FooTable },
  /* Extension */
  { exact: true, path: "/extension/calendar", name: "Calendar", component: FullCalendar },
  { exact: true, path: "/extension/fileUpload", name: "FileUpload", component: FileUpload },
  { exact: true, path: "/extension/image-cropper", name: "Image Cropper", component: ImageCropper },
  /* Editor */
  { exact: true, path: "/editor/tinymce", name: "Tinymce Editor", component: TinymceEditor },
  { exact: true, path: "/editor/ck/classic", name: "Ck Classic Editor", component: CkClassicEditor },
  { exact: true, path: "/editor/ck/inline", name: "Ck Inline Editor", component: CkInlineEditor },
  { exact: true, path: "/editor/ck/balloon", name: "Ck Balloon Editor", component: CkBalloonEditor },
  { exact: true, path: "/editor/ck/document", name: "Ck Document Editor", component: CkDocumentEditor },
  /* Chart */
  { exact: true, path: "/chart/amchartjs", name: "AmCharts", component: AmCharts },
  { exact: true, path: "/chart/chartjs", name: "ChartJs", component: ChartJs },
  { exact: true, path: "/chart/echart", name: "EChart", component: EChart },
  { exact: true, path: "/chart/googlechart", name: "GoogleChart", component: GoogleChart },
  { exact: true, path: "/chart/peitychart", name: "PeityChart", component: PeityChart },
  /* Map */
  { exact: true, path: "/map/google", name: "Google Map", component: GoogleMap },
  { exact: true, path: "/map/vector", name: "Vector Map", component: StaticVectorMap },
  /* Image Gallery */
  { exact: true, path: "/gallery/grid", name: "Gallery Grid", component: GalleryGrid },
  { exact: true, path: "/gallery/masonry", name: "Gallery Masonry", component: GalleryMasonry },
  { exact: true, path: "/gallery/advance", name: "Gallery Advance", component: GalleryAdvance },
  /* Other pages */
  { exact: true, path: "/page/sample-page", name: "Sample Page", component: SamplePage },
  { exact: true, path: "/page/animations", name: "Animations", component: Animations },
  /* Invoice */
  { exact: true, path: "/invoice", name: "Invoice", component: Invoice },
  { exact: true, path: "/invoice/summary", name: "Invoice Summary", component: InvoiceSummary },
  { exact: true, path: "/invoice/list", name: "Invoice List", component: InvoiceList },
  /* Search */
  { exact: true, path: "/search/one", name: "Search", component: SearchOne },
  { exact: true, path: "/search/two", name: "Search", component: SearchTwo },
  { exact: true, path: "/search/three", name: "Search", component: SearchThree },
  /* Task */
  { exact: true, path: "/task/list", name: "Task List", component: TaskList },
  { exact: true, path: "/task/board", name: "Task Board", component: TaskBoard },
  { exact: true, path: "/task/details", name: "Task Details", component: TaskDetails },

  /* Layouts */
  { exact: true, path: "/layout/layout2", name: "Layout2", component: Layout2 },
  { exact: true, path: "/layout/layout3", name: "Layout3", component: Layout3 },
  { exact: true, path: "/layout/layout4", name: "Layout4", component: Layout4 },
  { exact: true, path: "/layout/layout5", name: "Layout5", component: Layout5 },
  { exact: true, path: "/layout/layout6", name: "Layout6", component: Layout6 },
  //{ exact: true, path: "/layout/layout7", name: "Layout7", component: Layout7 },
  { exact: true, path: "/layout/layout8", name: "Layout8", component: Layout8 },
  /*   { exact: true, path: "/layout/layout9", name: "Layout9", component: Layout9 },
    { exact: true, path: "/layout/layout10", name: "Layout10", component: Layout10 },
    { exact: true, path: "/layout/layout11", name: "Layout11", component: Layout11 },
    { exact: true, path: "/layout/layout12", name: "Layout12", component: Layout12 }, */

]


export default RouteList