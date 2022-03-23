import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ReadmeComponent } from "./readme.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
    title: `README`,
    component: ReadmeComponent,
    decorators: []
} as Meta;

const standardParams = {
    // design: {
    //     type: 'figma',
    //     url: '',
    // },
    // jest: ['']
};

const Template: Story<ReadmeComponent> = (args: ReadmeComponent) => ({
    props: args,
});

export const ReleaseNotes = Template.bind({});
ReleaseNotes.args = {};
ReleaseNotes.parameters = standardParams;
ReleaseNotes.argTypes = {};
