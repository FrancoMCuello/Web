import {
  useRtl
} from "./chunk-XJRAAKBQ.js";
import {
  capitalize_default,
  init_capitalize
} from "./chunk-M3Z5ZPZW.js";
import {
  init_DefaultPropsProvider,
  useDefaultProps
} from "./chunk-HIOP26MA.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  chainPropTypes,
  clamp_default,
  clsx_default,
  composeClasses,
  extractEventHandlers_default,
  generateUtilityClass,
  generateUtilityClasses,
  init_chainPropTypes,
  init_clsx,
  init_composeClasses,
  init_esm,
  init_extends,
  init_extractEventHandlers,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_isHostComponent,
  init_objectWithoutPropertiesLoose,
  init_slotShouldForwardProp,
  init_styled,
  init_useSlotProps,
  isHostComponent_default,
  ownerDocument,
  require_colorManipulator,
  require_prop_types,
  slotShouldForwardProp_default,
  styled_default,
  useControlled,
  useEnhancedEffect_default,
  useEventCallback_default,
  useForkRef,
  useIsFocusVisible,
  useSlotProps_default,
  visuallyHidden_default
} from "./chunk-7MC7IZNK.js";
import {
  require_jsx_runtime
} from "./chunk-H2GII3ND.js";
import {
  require_react
} from "./chunk-4JI2AD7N.js";
import {
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/@mui/material/Slider/Slider.js
init_objectWithoutPropertiesLoose();
init_extends();
var React3 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
init_clsx();
init_chainPropTypes();
init_composeClasses();
var import_colorManipulator = __toESM(require_colorManipulator());
init_useSlotProps();
init_isHostComponent();

// node_modules/@mui/material/Slider/useSlider.js
init_extends();
var React = __toESM(require_react());
init_esm();
init_extractEventHandlers();

// node_modules/@mui/material/utils/areArraysEqual.js
function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}
var areArraysEqual_default = areArraysEqual;

// node_modules/@mui/material/Slider/useSlider.js
var INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function asc(a, b) {
  return a - b;
}
function findClosest(values, currentValue) {
  var _values$reduce;
  const {
    index: closestIndex
  } = (_values$reduce = values.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }
    return acc;
  }, null)) != null ? _values$reduce : {};
  return closestIndex;
}
function trackFinger(event, touchId) {
  if (touchId.current !== void 0 && event.changedTouches) {
    const touchEvent = event;
    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
      const touch = touchEvent.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}
function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split("e-");
    const matissaDecimalPart = parts[0].split(".")[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function setValueIndex({
  values,
  newValue,
  index
}) {
  const output = values.slice();
  output[index] = newValue;
  return output.sort(asc);
}
function focusThumb({
  sliderRef,
  activeIndex,
  setActive
}) {
  var _sliderRef$current, _doc$activeElement;
  const doc = ownerDocument(sliderRef.current);
  if (!((_sliderRef$current = sliderRef.current) != null && _sliderRef$current.contains(doc.activeElement)) || Number(doc == null || (_doc$activeElement = doc.activeElement) == null ? void 0 : _doc$activeElement.getAttribute("data-index")) !== activeIndex) {
    var _sliderRef$current2;
    (_sliderRef$current2 = sliderRef.current) == null || _sliderRef$current2.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
  }
  if (setActive) {
    setActive(activeIndex);
  }
}
function areValuesEqual(newValue, oldValue) {
  if (typeof newValue === "number" && typeof oldValue === "number") {
    return newValue === oldValue;
  }
  if (typeof newValue === "object" && typeof oldValue === "object") {
    return areArraysEqual_default(newValue, oldValue);
  }
  return false;
}
var axisProps = {
  horizontal: {
    offset: (percent) => ({
      left: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  "horizontal-reverse": {
    offset: (percent) => ({
      right: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  vertical: {
    offset: (percent) => ({
      bottom: `${percent}%`
    }),
    leap: (percent) => ({
      height: `${percent}%`
    })
  }
};
var Identity = (x) => x;
var cachedSupportsTouchActionNone;
function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === void 0) {
    if (typeof CSS !== "undefined" && typeof CSS.supports === "function") {
      cachedSupportsTouchActionNone = CSS.supports("touch-action", "none");
    } else {
      cachedSupportsTouchActionNone = true;
    }
  }
  return cachedSupportsTouchActionNone;
}
function useSlider(parameters) {
  const {
    "aria-labelledby": ariaLabelledby,
    defaultValue,
    disabled = false,
    disableSwap = false,
    isRtl = false,
    marks: marksProp = false,
    max = 100,
    min = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = "horizontal",
    rootRef: ref,
    scale = Identity,
    step = 1,
    shiftStep = 10,
    tabIndex,
    value: valueProp
  } = parameters;
  const touchId = React.useRef();
  const [active, setActive] = React.useState(-1);
  const [open, setOpen] = React.useState(-1);
  const [dragging, setDragging] = React.useState(false);
  const moveCount = React.useRef(0);
  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : min,
    name: "Slider"
  });
  const handleChange = onChange && ((event, value, thumbIndex) => {
    const nativeEvent = event.nativeEvent || event;
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, "target", {
      writable: true,
      value: {
        value,
        name
      }
    });
    onChange(clonedEvent, value, thumbIndex);
  });
  const range = Array.isArray(valueDerived);
  let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map((value) => value == null ? min : clamp_default(value, min, max));
  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max - min) / step) + 1)].map((_, index) => ({
    value: min + step * index
  })) : marksProp || [];
  const marksValues = marks.map((mark) => mark.value);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusedThumbIndex, setFocusedThumbIndex] = React.useState(-1);
  const sliderRef = React.useRef();
  const handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
  const handleRef = useForkRef(ref, handleFocusRef);
  const createHandleHiddenInputFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    const index = Number(event.currentTarget.getAttribute("data-index"));
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusedThumbIndex(index);
    }
    setOpen(index);
    otherHandlers == null || (_otherHandlers$onFocu = otherHandlers.onFocus) == null || _otherHandlers$onFocu.call(otherHandlers, event);
  };
  const createHandleHiddenInputBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusedThumbIndex(-1);
    }
    setOpen(-1);
    otherHandlers == null || (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
  };
  const changeValue = (event, valueInput) => {
    const index = Number(event.currentTarget.getAttribute("data-index"));
    const value = values[index];
    const marksIndex = marksValues.indexOf(value);
    let newValue = valueInput;
    if (marks && step == null) {
      const maxMarksValue = marksValues[marksValues.length - 1];
      if (newValue > maxMarksValue) {
        newValue = maxMarksValue;
      } else if (newValue < marksValues[0]) {
        newValue = marksValues[0];
      } else {
        newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
      }
    }
    newValue = clamp_default(newValue, min, max);
    if (range) {
      if (disableSwap) {
        newValue = clamp_default(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index
      });
      let activeIndex = index;
      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }
      focusThumb({
        sliderRef,
        activeIndex
      });
    }
    setValueState(newValue);
    setFocusedThumbIndex(index);
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(event, newValue, index);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  };
  const createHandleHiddenInputKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    if (step !== null) {
      const index = Number(event.currentTarget.getAttribute("data-index"));
      const value = values[index];
      let newValue = null;
      if ((event.key === "ArrowLeft" || event.key === "ArrowDown") && event.shiftKey || event.key === "PageDown") {
        newValue = Math.max(value - shiftStep, min);
      } else if ((event.key === "ArrowRight" || event.key === "ArrowUp") && event.shiftKey || event.key === "PageUp") {
        newValue = Math.min(value + shiftStep, max);
      }
      if (newValue !== null) {
        changeValue(event, newValue);
        event.preventDefault();
      }
    }
    otherHandlers == null || (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
  };
  useEnhancedEffect_default(() => {
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      var _document$activeEleme;
      (_document$activeEleme = document.activeElement) == null || _document$activeEleme.blur();
    }
  }, [disabled]);
  if (disabled && active !== -1) {
    setActive(-1);
  }
  if (disabled && focusedThumbIndex !== -1) {
    setFocusedThumbIndex(-1);
  }
  const createHandleHiddenInputChange = (otherHandlers) => (event) => {
    var _otherHandlers$onChan;
    (_otherHandlers$onChan = otherHandlers.onChange) == null || _otherHandlers$onChan.call(otherHandlers, event);
    changeValue(event, event.target.valueAsNumber);
  };
  const previousIndex = React.useRef();
  let axis = orientation;
  if (isRtl && orientation === "horizontal") {
    axis += "-reverse";
  }
  const getFingerNewValue = ({
    finger,
    move = false
  }) => {
    const {
      current: slider
    } = sliderRef;
    const {
      width,
      height,
      bottom,
      left
    } = slider.getBoundingClientRect();
    let percent;
    if (axis.indexOf("vertical") === 0) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }
    if (axis.indexOf("-reverse") !== -1) {
      percent = 1 - percent;
    }
    let newValue;
    newValue = percentToValue(percent, min, max);
    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp_default(newValue, min, max);
    let activeIndex = 0;
    if (range) {
      if (!move) {
        activeIndex = findClosest(values, newValue);
      } else {
        activeIndex = previousIndex.current;
      }
      if (disableSwap) {
        newValue = clamp_default(newValue, values[activeIndex - 1] || -Infinity, values[activeIndex + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index: activeIndex
      });
      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }
    return {
      newValue,
      activeIndex
    };
  };
  const handleTouchMove = useEventCallback_default((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    if (!finger) {
      return;
    }
    moveCount.current += 1;
    if (nativeEvent.type === "mousemove" && nativeEvent.buttons === 0) {
      handleTouchEnd(nativeEvent);
      return;
    }
    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      move: true
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });
  const handleTouchEnd = useEventCallback_default((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);
    if (!finger) {
      return;
    }
    const {
      newValue
    } = getFingerNewValue({
      finger,
      move: true
    });
    setActive(-1);
    if (nativeEvent.type === "touchend") {
      setOpen(-1);
    }
    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, newValue);
    }
    touchId.current = void 0;
    stopListening();
  });
  const handleTouchStart = useEventCallback_default((nativeEvent) => {
    if (disabled) {
      return;
    }
    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }
    const touch = nativeEvent.changedTouches[0];
    if (touch != null) {
      touchId.current = touch.identifier;
    }
    const finger = trackFinger(nativeEvent, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("touchmove", handleTouchMove, {
      passive: true
    });
    doc.addEventListener("touchend", handleTouchEnd, {
      passive: true
    });
  });
  const stopListening = React.useCallback(() => {
    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener("mousemove", handleTouchMove);
    doc.removeEventListener("mouseup", handleTouchEnd);
    doc.removeEventListener("touchmove", handleTouchMove);
    doc.removeEventListener("touchend", handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  React.useEffect(() => {
    const {
      current: slider
    } = sliderRef;
    slider.addEventListener("touchstart", handleTouchStart, {
      passive: doesSupportTouchActionNone()
    });
    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  React.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;
    (_otherHandlers$onMous = otherHandlers.onMouseDown) == null || _otherHandlers$onMous.call(otherHandlers, event);
    if (disabled) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    const finger = trackFinger(event, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(event, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("mousemove", handleTouchMove, {
      passive: true
    });
    doc.addEventListener("mouseup", handleTouchEnd);
  };
  const trackOffset = valueToPercent(range ? values[0] : min, min, max);
  const trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;
  const getRootProps = (externalProps = {}) => {
    const externalHandlers = extractEventHandlers_default(externalProps);
    const ownEventHandlers = {
      onMouseDown: createHandleMouseDown(externalHandlers || {})
    };
    const mergedEventHandlers = _extends({}, externalHandlers, ownEventHandlers);
    return _extends({}, externalProps, {
      ref: handleRef
    }, mergedEventHandlers);
  };
  const createHandleMouseOver = (otherHandlers) => (event) => {
    var _otherHandlers$onMous2;
    (_otherHandlers$onMous2 = otherHandlers.onMouseOver) == null || _otherHandlers$onMous2.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute("data-index"));
    setOpen(index);
  };
  const createHandleMouseLeave = (otherHandlers) => (event) => {
    var _otherHandlers$onMous3;
    (_otherHandlers$onMous3 = otherHandlers.onMouseLeave) == null || _otherHandlers$onMous3.call(otherHandlers, event);
    setOpen(-1);
  };
  const getThumbProps = (externalProps = {}) => {
    const externalHandlers = extractEventHandlers_default(externalProps);
    const ownEventHandlers = {
      onMouseOver: createHandleMouseOver(externalHandlers || {}),
      onMouseLeave: createHandleMouseLeave(externalHandlers || {})
    };
    return _extends({}, externalProps, externalHandlers, ownEventHandlers);
  };
  const getThumbStyle = (index) => {
    return {
      // So the non active thumb doesn't show its label on hover.
      pointerEvents: active !== -1 && active !== index ? "none" : void 0
    };
  };
  const getHiddenInputProps = (externalProps = {}) => {
    var _parameters$step;
    const externalHandlers = extractEventHandlers_default(externalProps);
    const ownEventHandlers = {
      onChange: createHandleHiddenInputChange(externalHandlers || {}),
      onFocus: createHandleHiddenInputFocus(externalHandlers || {}),
      onBlur: createHandleHiddenInputBlur(externalHandlers || {}),
      onKeyDown: createHandleHiddenInputKeyDown(externalHandlers || {})
    };
    const mergedEventHandlers = _extends({}, externalHandlers, ownEventHandlers);
    return _extends({
      tabIndex,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": scale(max),
      "aria-valuemin": scale(min),
      name,
      type: "range",
      min: parameters.min,
      max: parameters.max,
      step: parameters.step === null && parameters.marks ? "any" : (_parameters$step = parameters.step) != null ? _parameters$step : void 0,
      disabled
    }, externalProps, mergedEventHandlers, {
      style: _extends({}, visuallyHidden_default, {
        direction: isRtl ? "rtl" : "ltr",
        // So that VoiceOver's focus indicator matches the thumb's dimensions
        width: "100%",
        height: "100%"
      })
    });
  };
  return {
    active,
    axis,
    axisProps,
    dragging,
    focusedThumbIndex,
    getHiddenInputProps,
    getRootProps,
    getThumbProps,
    marks,
    open,
    range,
    rootRef: handleRef,
    trackLeap,
    trackOffset,
    values,
    getThumbStyle
  };
}

// node_modules/@mui/material/zero-styled/index.js
init_styled();

// node_modules/@mui/material/Slider/Slider.js
init_DefaultPropsProvider();
init_slotShouldForwardProp();

// node_modules/@mui/material/utils/shouldSpreadAdditionalProps.js
init_isHostComponent();
var shouldSpreadAdditionalProps = (Slot) => {
  return !Slot || !isHostComponent_default(Slot);
};
var shouldSpreadAdditionalProps_default = shouldSpreadAdditionalProps;

// node_modules/@mui/material/Slider/Slider.js
init_capitalize();

// node_modules/@mui/material/Slider/SliderValueLabel.js
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();

// node_modules/@mui/material/Slider/sliderClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getSliderUtilityClass(slot) {
  return generateUtilityClass("MuiSlider", slot);
}
var sliderClasses = generateUtilityClasses("MuiSlider", ["root", "active", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "disabled", "dragging", "focusVisible", "mark", "markActive", "marked", "markLabel", "markLabelActive", "rail", "sizeSmall", "thumb", "thumbColorPrimary", "thumbColorSecondary", "thumbColorError", "thumbColorSuccess", "thumbColorInfo", "thumbColorWarning", "track", "trackInverted", "trackFalse", "thumbSizeSmall", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel", "vertical"]);
var sliderClasses_default = sliderClasses;

// node_modules/@mui/material/Slider/SliderValueLabel.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var useValueLabelClasses = (props) => {
  const {
    open
  } = props;
  const utilityClasses = {
    offset: clsx_default(open && sliderClasses_default.valueLabelOpen),
    circle: sliderClasses_default.valueLabelCircle,
    label: sliderClasses_default.valueLabelLabel
  };
  return utilityClasses;
};
function SliderValueLabel(props) {
  const {
    children,
    className,
    value
  } = props;
  const classes = useValueLabelClasses(props);
  if (!children) {
    return null;
  }
  return React2.cloneElement(children, {
    className: clsx_default(children.props.className)
  }, (0, import_jsx_runtime2.jsxs)(React2.Fragment, {
    children: [children.props.children, (0, import_jsx_runtime.jsx)("span", {
      className: clsx_default(classes.offset, className),
      "aria-hidden": true,
      children: (0, import_jsx_runtime.jsx)("span", {
        className: classes.circle,
        children: (0, import_jsx_runtime.jsx)("span", {
          className: classes.label,
          children: value
        })
      })
    })]
  }));
}
true ? SliderValueLabel.propTypes = {
  children: import_prop_types.default.element.isRequired,
  className: import_prop_types.default.string,
  value: import_prop_types.default.node
} : void 0;

// node_modules/@mui/material/Slider/Slider.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded = ["aria-label", "aria-valuetext", "aria-labelledby", "component", "components", "componentsProps", "color", "classes", "className", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "orientation", "shiftStep", "size", "step", "scale", "slotProps", "slots", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat"];
function Identity2(x) {
  return x;
}
var SliderRoot = styled_default("span", {
  name: "MuiSlider",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`color${capitalize_default(ownerState.color)}`], ownerState.size !== "medium" && styles[`size${capitalize_default(ownerState.size)}`], ownerState.marked && styles.marked, ownerState.orientation === "vertical" && styles.vertical, ownerState.track === "inverted" && styles.trackInverted, ownerState.track === false && styles.trackFalse];
  }
})(({
  theme
}) => {
  var _theme$vars;
  return {
    borderRadius: 12,
    boxSizing: "content-box",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    touchAction: "none",
    WebkitTapHighlightColor: "transparent",
    "@media print": {
      colorAdjust: "exact"
    },
    [`&.${sliderClasses_default.disabled}`]: {
      pointerEvents: "none",
      cursor: "default",
      color: (theme.vars || theme).palette.grey[400]
    },
    [`&.${sliderClasses_default.dragging}`]: {
      [`& .${sliderClasses_default.thumb}, & .${sliderClasses_default.track}`]: {
        transition: "none"
      }
    },
    variants: [...Object.keys(((_theme$vars = theme.vars) != null ? _theme$vars : theme).palette).filter((key) => {
      var _theme$vars2;
      return ((_theme$vars2 = theme.vars) != null ? _theme$vars2 : theme).palette[key].main;
    }).map((color) => ({
      props: {
        color
      },
      style: {
        color: (theme.vars || theme).palette[color].main
      }
    })), {
      props: {
        orientation: "horizontal"
      },
      style: {
        height: 4,
        width: "100%",
        padding: "13px 0",
        // The primary input mechanism of the device includes a pointing device of limited accuracy.
        "@media (pointer: coarse)": {
          // Reach 42px touch target, about ~8mm on screen.
          padding: "20px 0"
        }
      }
    }, {
      props: {
        orientation: "horizontal",
        size: "small"
      },
      style: {
        height: 2
      }
    }, {
      props: {
        orientation: "horizontal",
        marked: true
      },
      style: {
        marginBottom: 20
      }
    }, {
      props: {
        orientation: "vertical"
      },
      style: {
        height: "100%",
        width: 4,
        padding: "0 13px",
        // The primary input mechanism of the device includes a pointing device of limited accuracy.
        "@media (pointer: coarse)": {
          // Reach 42px touch target, about ~8mm on screen.
          padding: "0 20px"
        }
      }
    }, {
      props: {
        orientation: "vertical",
        size: "small"
      },
      style: {
        width: 2
      }
    }, {
      props: {
        orientation: "vertical",
        marked: true
      },
      style: {
        marginRight: 44
      }
    }]
  };
});
var SliderRail = styled_default("span", {
  name: "MuiSlider",
  slot: "Rail",
  overridesResolver: (props, styles) => styles.rail
})({
  display: "block",
  position: "absolute",
  borderRadius: "inherit",
  backgroundColor: "currentColor",
  opacity: 0.38,
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "100%",
      height: "inherit",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      width: "inherit",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }, {
    props: {
      track: "inverted"
    },
    style: {
      opacity: 1
    }
  }]
});
var SliderTrack = styled_default("span", {
  name: "MuiSlider",
  slot: "Track",
  overridesResolver: (props, styles) => styles.track
})(({
  theme
}) => {
  var _theme$vars3;
  return {
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    border: "1px solid currentColor",
    backgroundColor: "currentColor",
    transition: theme.transitions.create(["left", "width", "bottom", "height"], {
      duration: theme.transitions.duration.shortest
    }),
    variants: [{
      props: {
        size: "small"
      },
      style: {
        border: "none"
      }
    }, {
      props: {
        orientation: "horizontal"
      },
      style: {
        height: "inherit",
        top: "50%",
        transform: "translateY(-50%)"
      }
    }, {
      props: {
        orientation: "vertical"
      },
      style: {
        width: "inherit",
        left: "50%",
        transform: "translateX(-50%)"
      }
    }, {
      props: {
        track: false
      },
      style: {
        display: "none"
      }
    }, ...Object.keys(((_theme$vars3 = theme.vars) != null ? _theme$vars3 : theme).palette).filter((key) => {
      var _theme$vars4;
      return ((_theme$vars4 = theme.vars) != null ? _theme$vars4 : theme).palette[key].main;
    }).map((color) => ({
      props: {
        color,
        track: "inverted"
      },
      style: _extends({}, theme.vars ? {
        backgroundColor: theme.vars.palette.Slider[`${color}Track`],
        borderColor: theme.vars.palette.Slider[`${color}Track`]
      } : _extends({
        backgroundColor: (0, import_colorManipulator.lighten)(theme.palette[color].main, 0.62),
        borderColor: (0, import_colorManipulator.lighten)(theme.palette[color].main, 0.62)
      }, theme.applyStyles("dark", {
        backgroundColor: (0, import_colorManipulator.darken)(theme.palette[color].main, 0.5)
      }), theme.applyStyles("dark", {
        borderColor: (0, import_colorManipulator.darken)(theme.palette[color].main, 0.5)
      })))
    }))]
  };
});
var SliderThumb = styled_default("span", {
  name: "MuiSlider",
  slot: "Thumb",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.thumb, styles[`thumbColor${capitalize_default(ownerState.color)}`], ownerState.size !== "medium" && styles[`thumbSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  theme
}) => {
  var _theme$vars5;
  return {
    position: "absolute",
    width: 20,
    height: 20,
    boxSizing: "border-box",
    borderRadius: "50%",
    outline: 0,
    backgroundColor: "currentColor",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: theme.transitions.create(["box-shadow", "left", "bottom"], {
      duration: theme.transitions.duration.shortest
    }),
    "&::before": {
      position: "absolute",
      content: '""',
      borderRadius: "inherit",
      width: "100%",
      height: "100%",
      boxShadow: (theme.vars || theme).shadows[2]
    },
    "&::after": {
      position: "absolute",
      content: '""',
      borderRadius: "50%",
      // 42px is the hit target
      width: 42,
      height: 42,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
    [`&.${sliderClasses_default.disabled}`]: {
      "&:hover": {
        boxShadow: "none"
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        width: 12,
        height: 12,
        "&::before": {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        orientation: "horizontal"
      },
      style: {
        top: "50%",
        transform: "translate(-50%, -50%)"
      }
    }, {
      props: {
        orientation: "vertical"
      },
      style: {
        left: "50%",
        transform: "translate(-50%, 50%)"
      }
    }, ...Object.keys(((_theme$vars5 = theme.vars) != null ? _theme$vars5 : theme).palette).filter((key) => {
      var _theme$vars6;
      return ((_theme$vars6 = theme.vars) != null ? _theme$vars6 : theme).palette[key].main;
    }).map((color) => ({
      props: {
        color
      },
      style: {
        [`&:hover, &.${sliderClasses_default.focusVisible}`]: _extends({}, theme.vars ? {
          boxShadow: `0px 0px 0px 8px rgba(${theme.vars.palette[color].mainChannel} / 0.16)`
        } : {
          boxShadow: `0px 0px 0px 8px ${(0, import_colorManipulator.alpha)(theme.palette[color].main, 0.16)}`
        }, {
          "@media (hover: none)": {
            boxShadow: "none"
          }
        }),
        [`&.${sliderClasses_default.active}`]: _extends({}, theme.vars ? {
          boxShadow: `0px 0px 0px 14px rgba(${theme.vars.palette[color].mainChannel} / 0.16)`
        } : {
          boxShadow: `0px 0px 0px 14px ${(0, import_colorManipulator.alpha)(theme.palette[color].main, 0.16)}`
        })
      }
    }))]
  };
});
var SliderValueLabel2 = styled_default(SliderValueLabel, {
  name: "MuiSlider",
  slot: "ValueLabel",
  overridesResolver: (props, styles) => styles.valueLabel
})(({
  theme
}) => _extends({
  zIndex: 1,
  whiteSpace: "nowrap"
}, theme.typography.body2, {
  fontWeight: 500,
  transition: theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.shortest
  }),
  position: "absolute",
  backgroundColor: (theme.vars || theme).palette.grey[600],
  borderRadius: 2,
  color: (theme.vars || theme).palette.common.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.25rem 0.75rem",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      transform: "translateY(-100%) scale(0)",
      top: "-10px",
      transformOrigin: "bottom center",
      "&::before": {
        position: "absolute",
        content: '""',
        width: 8,
        height: 8,
        transform: "translate(-50%, 50%) rotate(45deg)",
        backgroundColor: "inherit",
        bottom: 0,
        left: "50%"
      },
      [`&.${sliderClasses_default.valueLabelOpen}`]: {
        transform: "translateY(-100%) scale(1)"
      }
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      transform: "translateY(-50%) scale(0)",
      right: "30px",
      top: "50%",
      transformOrigin: "right center",
      "&::before": {
        position: "absolute",
        content: '""',
        width: 8,
        height: 8,
        transform: "translate(-50%, -50%) rotate(45deg)",
        backgroundColor: "inherit",
        right: -8,
        top: "50%"
      },
      [`&.${sliderClasses_default.valueLabelOpen}`]: {
        transform: "translateY(-50%) scale(1)"
      }
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      fontSize: theme.typography.pxToRem(12),
      padding: "0.25rem 0.5rem"
    }
  }, {
    props: {
      orientation: "vertical",
      size: "small"
    },
    style: {
      right: "20px"
    }
  }]
}));
var SliderMark = styled_default("span", {
  name: "MuiSlider",
  slot: "Mark",
  shouldForwardProp: (prop) => slotShouldForwardProp_default(prop) && prop !== "markActive",
  overridesResolver: (props, styles) => {
    const {
      markActive
    } = props;
    return [styles.mark, markActive && styles.markActive];
  }
})(({
  theme
}) => ({
  position: "absolute",
  width: 2,
  height: 2,
  borderRadius: 1,
  backgroundColor: "currentColor",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      top: "50%",
      transform: "translate(-1px, -50%)"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      left: "50%",
      transform: "translate(-50%, 1px)"
    }
  }, {
    props: {
      markActive: true
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.background.paper,
      opacity: 0.8
    }
  }]
}));
var SliderMarkLabel = styled_default("span", {
  name: "MuiSlider",
  slot: "MarkLabel",
  shouldForwardProp: (prop) => slotShouldForwardProp_default(prop) && prop !== "markLabelActive",
  overridesResolver: (props, styles) => styles.markLabel
})(({
  theme
}) => _extends({}, theme.typography.body2, {
  color: (theme.vars || theme).palette.text.secondary,
  position: "absolute",
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      top: 30,
      transform: "translateX(-50%)",
      "@media (pointer: coarse)": {
        top: 40
      }
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      left: 36,
      transform: "translateY(50%)",
      "@media (pointer: coarse)": {
        left: 44
      }
    }
  }, {
    props: {
      markLabelActive: true
    },
    style: {
      color: (theme.vars || theme).palette.text.primary
    }
  }]
}));
var useUtilityClasses = (ownerState) => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track,
    classes,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", dragging && "dragging", marked && "marked", orientation === "vertical" && "vertical", track === "inverted" && "trackInverted", track === false && "trackFalse", color && `color${capitalize_default(color)}`, size && `size${capitalize_default(size)}`],
    rail: ["rail"],
    track: ["track"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    thumb: ["thumb", disabled && "disabled", size && `thumbSize${capitalize_default(size)}`, color && `thumbColor${capitalize_default(color)}`],
    active: ["active"],
    disabled: ["disabled"],
    focusVisible: ["focusVisible"]
  };
  return composeClasses(slots, getSliderUtilityClass, classes);
};
var Forward = ({
  children
}) => children;
var Slider = React3.forwardRef(function Slider2(inputProps, ref) {
  var _ref, _slots$root, _ref2, _slots$rail, _ref3, _slots$track, _ref4, _slots$thumb, _ref5, _slots$valueLabel, _ref6, _slots$mark, _ref7, _slots$markLabel, _ref8, _slots$input, _slotProps$root, _slotProps$rail, _slotProps$track, _slotProps$thumb, _slotProps$valueLabel, _slotProps$mark, _slotProps$markLabel, _slotProps$input;
  const props = useDefaultProps({
    props: inputProps,
    name: "MuiSlider"
  });
  const isRtl = useRtl();
  const {
    "aria-label": ariaLabel,
    "aria-valuetext": ariaValuetext,
    "aria-labelledby": ariaLabelledby,
    // eslint-disable-next-line react/prop-types
    component = "span",
    components = {},
    componentsProps = {},
    color = "primary",
    classes: classesProp,
    className,
    disableSwap = false,
    disabled = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max = 100,
    min = 0,
    orientation = "horizontal",
    shiftStep = 10,
    size = "medium",
    step = 1,
    scale = Identity2,
    slotProps,
    slots,
    track = "normal",
    valueLabelDisplay = "off",
    valueLabelFormat = Identity2
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    isRtl,
    max,
    min,
    classes: classesProp,
    disabled,
    disableSwap,
    orientation,
    marks: marksProp,
    color,
    size,
    step,
    shiftStep,
    scale,
    track,
    valueLabelDisplay,
    valueLabelFormat
  });
  const {
    axisProps: axisProps2,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    open,
    active,
    axis,
    focusedThumbIndex,
    range,
    dragging,
    marks,
    values,
    trackOffset,
    trackLeap,
    getThumbStyle
  } = useSlider(_extends({}, ownerState, {
    rootRef: ref
  }));
  ownerState.marked = marks.length > 0 && marks.some((mark) => mark.label);
  ownerState.dragging = dragging;
  ownerState.focusedThumbIndex = focusedThumbIndex;
  const classes = useUtilityClasses(ownerState);
  const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : SliderRoot;
  const RailSlot = (_ref2 = (_slots$rail = slots == null ? void 0 : slots.rail) != null ? _slots$rail : components.Rail) != null ? _ref2 : SliderRail;
  const TrackSlot = (_ref3 = (_slots$track = slots == null ? void 0 : slots.track) != null ? _slots$track : components.Track) != null ? _ref3 : SliderTrack;
  const ThumbSlot = (_ref4 = (_slots$thumb = slots == null ? void 0 : slots.thumb) != null ? _slots$thumb : components.Thumb) != null ? _ref4 : SliderThumb;
  const ValueLabelSlot = (_ref5 = (_slots$valueLabel = slots == null ? void 0 : slots.valueLabel) != null ? _slots$valueLabel : components.ValueLabel) != null ? _ref5 : SliderValueLabel2;
  const MarkSlot = (_ref6 = (_slots$mark = slots == null ? void 0 : slots.mark) != null ? _slots$mark : components.Mark) != null ? _ref6 : SliderMark;
  const MarkLabelSlot = (_ref7 = (_slots$markLabel = slots == null ? void 0 : slots.markLabel) != null ? _slots$markLabel : components.MarkLabel) != null ? _ref7 : SliderMarkLabel;
  const InputSlot = (_ref8 = (_slots$input = slots == null ? void 0 : slots.input) != null ? _slots$input : components.Input) != null ? _ref8 : "input";
  const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
  const railSlotProps = (_slotProps$rail = slotProps == null ? void 0 : slotProps.rail) != null ? _slotProps$rail : componentsProps.rail;
  const trackSlotProps = (_slotProps$track = slotProps == null ? void 0 : slotProps.track) != null ? _slotProps$track : componentsProps.track;
  const thumbSlotProps = (_slotProps$thumb = slotProps == null ? void 0 : slotProps.thumb) != null ? _slotProps$thumb : componentsProps.thumb;
  const valueLabelSlotProps = (_slotProps$valueLabel = slotProps == null ? void 0 : slotProps.valueLabel) != null ? _slotProps$valueLabel : componentsProps.valueLabel;
  const markSlotProps = (_slotProps$mark = slotProps == null ? void 0 : slotProps.mark) != null ? _slotProps$mark : componentsProps.mark;
  const markLabelSlotProps = (_slotProps$markLabel = slotProps == null ? void 0 : slotProps.markLabel) != null ? _slotProps$markLabel : componentsProps.markLabel;
  const inputSlotProps = (_slotProps$input = slotProps == null ? void 0 : slotProps.input) != null ? _slotProps$input : componentsProps.input;
  const rootProps = useSlotProps_default({
    elementType: RootSlot,
    getSlotProps: getRootProps,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    additionalProps: _extends({}, shouldSpreadAdditionalProps_default(RootSlot) && {
      as: component
    }),
    ownerState: _extends({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
    className: [classes.root, className]
  });
  const railProps = useSlotProps_default({
    elementType: RailSlot,
    externalSlotProps: railSlotProps,
    ownerState,
    className: classes.rail
  });
  const trackProps = useSlotProps_default({
    elementType: TrackSlot,
    externalSlotProps: trackSlotProps,
    additionalProps: {
      style: _extends({}, axisProps2[axis].offset(trackOffset), axisProps2[axis].leap(trackLeap))
    },
    ownerState: _extends({}, ownerState, trackSlotProps == null ? void 0 : trackSlotProps.ownerState),
    className: classes.track
  });
  const thumbProps = useSlotProps_default({
    elementType: ThumbSlot,
    getSlotProps: getThumbProps,
    externalSlotProps: thumbSlotProps,
    ownerState: _extends({}, ownerState, thumbSlotProps == null ? void 0 : thumbSlotProps.ownerState),
    className: classes.thumb
  });
  const valueLabelProps = useSlotProps_default({
    elementType: ValueLabelSlot,
    externalSlotProps: valueLabelSlotProps,
    ownerState: _extends({}, ownerState, valueLabelSlotProps == null ? void 0 : valueLabelSlotProps.ownerState),
    className: classes.valueLabel
  });
  const markProps = useSlotProps_default({
    elementType: MarkSlot,
    externalSlotProps: markSlotProps,
    ownerState,
    className: classes.mark
  });
  const markLabelProps = useSlotProps_default({
    elementType: MarkLabelSlot,
    externalSlotProps: markLabelSlotProps,
    ownerState,
    className: classes.markLabel
  });
  const inputSliderProps = useSlotProps_default({
    elementType: InputSlot,
    getSlotProps: getHiddenInputProps,
    externalSlotProps: inputSlotProps,
    ownerState
  });
  return (0, import_jsx_runtime4.jsxs)(RootSlot, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime3.jsx)(RailSlot, _extends({}, railProps)), (0, import_jsx_runtime3.jsx)(TrackSlot, _extends({}, trackProps)), marks.filter((mark) => mark.value >= min && mark.value <= max).map((mark, index) => {
      const percent = valueToPercent(mark.value, min, max);
      const style = axisProps2[axis].offset(percent);
      let markActive;
      if (track === false) {
        markActive = values.indexOf(mark.value) !== -1;
      } else {
        markActive = track === "normal" && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === "inverted" && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }
      return (0, import_jsx_runtime4.jsxs)(React3.Fragment, {
        children: [(0, import_jsx_runtime3.jsx)(MarkSlot, _extends({
          "data-index": index
        }, markProps, !isHostComponent_default(MarkSlot) && {
          markActive
        }, {
          style: _extends({}, style, markProps.style),
          className: clsx_default(markProps.className, markActive && classes.markActive)
        })), mark.label != null ? (0, import_jsx_runtime3.jsx)(MarkLabelSlot, _extends({
          "aria-hidden": true,
          "data-index": index
        }, markLabelProps, !isHostComponent_default(MarkLabelSlot) && {
          markLabelActive: markActive
        }, {
          style: _extends({}, style, markLabelProps.style),
          className: clsx_default(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        })) : null]
      }, index);
    }), values.map((value, index) => {
      const percent = valueToPercent(value, min, max);
      const style = axisProps2[axis].offset(percent);
      const ValueLabelComponent = valueLabelDisplay === "off" ? Forward : ValueLabelSlot;
      return (
        /* TODO v6: Change component structure. It will help in avoiding the complicated React.cloneElement API added in SliderValueLabel component. Should be: Thumb -> Input, ValueLabel. Follow Joy UI's Slider structure. */
        (0, import_jsx_runtime3.jsx)(ValueLabelComponent, _extends({}, !isHostComponent_default(ValueLabelComponent) && {
          valueLabelFormat,
          valueLabelDisplay,
          value: typeof valueLabelFormat === "function" ? valueLabelFormat(scale(value), index) : valueLabelFormat,
          index,
          open: open === index || active === index || valueLabelDisplay === "on",
          disabled
        }, valueLabelProps, {
          children: (0, import_jsx_runtime3.jsx)(ThumbSlot, _extends({
            "data-index": index
          }, thumbProps, {
            className: clsx_default(classes.thumb, thumbProps.className, active === index && classes.active, focusedThumbIndex === index && classes.focusVisible),
            style: _extends({}, style, getThumbStyle(index), thumbProps.style),
            children: (0, import_jsx_runtime3.jsx)(InputSlot, _extends({
              "data-index": index,
              "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
              "aria-valuenow": scale(value),
              "aria-labelledby": ariaLabelledby,
              "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
              value: values[index]
            }, inputSliderProps))
          }))
        }), index)
      );
    })]
  }));
});
true ? Slider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The label of the slider.
   */
  "aria-label": chainPropTypes(import_prop_types2.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-label"] != null) {
      return new Error("MUI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.");
    }
    return null;
  }),
  /**
   * The id of the element containing a label for the slider.
   */
  "aria-labelledby": import_prop_types2.default.string,
  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  "aria-valuetext": chainPropTypes(import_prop_types2.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-valuetext"] != null) {
      return new Error("MUI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.");
    }
    return null;
  }),
  /**
   * @ignore
   */
  children: import_prop_types2.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types2.default.object,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), import_prop_types2.default.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   *
   * @default {}
   */
  components: import_prop_types2.default.shape({
    Input: import_prop_types2.default.elementType,
    Mark: import_prop_types2.default.elementType,
    MarkLabel: import_prop_types2.default.elementType,
    Rail: import_prop_types2.default.elementType,
    Root: import_prop_types2.default.elementType,
    Thumb: import_prop_types2.default.elementType,
    Track: import_prop_types2.default.elementType,
    ValueLabel: import_prop_types2.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   *
   * @default {}
   */
  componentsProps: import_prop_types2.default.shape({
    input: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    mark: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    markLabel: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    rail: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    root: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    thumb: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    track: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    valueLabel: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.shape({
      children: import_prop_types2.default.element,
      className: import_prop_types2.default.string,
      open: import_prop_types2.default.bool,
      style: import_prop_types2.default.object,
      value: import_prop_types2.default.number,
      valueLabelDisplay: import_prop_types2.default.oneOf(["auto", "off", "on"])
    })])
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.number), import_prop_types2.default.number]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types2.default.bool,
  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @default false
   */
  disableSwap: import_prop_types2.default.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   * This is important for screen reader users.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: import_prop_types2.default.func,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   * This is important for screen reader users.
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: import_prop_types2.default.func,
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.shape({
    label: import_prop_types2.default.node,
    value: import_prop_types2.default.number.isRequired
  })), import_prop_types2.default.bool]),
  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max: import_prop_types2.default.number,
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min: import_prop_types2.default.number,
  /**
   * Name attribute of the hidden `input` element.
   */
  name: import_prop_types2.default.string,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {Event} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   * @param {number} activeThumb Index of the currently moved thumb.
   */
  onChange: import_prop_types2.default.func,
  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {React.SyntheticEvent | Event} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: import_prop_types2.default.func,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types2.default.oneOf(["horizontal", "vertical"]),
  /**
   * A transformation function, to change the scale of the slider.
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  scale: import_prop_types2.default.func,
  /**
   * The granularity with which the slider can step through values when using Page Up/Page Down or Shift + Arrow Up/Arrow Down.
   * @default 10
   */
  shiftStep: import_prop_types2.default.number,
  /**
   * The size of the slider.
   * @default 'medium'
   */
  size: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["small", "medium"]), import_prop_types2.default.string]),
  /**
   * The props used for each slot inside the Slider.
   * @default {}
   */
  slotProps: import_prop_types2.default.shape({
    input: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    mark: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    markLabel: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    rail: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    root: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    thumb: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    track: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    valueLabel: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.shape({
      children: import_prop_types2.default.element,
      className: import_prop_types2.default.string,
      open: import_prop_types2.default.bool,
      style: import_prop_types2.default.object,
      value: import_prop_types2.default.number,
      valueLabelDisplay: import_prop_types2.default.oneOf(["auto", "off", "on"])
    })])
  }),
  /**
   * The components used for each slot inside the Slider.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types2.default.shape({
    input: import_prop_types2.default.elementType,
    mark: import_prop_types2.default.elementType,
    markLabel: import_prop_types2.default.elementType,
    rail: import_prop_types2.default.elementType,
    root: import_prop_types2.default.elementType,
    thumb: import_prop_types2.default.elementType,
    track: import_prop_types2.default.elementType,
    valueLabel: import_prop_types2.default.elementType
  }),
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step: import_prop_types2.default.number,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object]),
  /**
   * Tab index attribute of the hidden `input` element.
   */
  tabIndex: import_prop_types2.default.number,
  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   * @default 'normal'
   */
  track: import_prop_types2.default.oneOf(["inverted", "normal", false]),
  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.number), import_prop_types2.default.number]),
  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   * @default 'off'
   */
  valueLabelDisplay: import_prop_types2.default.oneOf(["auto", "off", "on"]),
  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  valueLabelFormat: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.string])
} : void 0;
var Slider_default = Slider;

export {
  getSliderUtilityClass,
  sliderClasses_default,
  SliderRoot,
  SliderRail,
  SliderTrack,
  SliderThumb,
  SliderValueLabel2 as SliderValueLabel,
  SliderMark,
  SliderMarkLabel,
  Slider_default
};
//# sourceMappingURL=chunk-SJIT5WCH.js.map
