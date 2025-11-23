import { Container, ContainerListResponse } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
    console.warn("NEXT_PUBLIC_API_URL is not defined in environment variables");
}

class ApiError extends Error {
    status: number;
    statusText: string;
    data: unknown;

    constructor(status: number, statusText: string, data: unknown) {
        super(`API Error: ${status} ${statusText}`);
        this.status = status;
        this.statusText = statusText;
        this.data = data;
    }
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_URL}${endpoint}`;
    
    const headers: Record<string, string> = {
        'ngrok-skip-browser-warning': 'true',
        ...(options.headers as Record<string, string>),
    };

    const config: RequestInit = {
        ...options,
        headers,
    };

    const response = await fetch(url, config);

    if (!response.ok) {
        let data;
        try {
            data = await response.json();
        } catch {
            data = null;
        }
        throw new ApiError(response.status, response.statusText, data);
    }

    if (response.status === 204) {
        return {} as T;
    }

    return response.json();
}

export const api = {
    getContainer: (id: string) => request<Container>(`/api/containers/${id}`),
    
    listContainers: (params?: { status?: string }) => {
        const searchParams = new URLSearchParams();
        if (params?.status) searchParams.append('status', params.status);
        const queryString = searchParams.toString();
        return request<ContainerListResponse>(`/api/containers${queryString ? `?${queryString}` : ''}`);
    },

    uploadBillOfLading: async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        return request<{ container_id: string }>('/api/upload', {
            method: 'POST',
            body: formData,
        });
    },

    payCustomsDuty: (containerId: string, amount: number) => request<void>(`/api/customs/pay`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ container_id: containerId, amount }),
    }),

    scheduleInspection: (containerId: string, date: string) => request<void>(`/api/inspection/schedule`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ container_id: containerId, date }),
    }),

    completeInspection: (containerId: string, passed: boolean) => request<void>(`/api/inspection/complete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ container_id: containerId, passed }),
    }),

    releaseContainer: (containerId: string) => request<void>(`/api/containers/${containerId}/release`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }),
};
