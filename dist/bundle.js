/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_twoCommands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/twoCommands */ \"./src/modules/twoCommands.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n //Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)(); // меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); // popup\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__.default)(); //tabs\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)(); // slider\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)(); // classes, attribites\n\n(0,_modules_twoCommands__WEBPACK_IMPORTED_MODULE_5__.default)(); //калькулятор\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__.default)(); //send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__.default)();\n\n//# sourceURL=webpack://CoursJS-Slider/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = Math.ceil(price * typeValue * squareValue * countValue * dayValue);\n    }\n\n    totalValue.textContent = total;\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n  var calcItem = document.querySelectorAll('.calc-item');\n  calcItem.forEach(function (item, index) {\n    if (index > 0) {\n      item.addEventListener('input', function () {\n        return item.value = item.value.replace(/\\D/g, '');\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://CoursJS-Slider/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer() {\n  var deadline = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '31 march 2021';\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds'),\n      timerNumbers = document.querySelector('.timer-numbers');\n\n  function addZero(i) {\n    if (i < 10) {\n      i = \"0\" + i;\n    }\n\n    return i;\n  }\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = addZero(Math.floor(timeRemaining % 60)),\n        minutes = addZero(Math.floor(timeRemaining / 60 % 60)),\n        hours = addZero(Math.floor(timeRemaining / 60 / 60));\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n    timerHours.textContent = timer.hours;\n    timerMinutes.textContent = timer.minutes;\n    timerSeconds.textContent = timer.seconds;\n\n    if (timer.timeRemaining > 0) {\n      setTimeout(updateClock, 1000);\n    } else {\n      clearTimeout(updateClock);\n      timerHours.textContent = '';\n      timerMinutes.textContent = '';\n      timerSeconds.textContent = '';\n      var span;\n      span = document.createElement(span);\n      span.innerHTML = \"<h1>До новых акций</h1>\";\n      timerNumbers.append(span);\n    }\n  }\n\n  updateClock();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://CoursJS-Slider/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var form1Name = document.getElementById('form1-name'),\n      form2Name = document.getElementById('form2-name'),\n      form3Name = document.getElementById('form3-name'),\n      form2Message = document.getElementById('form2-message'),\n      form1Phone = document.getElementById('form1-phone'),\n      form2Phone = document.getElementById('form2-phone'),\n      form3Phone = document.getElementById('form3-phone'),\n      form1Email = document.getElementById('form1-email'),\n      form2Email = document.getElementById('form2-email'),\n      form3Email = document.getElementById('form3-email');\n  form1Name.addEventListener('input', function () {\n    return form1Name.value = form1Name.value.replace(/\\w/g, '');\n  });\n  form2Name.addEventListener('input', function () {\n    return form2Name.value = form2Name.value.replace(/\\w/g, '');\n  });\n  form3Name.addEventListener('input', function () {\n    return form3Name.value = form3Name.value.replace(/\\w/g, '');\n  });\n  form1Name.addEventListener('blur', function () {\n    return form1Name.value = form1Name.value.replace(/^[а-я]/g, function (match) {\n      return match.toUpperCase();\n    });\n  });\n  form2Name.addEventListener('blur', function () {\n    return form2Name.value = form2Name.value.replace(/^[а-я]/g, function (match) {\n      return match.toUpperCase();\n    });\n  });\n  form3Name.addEventListener('blur', function () {\n    return form3Name.value = form2Name.value.replace(/^[а-я]/g, function (match) {\n      return match.toUpperCase();\n    });\n  });\n  form1Phone.addEventListener('input', function () {\n    return form1Phone.value = form1Phone.value.replace(/\\D[^()-]/g, '');\n  });\n  form1Email.addEventListener('input', function () {\n    form1Email.value = form1Email.value.replace(/[а-я][^\\.-@)]/gi, '');\n  });\n  form2Message.addEventListener('input', function () {\n    return form2Message.value = form2Message.value.replace(/[a-z]+/gi, '');\n  });\n  form2Phone.addEventListener('input', function () {\n    return form2Phone.value = form2Phone.value.replace(/\\D[^()-]/g, '');\n  });\n  form2Email.addEventListener('input', function () {\n    form2Email.value = form2Email.value.replace(/[а-я][^\\.-@)]/gi, '');\n  });\n  form3Phone.addEventListener('input', function () {\n    return form3Phone.value = form3Phone.value.replace(/\\D[^()-]/g, '');\n  });\n  form3Email.addEventListener('input', function () {\n    form3Email.value = form3Email.value.replace(/[а-я][^\\.-@)]/gi, '');\n  });\n\n  var sendTopForm = function sendTopForm() {\n    var errorMessage = 'Что-то пошло не так...',\n        loadMessage = 'Загрузка...',\n        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n    var form = document.getElementById('form1');\n    var statusMessage = document.createElement('div');\n    statusMessage.style.cssText = 'font-size: 2rem';\n    form.addEventListener('submit', function (event) {\n      event.preventDefault();\n      form.appendChild(statusMessage);\n      var request = new XMLHttpRequest();\n      request.addEventListener('readystatechange', function () {\n        statusMessage.textContent = loadMessage;\n\n        if (request.readyState !== 4) {\n          return;\n        }\n\n        if (request.status === 200) {\n          statusMessage.textContent = successMessage;\n        } else {\n          statusMessage.textContent = errorMessage;\n          console.error(request.status);\n        }\n      });\n      form.reset();\n      request.open('POST', './server.php');\n      request.setRequestHeader('Content-Type', 'application/json');\n      var formData = new FormData(form);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n      request.send(JSON.stringify(body));\n    });\n  };\n\n  sendTopForm();\n\n  var sendFormModal = function sendFormModal() {\n    var errorMessage = 'Что-то пошло не так...',\n        loadMessage = 'Загрузка...',\n        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n    var form = document.getElementById('form2');\n    var statusMessage = document.createElement('div');\n    statusMessage.style.cssText = 'font-size: 2rem';\n    form.addEventListener('submit', function (event) {\n      event.preventDefault();\n      form.appendChild(statusMessage);\n      var request = new XMLHttpRequest();\n      request.addEventListener('readystatechange', function () {\n        statusMessage.textContent = loadMessage;\n\n        if (request.readyState !== 4) {\n          return;\n        }\n\n        if (request.status === 200) {\n          statusMessage.textContent = successMessage;\n        } else {\n          statusMessage.textContent = errorMessage;\n          console.error(request.status);\n        }\n      });\n      form.reset();\n      request.open('POST', './server.php');\n      request.setRequestHeader('Content-Type', 'application/json');\n      var formData = new FormData(form);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n      request.send(JSON.stringify(body));\n    });\n  };\n\n  sendFormModal();\n\n  var sendFormFooter = function sendFormFooter() {\n    var errorMessage = 'Что-то пошло не так...',\n        loadMessage = 'Загрузка...',\n        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n    var form = document.getElementById('form3');\n    var statusMessage = document.createElement('div');\n    statusMessage.style.cssText = 'font-size: 2rem';\n    form.addEventListener('submit', function (event) {\n      event.preventDefault();\n      form.appendChild(statusMessage);\n      var request = new XMLHttpRequest();\n      request.addEventListener('readystatechange', function () {\n        statusMessage.textContent = loadMessage;\n\n        if (request.readyState !== 4) {\n          return;\n        }\n\n        if (request.status === 200) {\n          statusMessage.textContent = successMessage;\n        } else {\n          statusMessage.textContent = errorMessage;\n          console.error(request.status);\n        }\n      });\n      form.reset();\n      request.open('POST', './server.php');\n      request.setRequestHeader('Content-Type', 'application/json');\n      var formData = new FormData(form);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n      request.send(JSON.stringify(body));\n    });\n  };\n\n  sendFormFooter();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://CoursJS-Slider/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      btn = document.querySelectorAll('.portfolio-btn'),\n      slider = document.querySelector('.portfolio-content'),\n      ul = document.querySelectorAll('ul')[2];\n\n  function Dot() {\n    for (var i = 0; i < slide.length; i++) {\n      var li = document.createElement('li');\n      ul.appendChild(li);\n      li.classList.add('dot');\n    }\n  }\n\n  Dot();\n  var dot = document.querySelectorAll('.dot');\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1500;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n\n        ;\n      });\n    }\n\n    ;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://CoursJS-Slider/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n\n        ;\n      });\n    }\n\n    ;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://CoursJS-Slider/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var btnMenu = document.querySelector('.menu'),\n      menu = document.querySelector('menu'),\n      //  closeBtn = document.querySelector('.close-btn'),\n  menuItems = menu.querySelectorAll('ul>li'); //  anchors = document.querySelectorAll('a.scroll-to');\n\n  var handlerMenu = function handlerMenu() {\n    console.log(menu.style.transform);\n\n    if (!menu.style.transform || menu.style.transform === 'translate(-100%)') {\n      menu.style.transform = 'translate(0)';\n    } else {\n      menu.style.transform = 'translate(-100%)';\n    }\n  };\n\n  btnMenu.addEventListener('click', handlerMenu); // closeBtn.addEventListener('click', handlerMenu);\n\n  menuItems.forEach(function (elem) {\n    return elem.addEventListener('type', handlerMenu);\n  });\n  menu.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target !== menu) {\n      target = target.parentNode;\n    }\n\n    if (target.classList.contains('close-btn')) {\n      handlerMenu();\n    }\n\n    ;\n    menuItems.forEach(function (elem) {\n      if (target) {\n        handlerMenu();\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://CoursJS-Slider/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popupContent = document.querySelectorAll('.popup-content'),\n      width = document.documentElement.clientWidth;\n  var count = 0;\n\n  var popupSlide = function popupSlide() {\n    popupContent.forEach(function (elem) {\n      elem.style.left = -350 + 'px';\n      count++;\n      elem.style.left = count * 3 + 'px';\n\n      if (count < 150) {\n        setTimeout(popupSlide, 5);\n      }\n    });\n  };\n\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n      popupSlide();\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n      count = 0;\n    } else {\n      target = target.closest('.popup-content');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://CoursJS-Slider/./src/modules/togglePopUp.js?");

/***/ }),

/***/ "./src/modules/twoCommands.js":
/*!************************************!*\
  !*** ./src/modules/twoCommands.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar twoCommands = function twoCommands() {\n  var commandPhoto = document.querySelectorAll('.command__photo');\n\n  for (var i = 0; i <= commandPhoto.length - 1; i++) {\n    commandPhoto[i].addEventListener('mouseenter', function (event) {\n      var tmp = event.target.src;\n      event.target.src = event.target.dataset.img;\n      event.target.dataset.img = tmp;\n    });\n    commandPhoto[i].addEventListener('mouseout', function (event) {\n      var tmp = event.target.src;\n      event.target.src = event.target.dataset.img;\n      event.target.dataset.img = tmp;\n    });\n  }\n\n  ;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (twoCommands);\n\n//# sourceURL=webpack://CoursJS-Slider/./src/modules/twoCommands.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;