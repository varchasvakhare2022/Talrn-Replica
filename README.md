# Talrn Replica

A fully responsive React.js replica of Talrn.com, including its homepage and `/join` registration flow with working email OTP verification using EmailJS. This project was developed as part of a technical assessment for Talrn, showcasing front-end development, API integration, and responsive UI implementation.

**Live Demo:** [https://talrn-replica.vercel.app](https://talrn-replica.vercel.app)

## 📋 Overview

This project is a pixel-perfect recreation of the Talrn.com website, focusing on the core functionality of finding and hiring iOS developers. The application features a modern, responsive design with a complete user registration flow including email verification through OTP (One-Time Password) system.

### Key Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Multi-step Registration**: Complete registration flow with separate forms for individuals and organizations
- **Email Verification**: Working OTP verification system using EmailJS for email delivery
- **Modern UI/UX**: Clean, professional interface with smooth interactions and hover effects
- **Component-based Architecture**: Modular React components for maintainable code structure
- **TypeScript Support**: Full TypeScript implementation for type safety and better development experience

## 🛠️ Technologies Used

### Frontend Framework & Libraries
- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **React Router DOM 6.30.1** - Client-side routing
- **React Icons 5.5.0** - Icon library for UI elements

### Styling & UI
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - Automatic vendor prefixing

### Email Services
- **EmailJS 4.4.1** - Email service integration for OTP delivery
- **emailjs-com 3.2.0** - EmailJS client library

### Development Tools
- **Vite 7.1.6** - Fast build tool and development server
- **ESLint 9.35.0** - Code linting and formatting
- **Axios 1.12.2** - HTTP client for API requests

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Card.tsx         # Generic card component
│   ├── Clients.tsx      # Client logos section
│   ├── FloatingButtons.tsx # Floating action buttons
│   ├── Footer.tsx       # Site footer
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with CTA
│   ├── IndividualForm.tsx # Individual registration form
│   ├── Network.tsx      # Network statistics section
│   ├── News.tsx         # News/blog section
│   ├── OrganizationForm.tsx # Organization registration form
│   ├── Services.tsx     # Services showcase
│   └── Team.tsx         # Team members section
├── pages/               # Page components
│   ├── Home.tsx         # Homepage
│   ├── Join.tsx         # Registration page
│   ├── Success.tsx      # Success page after verification
│   └── Verification.tsx # OTP verification page
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## 🚀 How I Built This Application

### 1. Project Setup & Architecture

I started by setting up a modern React application using Vite as the build tool, which provides fast development and optimized production builds. The project structure follows React best practices with clear separation of concerns:

- **Components**: Reusable UI elements organized by functionality
- **Pages**: Route-level components that compose multiple components
- **TypeScript**: Full type safety throughout the application

### 2. Design System Implementation

Using Tailwind CSS, I created a consistent design system that mirrors the original Talrn website:

- **Color Palette**: Blue-based primary colors (#3B82F6) with gray accents
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent padding and margins using Tailwind's spacing scale
- **Responsive Breakpoints**: Mobile-first approach with responsive design

### 3. Component Development

#### Header Component (`Header.tsx`)
```typescript
export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-blue-500">Talrn</h1>
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {/* Navigation items */}
        </nav>
      </div>
    </header>
  );
}
```

The header implements a fixed navigation bar with responsive design, hiding navigation items on mobile devices.

#### Hero Section (`Hero.tsx`)
The hero section showcases the main value proposition with:
- Compelling headline about iOS developer hiring
- Email capture form with CTA button
- Statistics about the platform's reach
- Promotional banner for team augmentation

### 4. Registration Flow Implementation

#### Dual Form System (`Join.tsx`)
```typescript
const [formType, setFormType] = useState<"organization" | "individual">("organization");

return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-2 mb-6 max-w-4xl text-center mx-auto">
    <div className="flex items-center justify-center space-x-2">
      <input
        type="radio"
        id="org"
        name="formType"
        value="organization"
        checked={formType === "organization"}
        onChange={() => setFormType("organization")}
        className="cursor-pointer"
      />
      <label htmlFor="org" className="cursor-pointer">Organization</label>
    </div>
    {/* Individual option */}
  </div>
);
```

The registration page features a radio button selection system that dynamically renders either the individual or organization form based on user selection.

#### Form Components
Both `IndividualForm.tsx` and `OrganizationForm.tsx` implement:
- **Form Validation**: Required field validation using HTML5 attributes
- **State Management**: React hooks for form state management
- **Email Integration**: EmailJS integration for OTP delivery
- **Navigation**: Programmatic navigation to verification page

### 5. Email Verification System

#### OTP Generation & Email Sending
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Send email via EmailJS
  emailjs.send(
    "service_lz15hw6",
    "template_dgbfyjh",
    {
      to_email: email,
      otp: otp,
    },
    "vBdYxkAocUH9U0vS1"
  ).then(() => {
    localStorage.setItem("otp", otp);
    localStorage.setItem("email", email);
    navigate("/verify");
  });
};
```

The verification system:
1. **Generates** a random 6-digit OTP
2. **Sends** the OTP via EmailJS to the user's email
3. **Stores** the OTP in localStorage for verification
4. **Navigates** to the verification page

#### OTP Verification (`Verification.tsx`)
```typescript
const handleVerify = (e: React.FormEvent) => {
  e.preventDefault();
  const savedOtp = localStorage.getItem("otp");
  
  if (inputOtp === savedOtp) {
    navigate("/success");
  } else {
    alert("Invalid OTP. Try again!");
  }
};
```

The verification page compares the user-entered OTP with the stored value and navigates to success page upon successful verification.

### 6. Routing Implementation

Using React Router DOM, I implemented client-side routing:

```typescript
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
}
```

The routing structure includes:
- **Homepage** (`/`): Main landing page with hero, services, and team sections
- **Registration** (`/join`): User registration with form selection
- **Verification** (`/verify`): OTP verification page
- **Success** (`/success`): Confirmation page after successful verification

### 7. Responsive Design Implementation

The application uses a mobile-first approach with Tailwind CSS responsive utilities:

- **Grid Systems**: `grid-cols-1 md:grid-cols-2` for responsive layouts
- **Flexbox**: `flex flex-col md:flex-row` for flexible layouts
- **Spacing**: Responsive padding and margins
- **Typography**: Responsive text sizes with `text-sm md:text-lg`
- **Navigation**: Hidden navigation on mobile with `hidden md:flex`

### 8. State Management

The application uses React's built-in state management:
- **useState**: For form data and UI state
- **useNavigate**: For programmatic navigation
- **localStorage**: For persisting OTP and email data across page refreshes

## 🎨 Design Features

### Visual Elements
- **Clean Typography**: Modern font hierarchy with proper contrast
- **Consistent Spacing**: Uniform padding and margins throughout
- **Hover Effects**: Interactive elements with smooth transitions
- **Color Consistency**: Blue-based color scheme matching the original brand

### User Experience
- **Intuitive Navigation**: Clear navigation structure with hover states
- **Form Validation**: Real-time validation with helpful error messages
- **Loading States**: Visual feedback during email sending process
- **Success Feedback**: Clear confirmation messages after successful actions

## 🔧 Technical Implementation Details

### EmailJS Integration
The application uses EmailJS for email delivery without requiring a backend server:
- **Service Configuration**: Pre-configured email service
- **Template System**: Custom email templates for OTP delivery
- **Error Handling**: Comprehensive error handling for email failures

### TypeScript Implementation
Full TypeScript implementation provides:
- **Type Safety**: Compile-time error checking
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Code Documentation**: Self-documenting code through types

### Performance Optimizations
- **Vite Build Tool**: Fast development and optimized production builds
- **Component Splitting**: Modular components for better code splitting
- **Image Optimization**: Optimized images for web delivery

## 📱 Responsive Design

The application is fully responsive across all device sizes:
- **Mobile**: Optimized for screens 320px and above
- **Tablet**: Adapted layouts for medium screens
- **Desktop**: Full-featured experience for large screens

## 🎯 Key Achievements

1. **Pixel-Perfect Recreation**: Faithful reproduction of the original Talrn design
2. **Working Email System**: Functional OTP verification without backend requirements
3. **Responsive Implementation**: Seamless experience across all devices
4. **Modern Architecture**: Clean, maintainable code structure
5. **Type Safety**: Full TypeScript implementation for robust development

This project demonstrates proficiency in modern React development, responsive design, third-party API integration, and user experience design, making it a comprehensive showcase of front-end development skills.
