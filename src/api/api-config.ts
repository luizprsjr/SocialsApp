import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJSUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6MTAsInVzZXIiOnsiZW1haWwiOiJsdWl6QGdtYWlsLmNvbSJ9fSwiaWF0IjoxNzAwODg1OTU4LCJleHAiOjE3MDA4ODc3NTh9.mOZBbWgh_ziqR-eLHuQYCFceMnuDAGh0qZbpIruhBUQQWvXs5jZU9ehFTE9tBxL-eypVzhcIixH5vQMNocVOmDnwdL9_LdYDQAzD8SSgaIHcREk-g4xp6eW2KL273dgmu4FE4OWhgrg0HZcupLNWKPYlNbM_RFLHpxbo8Xp3-U2w7A0lGe23_O3rJ9C3KTUduTC0gzhGHwJL2WMicDxwlUT4NfHoh2rsyQTdXhJ7QqMSLIvsRVOO9K8k9RGgFXiexFpScrPmz7VLb8mYXBXEXWXuM8RHCTjZcEuJuvf5jsj8Z8ivKfSakwIyncaQFoebCRfPQ83dXdQEfhvRC6DQk2DItXqoljd-EWQXu--rZZo6wAVkyR8QQJcHTaE77whI2wayntNKeTlZdPsaWWf323JskIG2nXZE4EEm3HNo4YzGNMankfreYgZ_f26qRddG5HlKAO3QKdNZQ_XY5p6YREvotYhOaiD-2q9I3iOpMUPuDbYLlyfA4pNcKu2n9l2phz7MwWlgh14HzCNcj3YjsGZcq48hCoKa96aGyJeggP0O9uaUnfjxy4mlUJ6MzJJXHX_2UQ8Ng_PQU4GSKWAEzVvrY-F2yUHwYQ6uLKyt6TvRm3E7h5ViWXCVPQ5DSrT2P1ZwqemHkYp2om41-3y4EY6A8ZH777ChG_EuDbCLPA8',
  },
});
