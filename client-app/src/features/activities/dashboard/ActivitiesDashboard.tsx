import React from "react";
import { Grid} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props{
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    formOpen: (id : string) => void;
    formClose: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityDashboard({activities,selectedActivity,selectActivity,cancelSelectActivity,
editMode, formOpen, formClose, createOrEdit, deleteActivity, submitting}:Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} 
                selectActivity={selectActivity}
                deleteActivity = {deleteActivity}
                submitting={submitting} ></ActivityList>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                    activity={selectedActivity} 
                    cancelSelectActivity = {cancelSelectActivity}
                    formOpen={formOpen}
                    />}
                {editMode &&
                <ActivityForm formClose={formClose} activity={selectedActivity} createOrEdit = {createOrEdit} submitting = {submitting}/>}
            </Grid.Column>
        </Grid>
    )
}