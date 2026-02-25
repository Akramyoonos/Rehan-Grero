'use client';

import { useEffect, useState } from 'react';
import { Mail, Phone, Calendar, ShieldCheck, CheckCircle, Clock, UserCheck } from 'lucide-react';
import styles from '../admin.module.css';

export default function AdminReviews() {
    const [requests, setRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        // Backend removed, using empty mock or static data
        setRequests([]);
        setIsLoading(false);
    };

    const handleStatusChange = async (id, newStatus) => {
        // Backend removed, updating local state only for UI demo
        setRequests(requests.map(req =>
            req.id === id ? { ...req, status: newStatus } : req
        ));
    };


    if (isLoading) return <div className={styles.loading}>Loading requests...</div>;

    return (
        <div className={styles.container}>
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <span className={styles.statLabel}>Total Requests</span>
                    <span className={styles.statValue}>{requests.length}</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statLabel}>Pending</span>
                    <span className={styles.statValue}>
                        {requests.filter(r => r.status === 'pending').length}
                    </span>
                </div>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Contact</th>
                            <th>Property Details</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => (
                            <tr key={request.id}>
                                <td>
                                    <div className={styles.dateInfo}>
                                        <Calendar size={14} />
                                        <span>{new Date(request.created_at).toLocaleDateString()}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.customerName}>{request.name}</div>
                                </td>
                                <td>
                                    <div className={styles.contactInfo}>
                                        <div className={styles.contactItem}><Mail size={12} /> {request.email}</div>
                                        <div className={styles.contactItem}><Phone size={12} /> {request.phone}</div>
                                    </div>
                                </td>
                                <td className={styles.detailsCell}>
                                    <p className={styles.detailsText}>{request.property_details}</p>
                                </td>
                                <td>
                                    <div className={styles.statusActionGroup}>
                                        <select
                                            value={request.status}
                                            onChange={(e) => handleStatusChange(request.id, e.target.value)}
                                            className={`${styles.statusSelect} ${styles[request.status]}`}
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="reviewed">Reviewed</option>
                                            <option value="contacted">Contacted</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
