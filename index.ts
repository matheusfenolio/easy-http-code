export enum HttpStatus {
    'CONTINUE' = 100,
    'SWITCHING' = 101,
    'PROCESSING' = 102,  
    'EARLY HINTS' = 103, 
    'OK' = 200,
    'CREATED' = 201,   
    'ACCEPTED' = 202, 
    'NON_AUTHORITATIVE_INFORMATION' = 203,
    'NO_CONTENT' = 204, 
    'RESET_CONTENT' = 205,  
    'PARTIAL_CONTENT' = 206,  
    'MULTI_STATUS' = 207, 
    'ALREADY_REPORTED' = 208, 
    'IM_USED' = 226, 
    'MULTIPLE_CHOICES' = 300, 
    'MOVED_PERMANENTLY' = 301,
    'FOUND' = 302, 
    'SEE_OTHER' = 303, 
    'NOT_MODIFIED' = 304,  
    'USE_PROXY' = 305, 
    'TEMPORARY_REDIRECT' = 307, 
    'PERMANENT_REDIRECT' = 308, 
    'BAD_REQUEST' = 400, 
    'UNAUTHORIZED' = 401, 
    'PAYMENT_REQUIRED' = 402, 
    'FORBIDDEN' = 403, 
    'NOT_FOUND' = 404, 
    'METHOD_NOT_ALLOWED' = 405, 
    'NOT_ACCEPTABLE' = 406, 
    'PROXY_AUTHENTICATION_REQUIRED' = 407, 
    'REQUEST_TIMEOUT' = 408, 
    'CONFLICT' = 409, 
    'GONE' = 410, 
    'LENGTH_REQUIRED' = 411, 
    'PRECONDITION_FAILED' = 412, 
    'PAYLOAD_TOO_LARGE' = 413, 
    'URI_TOO_LONG' = 414, 
    'UNSUPPORTED_MEDIA TYPE' = 415, 
    'RANGE_NOT_SATISFIABLE' = 416, 
    'EXPECTATION_FAILED' = 417, 
    'MISDIRECTED_REQUEST' = 421, 
    'UNPROCESSABLE_ENTITY' = 422, 
    'LOCKED' = 423,
    'FAILED_DEPENDENCY' = 424,
    'TOO_EARLY' = 425, 
    'UPGRADE_REQUIRED' = 426, 
    'PRECONDITION_REQUIRED' = 428,
    'TOO_MANY_REQUESTS' = 429,
    'REQUEST_HEADER_FIELDS_TOO_LARGE' = 431, 
    'UNAVAILABLE_FOR_LEGAL_REASONS' = 451, 
    'INTERNAL_SERVER_ERROR' = 500, 
    'NOT_IMPLEMENTED' = 501, 
    'BAD_GATEWAY' = 502, 
    'SERVICE_UNAVAILABLE' = 503, 
    'GATEWAY_TIMEOUT' = 504, 
    'HTTP_VERSION_NOT_SUPPORTED' = 505, 
    'VARIANT_ALSO_NEGOTIATES' = 506, 
    'INSUFFICIENT_STORAGE' = 507, 
    'LOOP_DETECTED' = 508, 
    'NOT_EXTENDED' = 510, 
    'NETWORK_AUTHENTICATION_REQUIRED' = 511, 
}

export const HttpMessage = (code: number): string => {
    switch (code) {
        case 100: return 'Continue';
        case 101: return 'Switching';
        case 102: return 'Processing';
        case 103: return 'Early hints';
        case 200: return 'Ok';
        case 201: return 'Created'; 
        case 202: return 'Accepted';
        case 203: return 'Non-authoritative information';
        case 204: return 'No content';
        case 205: return 'Reset content'; 
        case 206: return 'Partial content'; 
        case 207: return 'Multi-status';
        case 208: return 'Already reported';
        case 226: return 'Im used';
        case 300: return 'Multiple choices'; 
        case 301: return 'Moved permanently'; 
        case 302: return 'Found'; 
        case 303: return 'See other'; 
        case 304: return 'Not modified'; 
        case 305: return 'Use proxy';
        case 307: return 'Temporary redirect';
        case 308: return 'Permanent redirect';
        case 400: return 'Bad request';
        case 401: return 'Unauthorized';
        case 402: return 'Payment required';
        case 403: return 'Forbidden';
        case 404: return 'Not found';
        case 405: return 'Method not allowed';
        case 406: return 'Not acceptable';
        case 407: return 'Proxy authentication required';
        case 408: return 'Request timeout';
        case 409: return 'Conflict';
        case 410: return 'Gone';
        case 411: return 'Length required';
        case 412: return 'Precondition failed';
        case 413: return 'Payload too large';
        case 414: return 'Uri too long';
        case 415: return 'Unsupported media type';
        case 416: return 'Range not satisfiable';
        case 417: return 'Expectation failed';
        case 421: return 'Misdirected request';
        case 422: return 'Unprocessable entity';
        case 423: return 'Locked';
        case 424: return 'Failed dependency';
        case 425: return 'Too early';
        case 426: return 'Upgrade required';
        case 428: return 'Precondition required';
        case 429: return 'Too many requests';
        case 431: return 'Request header fields too large';
        case 451: return 'Unavailable for legal reasons';
        case 500: return 'Internal server error';
        case 501: return 'Not implemented';
        case 502: return 'Bad gateway';
        case 503: return 'Service unavailable';
        case 504: return 'Gateway timeout';
        case 505: return 'Http version not supported';
        case 506: return 'Variant also negotiates';
        case 507: return 'Insufficient storage';
        case 508: return 'Loop detected';
        case 510: return 'Not extended';
        case 511: return 'Network authentication required';
        default: return 'Unsigned'
    }
}