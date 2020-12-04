import React from 'react'
import {
  Checkbox,
  Grid,
  Segment,
  Sidebar,
} from 'semantic-ui-react';
import Calendar from './calendar';

const CalendarSideBar = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={visible}
          label={{ children: <code>Calendar</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            animation={'overlay'}
            icon={'labeled'}
            vertical='true'
            visible={visible}
            direction='right'
           
          >
            <Calendar />
          
          </Sidebar>

        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}

export default CalendarSideBar;
