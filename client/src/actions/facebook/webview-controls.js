import axios from "axios";
import {CLOSE_WINDOW, LOGIN_FAIL, LOGIN_SUCCESS} from "../types";
import {setAlert} from "../alert";
import {loadUser} from "../auth";

/**
 * Close the webview inside Messenger
 * For more information on webview controls in MessengerExtension,
 * refer to the webview docs:
 * https://developers.facebook.com/docs/messenger-platform/messenger-extension
 *
 *  @returns {undefined}
 */
export const close = () => async dispatch =>{
  window.MessengerExtensions.requestCloseBrowser(function success() {
    console.log('Closing window')

    dispatch({
      type: CLOSE_WINDOW,
    })
  }, function error(err) {
    console.error(
      err,
      'Unable to close window.',
      'You may be viewing outside of the Messenger app.'
    );
  });
};

export default close
