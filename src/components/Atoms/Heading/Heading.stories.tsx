import { Meta, StoryObj } from "@storybook/react"
import { Heading } from "../index"

const meta = {
  title: "Atoms/Heading",
  component: Heading,
  tags: ['autodocs'],
  args: {
    color: 'positive',
    children: "Have the courage to be vulnerable.",
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Heading_1: Story = {
  args: {
    variant: "heading-1",
  }
}

export const Heading_2: Story = {
  args: {
    variant: 'heading-2'
  }
}

export const Heading_3: Story = {
  args: {
    variant: 'heading-3'
  }
}

export const Heading_4: Story = {
  args: {
    variant: 'heading-4'
  }
}

export const Heading_5: Story = {
  args: {
    variant: 'heading-5'
  }
}

export const Heading_6: Story = {
  args: {
    variant: 'heading-6'
  }
}
