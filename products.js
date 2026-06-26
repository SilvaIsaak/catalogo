// Dados padrão dos produtos
const DEFAULT_PRODUCTS = [
    {
        id: 1,
        name: 'Jersey Real Madrid Home 24/25',
        category: 'Tailandesa Premium',
        badge: 'Novo',
        price: 159.90,
        originalPrice: 219.90,
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80',
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
            'https://images.unsplash.com/photo-1489987707025-afc232f7ea8f?w=600&q=80',
            'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
        ],
        sizes: ['P','M','G','GG','XG'],
        description: 'Jersey oficial do Real Madrid para a temporada 2024/25, com qualidade premium de fabricação Tailandesa 1:1. Feita com tecido respirável, com tecnologia de absorção de suor, bordados de alta definição e acabamento impecável.',
    },
    {
        id: 2,
        name: 'Jersey Brasil Home Copa',
        category: 'Nacional Premium',
        badge: null,
        price: 139.90,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
            'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80',
            'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=80',
            'https://images.unsplash.com/photo-1489987707025-afc232f7ea8f?w=600&q=80',
        ],
        sizes: ['P','M','G','GG','XG'],
        description: 'Camisa oficial da Seleção Brasileira em versão premium tailandesa. Tecido leve, cores vibrantes e escudo bordado com fios de alta definição. O manto da torcida mais apaixonada do mundo.',
    },
    {
        id: 3,
        name: 'Jersey Corinthians Home',
        category: 'Nacional Premium',
        badge: null,
        price: 149.90,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=80',
            'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
            'https://images.unsplash.com/photo-1489987707025-afc232f7ea8f?w=600&q=80',
            'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80',
        ],
        sizes: ['P','M','G','GG','XG'],
        description: 'Camisa do Timão em qualidade tailandesa 1:1. Listras clássicas preto e branco, tecido respirável e acabamento premium. Pra quem veste a camisa com o coração.',
    },
    {
        id: 4,
        name: 'Jersey Barcelona Away',
        category: 'Tailandesa 1:1',
        badge: 'Destaque',
        price: 179.90,
        originalPrice: 229.90,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
            'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80',
            'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
            'https://images.unsplash.com/photo-1489987707025-afc232f7ea8f?w=600&q=80',
        ],
        sizes: ['P','M','G','GG','XG'],
        description: 'Jersey away do Barcelona em versão tailandesa premium. Design moderno, tecido de alta performance e escudo bordado em fio 3D. Visita com estilo Culé.',
    },
    {
        id: 5,
        name: 'Jersey Manchester City Home',
        category: 'Tailandesa Premium',
        badge: 'Novo',
        price: 169.90,
        originalPrice: 209.90,
        image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea8f?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1489987707025-afc232f7ea8f?w=600&q=80',
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
            'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80',
            'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
        ],
        sizes: ['P','M','G','GG','XG'],
        description: 'Camisa do Manchester City temporada atual em acabamento tailandês premium. Azul celeste inconfundível, badge bordado e tecnologia de ventilação avançada.',
    },
    {
        id: 6,
        name: 'Jersey Argentina Copa América',
        category: 'Seleção Premium',
        badge: null,
        price: 144.90,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80',
            'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
            'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=80',
            'https://images.unsplash.com/photo-1489987707025-afc232f7ea8f?w=600&q=80',
        ],
        sizes: ['P','M','G','GG','XG'],
        description: 'Manto da Albiceleste campeã em versão tailandesa 1:1. Listras azul e branco, patch da Copa e acabamento impecável. Para os que amam o futebol acima de tudo.',
    },
];

const STORAGE_KEY = 'gordao_products';

// Supabase configuration
const SUPABASE_URL = 'https://ljtxtylxqbvzbkfwqged.supabase.co' || '';
const SUPABASE_ANON_KEY = 'sb_publishable_FtlIGYfZlpHpj4D-R4Wd_w_SeSYhMLt' || '';
const SUPABASE_ENABLED = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && typeof window !== 'undefined' && typeof window.supabase !== 'undefined');
const supabaseClient = SUPABASE_ENABLED ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

function normalizeProductRow(row) {
    if (!row) return null;
    return {
        id: Number(row.id),
        name: row.name,
        category: row.category,
        badge: row.badge,
        price: Number(row.price),
        originalPrice: row.original_price != null ? Number(row.original_price) : null,
        image: row.image,
        images: Array.isArray(row.images) ? row.images : (typeof row.images === 'string' ? JSON.parse(row.images) : [row.image]),
        sizes: Array.isArray(row.sizes) ? row.sizes : (typeof row.sizes === 'string' ? JSON.parse(row.sizes) : ['P','M','G','GG','XG']),
        description: row.description,
    };
}

async function supabaseFetchProducts() {
    if (!supabaseClient) return null;
    const { data, error } = await supabaseClient.from('products').select('*').order('id', { ascending: true });
    if (error) {
        console.error('Erro ao buscar produtos no Supabase:', error);
        return null;
    }
    return data.map(normalizeProductRow).filter(Boolean);
}

async function supabaseSaveProductsToRemote(products) {
    if (!supabaseClient) return;
    const rows = products.map(product => ({
        id: product.id,
        name: product.name,
        category: product.category,
        badge: product.badge,
        price: product.price,
        original_price: product.originalPrice,
        image: product.image,
        images: product.images,
        sizes: product.sizes,
        description: product.description,
    }));
    const { error } = await supabaseClient.from('products').upsert(rows, { onConflict: 'id', returning: 'minimal' });
    if (error) console.error('Erro ao salvar produtos no Supabase:', error);
}

async function supabaseFetchConfig() {
    if (!supabaseClient) return null;
    const { data, error } = await supabaseClient.from('config').select('*').maybeSingle();
    if (error) {
        console.error('Erro ao buscar config no Supabase:', error);
        return null;
    }
    if (!data) {
        return null;
    }
    return {
        whatsappNumber: data.whatsapp_number,
        whatsappMessage: data.whatsapp_message,
        contactEmail: data.contact_email,
        contactPhone: data.contact_phone,
        storeName: data.store_name,
        storeTagline: data.store_tagline,
    };
}

async function supabaseSaveConfigToRemote(config) {
    if (!supabaseClient) return;
    const row = {
        id: 1,
        whatsapp_number: config.whatsappNumber,
        whatsapp_message: config.whatsappMessage,
        contact_email: config.contactEmail,
        contact_phone: config.contactPhone,
        store_name: config.storeName,
        store_tagline: config.storeTagline,
    };
    const { error } = await supabaseClient.from('config').upsert(row, { onConflict: 'id', returning: 'minimal' });
    if (error) console.error('Erro ao salvar config no Supabase:', error);
}

async function syncSupabaseData() {
    if (!supabaseClient) return;
    const remoteProducts = await supabaseFetchProducts();
    if (remoteProducts && remoteProducts.length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(remoteProducts));
    }
    const remoteConfig = await supabaseFetchConfig();
    if (remoteConfig) {
        localStorage.setItem(CONFIG_KEY, JSON.stringify({ ...DEFAULT_CONFIG, ...remoteConfig }));
    }
}

async function gordaoLoadProducts() {
    if (!supabaseClient) return gordaoGetProducts();
    const remoteProducts = await supabaseFetchProducts();
    if (remoteProducts && remoteProducts.length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(remoteProducts));
        return remoteProducts;
    }
    return gordaoGetProducts();
}

async function gordaoLoadConfig() {
    if (!supabaseClient) return gordaoGetConfig();
    const remoteConfig = await supabaseFetchConfig();
    if (remoteConfig) {
        const cfg = { ...DEFAULT_CONFIG, ...remoteConfig };
        localStorage.setItem(CONFIG_KEY, JSON.stringify(cfg));
        return cfg;
    }
    return gordaoGetConfig();
}

function gordaoGetProducts() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Erro ao carregar produtos do localStorage:', e);
        }
    }
    return [...DEFAULT_PRODUCTS];
}

// Função para salvar produtos no localStorage
function gordaoSaveProducts(products) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    if (supabaseClient) {
        supabaseSaveProductsToRemote(products);
    }
}

// Função para resetar para os produtos padrão
function gordaoResetToDefault() {
    const defaults = [...DEFAULT_PRODUCTS];
    gordaoSaveProducts(defaults);
    return defaults;
}

// Função para obter próximo ID único
function gordaoNextId(products) {
    if (products.length === 0) return 1;
    const maxId = Math.max(...products.map(p => p.id));
    return maxId + 1;
}

// ─────────────────────────────────────────────
// CONFIGURAÇÕES DO SITE
// ─────────────────────────────────────────────

const DEFAULT_CONFIG = {
    whatsappNumber: '5511999999999',
    whatsappMessage: 'Olá! Tenho interesse nos produtos da Gordão Esportes!',
    contactEmail: 'contato@gordaoesportes.com',
    contactPhone: '(11) 99999-9999',
    storeName: 'Gordão Esportes',
    storeTagline: 'A maior distribuidora de artigos esportivos importados de alta qualidade das Américas.'
};

const CONFIG_KEY = 'gordao_config';

function gordaoGetConfig() {
    const stored = localStorage.getItem(CONFIG_KEY);
    if (stored) {
        try {
            return { ...DEFAULT_CONFIG, ...JSON.parse(stored) };
        } catch (e) {
            console.error('Erro ao carregar configurações:', e);
        }
    }
    return { ...DEFAULT_CONFIG };
}

function gordaoSaveConfig(config) {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
    if (supabaseClient) {
        supabaseSaveConfigToRemote(config);
    }
}

function gordaoResetConfig() {
    localStorage.removeItem(CONFIG_KEY);
    return { ...DEFAULT_CONFIG };
}
