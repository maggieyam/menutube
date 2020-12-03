import React from 'react'
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react';
import Calendar from './calendar';

const SidebarExampleSidebar = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            animation={'overlay'}
            icon={'labeled'}
            inverted={'true'}
            onHide={() => setVisible(false)}
            vertical={'true'}
            visible={visible}
           
          >
            <Calendar />
          
          </Sidebar>

        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}

export default SidebarExampleSidebar
