/*
 * Copyright (c) 2015 instructure-react
 * Forked from https://github.com/aaronshaf/react-toggle/
 * + applied https://github.com/aaronshaf/react-toggle/pull/90
 **/

import './Toggle.css';

import React, { MouseEvent, TouchEvent, FocusEvent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useSound from "use-sound"

// Copyright 2015-present Drifty Co.
// http://drifty.com/
// from: https://github.com/driftyco/ionic/blob/master/src/util/dom.ts
function pointerCoord(event) {
  // get coordinates for either a mouse click
  // or a touch depending on the given event
  if (event) {
    const changedTouches = event.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    const pageX = event.pageX;
    if (pageX !== undefined) {
      return { x: pageX, y: event.pageY };
    }
  }
  return { x: 0, y: 0 };
}

const Toggle = props => {
  const inputRef = React.useRef<HTMLInputElement>();
  const instanceStateRef = React.useRef({
    previouslyChecked: !!(props.checked || props.defaultChecked),
  });
  const [focused, setFocused] = React.useState(false);
  const [checked, setChecked] = React.useState(
    !!(props.checked || props.defaultChecked)
  );

  React.useEffect(() => {
    if ('checked' in props) {
      setChecked(!!props.checked);
      instanceStateRef.current.previouslyChecked = !!props.checked;
    }
  }, [props]);

  const { switchOnSound, switchOffSound } = useStaticQuery(
    graphql`{
      switchOnSound: file(relativePath: {eq: "switch-on.mp3"}) {
        publicURL
      }
      switchOffSound: file(relativePath: {eq: "switch-off.mp3"}) {
        publicURL
      }
    }    
  `)

  const [switchOn] = useSound(switchOnSound.publicURL, {
    volume: 0.5
  })
  const [switchOff] = useSound(switchOffSound.publicURL, {
    volume: 0.5
  })

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const checkbox = inputRef.current;
    if (checkbox === undefined) {
      return
    }
    instanceStateRef.current.previouslyChecked = checkbox.checked;
    if (event.target !== checkbox && !instanceStateRef.current.moved) {
      event.preventDefault();
      checkbox.focus();
      checkbox.click();
      return;
    }
    setChecked(checkbox.checked);
    if (checkbox.checked) {
      switchOn()
    } else {
      switchOff()
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    instanceStateRef.current.startX = pointerCoord(event).x;
    instanceStateRef.current.touchStarted = true;
    instanceStateRef.current.hadFocusAtTouchStart = focused;
    setFocused(true);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!instanceStateRef.current.touchStarted) return;
    instanceStateRef.current.touchMoved = true;

    if (instanceStateRef.current.startX != null) {
      let currentX = pointerCoord(event).x;
      if (checked && currentX + 15 < instanceStateRef.current.startX) {
        setChecked(false);
        instanceStateRef.current.startX = currentX;
      } else if (!checked && currentX - 15 > instanceStateRef.current.startX) {
        setChecked(true);
        instanceStateRef.current.startX = currentX;
      }
    }
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (!instanceStateRef.current.touchMoved) return;
    const checkbox = inputRef.current;
    if (checkbox === undefined) {
      return
    }
    event.preventDefault();

    if (instanceStateRef.current.startX != null) {
      if (instanceStateRef.current.previouslyChecked !== checked) {
        checkbox.click();
      }

      instanceStateRef.current.touchStarted = false;
      instanceStateRef.current.startX = null;
      instanceStateRef.current.touchMoved = false;
    }

    if (!instanceStateRef.current.hadFocusAtTouchStart) {
      setFocused(false);
    }
  };

  const handleTouchCancel = (event: TouchEvent<HTMLDivElement>) => {
    if (instanceStateRef.current.startX != null) {
      instanceStateRef.current.touchStarted = false;
      instanceStateRef.current.startX = null;
      instanceStateRef.current.touchMoved = false;
    }

    if (!instanceStateRef.current.hadFocusAtTouchStart) {
      setFocused(false);
    }
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    const { onFocus } = props;

    if (onFocus) {
      onFocus(event);
    }

    instanceStateRef.current.hadFocusAtTouchStart = true;
    setFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { onBlur } = props;

    if (onBlur) {
      onBlur(event);
    }

    instanceStateRef.current.hadFocusAtTouchStart = false;
    setFocused(false);
  };

  const getIcon = (type: string): JSX.Element | null => {
    const { icons } = props;
    if (!icons) {
      return null;
    }
    return icons[type] === undefined
      ? Toggle.defaultProps.icons[type]
      : icons[type];
  };

  const { className, icons: _icons, ...inputProps } = props;
  const classes =
    'react-toggle' +
    (checked ? ' react-toggle--checked' : '') +
    (focused ? ' react-toggle--focus' : '') +
    (props.disabled ? ' react-toggle--disabled' : '') +
    (className ? ' ' + className : '');

  return (
    <div
      className={classes}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      <div className="react-toggle-track">
        <div className="react-toggle-track-check">{getIcon('checked')}</div>
        <div className="react-toggle-track-x">{getIcon('unchecked')}</div>
      </div>
      <div className="react-toggle-thumb" />

      <input
        {...inputProps}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="react-toggle-screenreader-only"
        type="checkbox"
        aria-label="Switch between Dark and Light mode"
      />
    </div>
  );
};

export { Toggle };