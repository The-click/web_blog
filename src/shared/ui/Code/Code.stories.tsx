import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Code } from "./Code";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "shared/Code",
    component: Code,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    codeText: `
    import React from "react";
    import { ComponentStory, ComponentMeta } from "@storybook/react";
    import { Code } from "./Code";
    
    // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
    export default {
        title: "shared/Code",
        component: Code,
        argTypes: {
            backgroundColor: { control: "color" },
        },
    } as ComponentMeta<typeof Code>;
    
    const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;
    
    export const Normal = Template.bind({});
    Normal.args = {
        codeText:'adlfkjlk'
    };
    `,
};
