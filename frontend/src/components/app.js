import React from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute, AuthRoute } from "../util/route_util";
import ModalContainer from "../components/modal/modal_container";
import CreatePostFormContainer from "../components/posts/create_post_form_container";
import NavBarContainer from "../components/navbar/navbar_container";
import DraggableVideo from "./calendar/draggablevideo";
import CalendarSideBar from "./calendar/calendar_sidebar";
import PostIndexPage from "./posts/post_index_page";
import PostShowContainer from "./posts/post_show_container";
import SplashPage from "./splash/splash_page";
import SavedContainer from "./saved/saved_container";
import "./reset.css";

export default () => (
  // The Calendar and Draggable components are for testing
  <>
    <ModalContainer />
    <NavBarContainer />
    <CalendarSideBar />
    {/* <Route path="/posts/saved" component={SavedContainer} /> */}
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <ProtectedRoute exact path="/show/:id" component={PostShowContainer} />
      <ProtectedRoute exact path="/feed" component={PostIndexPage} />
      <ProtectedRoute
        exact
        path="/new_post"
        component={CreatePostFormContainer}
      />
    </Switch>
  </>
);
