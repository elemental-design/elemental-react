




declare module 'react-primitives' {
  import { ComponentType } from 'react';

  interface TouchableWithoutFeedbackPropsIOS {
    /**
     * *(Apple TV only)* TV preferred focus (see documentation for the View component).
     *
     * @platform ios
     */
    hasTVPreferredFocus?: boolean;

    /**
     * *(Apple TV only)* Object with properties to control Apple TV parallax effects.
     *
     * enabled: If true, parallax effects are enabled.  Defaults to true.
     * shiftDistanceX: Defaults to 2.0.
     * shiftDistanceY: Defaults to 2.0.
     * tiltAngle: Defaults to 0.05.
     * magnification: Defaults to 1.0.
     * pressMagnification: Defaults to 1.0.
     * pressDuration: Defaults to 0.3.
     * pressDelay: Defaults to 0.0.
     *
     * @platform ios
     */
    tvParallaxProperties?: any;
  }

  interface AccessibilityProps {
    /**
     * When true, indicates that the view is an accessibility element.
     * By default, all the touchable elements are accessible.
     */
    accessible?: boolean;

    /**
     * Provides an array of custom actions available for accessibility.
     */
    accessibilityActions?: ReadonlyArray<any>;

    /**
     * Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
     * label is constructed by traversing all the children and accumulating all the Text nodes separated by space.
     */
    accessibilityLabel?: string;

    /**
     * Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.
     */
    accessibilityRole?: any;
    /**
     * Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.
     * @deprecated: accessibilityState available in 0.60+
     */
    accessibilityStates?: any[];
    /**
     * Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.
     */
    accessibilityState?: any;
    /**
     * An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.
     */
    accessibilityHint?: string;

    /**
     * When `accessible` is true, the system will try to invoke this function when the user performs an accessibility custom action.
     */
    onAccessibilityAction?: (event: any) => void;
  }

  export interface TouchableWithoutFeedbackProps extends TouchableWithoutFeedbackPropsIOS, AccessibilityProps {
    /**
     * Delay in ms, from onPressIn, before onLongPress is called.
     */
    delayLongPress?: number;

    /**
     * Delay in ms, from the start of the touch, before onPressIn is called.
     */
    delayPressIn?: number;

    /**
     * Delay in ms, from the release of the touch, before onPressOut is called.
     */
    delayPressOut?: number;

    /**
     * If true, disable all interactions for this component.
     */
    disabled?: boolean;

    /**
     * This defines how far your touch can start away from the button.
     * This is added to pressRetentionOffset when moving off of the button.
     * NOTE The touch area never extends past the parent view bounds and
     * the Z-index of sibling views always takes precedence if a touch hits
     * two overlapping views.
     */
    hitSlop?: any;

    /**
     * When `accessible` is true (which is the default) this may be called when
     * the OS-specific concept of "blur" occurs, meaning the element lost focus.
     * Some platforms may not have the concept of blur.
     */
    onBlur?: (e: any) => void;

    /**
     * When `accessible` is true (which is the default) this may be called when
     * the OS-specific concept of "focus" occurs. Some platforms may not have
     * the concept of focus.
     */
    onFocus?: (e: any) => void;

    /**
     * Invoked on mount and layout changes with
     * {nativeEvent: {layout: {x, y, width, height}}}
     */
    onLayout?: (event: any) => void;

    onLongPress?: (event: any) => void;

    /**
     * Called when the touch is released,
     * but not if cancelled (e.g. by a scroll that steals the responder lock).
     */
    onPress?: (event: any) => void;

    onPressIn?: (event: any) => void;

    onPressOut?: (event: any) => void;

    /**
     * //FIXME: not in doc but available in examples
     */
    style?: Object;

    /**
     * When the scroll view is disabled, this defines how far your
     * touch may move off of the button, before deactivating the button.
     * Once deactivated, try moving it back and you'll see that the button
     * is once again reactivated! Move it back and forth several times
     * while the scroll view is disabled. Ensure you pass in a constant
     * to reduce memory allocations.
     */
    pressRetentionOffset?: any;

    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string;
  }

  interface TouchableOpacityProps extends TouchableWithoutFeedbackProps {
    /**
     * Determines what the opacity of the wrapped view should be when touch is active.
     * Defaults to 0.2
     */
    activeOpacity?: number;
  }



  export const Touchable: ComponentType<TouchableOpacityProps>;

  export type PlatformOSType = 'ios' | 'android' | 'web' | 'sketch' | 'vr' | 'figma';
  export interface PlatformStatic {
    OS: PlatformOSType;
    Version: number | string;
    select<T>(specifics: { [platform in PlatformOSType | 'default']?: T }): T;
  }
  export const Platform: PlatformStatic;
}
