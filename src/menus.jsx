export default {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'collapse',
          icon: 'feather icon-home',
          children: [
            {
              id: 'default',
              title: 'Default',
              type: 'item',
              url: '/dashboard/default'
            },
            {
              id: 'sales',
              title: 'Sales',
              type: 'item',
              url: '/dashboard/sales'
            },
            {
              id: 'crypto',
              title: 'Crypto',
              type: 'item',
              url: '/dashboard/crypto'
            },
            {
              id: 'project',
              title: 'Project',
              type: 'item',
              url: '/dashboard/project'
            },
            {
              id: 'helpDesk',
              title: 'HelpDesk',
              type: 'item',
              url: '/dashboard/helpDesk',
              badge: {
                title: 'NEW',
                type: 'label-danger'
              }
            }
          ]
        },
        {
          id: 'layout',
          title: 'Page Layouts',
          type: 'collapse',
          icon: 'feather icon-layout',
          children: [
            {
              id: 'vertical',
              title: 'Vertical',
              type: 'collapse',
              children: [
                {
                  id: 'v-static',
                  title: 'Static',
                  type: 'item',
                  url: '/layout/static',
                  target: true,
                },
                {
                  id: 'v-fixed',
                  title: 'Fixed',
                  type: 'item',
                  url: '/layout/fixed',
                  target: true,
                },
                {
                  id: 'v-nav-fixed',
                  title: 'Navbar Fixed',
                  type: 'item',
                  url: '/layout/navbar-fixed',
                  target: true,
                },
                {
                  id: 'v-collapse-menu',
                  title: 'Collapse Menu',
                  type: 'item',
                  url: '/layout/collapse-menu',
                  target: true,
                }
              ]
            },
            {
              id: 'prebuild',
              title: 'Prebuild layout',
              type: 'collapse',
              children: [
                {
                  id: 'layout2',
                  title: 'Layout2',
                  type: 'item',
                  url: '/layout/layout2',
                  target: true,
                },
                {
                  id: 'layout3',
                  title: 'Layout3',
                  type: 'item',
                  url: '/layout/layout3',
                  target: true,
                },
                {
                  id: 'layout4',
                  title: 'Layout4',
                  type: 'item',
                  url: '/layout/layout4',
                  target: true,
                },
                {
                  id: 'layout5',
                  title: 'Layout5',
                  type: 'item',
                  url: '/layout/layout5',
                  target: true,
                },
                {
                  id: 'layout6',
                  title: 'Layout6',
                  type: 'item',
                  url: '/layout/layout6',
                  target: true,
                },
                /* {
                  id: 'layout7',
                  title: 'Layout7',
                  type: 'item',
                  url: '/layout/layout7',
                  target: true,
                }, */
                {
                  id: 'layout8',
                  title: 'Layout8',
                  type: 'item',
                  url: '/layout/layout8',
                  target: true,
                },
               /*  {
                  id: 'layout9',
                  title: 'Layout9',
                  type: 'item',
                  url: '/layout/layout9',
                  target: true,
                },
                {
                  id: 'layout10',
                  title: 'Layout10',
                  type: 'item',
                  url: '/layout/layout10',
                  target: true,
                },
                {
                  id: 'layout11',
                  title: 'Layout11',
                  type: 'item',
                  url: '/layout/layout11',
                  target: true,
                },
                {
                  id: 'layout12',
                  title: 'Layout12',
                  type: 'item',
                  url: '/layout/layout12',
                  target: true,
                }, */
              ]
            },
            {
              id: 'horizontal',
              title: 'Horizontal',
              type: 'item',
              url: '/layout/horizontal',
              target: true
            },
            {
              id: 'box-layout',
              title: 'Box Layout',
              type: 'item',
              url: '/layout/box',
              target: true
            },
            {
              id: 'rtl',
              title: 'RTL',
              type: 'item',
              url: '/layout/rtl',
              target: true
            },
            {
              id: 'light-layout',
              title: 'Light Layout',
              type: 'item',
              url: '/layout/light',
              target: true
            },
            {
              id: 'dark-layout',
              title: 'Dark Layout',
              type: 'item',
              url: '/layout/dark',
              target: true,
              badge: {
                title: 'Hot',
                type: 'label-danger'
              }
            },
            {
              id: 'color-icon',
              title: 'Color Icon',
              type: 'item',
              url: '/layout/color-icon',
              target: true
            }
          ]
        },
        {
          id: 'widget',
          title: 'Widget',
          type: 'collapse',
          icon: 'feather icon-layers',
          badge: {
            title: '100+',
            type: 'label-success'
          },
          children: [
            {
              id: 'statistic',
              title: 'Statistic',
              type: 'item',
              url: '/widget/statistc'
            },
            {
              id: 'data',
              title: 'Data',
              type: 'item',
              url: '/widget/data'
            },
            {
              id: 'chart',
              title: 'Chart',
              type: 'item',
              url: '/widget/chart'
            }
          ]
        }
      ]
    },
    {
      id: 'ui-element',
      title: 'UI ELEMENT',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'basic',
          title: 'Basic',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'alert',
              title: 'Alert',
              type: 'item',
              url: '/ui/basic/alarts'
            },
            {
              id: 'button',
              title: 'Button',
              type: 'item',
              url: '/ui/basic/buttons'
            },
            {
              id: 'badges',
              title: 'Badges',
              type: 'item',
              url: '/ui/basic/badges'
            },
            {
              id: 'breadcrumb-pagination',
              title: 'Breadcrumb & Pagination',
              type: 'item',
              url: '/ui/basic/breadcrumb-pagination'
            },
            {
              id: 'cards',
              title: 'Cards',
              type: 'item',
              url: '/ui/basic/cards'
            },
            {
              id: 'carousel',
              title: 'Carousel',
              type: 'item',
              url: '/ui/basic/carousel'
            },
            {
              id: 'grid-system',
              title: 'Grid System',
              type: 'item',
              url: '/ui/basic/grid'
            },
            {
              id: 'progress',
              title: 'Progress',
              type: 'item',
              url: '/ui/basic/progresses'
            },
            {
              id: 'modal',
              title: 'Modal',
              type: 'item',
              url: '/ui/basic/modals'
            },
            {
              id: 'spinner',
              title: 'Spinner',
              type: 'item',
              url: '/ui/basic/spinners',
              badge: {
                title: 'New',
                type: 'label-danger'
              },
            },
            {
              id: 'tabs-pills',
              title: 'Tabs & Pills',
              type: 'item',
              url: '/ui/basic/navs-tabs'
            },
            {
              id: 'tooltip-popovers',
              title: 'Tooltip & Popovers',
              type: 'item',
              url: '/ui/basic/tooltipPopover'
            },
            {
              id: 'toasts',
              title: 'Toasts',
              type: 'item',
              url: '/ui/basic/toasts',
              badge: {
                title: 'New',
                type: 'label-danger'
              },
            },
            {
              id: 'typography',
              title: 'Typography',
              type: 'item',
              url: '/ui/basic/typography'
            },
            {
              id: 'other',
              title: 'Extra',
              type: 'item',
              url: '/ui/basic/extraUi'
            }
          ]
        },
        {
          id: 'advance',
          title: 'Advance',
          type: 'collapse',
          icon: 'feather icon-gitlab',
          children: [
            {
              id: 'sweet-alert',
              title: 'Sweet Alert',
              type: 'item',
              url: '/ui/advance/sweetalert'
            },
            {
              id: 'datepicker',
              title: 'Datepicker',
              type: 'item',
              url: '/ui/advance/datepicker'
            },
            /* {
              id: 'task-board',
              title: 'ridstack',
              type: 'item',
              url: '"/ui/advance/gridstack'
            }, */
            {
              id: 'light-box',
              title: 'Light Box',
              type: 'item',
              url: '/ui/advance/lightbox'
            },
            {
              id: 'adv-modal',
              title: 'Modal',
              type: 'item',
              url: '/ui/advance/modalAdbance'
            },
            {
              id: 'notification',
              title: 'Notification',
              type: 'item',
              url: '/ui/advance/notification'
            },
            {
              id: 'nestable',
              title: 'Nestable',
              type: 'item',
              url: '/ui/advance/nestable'
            },
            {
              id: 'p-notify',
              title: 'P-Notify',
              type: 'item',
              url: '/ui/advance/pnotify'
            },
            {
              id: 'rating',
              title: 'Rating',
              type: 'item',
              url: '/ui/advance/rating'
            },
            /* {
              id: 'range-slider',
              title: 'Range Slider',
              type: 'item',
              url: '/ui/advance/rangeslider'
            },
            {
              id: 'slider',
              title: 'Slider',
              type: 'item',
              url: '/ui/advance/sliders'
            },
            {
              id: 'syntax highlighter',
              title: 'Syntax Highlighter',
              type: 'item',
              url: '/ui/advance/highlighter'
            },
            {
              id: 'tour',
              title: 'Tour',
              type: 'item',
              url: '/ui/advance/tour'
            },
            {
              id: 'tree-view',
              title: 'Tree View',
              type: 'item',
              url: '/ui/advance/treeview'
            },
            {
              id: 'toolbar',
              title: 'Toolbar',
              type: 'item',
              url: '/ui/advance/toolbar'
            },
            {
              id: 'usercard',
              title: 'User Card',
              type: 'item',
              url: '/ui/advance/usercard'
            },
            {
              id: 'timeline',
              title: 'Timeline',
              type: 'item',
              url: '/ui/advance/timeline'
            } */
          ]
        },
        {
          id: 'animations',
          title: 'Animations',
          type: 'item',
          icon: 'feather icon-aperture',
          url: '/page/animations',
        },
        {
          id: 'icons',
          title: 'Icons',
          type: 'collapse',
          icon: 'feather icon-feather',
          children: [
            {
              id: 'feather',
              title: 'Feather',
              type: 'item',
              url: '/icon/feather',
              badge: {
                title: 'NEW',
                type: 'label-danger'
              }
            },
            {
              id: 'flag',
              title: 'Flag',
              type: 'item',
              url: '/icon/flag'
            }
          ]
        }
      ]
    },
    {
      id: 'Forms',
      title: 'Forms',
      type: 'group',
      icon: 'icon-group',
      children: [
        {
          id: 'forms',
          title: 'Forms',
          type: 'collapse',
          icon: 'feather icon-file-text',
          children: [
            {
              id: 'form-basic',
              title: 'Form Elements',
              type: 'item',
              url: '/form/basic/elements'
            },
            {
              id: 'form-advance',
              title: 'Form Advance',
              type: 'item',
              url: '/form/advance/elements'
            },
            {
              id: 'form-validation',
              title: 'Form Validation',
              type: 'item',
              url: '/form/validation'
            },
            {
              id: 'form-masking',
              title: 'Form Masking',
              type: 'item',
              url: '/form/masking'
            },
            {
              id: 'form-wizard',
              title: 'Form Wizard',
              type: 'item',
              url: '/form/wizard'
            }
          ]
        }
      ]
    },
    {
      id: 'table',
      title: 'Table',
      type: 'group',
      icon: 'icon-table',
      children: [
        {
          id: 'tables',
          title: 'Table',
          type: 'collapse',
          icon: 'feather icon-align-justify',
          children: [
            {
              id: 'bootstrap',
              title: 'Bootstrap Basic Table',
              type: 'item',
              url: '/table/bt/basic'
            },
            {
              id: 'Sizing-table',
              title: 'Bootstrap Sizing Tables',
              type: 'item',
              url: '/table/bt/sizing'
            },
            {
              id: 'Border-table',
              title: 'Bootstrap Border Tables',
              type: 'item',
              url: '/table/bt/border'
            },
            {
              id: 'Styling-table',
              title: 'Bootstrap Styling Tables',
              type: 'item',
              url: '/table/bt/styling'
            }
          ]
        }
      ]
    },
    {
      id: 'Data-table',
      title: 'Data table',
      type: 'item',
      icon: 'feather icon-package',
      url: '/table/data',
    },
    {
      id: 'editable-table',
      title: 'Editable table',
      type: 'item',
      icon: 'feather icon-grid',
      url: '/table/data/editable',
    },
    {
      id: 'foo-table',
      title: 'Foo table',
      type: 'item',
      icon: 'feather icon-list',
      url: '/table/data/foo',
    },
    {
      id: 'chart-maps',
      title: 'Chart & Maps',
      type: 'group',
      icon: 'icon-charts',
      children: [
        {
          id: 'charts',
          title: 'Charts',
          type: 'collapse',
          icon: 'feather icon-pie-chart',
          children: [
            {
              id: 'amchart',
              title: 'AmChart4',
              type: 'item',
              url: '/chart/amchartjs'
            },
            {
              id: 'chart-js',
              title: 'Chart JS',
              type: 'item',
              url: '/chart/chartjs'
            },
            {
              id: 'e-chart',
              title: 'E-Chart',
              type: 'item',
              url: '/chart/echart'
            },
            {
              id: 'google',
              title: 'Google',
              type: 'item',
              url: '/chart/googlechart'
            },
            {
              id: 'peity',
              title: 'Peity',
              type: 'item',
              url: '/chart/peitychart'
            }
          ]
        },
        {
          id: 'maps',
          title: 'Maps',
          type: 'collapse',
          icon: 'feather icon-map',
          children: [
            {
              id: 'google',
              title: 'Google',
              type: 'item',
              url: '/map/google'
            },
            {
              id: 'vector',
              title: 'Vector',
              type: 'item',
              url: '/map/vector'
            }
          ]
        },
        /* {
          id: 'landing-page',
          title: 'Landing Page',
          type: 'item',
          icon: 'feather icon-navigation-2',
          url: '/landing',
          classes: 'nav-item',
          target: true,
          breadcrumbs: false
        } */
      ]
    },
    {
      id: 'pages',
      title: 'Pages',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'auth',
          title: 'Authentication',
          type: 'collapse',
          icon: 'feather icon-lock',
          children: [
            {
              id: 'signup-1',
              title: 'Sign up',
              type: 'item',
              url: '/maint/singup1',
              target: true,
              breadcrumbs: false
            },
            {
              id: 'signup-2',
              title: 'Sign up v2',
              type: 'item',
              url: '/maint/singin2',
              badge: {
                title: 'New',
                type: 'label-primary'
              },
              target: true,
              breadcrumbs: false
            },
            {
              id: 'signin',
              title: 'Sign in',
              type: 'item',
              url: '/maint/auth-singin',
              target: true,
              breadcrumbs: false
            },
            {
              id: 'signin-2',
              title: 'Sign in v2',
              type: 'item',
              url: '/maint/singin1',
              target: true,
              breadcrumbs: false,
              badge: {
                title: 'New',
                type: 'label-primary'
              },
            },
            {
              id: 'signin-3',
              title: 'Sign in v3',
              type: 'item',
              url: '/maint/singin2',
              badge: {
                title: 'New',
                type: 'label-primary'
              },
              target: true,
              breadcrumbs: false
            },
            {
              id: 'reset-password-1',
              title: 'Reset Password',
              type: 'item',
              url: '/maint/reset',
              target: true,
              breadcrumbs: false
            },
            {
              id: 'change-password',
              title: 'Change Password',
              type: 'item',
              url: '/maint/change-password',
              target: true,
              breadcrumbs: false
            },
            {
              id: 'profile-settings',
              title: 'Profile Settings',
              type: 'item',
              url: '/maint/profile-setting',
              target: true,
              breadcrumbs: false
            },
          ]
        },
        {
          id: 'maintenance',
          title: 'Maintenance',
          type: 'collapse',
          icon: 'feather icon-sliders',
          children: [
            {
              id: 'error',
              title: 'Error',
              type: 'item',
              url: '/maint/error-page',
              target: true,
              breadcrumbs: false
            },
            {
              id: 'offline-ui',
              title: 'Offline UI',
              type: 'item',
              url: '/maint/offline-ui',
              target: true,
              breadcrumbs: false
            },
            {
              id: 'coming-soon',
              title: 'Coming Soon',
              type: 'item',
              url: '/maint/comming-soon',
              target: true,
              breadcrumbs: false
            }
          ]
        }
      ]
    },
    {
      id: 'app',
      title: 'App',
      type: 'group',
      icon: 'icon-app',
      children: [
        {
          id: 'message',
          title: 'Message',
          type: 'item',
          classes: 'nav-item',
          url: '/app/chat',
          icon: 'feather icon-message-circle'
        },
        {
          id: 'mail',
          title: 'Email',
          type: 'item',
          classes: 'nav-item',
          url: '/app/email',
          icon: 'feather icon-mail'
        },
        {
          id: 'task',
          title: 'Task',
          type: 'collapse',
          icon: 'feather icon-clipboard',
          children: [
            {
              id: 'task-list',
              title: 'Task List',
              type: 'item',
              url: '/task/list'
            },
            {
              id: 'task-board',
              title: 'Task Board',
              type: 'item',
              url: '/task/board'
            },
            {
              id: 'task-detail',
              title: 'Task Detail',
              type: 'item',
              url: '/task/details'
            }
          ]
        },
        {
          id: 'to-dos',
          title: 'Todo',
          type: 'collapse',
          icon: 'feather icon-check-square',
          children: [
            {
              id: 'todo',
              title: 'Todo',
              type: 'item',
              url: '/app/todos'
            },
            {
              id: 'notes',
              title: 'Notes',
              type: 'item',
              url: '/app/note'
            }
          ]
        },
        {
          id: 'gallery',
          title: 'Gallery',
          type: 'collapse',
          icon: 'feather icon-image',
          children: [
            {
              id: 'grid',
              title: 'Grid',
              type: 'item',
              url: '/gallery/grid'
            },
            {
              id: 'masonry',
              title: 'Masonry',
              type: 'item',
              url: '/gallery/masonry'
            },
            {
              id: 'advance-gallery',
              title: 'Advance',
              type: 'item',
              url: '/gallery/advance'
            }
          ]
        },
        {
          id: 'search',
          title: 'Search',
          type: 'collapse',
          icon: 'feather icon-search',
          badge: {
            title: 'New',
            type: 'label-info'
          },
          children: [
            {
              id: 'search1',
              title: 'search1',
              type: 'item',
              url: '/search/one'
            },
            {
              id: 'search2',
              title: 'search2',
              type: 'item',
              url: '/search/two'
            },
            {
              id: 'search3',
              title: 'search3',
              type: 'item',
              url: '/search/three'
            },
          ]
        }
      ]
    },
    {
      id: 'extension',
      title: 'Extension',
      type: 'group',
      icon: 'icon-extension',
      children: [
        {
          id: 'editor',
          title: 'Editor',
          type: 'collapse',
          icon: 'feather icon-file-plus',
          children: [
            {
              id: 'ck-editor',
              title: 'CK-Editor',
              type: 'collapse',
              children: [
                {
                  id: 'ck-classic',
                  title: 'Classic Editor',
                  type: 'item',
                  url: '/editor/ck/classic'
                },
                {
                  id: 'ck-balloon',
                  title: 'Balloon Editor',
                  type: 'item',
                  url: 'editor/ck/balloon'
                },
                {
                  id: 'ck-inline',
                  title: 'Inline Editor',
                  type: 'item',
                  url: '/editor/ck/inline'
                },
                {
                  id: 'ck-document',
                  title: 'Document Editor',
                  type: 'item',
                  url: '/editor/ck/document'
                }
              ]
            },
            {
              id: 'tinymce-editor',
              title: 'Tinymce Editor',
              type: 'item',
              url: '/editor/tinymce'
            }
          ]
        },
        {
          id: 'invoice',
          title: 'Invoice',
          type: 'collapse',
          icon: 'feather icon-file-minus',
          children: [
            {
              id: 'invoice-basic',
              title: 'Invoice',
              type: 'item',
              url: '/invoice'
            },
            {
              id: 'invoice-summary',
              title: 'Invoice Summary',
              type: 'item',
              url: '/invoice/summary'
            },
            {
              id: 'invoice-list',
              title: 'Invoice List',
              type: 'item',
              url: '/invoice/list'
            }
          ]
        },
        {
          id: 'full-calendar',
          title: 'Full Calendar',
          type: 'item',
          url: '/extension/calendar',
          classes: 'nav-item',
          icon: 'feather icon-calendar'
        },
        {
          id: 'file-upload',
          title: 'File Upload',
          type: 'item',
          url: '/extension/fileUpload',
          classes: 'nav-item',
          icon: 'feather icon-upload-cloud'
        },
        {
          id: 'image-cropper',
          title: 'Image Cropper',
          type: 'item',
          url: '/extension/image-cropper',
          classes: 'nav-item',
          icon: 'feather icon-scissors'
        }
      ]
    },
    {
      id: 'other',
      title: 'Other',
      type: 'group',
      icon: 'icon-other',
      children: [
        {
          id: 'menu-level',
          title: 'Menu Levels',
          type: 'collapse',
          icon: 'feather icon-menu',
          children: [
            {
              id: 'menu-level-1.1',
              title: 'Menu Level 1.1',
              type: 'item',
              url: '#!',
            },
            {
              id: 'menu-level-1.2',
              title: 'Menu Level 2.2',
              type: 'collapse',
              children: [
                {
                  id: 'menu-level-2.1',
                  title: 'Menu Level 2.1',
                  type: 'item',
                  url: '#',
                },
                {
                  id: 'menu-level-2.2',
                  title: 'Menu Level 2.2',
                  type: 'collapse',
                  children: [
                    {
                      id: 'menu-level-3.1',
                      title: 'Menu Level 3.1',
                      type: 'item',
                      url: '#',
                    },
                    {
                      id: 'menu-level-3.2',
                      title: 'Menu Level 3.2',
                      type: 'item',
                      url: '#',
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'disabled-menu',
          title: 'Disabled Menu',
          type: 'item',
          url: '#',
          classes: 'nav-item disabled',
          icon: 'feather icon-power'
        },
        {
          id: 'sample-page',
          title: 'Sample Page',
          type: 'item',
          url: '/page/sample-page',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        }
      ]
    },
    {
      id: 'support',
      title: 'Support',
      type: 'group',
      icon: 'icon-support',
      children: [
        {
          id: 'documentation',
          title: 'Documentation',
          type: 'item',
          icon: 'feather icon-book',
          classes: 'nav-item',
          url: '#!',
          target: true,
          external: true
        },
        {
          id: 'need-support',
          title: 'Need Support?',
          type: 'item',
          icon: 'feather icon-help-circle',
          classes: 'nav-item',
          url: '#!',
          target: true,
          external: true,
          badge: {
            title: 'v1.0.1',
            type: 'label-primary'
          }
        }
      ]
    }
  ]
}