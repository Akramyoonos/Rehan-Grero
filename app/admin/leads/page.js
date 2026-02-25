'use client';

import { useState, useEffect } from 'react';
import styles from '../admin.module.css';
import { Search, Download, Filter, MoreVertical } from 'lucide-react';

export default function LeadManagement() {
    const [leads, setLeads] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchLeads();
    }, []);

    const fetchLeads = async () => {
        // Backend removed, using empty array or static mock
        setLeads([]);
    };

    const handleStatusUpdate = async (id, newStatus) => {
        // Backend removed, updating local state only
        setLeads(leads.map(lead =>
            lead.id === id ? { ...lead, status: newStatus } : lead
        ));
    };


    const filteredLeads = leads.filter(lead =>
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.dashboardContent}>
            <div className={styles.tableCard} style={{ gridColumn: 'span 2' }}>
                <div className={styles.cardHeader}>
                    <h4 className={styles.cardTitle}>Master Registry Leads</h4>
                    <div className={styles.tableActions}>
                        <div className={styles.searchWrapper}>
                            <Search size={16} className={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder="Search leads..."
                                className={styles.tableSearch}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Investor Name</th>
                            <th>Contact Detail</th>
                            <th>Target Sector</th>
                            <th>Origin</th>
                            <th>Date Received</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLeads.length > 0 ? filteredLeads.map((lead) => (
                            <tr key={lead.id}>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.interest}</td>
                                <td>{lead.origin}</td>
                                <td>{new Date(lead.created_at).toLocaleDateString()}</td>
                                <td>
                                    <div className={styles.statusActionGroup}>
                                        <select
                                            value={lead.status}
                                            onChange={(e) => handleStatusUpdate(lead.id, e.target.value)}
                                            className={`${styles.statusSelect} ${styles[lead.status.toLowerCase()]}`}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Vetted">Vetted</option>
                                            <option value="Contacted">Contacted</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="6" style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>
                                    No leads found in the registry database.
                                </td>
                            </tr>
                        )}
                        {/* Static sample lead for initial demo if empty */}
                        {filteredLeads.length === 0 && leads.length === 0 && (
                            <tr>
                                <td>Sample Investor</td>
                                <td>sample@investor.com</td>
                                <td>Commercial Land</td>
                                <td>London, UK</td>
                                <td>Feb 12, 2026</td>
                                <td><span className={styles.vettedBadge}>Vetted</span></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
