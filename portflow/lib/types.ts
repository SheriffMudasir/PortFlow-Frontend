export interface AuditLogEntry {
    timestamp: string;
    action: string;
    details: string;
    actor: string;
}

export interface LogEntry {
    timestamp: string;
    action: string;
    details: string;
    actor: string;
}

export interface Container {
    container_id: string;
    overall_status: string;
    customs_status: string;
    shipping_status: string;
    inspection_status: string;
    vessel_name?: string;
    importer_name?: string;
    port_of_loading?: string;
    port_of_discharge?: string;
    cargo_description?: string;
    cargo_weight?: number;
    customs_duty_amount?: number;
    updated_at: string;
    logs: LogEntry[];
}

export interface ContainerListResponse {
    containers: Container[];
    count: number;
}
