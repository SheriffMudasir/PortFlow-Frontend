# PortFlow - AI-Powered Cargo Clearance

PortFlow is a modern, AI-driven platform designed to revolutionize logistics by accelerating cargo clearance processes. It leverages intelligent automation to cut clearance times, reduce costs, and ensure compliance, providing a seamless experience for managing container shipments.

![PortFlow Dashboard](https://placehold.co/1200x600/2563eb/ffffff?text=PortFlow+Dashboard+Preview)

## 🚀 Features

- **AI-Powered Automation**: Intelligent document parsing and validation to speed up processing.
- **Real-Time Dashboard**: Centralized monitoring of all your container clearances.
- **Live Tracking**: Track the status of Customs, Shipping, and Inspection processes in real-time.
- **Smart Document Management**: Easy upload and processing of Bills of Lading and other clearance documents.
- **Compliance & Security**: Automated checks to ensure all shipments meet regulatory standards.
- **Cost Estimation**: Insights into potential costs and savings.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Fetching**: [SWR](https://swr.vercel.app/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

## 📂 Project Structure

```
portflow/
├── app/                 # Next.js App Router pages
│   ├── dashboard/       # Dashboard view
│   ├── containers/      # Individual container details
│   └── upload/          # Document upload page
├── components/          # Reusable UI components
│   ├── ui/              # Base UI elements (buttons, cards, etc.)
│   └── ...              # Feature-specific components (AuditLog, Timeline)
├── hooks/               # Custom React hooks (useContainer, etc.)
└── public/              # Static assets
```

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SheriffMudasir/PortFlow-Frontend.git
   cd PortFlow-Frontend
   ```

2. **Navigate to the project directory**

   The Next.js application is located in the `portflow` subdirectory.

   ```bash
   cd portflow
   ```

3. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. **Set up environment variables**

   Create a `.env.local` file in the `portflow` directory:

   ```env
   NEXT_PUBLIC_API_URL=https://portflow-backend.onrender.com
   ```

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open the application**

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Backend Integration

### Production Backend
**URL**: `https://portflow-backend.onrender.com`

### Available API Endpoints

#### Container Operations
- `GET /api/containers` - List all containers
- `GET /api/containers/{container_id}` - Get container details
- `POST /api/upload` - Upload Bill of Lading (multipart/form-data)

#### Customs Operations
- `GET /api/customs/status/{container_id}` - Check customs status
- `POST /api/customs/pay` - Pay customs duty

#### Shipping Operations
- `GET /api/shipping/status/{container_id}` - Check shipping status

#### Inspection Operations
- `POST /api/inspection/schedule` - Schedule inspection
- `POST /api/inspection/complete` - Complete inspection
- `POST /api/containers/{container_id}/release` - Release container

#### Watsonx AI Integration
- `GET /api/watsonx/config` - Get widget configuration
- `GET /api/watsonx/token` - Get authentication token

### CORS Configuration
The backend accepts requests from:
- `https://port-flow-frontend.vercel.app` (Production)
- `http://localhost:3000` (Local development)

## 🚀 Deployment

### Environment Variables for Production

When deploying to Vercel or other platforms, set:

```env
NEXT_PUBLIC_API_URL=https://portflow-backend.onrender.com
```

### Build for Production

```bash
npm run build
npm run start
```

## 📜 Scripts

- `npm run dev`: Runs the app in development mode with Turbopack.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.
