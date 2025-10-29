-- Таблица услуг
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL,
    price INTEGER NOT NULL,
    image_url TEXT,
    icon VARCHAR(50),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица записей клиентов
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    client_phone VARCHAR(50) NOT NULL,
    service_id INTEGER REFERENCES services(id),
    booking_date DATE NOT NULL,
    booking_time VARCHAR(10) NOT NULL,
    comment TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Добавляем текущие услуги
INSERT INTO services (title, description, duration, price, image_url, icon) VALUES
('Тайский традиционный массаж', 'Древняя практика исцеления с использованием акупрессуры и растяжки', 90, 4500, 'https://cdn.poehali.dev/projects/2af9282e-9460-42fd-8e9b-6827c517fe98/files/5a960048-b0f2-4b6c-9aea-91ed7a3b8e1e.jpg', 'Sparkles'),
('Ароматерапевтический массаж', 'Расслабляющий массаж с эфирными маслами для гармонии тела и духа', 60, 3500, 'https://cdn.poehali.dev/projects/2af9282e-9460-42fd-8e9b-6827c517fe98/files/c8c97ea6-49cc-469d-8dc8-3ac170f66f26.jpg', 'Flower2'),
('Массаж горячими камнями', 'Глубокое расслабление мышц с использованием натуральных базальтовых камней', 75, 4000, 'https://cdn.poehali.dev/projects/2af9282e-9460-42fd-8e9b-6827c517fe98/files/13c139b9-71cf-486d-acbe-a0103f443112.jpg', 'Waves');