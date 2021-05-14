package com.callkit;

import android.os.Bundle;
import android.view.Window;
import android.view.WindowManager;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
//  public void onCreate(Bundle savedInstanceState) {
//    super.onCreate(savedInstanceState);
//
//    Window w = getWindow();
//    w.setFlags(
//            WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED,
//            WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED
//    );
//  }

  protected String getMainComponentName() {
    return "CallKit";
  }
}
