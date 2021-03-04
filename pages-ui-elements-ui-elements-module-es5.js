function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-elements-ui-elements-module"], {
  /***/
  "./src/app/pages/ui-elements/components/dashed-line-chart/dashed-line-chart.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/pages/ui-elements/components/dashed-line-chart/dashed-line-chart.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: DashedLineChartComponent */

  /***/
  function srcAppPagesUiElementsComponentsDashedLineChartDashedLineChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashedLineChartComponent", function () {
      return DashedLineChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../consts */
    "./src/app/consts/index.ts");

    var DashedLineChartComponent =
    /*#__PURE__*/
    function () {
      function DashedLineChartComponent() {
        _classCallCheck(this, DashedLineChartComponent);

        this.colors = _consts__WEBPACK_IMPORTED_MODULE_1__["colors"];
      }

      _createClass(DashedLineChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashedLineChartComponent;
    }();

    DashedLineChartComponent.ɵfac = function DashedLineChartComponent_Factory(t) {
      return new (t || DashedLineChartComponent)();
    };

    DashedLineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashedLineChartComponent,
      selectors: [["app-dashed-line-chart"]],
      decls: 1,
      vars: 0,
      template: function DashedLineChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "dddddddddd");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2J1aWxkZXIvc3JjL2FwcC9wYWdlcy91aS1lbGVtZW50cy9jb21wb25lbnRzL2Rhc2hlZC1saW5lLWNoYXJ0L2Rhc2hlZC1saW5lLWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashedLineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashed-line-chart',
          templateUrl: './dashed-line-chart.component.html',
          styleUrls: ['./dashed-line-chart.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/components/heatmap-chart/heatmap-chart.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/ui-elements/components/heatmap-chart/heatmap-chart.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: HeatmapChartComponent */

  /***/
  function srcAppPagesUiElementsComponentsHeatmapChartHeatmapChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeatmapChartComponent", function () {
      return HeatmapChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeatmapChartComponent =
    /*#__PURE__*/
    function () {
      function HeatmapChartComponent() {
        _classCallCheck(this, HeatmapChartComponent);
      }

      _createClass(HeatmapChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeatmapChartComponent;
    }();

    HeatmapChartComponent.ɵfac = function HeatmapChartComponent_Factory(t) {
      return new (t || HeatmapChartComponent)();
    };

    HeatmapChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeatmapChartComponent,
      selectors: [["app-heatmap-chart"]],
      inputs: {
        heatmapChartData: "heatmapChartData"
      },
      decls: 1,
      vars: 0,
      template: function HeatmapChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "fffffffff");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2J1aWxkZXIvc3JjL2FwcC9wYWdlcy91aS1lbGVtZW50cy9jb21wb25lbnRzL2hlYXRtYXAtY2hhcnQvaGVhdG1hcC1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeatmapChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-heatmap-chart',
          templateUrl: './heatmap-chart.component.html',
          styleUrls: ['./heatmap-chart.component.scss']
        }]
      }], null, {
        heatmapChartData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/components/icons-page/icons-page.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/ui-elements/components/icons-page/icons-page.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: IconsPageComponent */

  /***/
  function srcAppPagesUiElementsComponentsIconsPageIconsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsPageComponent", function () {
      return IconsPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../shared/layout/layout.component */
    "./src/app/shared/layout/layout.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function IconsPageComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var iconName_r95 = ctx.$implicit;

        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r93.toShakeCase(iconName_r95));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](iconName_r95);
      }
    }

    function IconsPageComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var iconName_r96 = ctx.$implicit;

        var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fontIcon", ctx_r94.toFontAwesomeText(iconName_r96));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r94.toFontAwesomeText(iconName_r96));
      }
    }

    var IconsPageComponent =
    /*#__PURE__*/
    function () {
      function IconsPageComponent() {
        _classCallCheck(this, IconsPageComponent);

        this.materialIcons = ['AccessAlarm', 'AccessAlarms', 'Accessibility', 'Accessible', 'AccessibleForward', 'AccessTime', 'AccountBalance', 'AccountBalanceWallet', 'AccountBox', 'AccountCircle', 'AcUnit', 'Adb', 'Adjust', 'AirlineSeatFlat', 'AirlineSeatFlatAngled', 'AirlineSeatIndividualSuite', 'AirlineSeatLegroomExtra', 'AirlineSeatLegroomNormal', 'AirlineSeatLegroomReduced', 'AirlineSeatReclineExtra', 'AirlineSeatReclineNormal', 'AirplanemodeActive', 'AirplanemodeInactive', 'Airplay', 'AirportShuttle', 'Alarm', 'Album', 'AllInbox', 'AllInclusive', 'AllOut', 'AlternateEmail', 'Android', 'Announcement', 'Apps', 'Archive', 'ArrowBack', 'ArrowBackIos', 'ArrowDownward', 'ArrowDropDown', 'ArrowDropDownCircle', 'ArrowDropUp', 'ArrowForward', 'ArrowForwardIos', 'ArrowLeft', 'ArrowRight', 'ArrowRightAlt', 'ArrowUpward', 'ArtTrack', 'AspectRatio', 'Assessment', 'Assignment', 'AssignmentInd', 'AssignmentLate', 'AssignmentReturn', 'AssignmentReturned', 'AssignmentTurnedIn', 'Assistant', 'AssistantPhoto', 'Atm', 'AttachFile', 'Attachment', 'AttachMoney', 'Audiotrack', 'Autorenew', 'AvTimer', 'Backspace', 'Backup', 'Ballot', 'BarChart', 'BatteryAlert', 'BatteryChargingFull', 'BatteryFull', 'BatteryStd', 'BatteryUnknown', 'BeachAccess', 'Beenhere', 'Block', 'Bluetooth', 'BluetoothAudio', 'BluetoothConnected', 'BluetoothDisabled', 'BluetoothSearching', 'BlurCircular', 'BlurLinear', 'Book', 'Bookmark', 'BookmarkBorder', 'Bookmarks', 'BorderAll', 'BorderBottom', 'BorderClear', 'BorderColor', 'BorderHorizontal', 'BorderInner', 'BorderLeft', 'BorderOuter', 'BorderRight', 'BorderStyle', 'BorderTop', 'BorderVertical', 'BrandingWatermark', 'Brightness_1', 'Brightness_2', 'Brightness_3', 'Brightness_4', 'Brightness_5', 'Brightness_6', 'Brightness_7', 'BrightnessAuto', 'BrightnessHigh', 'BrightnessLow', 'BrightnessMedium', 'BrokenImage', 'Brush', 'BubbleChart', 'BugReport', 'Build', 'BurstMode', 'Business', 'BusinessCenter', 'Cached', 'Cake', 'CalendarToday', 'CalendarViewDay', 'Call', 'CallEnd', 'CallMade', 'CallMerge', 'CallMissed', 'CallMissedOutgoing', 'CallReceived', 'CallSplit', 'CallToAction', 'Camera', 'CameraAlt', 'CameraEnhance', 'CameraFront', 'CameraRear', 'CameraRoll', 'Cancel', 'CancelPresentation', 'CardGiftcard', 'CardMembership', 'CardTravel', 'Casino', 'Cast', 'CastConnected', 'CastForEducation', 'Category', 'CellWifi', 'CenterFocusStrong', 'CenterFocusWeak', 'ChangeHistory', 'Chat', 'ChatBubble', 'ChatBubbleOutline', 'Check', 'CheckBox', 'CheckBoxOutlineBlank', 'CheckCircle', 'CheckCircleOutline', 'ChevronLeft', 'ChevronRight', 'ChildCare', 'ChildFriendly', 'ChromeReaderMode', 'Class', 'Clear', 'ClearAll', 'Close', 'ClosedCaption', 'Cloud', 'CloudCircle', 'CloudDone', 'CloudDownload', 'CloudQueue', 'CloudUpload', 'Code', 'Collections', 'CollectionsBookmark', 'Colorize', 'ColorLens', 'Comment', 'Commute', 'Compare', 'CompareArrows', 'CompassCalibration', 'Computer', 'ConfirmationNumber', 'ContactMail', 'ContactPhone', 'Contacts', 'ContactSupport', 'ControlCamera', 'ControlPoint', 'ControlPointDuplicate', 'Copyright', 'Create', 'CreditCard', 'Crop', 'Crop_16_9', 'Crop_3_2', 'Crop_5_4', 'Crop_7_5', 'CropDin', 'CropFree', 'CropLandscape', 'CropOriginal', 'CropPortrait', 'CropRotate', 'CropSquare', 'Dashboard', 'DataUsage', 'DateRange', 'Dehaze', 'Delete', 'DeleteForever', 'DeleteOutline', 'DeleteSweep', 'DepartureBoard', 'Description', 'DesktopAccessDisabled', 'DesktopMac', 'DesktopWindows', 'Details', 'DeveloperBoard', 'DeveloperMode', 'DeviceHub', 'Devices', 'DevicesOther', 'DeviceUnknown', 'DialerSip', 'Dialpad', 'Directions', 'DirectionsBike', 'DirectionsBoat', 'DirectionsBus', 'DirectionsCar', 'DirectionsRailway', 'DirectionsRun', 'DirectionsSubway', 'DirectionsTransit', 'DirectionsWalk', 'DiscFull', 'Dns', 'Dock', 'Domain', 'DomainDisabled', 'Done', 'DoneAll', 'DoneOutline', 'DonutLarge', 'DonutSmall', 'Drafts', 'DragHandle', 'DragIndicator', 'DriveEta', 'Duo', 'Dvr', 'Edit', 'EditAttributes', 'EditLocation', 'Eject', 'Email', 'EnhancedEncryption', 'Equalizer', 'Error', 'ErrorOutline', 'EuroSymbol', 'Event', 'EventAvailable', 'EventBusy', 'EventNote', 'EventSeat', 'EvStation', 'ExitToApp', 'ExpandLess', 'ExpandMore', 'Explicit', 'Explore', 'Exposure', 'ExposureNeg1', 'ExposureNeg2', 'ExposurePlus1', 'ExposurePlus2', 'ExposureZero', 'Extension', 'Face', 'Fastfood', 'FastForward', 'FastRewind', 'Favorite', 'FavoriteBorder', 'FeaturedPlayList', 'FeaturedVideo', 'Feedback', 'FiberDvr', 'FiberManualRecord', 'FiberPin', 'FiberSmartRecord', 'FileCopy', 'Filter', 'Filter1', 'Filter2', 'Filter3', 'Filter4', 'Filter5', 'Filter6', 'Filter7', 'Filter8', 'Filter9', 'Filter9Plus', 'FilterBAndW', 'FilterCenterFocus', 'FilterDrama', 'FilterFrames', 'FilterHdr', 'FilterList', 'FilterNone', 'FilterTiltShift', 'FilterVintage', 'FindInPage', 'FindReplace', 'Fingerprint', 'FirstPage', 'FitnessCenter', 'Flag', 'Flare', 'FlashAuto', 'Flight', 'FlightLand', 'FlightTakeoff', 'Flip', 'FlipToBack', 'FlipToFront', 'Folder', 'FolderOpen', 'FolderShared', 'FolderSpecial', 'FontDownload', 'FormatAlignCenter', 'FormatAlignJustify', 'FormatAlignLeft', 'FormatAlignRight', 'FormatBold', 'FormatClear', 'FormatColorFill', 'FormatColorReset', 'FormatColorText', 'FormatIndentDecrease', 'FormatIndentIncrease', 'FormatItalic', 'FormatLineSpacing', 'FormatListBulleted', 'FormatListNumbered', 'FormatListNumberedRtl', 'FormatPaint', 'FormatQuote', 'FormatShapes', 'FormatSize', 'FormatStrikethrough', 'FormatTextdirectionLToR', 'FormatTextdirectionRToL', 'FormatUnderlined', 'Forum', 'Forward', 'Forward10', 'Forward30', 'Forward5', 'FourK', 'FreeBreakfast', 'Fullscreen', 'FullscreenExit', 'Functions', 'Gamepad', 'Games', 'Gavel', 'Gesture', 'GetApp', 'Gif', 'GolfCourse', 'GpsFixed', 'GpsNotFixed', 'Grade', 'Gradient', 'Grain', 'GraphicEq', 'Group', 'GroupWork', 'GTranslate', 'Hd', 'HdrStrong', 'HdrWeak', 'Headset', 'HeadsetMic', 'Healing', 'Hearing', 'Help', 'HelpOutline', 'Highlight', 'HighQuality', 'History', 'Home', 'HorizontalSplit', 'Hotel', 'HotTub', 'HourglassEmpty', 'HourglassFull', 'HowToReg', 'HowToVote', 'Http', 'Https', 'Image', 'ImageAspectRatio', 'ImageSearch', 'ImportantDevices', 'ImportContacts', 'ImportExport', 'Inbox', 'IndeterminateCheckBox', 'Info', 'Input', 'InsertChart', 'InsertComment', 'InsertDriveFile', 'InsertEmoticon', 'InsertInvitation', 'InsertLink', 'InsertPhoto', 'InvertColors', 'Iso', 'Keyboard', 'KeyboardArrowDown', 'KeyboardArrowLeft', 'KeyboardArrowRight', 'KeyboardArrowUp', 'KeyboardBackspace', 'KeyboardCapslock', 'KeyboardHide', 'KeyboardReturn', 'KeyboardTab', 'KeyboardVoice', 'Kitchen', 'Label', 'LabelImportant', 'Landscape', 'Language', 'Laptop', 'LaptopChromebook', 'LaptopMac', 'LaptopWindows', 'LastPage', 'Launch', 'Layers', 'LayersClear', 'LeakRemove', 'Lens', 'LibraryBooks', 'LibraryMusic', 'LinearScale', 'LineStyle', 'LineWeight', 'Link', 'LinkedCamera', 'List', 'ListAlt', 'LiveHelp', 'LiveTv', 'LocalActivity', 'LocalAirport', 'LocalAtm', 'LocalBar', 'LocalCafe', 'LocalCarWash', 'LocalConvenienceStore', 'LocalDining', 'LocalDrink', 'LocalFlorist', 'LocalGasStation', 'LocalGroceryStore', 'LocalHospital', 'LocalHotel', 'LocalLaundryService', 'LocalLibrary', 'LocalMall', 'LocalMovies', 'LocalParking', 'LocalPharmacy', 'LocalPhone', 'LocalPizza', 'LocalPlay', 'LocalPrintshop', 'LocalSee', 'LocalShipping', 'LocalTaxi', 'LocationCity', 'LocationDisabled', 'LocationSearching', 'Lock', 'LockOpen', 'Looks', 'Looks3', 'Looks4', 'Looks5', 'Looks6', 'LooksTwo', 'Loop', 'Loupe', 'LowPriority', 'Loyalty', 'Mail', 'MailOutline', 'Map', 'Markunread', 'MarkunreadMailbox', 'Maximize', 'MeetingRoom', 'Memory', 'Menu', 'MergeType', 'Message', 'Mic', 'MicNone', 'Minimize', 'MissedVideoCall', 'Mms', 'MobileFriendly', 'MobileScreenShare', 'ModeComment', 'Money', 'MonochromePhotos', 'Mood', 'MoodBad', 'More', 'MoreHoriz', 'MoreVert', 'Motorcycle', 'Mouse', 'MoveToInbox', 'Movie', 'MovieCreation', 'MovieFilter', 'MultilineChart', 'MusicNote', 'MusicVideo', 'MyLocation', 'Nature', 'NaturePeople', 'NavigateBefore', 'NavigateNext', 'Navigation', 'NearMe', 'NetworkCell', 'NetworkCheck', 'NetworkLocked', 'NetworkWifi', 'NextWeek', 'Nfc', 'NoEncryption', 'NoMeetingRoom', 'NoSim', 'Note', 'Notes', 'NotificationImportant', 'Notifications', 'NotificationsActive', 'NotificationsNone', 'NotificationsPaused', 'NotInterested', 'NotListedLocation', 'Opacity', 'OpenInBrowser', 'OpenWith', 'Pages', 'Pageview', 'Palette', 'Panorama', 'PanoramaFishEye', 'PanoramaHorizontal', 'PanoramaVertical', 'PanoramaWideAngle', 'PanTool', 'PartyMode', 'Pause', 'PauseCircleFilled', 'PauseCircleOutline', 'PausePresentation', 'Payment', 'People', 'PeopleOutline', 'PermCameraMic', 'PermContactCalendar', 'PermDataSetting', 'PermDeviceInformation', 'PermIdentity', 'PermMedia', 'PermPhoneMsg', 'PermScanWifi', 'Person', 'PersonalVideo', 'PersonOutline', 'PersonPin', 'PersonPinCircle', 'Pets', 'Phone', 'PhoneAndroid', 'PhoneBluetoothSpeaker', 'PhoneCallback', 'PhoneForwarded', 'PhoneInTalk', 'PhoneIphone', 'Phonelink', 'PhonelinkErase', 'PhonelinkLock', 'PhonelinkRing', 'PhonelinkSetup', 'PhoneLocked', 'PhoneMissed', 'PhonePaused', 'Photo', 'PhotoAlbum', 'PhotoCamera', 'PhotoFilter', 'PhotoLibrary', 'PhotoSizeSelectActual', 'PhotoSizeSelectLarge', 'PhotoSizeSelectSmall', 'PictureAsPdf', 'PictureInPicture', 'PictureInPictureAlt', 'PieChart', 'PinDrop', 'Place', 'PlayArrow', 'PlayCircleFilled', 'PlayCircleFilledWhite', 'PlayCircleOutline', 'PlayForWork', 'PlaylistPlay', 'Poll', 'Polymer', 'Pool', 'Portrait', 'Power', 'PowerInput', 'PregnantWoman', 'PresentToAll', 'Print', 'PrintDisabled', 'PriorityHigh', 'Public', 'Publish', 'QueryBuilder', 'QuestionAnswer', 'Queue', 'QueueMusic', 'QueuePlayNext', 'Radio', 'RadioButtonChecked', 'RadioButtonUnchecked', 'RateReview', 'Receipt', 'RecentActors', 'RecordVoiceOver', 'Redeem', 'Redo', 'Refresh', 'Remove', 'RemoveCircle', 'RemoveCircleOutline', 'RemoveFromQueue', 'RemoveRedEye', 'RemoveShoppingCart', 'Reorder', 'Repeat', 'Replay', 'Replay10', 'Replay30', 'Replay5', 'Reply', 'ReplyAll', 'Report', 'ReportProblem', 'Restaurant', 'RestaurantMenu', 'Restore', 'RestoreFromTrash', 'RestorePage', 'RingVolume', 'Room', 'RoomService', 'Rotate90DegreesCcw', 'RotateLeft', 'RotateRight', 'Router', 'Rowing', 'RssFeed', 'RvHookup', 'Satellite', 'Save', 'SaveAlt', 'Scanner', 'ScatterPlot', 'Schedule', 'School', 'Score', 'ScreenLockLandscape', 'ScreenLockPortrait', 'ScreenLockRotation', 'ScreenRotation', 'ScreenShare', 'SdCard', 'SdStorage', 'Search', 'Security', 'SelectAll', 'Send', 'SentimentDissatisfied', 'SentimentSatisfied', 'SentimentSatisfiedAlt', 'SentimentVeryDissatisfied', 'SentimentVerySatisfied', 'Settings', 'SettingsApplications', 'SettingsBackupRestore', 'SettingsBluetooth', 'SettingsBrightness', 'SettingsCell', 'SettingsEthernet', 'SettingsInputAntenna', 'SettingsInputComponent', 'SettingsInputComposite', 'SettingsInputHdmi', 'SettingsInputSvideo', 'SettingsOverscan', 'SettingsPhone', 'SettingsPower', 'SettingsRemote', 'SettingsSystemDaydream', 'SettingsVoice', 'Share', 'Shop', 'ShoppingBasket', 'ShoppingCart', 'ShopTwo', 'ShortText', 'ShowChart', 'Shuffle', 'ShutterSpeed', 'SimCard', 'SkipNext', 'SkipPrevious', 'Slideshow', 'SlowMotionVideo', 'Smartphone', 'SmokeFree', 'SmokingRooms', 'Sms', 'SmsFailed', 'Snooze', 'Sort', 'SortByAlpha', 'Spa', 'SpaceBar', 'Speaker', 'SpeakerGroup', 'SpeakerNotes', 'SpeakerPhone', 'Spellcheck', 'Star', 'StarBorder', 'StarHalf', 'StarRate', 'Stars', 'StayCurrentLandscape', 'StayCurrentPortrait', 'StayPrimaryLandscape', 'StayPrimaryPortrait', 'Stop', 'StopScreenShare', 'Storage', 'Store', 'StoreMallDirectory', 'Straighten', 'Streetview', 'StrikethroughS', 'Style', 'SubdirectoryArrowLeft', 'SubdirectoryArrowRight', 'Subject', 'Subscriptions', 'Subtitles', 'Subway', 'SupervisedUserCircle', 'SupervisorAccount', 'SurroundSound', 'SwapCalls', 'SwapHoriz', 'SwapHorizontalCircle', 'SwapVert', 'SwapVerticalCircle', 'SwitchCamera', 'SwitchVideo', 'Sync', 'SyncDisabled', 'SyncProblem', 'SystemUpdate', 'Tab', 'TableChart', 'Tablet', 'TabletAndroid', 'TabletMac', 'TabUnselected', 'TagFaces', 'TapAndPlay', 'Terrain', 'TextFields', 'TextFormat', 'TextRotateUp', 'TextRotateVertical', 'TextRotationDown', 'TextRotationNone', 'Textsms', 'Texture', 'Theaters', 'ThreeDRotation', 'ThreeSixty', 'ThumbDown', 'ThumbDownAlt', 'ThumbsUpDown', 'ThumbUp', 'ThumbUpAlt', 'Timelapse', 'Timeline', 'Timer', 'Timer10', 'Timer3', 'TimeToLeave', 'Title', 'Toc', 'Today', 'Toll', 'Tonality', 'TouchApp', 'Toys', 'TrackChanges', 'Traffic', 'Train', 'Tram', 'TransferWithinAStation', 'Transform', 'TransitEnterexit', 'Translate', 'TrendingDown', 'TrendingFlat', 'TrendingUp', 'TripOrigin', 'Tune', 'TurnedIn', 'TurnedInNot', 'Tv', 'Unarchive', 'Undo', 'UnfoldLess', 'UnfoldMore', 'Unsubscribe', 'Update', 'Usb', 'VerifiedUser', 'VerticalAlignBottom', 'VerticalAlignCenter', 'VerticalAlignTop', 'VerticalSplit', 'Vibration', 'VideoCall', 'Videocam', 'VideogameAsset', 'VideoLabel', 'VideoLibrary', 'ViewAgenda', 'ViewArray', 'ViewCarousel', 'ViewColumn', 'ViewComfy', 'ViewCompact', 'ViewDay', 'ViewHeadline', 'ViewList', 'ViewModule', 'ViewQuilt', 'ViewStream', 'ViewWeek', 'Vignette', 'Visibility', 'VoiceChat', 'Voicemail', 'VolumeDown', 'VolumeMute', 'VolumeUp', 'VpnKey', 'VpnLock', 'Wallpaper', 'Warning', 'Watch', 'WatchLater', 'Waves', 'WbAuto', 'WbCloudy', 'WbIncandescent', 'WbIridescent', 'WbSunny', 'Wc', 'Web', 'WebAsset', 'Weekend', 'Whatshot', 'WhereToVote', 'Widgets', 'Wifi', 'WifiLock', 'WifiTethering', 'Work', 'WorkOutline', 'WrapText', 'YoutubeSearchedFor', 'ZoomIn', 'ZoomOut', 'ZoomOutMap'];
        this.fontAwesomeIcons = ['Bed', 'Bank', 'Behance', 'Behance-square', 'Bomb', 'Building', 'Cab', 'Car', 'Child', 'Circle-o-notch', 'Circle-thin', 'Codepen', 'Cube', 'Cubes', 'Database', 'Delicious', 'Deviantart', 'Digg', 'Drupal', 'Empire', 'Envelope-square', 'Fax', 'File-archive-o', 'File-audio-o', 'File-code-o', 'File-excel-o', 'File-image-o', 'File-movie-o', 'File-pdf-o', 'File-photo-o', 'File-picture-o', 'File-powerpoint-o', 'File-sound-o', 'File-video-o', 'File-word-o', 'File-zip-o', 'Ge', 'Git', 'Git-square', 'Google', 'Graduation-cap', 'Hacker-news', 'Header', 'History', 'Institution', 'Joomla', 'Jsfiddle', 'Language', 'Life-bouy', 'Life-ring', 'Life-saver', 'Mortar-board', 'Openid', 'Paper-plane', 'paper-plane-o', 'Paragraph', 'Paw', 'Pied-piper', 'Pied-piper-alt', 'Pied-piper-square', 'Qq', 'Ra', 'Rebel', 'Recycle', 'Reddit', 'Reddit-square', 'Send', 'Send-o', 'Share-alt', 'Share-alt-square', 'Slack', 'Sliders', 'Soundcloud', 'Space-shuttle', 'Spoon', 'Spotify', 'Steam', 'Steam-square', 'Stumbleupon', 'Stumbleupon-circle', 'Support', 'Taxi', 'Tencent-weibo', 'Tree', 'University', 'Vine', 'Wechat', 'Weixin', 'Wordpress', 'Yahoo'];
      }

      _createClass(IconsPageComponent, [{
        key: "toShakeCase",
        value: function toShakeCase(name) {
          return name[0].toLowerCase() + name.slice(1).replace(/[A-Z]/g, function (m) {
            return '_' + m.toLowerCase();
          });
        }
      }, {
        key: "toFontAwesomeText",
        value: function toFontAwesomeText(name) {
          return 'fa-' + name.toLowerCase();
        }
      }]);

      return IconsPageComponent;
    }();

    IconsPageComponent.ɵfac = function IconsPageComponent_Factory(t) {
      return new (t || IconsPageComponent)();
    };

    IconsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IconsPageComponent,
      selectors: [["app-icons-page"]],
      decls: 15,
      vars: 2,
      consts: [["role", "heading", 1, "page-header"], ["mat-flat-button", ""], [1, "icons-wrapper"], ["label", "Material Icons"], [1, "icons-content"], ["class", "icons-content__icon-wrapper", 4, "ngFor", "ngForOf"], ["label", "Font Awesome"], [1, "icons-content__icon-wrapper"], [1, "icons-content__icon-title"], ["fontSet", "fa fa-fs", 3, "fontIcon"]],
      template: function IconsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Icons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IconsPageComponent_div_10_Template, 5, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, IconsPageComponent_div_13_Template, 4, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.materialIcons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fontAwesomeIcons);
        }
      },
      directives: [_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
      styles: [".icons-wrapper[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 16px 24px 0;\n  box-shadow: 0 3px 11px 0 #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n}\n\n.icons-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 50px 24px 16px 24px;\n}\n\n.icons-header__title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 42px;\n  color: #B9B9B9;\n  line-height: 1;\n  letter-spacing: -0.24992px;\n}\n\n.icons-header__button[_ngcontent-%COMP%] {\n  height: 41.6px;\n  width: 90.11px;\n  color: white;\n  background-color: #ff4081;\n  line-height: 1.75;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.icons-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  overflow: hidden;\n  padding: 0 16px;\n}\n\n.icons-content__icon-wrapper[_ngcontent-%COMP%] {\n  width: 158px;\n  padding: 8px;\n  color: #6E6E6E;\n  display: flex;\n  align-items: center;\n}\n\n.icons-content__icon-title[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvYnVpbGRlci9zcmMvYXBwL3BhZ2VzL3VpLWVsZW1lbnRzL2NvbXBvbmVudHMvaWNvbnMtcGFnZS9DOlxcVXNlcnNcXGRpZ3ZpamF5Lm1pc2FsXFxEZXNrdG9wXFxXb3JrXFxUZXN0X2FwcC9hcHBzXFxidWlsZGVyXFxzcmNcXGFwcFxccGFnZXNcXHVpLWVsZW1lbnRzXFxjb21wb25lbnRzXFxpY29ucy1wYWdlXFxpY29ucy1wYWdlLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9idWlsZGVyL3NyYy9hcHAvcGFnZXMvdWktZWxlbWVudHMvY29tcG9uZW50cy9pY29ucy1wYWdlL2ljb25zLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJhcHBzL2J1aWxkZXIvc3JjL2FwcC9wYWdlcy91aS1lbGVtZW50cy9jb21wb25lbnRzL2ljb25zLXBhZ2UvQzpcXFVzZXJzXFxkaWd2aWpheS5taXNhbFxcRGVza3RvcFxcV29ya1xcVGVzdF9hcHAvYXBwc1xcYnVpbGRlclxcc3JjXFxhcHBcXHN0eWxlc1xcZm9udC5zY3NzIiwiYXBwcy9idWlsZGVyL3NyYy9hcHAvcGFnZXMvdWktZWxlbWVudHMvY29tcG9uZW50cy9pY29ucy1wYWdlL0M6XFxVc2Vyc1xcZGlndmlqYXkubWlzYWxcXERlc2t0b3BcXFdvcmtcXFRlc3RfYXBwL2FwcHNcXGJ1aWxkZXJcXHNyY1xcYXBwXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUZBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0FDRkY7O0FESUU7RUFDRSxnQkVmUztFRmdCVCxlRUhNO0VGSU4sY0dOUztFSE9ULGNBQUE7RUFDQSwwQkFBQTtBQ0ZKOztBREtFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxZR2hCSTtFSGlCSix5QkdyQkc7RUhzQkgsaUJBQUE7RUFDQSxlRXJCUTtFRnNCUixnQkU3QlM7QUQwQmI7O0FET0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKRjs7QURNRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0cvQkc7RUhnQ0gsYUFBQTtFQUNBLG1CQUFBO0FDSko7O0FET0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNMSiIsImZpbGUiOiJhcHBzL2J1aWxkZXIvc3JjL2FwcC9wYWdlcy91aS1lbGVtZW50cy9jb21wb25lbnRzL2ljb25zLXBhZ2UvaWNvbnMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9jb2xvcnMnO1xuQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL2ZvbnQnO1xuXG4uaWNvbnMtd3JhcHBlciB7XG4gIHBhZGRpbmc6MDtcbiAgbWFyZ2luOiAxNnB4IDI0cHggMDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTFweCAwICRzaGFkb3ctd2hpdGUsIDAgM3B4IDNweCAtMnB4ICRzaGFkb3ctZ3JleSwgMCAxcHggOHB4IDAgJHNoYWRvdy1kYXJrLWdyZXk7XG59XG5cbi5pY29ucy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDUwcHggMjRweCAxNnB4IDI0cHg7XG5cbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcbiAgICBmb250LXNpemU6ICRmcy14eHhsO1xuICAgIGNvbG9yOiAkbGlnaHQtZ3JleTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjQ5OTJweDtcbiAgfVxuXG4gICZfX2J1dHRvbiB7XG4gICAgaGVpZ2h0OiA0MS42cHg7XG4gICAgd2lkdGg6IDkwLjExcHg7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcbiAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICBmb250LXNpemU6ICRmcy1ub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6ICRmdy1saWdodGVyO1xuICB9XG59XG5cbi5pY29ucy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMCAxNnB4O1xuXG4gICZfX2ljb24td3JhcHBlciB7XG4gICAgd2lkdGg6IDE1OHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjb2xvcjogJGdyZXk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJl9faWNvbi10aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbn1cbiIsIi5pY29ucy13cmFwcGVyIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxNnB4IDI0cHggMDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTFweCAwICNFOEVBRkMsIDAgM3B4IDNweCAtMnB4ICNCMkIyQjIxQSwgMCAxcHggOHB4IDAgIzlBOUE5QTFBO1xufVxuXG4uaWNvbnMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA1MHB4IDI0cHggMTZweCAyNHB4O1xufVxuLmljb25zLWhlYWRlcl9fdGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDQycHg7XG4gIGNvbG9yOiAjQjlCOUI5O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0OTkycHg7XG59XG4uaWNvbnMtaGVhZGVyX19idXR0b24ge1xuICBoZWlnaHQ6IDQxLjZweDtcbiAgd2lkdGg6IDkwLjExcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmljb25zLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG4uaWNvbnMtY29udGVudF9faWNvbi13cmFwcGVyIHtcbiAgd2lkdGg6IDE1OHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGNvbG9yOiAjNkU2RTZFO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmljb25zLWNvbnRlbnRfX2ljb24tdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSIsIiRmdy1saWdodGVyOiA0MDA7XG4kZnctbm9ybWFsOiA1MDA7XG4kZnctYm9sZDogNjAwO1xuXG5cbiRmcy14czogMTEuMnB4O1xuJGZzLXNtYWxsOiAxNHB4O1xuJGZzLW5vcm1hbDogMTZweDtcbiRmcy1yZWd1bGFyOiAxOHB4O1xuJGZzLW1lZGl1bTogMjFweDtcbiRmcy1sYXJnZTogMjRweDtcbiRmcy14bDogMjhweDtcbiRmcy14eGw6IDM4cHg7XG4kZnMteHh4bDogNDJweDtcbiIsIiR5ZWxsb3c6ICNmZmMyNjA7XG4kYmx1ZTogIzUzNkRGRTtcbiRsaWdodC1ibHVlOiAjNzk4REZFO1xuJHdoaXRlLWJsdWU6ICNCMUJDRkY7XG4kYmx1ZS13aGl0ZTogI0YzRjVGRjtcbiRwaW5rOiAjZmY0MDgxO1xuJGRhcmstcGluazogI2ZmMGY2MDtcbiRncmVlbjogIzNDRDRBMDtcbiR2aW9sZXQ6ICM5MDEzRkU7XG4kd2hpdGU6IHdoaXRlO1xuJGRhcmstZ3JleTogIzRBNEE0QTtcbiRsaWdodC1ncmV5OiAjQjlCOUI5O1xuJGdyZXk6ICM2RTZFNkU7XG4kc2t5OiAjYzBjYWZmO1xuXG5cbiR3aGl0ZS0zNTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcbiR3aGl0ZS04MDogI0ZGRkZGRjgwO1xuXG4kZ3JheS0wODogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjgpO1xuJGdyYXktODA6ICNEOEQ4RDg4MDtcbiRncmF5LTA2OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuNik7XG5cbiRibGFjay0wODogcmdiYSgwLCAwLCAwLCAwLjA4KTtcblxuJHBpbmstMTU6IHJnYmEoMjU1LCA5MiwgMTQ3LCAwLjE1KTtcbiRibHVlLTE1OiByZ2JhKDgzLCAxMDksIDI1NCwgMC4xNSk7XG4kZ3JlZW4tMTU6IHJnYmEoNjAsIDIxMiwgMTYwLCAwLjE1KTtcbiR5ZWxsb3ctMTU6IHJnYmEoMjU1LCAxOTQsIDk2LCAwLjE1KTtcbiR2aW9sZXQtMTU6IHJnYmEoMTQ0LCAxOSwgMjU0LCAwLjE1KTtcblxuXG4kc2hhZG93LXdoaXRlOiAjRThFQUZDO1xuJHNoYWRvdy1ncmV5OiAjQjJCMkIyMUE7XG4kc2hhZG93LWRhcmstZ3JleTogIzlBOUE5QTFBO1xuXG4kYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGRjtcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-icons-page',
          templateUrl: './icons-page.component.html',
          styleUrls: ['./icons-page.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/components/index.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/ui-elements/components/index.ts ***!
    \*******************************************************/

  /*! exports provided: IconsPageComponent, LineChartComponent, DashedLineChartComponent, HeatmapChartComponent, PieChartComponent */

  /***/
  function srcAppPagesUiElementsComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _icons_page_icons_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./icons-page/icons-page.component */
    "./src/app/pages/ui-elements/components/icons-page/icons-page.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IconsPageComponent", function () {
      return _icons_page_icons_page_component__WEBPACK_IMPORTED_MODULE_0__["IconsPageComponent"];
    });
    /* harmony import */


    var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./line-chart/line-chart.component */
    "./src/app/pages/ui-elements/components/line-chart/line-chart.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () {
      return _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_1__["LineChartComponent"];
    });
    /* harmony import */


    var _dashed_line_chart_dashed_line_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashed-line-chart/dashed-line-chart.component */
    "./src/app/pages/ui-elements/components/dashed-line-chart/dashed-line-chart.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashedLineChartComponent", function () {
      return _dashed_line_chart_dashed_line_chart_component__WEBPACK_IMPORTED_MODULE_2__["DashedLineChartComponent"];
    });
    /* harmony import */


    var _heatmap_chart_heatmap_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./heatmap-chart/heatmap-chart.component */
    "./src/app/pages/ui-elements/components/heatmap-chart/heatmap-chart.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeatmapChartComponent", function () {
      return _heatmap_chart_heatmap_chart_component__WEBPACK_IMPORTED_MODULE_3__["HeatmapChartComponent"];
    });
    /* harmony import */


    var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pie-chart/pie-chart.component */
    "./src/app/pages/ui-elements/components/pie-chart/pie-chart.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PieChartComponent", function () {
      return _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_4__["PieChartComponent"];
    });
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/components/line-chart/line-chart.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/ui-elements/components/line-chart/line-chart.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: LineChartComponent */

  /***/
  function srcAppPagesUiElementsComponentsLineChartLineChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () {
      return LineChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../consts */
    "./src/app/consts/index.ts");

    var LineChartComponent =
    /*#__PURE__*/
    function () {
      function LineChartComponent() {
        _classCallCheck(this, LineChartComponent);

        this.colors = _consts__WEBPACK_IMPORTED_MODULE_1__["colors"];
      }

      _createClass(LineChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LineChartComponent;
    }();

    LineChartComponent.ɵfac = function LineChartComponent_Factory(t) {
      return new (t || LineChartComponent)();
    };

    LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LineChartComponent,
      selectors: [["app-line-chart"]],
      inputs: {
        lineChartData: "lineChartData"
      },
      decls: 1,
      vars: 0,
      template: function LineChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "lllllllllll");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2J1aWxkZXIvc3JjL2FwcC9wYWdlcy91aS1lbGVtZW50cy9jb21wb25lbnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-line-chart',
          templateUrl: './line-chart.component.html',
          styleUrls: ['./line-chart.component.scss']
        }]
      }], null, {
        lineChartData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/components/pie-chart/pie-chart.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/ui-elements/components/pie-chart/pie-chart.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: PieChartComponent */

  /***/
  function srcAppPagesUiElementsComponentsPieChartPieChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PieChartComponent", function () {
      return PieChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../consts */
    "./src/app/consts/index.ts");

    var PieChartComponent =
    /*#__PURE__*/
    function () {
      function PieChartComponent() {
        _classCallCheck(this, PieChartComponent);

        this.colors = _consts__WEBPACK_IMPORTED_MODULE_1__["colors"];
      }

      _createClass(PieChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PieChartComponent;
    }();

    PieChartComponent.ɵfac = function PieChartComponent_Factory(t) {
      return new (t || PieChartComponent)();
    };

    PieChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PieChartComponent,
      selectors: [["app-pie-chart"]],
      decls: 1,
      vars: 0,
      template: function PieChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "pppppppppp");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2J1aWxkZXIvc3JjL2FwcC9wYWdlcy91aS1lbGVtZW50cy9jb21wb25lbnRzL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pie-chart',
          templateUrl: './pie-chart.component.html',
          styleUrls: ['./pie-chart.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/containers/charts-page/charts-page.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/ui-elements/containers/charts-page/charts-page.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ChartsPageComponent */

  /***/
  function srcAppPagesUiElementsContainersChartsPageChartsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartsPageComponent", function () {
      return ChartsPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services */
    "./src/app/pages/ui-elements/services/index.ts");
    /* harmony import */


    var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/layout/layout.component */
    "./src/app/shared/layout/layout.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/line-chart/line-chart.component */
    "./src/app/pages/ui-elements/components/line-chart/line-chart.component.ts");
    /* harmony import */


    var _components_heatmap_chart_heatmap_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/heatmap-chart/heatmap-chart.component */
    "./src/app/pages/ui-elements/components/heatmap-chart/heatmap-chart.component.ts");
    /* harmony import */


    var _components_dashed_line_chart_dashed_line_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/dashed-line-chart/dashed-line-chart.component */
    "./src/app/pages/ui-elements/components/dashed-line-chart/dashed-line-chart.component.ts");
    /* harmony import */


    var _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/pie-chart/pie-chart.component */
    "./src/app/pages/ui-elements/components/pie-chart/pie-chart.component.ts");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");

    var ChartsPageComponent = function ChartsPageComponent(service) {
      _classCallCheck(this, ChartsPageComponent);

      this.service = service;
      this.lineChartData$ = this.service.loadLineChartData();
      this.dashedLineChartData$ = this.service.dashedLineChartData();
      this.pieChartData$ = this.service.loadPieChartData();
      this.heatmapChartData$ = this.service.loadHeatmapChartData();
    };

    ChartsPageComponent.ɵfac = function ChartsPageComponent_Factory(t) {
      return new (t || ChartsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["ChartsService"]));
    };

    ChartsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartsPageComponent,
      selectors: [["app-charts-page"]],
      decls: 30,
      vars: 0,
      consts: [["role", "heading", 1, "page-header"], ["mat-flat-button", ""], [1, "charts-content"], [1, "charts-content__charts-wrapper"], [1, "charts-content__chart-item"]],
      template: function ChartsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Charts Page - Data Display");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Latest Reports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Apex Line Chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-line-chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Apex Heatmap Chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-heatmap-chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Apex Dashed Line Chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-dashed-line-chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Apex Pie Chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-pie-chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__["LineChartComponent"], _components_heatmap_chart_heatmap_chart_component__WEBPACK_IMPORTED_MODULE_7__["HeatmapChartComponent"], _components_dashed_line_chart_dashed_line_chart_component__WEBPACK_IMPORTED_MODULE_8__["DashedLineChartComponent"], _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_9__["PieChartComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2J1aWxkZXIvc3JjL2FwcC9wYWdlcy91aS1lbGVtZW50cy9jb250YWluZXJzL2NoYXJ0cy1wYWdlL2NoYXJ0cy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-charts-page',
          templateUrl: './charts-page.component.html',
          styleUrls: ['./charts-page.component.scss']
        }]
      }], function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_1__["ChartsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/containers/index.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/ui-elements/containers/index.ts ***!
    \*******************************************************/

  /*! exports provided: MapPageComponent, ChartsPageComponent */

  /***/
  function srcAppPagesUiElementsContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _map_page_map_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./map-page/map-page.component */
    "./src/app/pages/ui-elements/containers/map-page/map-page.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MapPageComponent", function () {
      return _map_page_map_page_component__WEBPACK_IMPORTED_MODULE_0__["MapPageComponent"];
    });
    /* harmony import */


    var _charts_page_charts_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./charts-page/charts-page.component */
    "./src/app/pages/ui-elements/containers/charts-page/charts-page.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChartsPageComponent", function () {
      return _charts_page_charts_page_component__WEBPACK_IMPORTED_MODULE_1__["ChartsPageComponent"];
    });
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/containers/map-page/map-page.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/ui-elements/containers/map-page/map-page.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: MapPageComponent */

  /***/
  function srcAppPagesUiElementsContainersMapPageMapPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPageComponent", function () {
      return MapPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../shared/layout/layout.component */
    "./src/app/shared/layout/layout.component.ts");

    var MapPageComponent = function MapPageComponent() {
      _classCallCheck(this, MapPageComponent);

      this.lat = -37.813179;
      this.lng = 144.950259;
      this.zoom = 12;
    };

    MapPageComponent.ɵfac = function MapPageComponent_Factory(t) {
      return new (t || MapPageComponent)();
    };

    MapPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapPageComponent,
      selectors: [["app-map-page"]],
      decls: 1,
      vars: 0,
      template: function MapPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout");
        }
      },
      directives: [_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]],
      styles: [".agm-map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvYnVpbGRlci9zcmMvYXBwL3BhZ2VzL3VpLWVsZW1lbnRzL2NvbnRhaW5lcnMvbWFwLXBhZ2UvQzpcXFVzZXJzXFxkaWd2aWpheS5taXNhbFxcRGVza3RvcFxcV29ya1xcVGVzdF9hcHAvYXBwc1xcYnVpbGRlclxcc3JjXFxhcHBcXHBhZ2VzXFx1aS1lbGVtZW50c1xcY29udGFpbmVyc1xcbWFwLXBhZ2VcXG1hcC1wYWdlLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9idWlsZGVyL3NyYy9hcHAvcGFnZXMvdWktZWxlbWVudHMvY29udGFpbmVycy9tYXAtcGFnZS9tYXAtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoiYXBwcy9idWlsZGVyL3NyYy9hcHAvcGFnZXMvdWktZWxlbWVudHMvY29udGFpbmVycy9tYXAtcGFnZS9tYXAtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZ20tbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiIsIi5hZ20tbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-map-page',
          templateUrl: './map-page.component.html',
          styleUrls: ['./map-page.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/services/charts.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/ui-elements/services/charts.service.ts ***!
    \**************************************************************/

  /*! exports provided: ChartsService */

  /***/
  function srcAppPagesUiElementsServicesChartsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartsService", function () {
      return ChartsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var ChartsService =
    /*#__PURE__*/
    function () {
      function ChartsService() {
        _classCallCheck(this, ChartsService);
      }

      _createClass(ChartsService, [{
        key: "loadLineChartData",
        value: function loadLineChartData() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            series: [{
              name: 'series1',
              data: [31, 40, 28, 51, 42, 109, 100]
            }, {
              name: 'series2',
              data: [11, 32, 45, 32, 34, 52, 41]
            }],
            categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z']
          });
        }
      }, {
        key: "dashedLineChartData",
        value: function dashedLineChartData() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            series: [{
              name: 'Session Duration',
              data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
            }, {
              name: 'Page Views',
              data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
            }, {
              name: 'Total Visits',
              data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
            }],
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan']
          });
        }
      }, {
        key: "loadPieChartData",
        value: function loadPieChartData() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            series: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
          });
        }
      }, {
        key: "loadHeatmapChartData",
        value: function loadHeatmapChartData() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            series: [{
              name: 'Metric1',
              data: this.generateApexHeatmapChartData(18, {
                min: 0,
                max: 90
              })
            }, {
              name: 'Metric2',
              data: this.generateApexHeatmapChartData(18, {
                min: 0,
                max: 90
              })
            }, {
              name: 'Metric3',
              data: this.generateApexHeatmapChartData(18, {
                min: 0,
                max: 90
              })
            }, {
              name: 'Metric4',
              data: this.generateApexHeatmapChartData(18, {
                min: 0,
                max: 90
              })
            }, {
              name: 'Metric5',
              data: this.generateApexHeatmapChartData(18, {
                min: 0,
                max: 90
              })
            }, {
              name: 'Metric6',
              data: this.generateApexHeatmapChartData(18, {
                min: 0,
                max: 90
              })
            }, {
              name: 'Metric7',
              data: this.generateApexHeatmapChartData(18, {
                min: 0,
                max: 90
              })
            }, {
              name: 'Metric8',
              data: this.generateApexHeatmapChartData(18, {
                min: 0,
                max: 90
              })
            }, {
              name: 'Metric9',
              data: this.generateApexHeatmapChartData(18, {
                min: 0,
                max: 90
              })
            }]
          });
        }
      }, {
        key: "generateApexHeatmapChartData",
        value: function generateApexHeatmapChartData(count, yrange) {
          var i = 0;
          var series = [];

          while (i < count) {
            var x = 'w' + (i + 1).toString();
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            series.push({
              x: x,
              y: y
            });
            i++;
          }

          return series;
        }
      }]);

      return ChartsService;
    }();

    ChartsService.ɵfac = function ChartsService_Factory(t) {
      return new (t || ChartsService)();
    };

    ChartsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ChartsService,
      factory: ChartsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/services/index.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/ui-elements/services/index.ts ***!
    \*****************************************************/

  /*! exports provided: ChartsService */

  /***/
  function srcAppPagesUiElementsServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _charts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./charts.service */
    "./src/app/pages/ui-elements/services/charts.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChartsService", function () {
      return _charts_service__WEBPACK_IMPORTED_MODULE_0__["ChartsService"];
    });
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/ui-elements-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/ui-elements/ui-elements-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: UiElementsRoutingModule */

  /***/
  function srcAppPagesUiElementsUiElementsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiElementsRoutingModule", function () {
      return UiElementsRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components */
    "./src/app/pages/ui-elements/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./containers */
    "./src/app/pages/ui-elements/containers/index.ts");

    var routes = [{
      path: 'icons',
      component: _components__WEBPACK_IMPORTED_MODULE_2__["IconsPageComponent"]
    }, {
      path: 'charts',
      component: _containers__WEBPACK_IMPORTED_MODULE_3__["ChartsPageComponent"]
    }, {
      path: 'map',
      component: _containers__WEBPACK_IMPORTED_MODULE_3__["MapPageComponent"]
    }];

    var UiElementsRoutingModule = function UiElementsRoutingModule() {
      _classCallCheck(this, UiElementsRoutingModule);
    };

    UiElementsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiElementsRoutingModule
    });
    UiElementsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function UiElementsRoutingModule_Factory(t) {
        return new (t || UiElementsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiElementsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UiElementsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/ui-elements.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/ui-elements/ui-elements.module.ts ***!
    \*********************************************************/

  /*! exports provided: UiElementsModule */

  /***/
  function srcAppPagesUiElementsUiElementsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiElementsModule", function () {
      return UiElementsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components */
    "./src/app/pages/ui-elements/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./containers */
    "./src/app/pages/ui-elements/containers/index.ts");
    /* harmony import */


    var _ui_elements_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./ui-elements-routing.module */
    "./src/app/pages/ui-elements/ui-elements-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services */
    "./src/app/pages/ui-elements/services/index.ts");
    /* harmony import */


    var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../dashboard/dashboard.module */
    "./src/app/pages/dashboard/dashboard.module.ts"); // import { NgApexchartsModule } from 'ng-apexcharts';
    // import { AgmCoreModule } from '@agm/core';


    var UiElementsModule = function UiElementsModule() {
      _classCallCheck(this, UiElementsModule);
    };

    UiElementsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UiElementsModule
    });
    UiElementsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UiElementsModule_Factory(t) {
        return new (t || UiElementsModule)();
      },
      providers: [_services__WEBPACK_IMPORTED_MODULE_11__["ChartsService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ui_elements_routing_module__WEBPACK_IMPORTED_MODULE_9__["UiElementsRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], // NgApexchartsModule,
      // AgmCoreModule,
      // AgmCoreModule.forRoot({
      //   apiKey: googleMapKey
      // }),
      _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_12__["DashboardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiElementsModule, {
        declarations: [_components__WEBPACK_IMPORTED_MODULE_7__["IconsPageComponent"], _containers__WEBPACK_IMPORTED_MODULE_8__["ChartsPageComponent"], _containers__WEBPACK_IMPORTED_MODULE_8__["MapPageComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["LineChartComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["DashedLineChartComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["PieChartComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["HeatmapChartComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ui_elements_routing_module__WEBPACK_IMPORTED_MODULE_9__["UiElementsRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], // NgApexchartsModule,
        // AgmCoreModule,
        // AgmCoreModule.forRoot({
        //   apiKey: googleMapKey
        // }),
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_12__["DashboardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiElementsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components__WEBPACK_IMPORTED_MODULE_7__["IconsPageComponent"], _containers__WEBPACK_IMPORTED_MODULE_8__["ChartsPageComponent"], _containers__WEBPACK_IMPORTED_MODULE_8__["MapPageComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["LineChartComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["DashedLineChartComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["PieChartComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["HeatmapChartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ui_elements_routing_module__WEBPACK_IMPORTED_MODULE_9__["UiElementsRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], // NgApexchartsModule,
          // AgmCoreModule,
          // AgmCoreModule.forRoot({
          //   apiKey: googleMapKey
          // }),
          _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_12__["DashboardModule"]],
          providers: [_services__WEBPACK_IMPORTED_MODULE_11__["ChartsService"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-ui-elements-ui-elements-module-es5.js.map