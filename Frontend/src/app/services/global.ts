import { HttpHeaders } from '@angular/common/http';

export const GLOBAL = {
    url: 'http://localhost:3000',
    httpOptionsJson : {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
};
