import React from "react";
import { Switch } from "react-router-dom";
import { ProtectedRoute } from "../util/route_util";
import ModalContainer from "../components/modal/modal_container";
import CreatePostFormContainer from "../components/posts/create_post_form_container";
import NavBarContainer from "../components/navbar/navbar_container";
// import Calendar from "../components/calendar/calendar";
import DraggableVideo from "./calendar/draggablevideo";
import Cal from "./calendar/test_calendar";
import PostIndexPage from "./posts/post_index_page";
import PostShowContainer from "./posts/post_show_container";

export default () => (
  // The Calendar and Draggable components are for testing
  <>
    <ModalContainer />
    <NavBarContainer />
    {/* <Cal />
    <DraggableVideo id={"video-1"}/> */}
    <Switch>
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
