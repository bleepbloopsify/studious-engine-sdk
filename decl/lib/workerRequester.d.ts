import { DocumentProcessingJobData } from '@apps/workers/src/documentProcessingQueue';
import Bull from 'bull';
export type Workers = {
    documentProcessing: WorkerRequester<DocumentProcessingJobData>;
};
export interface WorkerRequester<T> {
    request(data: T): Promise<void>;
}
export declare function createWorkerRequester<T>(queue: Bull.Queue<T>): {
    request(data: T): Promise<void>;
};
export declare function createFakeWorkerRequester<T>(): {
    requests: T[];
    request(data: T): Promise<void>;
};
//# sourceMappingURL=workerRequester.d.ts.map