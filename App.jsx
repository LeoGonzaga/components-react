import React, { useState } from 'react';
import './App.scss';

// Import all components
import { Button } from '/Button';
import { Input, Textarea, Label, FormField } from '/Input';
import { H1, H2, H3, H4, Text, Caption, Code, Lead, Muted } from '/Typography';
import { Select } from '/Select';
import { Checkbox, Radio, RadioGroup } from '/Checkbox';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '/Card';
import { Alert, AlertTitle, AlertDescription } from '/Alert';
import { Toast, ToastProvider, useToast } from '/Toast';
import { Moon, Sun, Palette, Code2, Github } from 'lucide-react';

// Theme toggle component
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
};

// Demo section component
const DemoSection = ({ title, description, children }) => (
  <section className="demo-section">
    <div className="demo-section__header">
      <H3>{title}</H3>
      {description && <Text className="text-muted">{description}</Text>}
    </div>
    <div className="demo-section__content">
      {children}
    </div>
  </section>
);

// Toast demo component
const ToastDemo = () => {
  const { toast } = useToast();

  return (
    <div className="flex gap-2 flex-wrap">
      <Button onClick={() => toast.success('Success! Operation completed.')}>
        Success Toast
      </Button>
      <Button onClick={() => toast.error('Error! Something went wrong.')}>
        Error Toast
      </Button>
      <Button onClick={() => toast.warning('Warning! Please check your input.')}>
        Warning Toast
      </Button>
      <Button onClick={() => toast.info('Info! Here\'s some information.')}>
        Info Toast
      </Button>
    </div>
  );
};

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [multiSelectValue, setMultiSelectValue] = useState([]);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4', disabled: true },
  ];

  return (
    <ToastProvider>
      <div className="app">
        {/* Header */}
        <header className="app-header">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="app-logo">
                  <Palette size={32} />
                </div>
                <div>
                  <H1 className="app-title">UI Components</H1>
                  <Text className="text-muted">Modern React component library</Text>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Github size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Code2 size={20} />
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="app-main">
          <div className="container">
            {/* Hero section */}
            <section className="hero">
              <div className="hero-content">
                <H1 className="hero-title">
                  Beautiful, accessible components
                </H1>
                <Lead className="hero-description">
                  A modern component library built with React, Vite, and SCSS. 
                  Inspired by shadcn/ui with a focus on accessibility and performance.
                </Lead>
                <div className="hero-actions">
                  <Button size="lg">Get Started</Button>
                  <Button variant="outline" size="lg">View on GitHub</Button>
                </div>
              </div>
            </section>

            {/* Typography */}
            <DemoSection 
              title="Typography" 
              description="Consistent, scalable typography system"
            >
              <div className="grid gap-6">
                <div>
                  <H1>Heading 1</H1>
                  <H2>Heading 2</H2>
                  <H3>Heading 3</H3>
                  <H4>Heading 4</H4>
                </div>
                <div>
                  <Text>This is a regular paragraph with normal text.</Text>
                  <Lead>This is a lead paragraph that stands out.</Lead>
                  <Muted>This is muted text for less important information.</Muted>
                  <Caption>This is a caption with small text</Caption>
                </div>
                <div>
                  <Code inline>const example = 'inline code';</Code>
                  <Code inline={false}>
{`function example() {
  return 'block code';
}`}
                  </Code>
                </div>
              </div>
            </DemoSection>

            {/* Buttons */}
            <DemoSection 
              title="Buttons" 
              description="Interactive buttons with multiple variants and states"
            >
              <div className="grid gap-4">
                <div className="flex gap-2 flex-wrap">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Palette size={16} />
                  </Button>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button disabled>Disabled</Button>
                  <Button variant="outline" disabled>Disabled Outline</Button>
                </div>
              </div>
            </DemoSection>

            {/* Form Controls */}
            <DemoSection 
              title="Form Controls" 
              description="Accessible form inputs and controls"
            >
              <div className="grid gap-6 max-w-md">
                <FormField
                  label="Email"
                  htmlFor="email"
                  required
                  helperText="We'll never share your email."
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </FormField>

                <FormField
                  label="Password"
                  htmlFor="password"
                  required
                >
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </FormField>

                <FormField
                  label="Message"
                  htmlFor="message"
                >
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    rows={4}
                  />
                </FormField>

                <FormField
                  label="Country"
                  htmlFor="country"
                >
                  <Select
                    placeholder="Select a country"
                    options={selectOptions}
                    value={selectValue}
                    onChange={setSelectValue}
                    searchable
                    clearable
                  />
                </FormField>

                <FormField
                  label="Multiple Selection"
                  htmlFor="multiple"
                >
                  <Select
                    placeholder="Select multiple options"
                    options={selectOptions}
                    value={multiSelectValue}
                    onChange={setMultiSelectValue}
                    multiple
                    searchable
                  />
                </FormField>

                <div className="grid gap-3">
                  <Checkbox
                    checked={checkboxValue}
                    onChange={setCheckboxValue}
                    label="Accept terms and conditions"
                    description="By checking this box, you agree to our terms of service."
                  />

                  <RadioGroup
                    value={radioValue}
                    onChange={setRadioValue}
                    name="example"
                  >
                    <Radio
                      value="option1"
                      label="Option 1"
                      description="This is the first option"
                    />
                    <Radio
                      value="option2"
                      label="Option 2"
                      description="This is the second option"
                    />
                    <Radio
                      value="option3"
                      label="Option 3"
                      description="This is the third option"
                    />
                  </RadioGroup>
                </div>
              </div>
            </DemoSection>

            {/* Cards */}
            <DemoSection 
              title="Cards" 
              description="Flexible card layouts for content organization"
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Simple Card</CardTitle>
                    <CardDescription>
                      A basic card with header and content.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Text>This is the card content area where you can put any information.</Text>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Card with Footer</CardTitle>
                    <CardDescription>
                      This card includes a footer section.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Text>Card content goes here with some example text.</Text>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Action</Button>
                  </CardFooter>
                </Card>

                <Card className="ui-card--interactive">
                  <CardHeader>
                    <CardTitle>Interactive Card</CardTitle>
                    <CardDescription>
                      This card responds to hover and click.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Text>Click or hover to see the interaction effects.</Text>
                  </CardContent>
                </Card>
              </div>
            </DemoSection>

            {/* Alerts */}
            <DemoSection 
              title="Alerts" 
              description="Contextual feedback messages"
            >
              <div className="grid gap-4">
                <Alert variant="default">
                  <AlertTitle>Default Alert</AlertTitle>
                  <AlertDescription>
                    This is a default alert with some information.
                  </AlertDescription>
                </Alert>

                <Alert variant="success">
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Your operation was completed successfully.
                  </AlertDescription>
                </Alert>

                <Alert variant="warning">
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    Please review your input before proceeding.
                  </AlertDescription>
                </Alert>

                <Alert variant="error">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Something went wrong. Please try again.
                  </AlertDescription>
                </Alert>

                <Alert variant="info">
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    Here's some helpful information for you.
                  </AlertDescription>
                </Alert>
              </div>
            </DemoSection>

            {/* Toast Notifications */}
            <DemoSection 
              title="Toast Notifications" 
              description="Temporary notification messages"
            >
              <ToastDemo />
            </DemoSection>
          </div>
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <div className="container">
            <div className="flex items-center justify-between">
              <Text className="text-muted">
                Built with React, Vite, and SCSS
              </Text>
              <Text className="text-muted">
                © 2024 UI Components Library
              </Text>
            </div>
          </div>
        </footer>
      </div>
    </ToastProvider>
  );
}

export default App;

