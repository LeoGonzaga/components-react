# UI Components Library

A modern, accessible React component library built with Vite and SCSS. Inspired by shadcn/ui with a focus on performance, accessibility, and developer experience.

## Features

- 🎨 **Modern Design System** - Consistent design tokens and theming
- 🌙 **Dark Mode Support** - Built-in light and dark themes
- ♿ **Accessibility First** - ARIA-compliant components
- 📱 **Responsive** - Mobile-first responsive design
- 🎯 **TypeScript Ready** - Full TypeScript support (PropTypes included)
- 🚀 **Performance Optimized** - Lightweight and fast
- 🎭 **Customizable** - Easy to theme and customize

## Components

### Basic Components

#### Button
Interactive buttons with multiple variants and states.

```jsx
import { Button } from './components/ui/Button';

<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button disabled>Disabled</Button>
```

**Props:**
- `variant`: `'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'`
- `size`: `'default' | 'sm' | 'lg' | 'icon'`
- `disabled`: `boolean`

#### Typography
Consistent typography components for all text content.

```jsx
import { H1, H2, H3, Text, Lead, Muted, Code } from './components/ui/Typography';

<H1>Main Heading</H1>
<H2>Section Heading</H2>
<Text>Regular paragraph text</Text>
<Lead>Lead paragraph that stands out</Lead>
<Muted>Muted text for less important info</Muted>
<Code inline>const code = 'example';</Code>
```

### Form Components

#### Input
Text inputs, textareas, and form fields with validation support.

```jsx
import { Input, Textarea, FormField } from './components/ui/Input';

<FormField
  label="Email"
  required
  error="Please enter a valid email"
  helperText="We'll never share your email"
>
  <Input
    type="email"
    placeholder="Enter your email"
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
</FormField>

<Textarea
  placeholder="Enter your message"
  rows={4}
/>
```

#### Select
Single and multi-select dropdowns with search functionality.

```jsx
import { Select } from './components/ui/Select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

<Select
  placeholder="Select an option"
  options={options}
  value={value}
  onChange={setValue}
  searchable
  clearable
/>

// Multi-select
<Select
  placeholder="Select multiple"
  options={options}
  value={multiValue}
  onChange={setMultiValue}
  multiple
/>
```

#### Checkbox & Radio
Accessible checkbox and radio button components.

```jsx
import { Checkbox, Radio, RadioGroup } from './components/ui/Checkbox';

<Checkbox
  checked={checked}
  onChange={setChecked}
  label="Accept terms and conditions"
  description="By checking this box, you agree to our terms."
/>

<RadioGroup value={radioValue} onChange={setRadioValue} name="example">
  <Radio value="option1" label="Option 1" />
  <Radio value="option2" label="Option 2" />
  <Radio value="option3" label="Option 3" />
</RadioGroup>
```

### Layout Components

#### Card
Flexible card layouts for content organization.

```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/Card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Feedback Components

#### Alert
Contextual feedback messages for different states.

```jsx
import { Alert, AlertTitle, AlertDescription } from './components/ui/Alert';

<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>
    Your operation was completed successfully.
  </AlertDescription>
</Alert>

<Alert variant="error" dismissible onDismiss={handleDismiss}>
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again.
  </AlertDescription>
</Alert>
```

**Variants:** `'default' | 'success' | 'warning' | 'error' | 'info'`

#### Toast
Temporary notification messages.

```jsx
import { ToastProvider, useToast } from './components/ui/Toast';

// Wrap your app with ToastProvider
<ToastProvider>
  <App />
</ToastProvider>

// Use in components
function MyComponent() {
  const { toast } = useToast();

  const showToast = () => {
    toast.success('Success message!');
    toast.error('Error message!');
    toast.warning('Warning message!');
    toast.info('Info message!');
  };

  return <Button onClick={showToast}>Show Toast</Button>;
}
```

## Theming

The library includes a comprehensive design system with support for light and dark themes.

### Using Themes

```jsx
// Toggle dark mode
document.documentElement.classList.toggle('dark');
```

### Custom Colors

The design system uses CSS custom properties that can be easily customized:

```css
:root {
  --primary: your-primary-color;
  --secondary: your-secondary-color;
  --background: your-background-color;
  --foreground: your-text-color;
  /* ... other variables */
}
```

### Design Tokens

The library includes comprehensive design tokens for:

- **Colors**: Semantic color system with light/dark variants
- **Typography**: Consistent font sizes, weights, and line heights
- **Spacing**: 4px-based spacing scale
- **Border Radius**: Consistent border radius values
- **Shadows**: Elevation system with multiple shadow levels
- **Breakpoints**: Responsive design breakpoints

## Accessibility

All components are built with accessibility in mind:

- **ARIA Labels**: Proper ARIA attributes for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG compliant color combinations
- **Semantic HTML**: Proper HTML semantics

## Installation & Setup

1. **Clone or copy the components** into your React project
2. **Install dependencies**:
   ```bash
   npm install lucide-react prop-types
   ```
3. **Import the main styles** in your app:
   ```jsx
   import './styles/main.scss';
   ```
4. **Use components** in your application:
   ```jsx
   import { Button } from './components/ui/Button';
   ```

## Development

### Project Structure

```
src/
├── components/ui/          # Component files
├── styles/
│   ├── tokens/            # Design tokens
│   ├── themes/            # Light/dark themes
│   ├── base/              # Base styles and reset
│   ├── components/        # Component styles
│   ├── utils/             # Utility classes
│   └── main.scss          # Main entry point
└── lib/
    └── utils.js           # Utility functions
```

### Running the Demo

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Follow the existing code style and patterns
2. Ensure all components are accessible
3. Add proper PropTypes for all props
4. Include SCSS styles for new components
5. Update documentation for new features

## License

MIT License - feel free to use in your projects!

---

Built with ❤️ using React, Vite, and SCSS.

