

// app/dashboard/layout.tsx
import React from 'react';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div className='flex gap-1'>
                <nav
                    style={{
                        width: '250px',
                        backgroundColor: '#333',
                        color: '#fff',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    <h2>Dashboard</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ margin: '0.5rem 0' }}>
                            <a href="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>
                                Home
                            </a>
                        </li>
                        <li style={{ margin: '0.5rem 0' }}>
                            <a href="/dashboard/settings" style={{ color: '#fff', textDecoration: 'none' }}>
                                Settings
                            </a>
                        </li>
                        <li style={{ margin: '0.5rem 0' }}>
                            <a href="/dashboard/profile" style={{ color: '#fff', textDecoration: 'none' }}>
                                Profile
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className='h-[50px] w-full bg-slate-500 text-white'>
                    top bar
                </div>
            </div>
            {/* Sidebar */}


            {/* Main Content */}
            <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
