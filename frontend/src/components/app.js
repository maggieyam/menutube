import React from 'react';
import { Switch } from 'react-router-dom';
import ModalContainer from '../components/modal/modal_container';
import CreatePostFormContainer from '../components/posts/create_post_form_container';

export default () => (
  // Insert front end routes below
  <>
    <ModalContainer />
    <CreatePostFormContainer />
    
    <Switch>
    </Switch>
  </>
)