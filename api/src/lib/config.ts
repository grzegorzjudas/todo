function getConfigString (prop: string): string {
    const val = process.env[prop] || null;

    return val ? `${val}` : val;
}

function getConfigNumber (prop: string): number {
    const val = process.env[prop] || null;

    return val ? parseFloat(`${val}`) : null;
}

function getConfigBoolean (prop: string): boolean {
    const val = process.env[prop] || null;

    return val ? val === 'true' : false;
}

function getConfig (prop: string, type: 'string'): string;

function getConfig (prop: string, type: 'number'): number;

function getConfig (prop: string, type: 'boolean'): boolean;

function getConfig (prop: string, type: 'string' | 'number' | 'boolean'): string | number | boolean {
    switch (type) {
        case 'string': return getConfigString(prop);
        case 'number': return getConfigNumber(prop);
        case 'boolean': return getConfigBoolean(prop);
        default: return getConfigString(prop);
    }
}

export default class Config {
    public static NODE_ENV: string = getConfig('NODE_ENV', 'string');
    public static PORT: number = getConfig('PORT', 'number');
}
