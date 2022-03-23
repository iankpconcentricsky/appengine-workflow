import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BoilerplateComponent } from './boilerplate.component';

export default {
    title: 'Example/Boilerplate',
    component: BoilerplateComponent,
    decorators: [],
} as Meta;

const standardParams = {
    design: {
        type: 'figma',
        url: '',
    },
    jest: ['boilerplate.component.spec.ts']
};

const Template: Story<BoilerplateComponent> = (args: BoilerplateComponent) => ({
    props: args,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = standardParams;
Default.argTypes = {};
