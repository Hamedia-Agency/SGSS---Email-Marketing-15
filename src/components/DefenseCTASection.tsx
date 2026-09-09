"use client";

import React, { useState, useEffect } from "react";
import styles from "./DefenseCTASection.module.css";

type ModalType = "visit" | "closeout" | null;

interface VisitFormState {
  visitorName: string; // Full Name
  title: string;       // Job Title
  phone: string;       // Phone Number
  email: string;       // Email Address
  role: string;        // Contact Role
  decisionMaker: string; // Decision Maker Status
  address: string;     // Site Address
  industry: string;    // Industry Category
  siteType: string;    // Site Type
  painPoints: string;  // Pain Points
  currentSecurity: string; // Current Security Setup
  photoAttach: string; // Site Photos
}

interface CloseoutFormState {
  officerName: string;
  siteName: string;
  shiftDate: string;
  shiftTiming: string;
  hoursWorked: string;
  incidents: string;
  incidentDetails: string;
  tasksCompleted: string;
  handoverNotes: string;
  confirmCheck: boolean;
}

export function DefenseCTASection() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form State: New Site Visit / Site Assessment
  const [visitForm, setVisitForm] = useState<VisitFormState>({
    visitorName: "",
    title: "",
    phone: "",
    email: "",
    role: "Property Manager",
    decisionMaker: "Yes",
    address: "",
    industry: "Construction",
    siteType: "Under Construction",
    painPoints: "",
    currentSecurity: "Unsecured",
    photoAttach: "",
  });

  // Form State: Daily Close Out
  const [closeoutForm, setCloseoutForm] = useState<CloseoutFormState>({
    officerName: "",
    siteName: "",
    shiftDate: "",
    shiftTiming: "Day Shift (06:00 - 18:00)",
    hoursWorked: "",
    incidents: "No Incidents",
    incidentDetails: "",
    tasksCompleted: "",
    handoverNotes: "",
    confirmCheck: false,
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  const handleCloseModal = () => {
    setActiveModal(null);
    setSubmitted(false);
    // Reset forms on close
    setVisitForm({
      visitorName: "",
      title: "",
      phone: "",
      email: "",
      role: "Property Manager",
      decisionMaker: "Yes",
      address: "",
      industry: "Construction",
      siteType: "Under Construction",
      painPoints: "",
      currentSecurity: "Unsecured",
      photoAttach: "",
    });
    setCloseoutForm({
      officerName: "",
      siteName: "",
      shiftDate: "",
      shiftTiming: "Day Shift (06:00 - 18:00)",
      hoursWorked: "",
      incidents: "No Incidents",
      incidentDetails: "",
      tasksCompleted: "",
      handoverNotes: "",
      confirmCheck: false,
    });
  };

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCloseoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.ctaSection} id="ops-cta-section">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>SGSS Field Operations</span>
          <h2 className={styles.sectionTitle}>
            Operational Reporting & Forms Portal
          </h2>
          <p className={styles.sectionSubtext}>
            Access and submit site visit assessments or daily shift close-out summaries directly. Select a form category below to open the reporting prompt.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Card 1: New Site Visit */}
          <div className={styles.card} onClick={() => setActiveModal("visit")}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>📋</div>
                <h3 className={styles.cardTitle}>New Site Visit Form</h3>
              </div>
              <p className={styles.cardDesc}>
                Log and document active site assessments, safety audits, camera tower performance checks, and perimeter observations during an officer or supervisor visit.
              </p>
            </div>
            <button className={styles.cardBtn} aria-label="Open New Site Visit Form">
              Create Visit Report &rarr;
            </button>
          </div>

          {/* Card 2: Daily Close Out */}
          <div className={styles.card} onClick={() => setActiveModal("closeout")}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🔒</div>
                <h3 className={styles.cardTitle}>Daily Close Out Form</h3>
              </div>
              <p className={styles.cardDesc}>
                Submit shift summaries, verify finished check-lists, note security incidents or anomalies, and record handover tasks for incoming surveillance patrols.
              </p>
            </div>
            <button className={styles.cardBtn} aria-label="Open Daily Close Out Form">
              Create Close Out Log &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* ==================== MODAL OVERLAY ==================== */}
      {activeModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modalContainer}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>
                <span className={styles.modalIcon}>
                  {activeModal === "visit" ? "📋" : "🔒"}
                </span>
                {activeModal === "visit"
                  ? "New Site Assessment Report"
                  : "Daily Close Out Log"}
              </h3>
              <button
                className={styles.modalCloseBtn}
                onClick={handleCloseModal}
                aria-label="Close form"
              >
                &times;
              </button>
            </div>

            {/* Modal Content - Form Wrappers */}
            {!submitted ? (
              activeModal === "visit" ? (
                /* ================= VISIT / SITE ASSESSMENT FORM ================= */
                <form onSubmit={handleVisitSubmit} className={styles.form}>
                  <div className={styles.modalBody}>
                    <h4 className={styles.formSectionSubtitle}>Contact Details (GHL Records)</h4>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="visitorName" className={styles.label}>
                          Full Name <span className={styles.requiredStar}>*</span>
                        </label>
                        <input
                          id="visitorName"
                          type="text"
                          required
                          className={styles.input}
                          placeholder="John Doe"
                          value={visitForm.visitorName}
                          onChange={(e) =>
                            setVisitForm({ ...visitForm, visitorName: e.target.value })
                          }
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="visitTitle" className={styles.label}>
                          Job Title <span className={styles.requiredStar}>*</span>
                        </label>
                        <input
                          id="visitTitle"
                          type="text"
                          required
                          className={styles.input}
                          placeholder="Property Manager"
                          value={visitForm.title}
                          onChange={(e) =>
                            setVisitForm({ ...visitForm, title: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="visitPhone" className={styles.label}>
                          Phone Number <span className={styles.requiredStar}>*</span>
                        </label>
                        <input
                          id="visitPhone"
                          type="tel"
                          required
                          className={styles.input}
                          placeholder="(555) 000-0000"
                          value={visitForm.phone}
                          onChange={(e) =>
                            setVisitForm({ ...visitForm, phone: e.target.value })
                          }
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="visitEmail" className={styles.label}>
                          Email Address <span className={styles.requiredStar}>*</span>
                        </label>
                        <input
                          id="visitEmail"
                          type="email"
                          required
                          className={styles.input}
                          placeholder="john@example.com"
                          value={visitForm.email}
                          onChange={(e) =>
                            setVisitForm({ ...visitForm, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="visitRole" className={styles.label}>
                          Contact Role
                        </label>
                        <select
                          id="visitRole"
                          className={styles.select}
                          value={visitForm.role}
                          onChange={(e) =>
                            setVisitForm({ ...visitForm, role: e.target.value })
                          }
                        >
                          <option value="Property Manager">Property Manager</option>
                          <option value="Security Director">Security Director</option>
                          <option value="Business Owner">Business Owner</option>
                          <option value="Operations Manager">Operations Manager</option>
                          <option value="Developer / Builder">Developer / Builder</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="decisionMaker" className={styles.label}>
                          Decision-Maker Status
                        </label>
                        <select
                          id="decisionMaker"
                          className={styles.select}
                          value={visitForm.decisionMaker}
                          onChange={(e) =>
                            setVisitForm({ ...visitForm, decisionMaker: e.target.value })
                          }
                        >
                          <option value="Yes">Yes (Direct Decision Maker)</option>
                          <option value="Influencer">Influencer / Recommendation Maker</option>
                          <option value="No">No (Inquiry Only)</option>
                        </select>
                      </div>
                    </div>

                    <h4 className={styles.formSectionSubtitle}>Site & Assessment Details (Captured)</h4>
                    <div className={styles.formGroupFull}>
                      <label htmlFor="visitAddress" className={styles.label}>
                        Site Address <span className={styles.requiredStar}>*</span>
                      </label>
                      <input
                        id="visitAddress"
                        type="text"
                        required
                        className={styles.input}
                        placeholder="123 Security Blvd, Los Angeles, CA"
                        value={visitForm.address}
                        onChange={(e) =>
                          setVisitForm({ ...visitForm, address: e.target.value })
                        }
                      />
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="visitIndustry" className={styles.label}>
                          Industry
                        </label>
                        <select
                          id="visitIndustry"
                          className={styles.select}
                          value={visitForm.industry}
                          onChange={(e) =>
                            setVisitForm({ ...visitForm, industry: e.target.value })
                          }
                        >
                          <option value="Construction">Construction</option>
                          <option value="Logistics & Yards">Logistics & Yards</option>
                          <option value="Retail & Parking Lots">Retail & Parking Lots</option>
                          <option value="Commercial Real Estate">Commercial Real Estate</option>
                          <option value="Industrial & Storage">Industrial & Storage</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="visitSiteType" className={styles.label}>
                          Site Type
                        </label>
                        <select
                          id="visitSiteType"
                          className={styles.select}
                          value={visitForm.siteType}
                          onChange={(e) =>
                            setVisitForm({ ...visitForm, siteType: e.target.value })
                          }
                        >
                          <option value="Vacant Property">Vacant Property</option>
                          <option value="Active Business Hub">Active Business Hub</option>
                          <option value="Multi-Family Community">Multi-Family Community</option>
                          <option value="Under Construction">Under Construction</option>
                          <option value="Logistics Yard / Terminal">Logistics Yard / Terminal</option>
                          <option value="Equipment Yard">Equipment Yard</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.formGroupFull}>
                      <label htmlFor="visitPainPoints" className={styles.label}>
                        Security Pain Points <span className={styles.requiredStar}>*</span>
                      </label>
                      <textarea
                        id="visitPainPoints"
                        required
                        className={styles.textarea}
                        placeholder="E.g., Trespassing, theft of copper/tools, loitering, homeless encampments, illegal dumping, vandalism..."
                        value={visitForm.painPoints}
                        onChange={(e) =>
                          setVisitForm({ ...visitForm, painPoints: e.target.value })
                        }
                      />
                    </div>

                    <div className={styles.formGroupFull}>
                      <label htmlFor="visitCurrentSecurity" className={styles.label}>
                        Current Security Setup <span className={styles.requiredStar}>*</span>
                      </label>
                      <textarea
                        id="visitCurrentSecurity"
                        required
                        className={styles.textarea}
                        placeholder="Describe what security is currently present on-site (e.g. Unsecured, standing guards, random patrols, passive CCTV)..."
                        value={visitForm.currentSecurity}
                        onChange={(e) =>
                          setVisitForm({ ...visitForm, currentSecurity: e.target.value })
                        }
                      />
                    </div>

                    <div className={styles.formGroupFull}>
                      <label htmlFor="visitPhotos" className={styles.label}>
                        Site Photos (Optional)
                      </label>
                      <input
                        id="visitPhotos"
                        type="file"
                        accept="image/*"
                        multiple
                        className={styles.input}
                        onChange={(e) => {
                          const fileNames = Array.from(e.target.files || [])
                            .map((f) => f.name)
                            .join(", ");
                          setVisitForm({
                            ...visitForm,
                            photoAttach: fileNames || "",
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div className={styles.modalFooter}>
                    <button className={styles.cancelBtn} type="button" onClick={handleCloseModal}>
                      Cancel
                    </button>
                    <button type="submit" className={styles.submitBtn}>
                      Submit Log Verification
                    </button>
                  </div>
                </form>
              ) : (
                /* ================= CLOSE OUT FORM ================= */
                <form onSubmit={handleCloseoutSubmit} className={styles.form}>
                  <div className={styles.modalBody}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="officerName" className={styles.label}>
                          Officer / Supervisor Name <span className={styles.requiredStar}>*</span>
                        </label>
                        <input
                          id="officerName"
                          type="text"
                          required
                          className={styles.input}
                          placeholder="Jane Smith"
                          value={closeoutForm.officerName}
                          onChange={(e) =>
                            setCloseoutForm({
                              ...closeoutForm,
                              officerName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="closeoutSiteName" className={styles.label}>
                          Site Name / Location <span className={styles.requiredStar}>*</span>
                        </label>
                        <input
                          id="closeoutSiteName"
                          type="text"
                          required
                          className={styles.input}
                          placeholder="Logistics Hub West"
                          value={closeoutForm.siteName}
                          onChange={(e) =>
                            setCloseoutForm({
                              ...closeoutForm,
                              siteName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="shiftDate" className={styles.label}>
                          Shift Date <span className={styles.requiredStar}>*</span>
                        </label>
                        <input
                          id="shiftDate"
                          type="date"
                          required
                          className={styles.input}
                          value={closeoutForm.shiftDate}
                          onChange={(e) =>
                            setCloseoutForm({
                              ...closeoutForm,
                              shiftDate: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="shiftTiming" className={styles.label}>
                          Shift Duration
                        </label>
                        <select
                          id="shiftTiming"
                          className={styles.select}
                          value={closeoutForm.shiftTiming}
                          onChange={(e) =>
                            setCloseoutForm({
                              ...closeoutForm,
                              shiftTiming: e.target.value,
                            })
                          }
                        >
                          <option value="Day Shift (06:00 - 18:00)">
                            Day Shift (06:00 - 18:00)
                          </option>
                          <option value="Night Shift (18:00 - 06:00)">
                            Night Shift (18:00 - 06:00)
                          </option>
                          <option value="Swing Shift (12:00 - 00:00)">
                            Swing Shift (12:00 - 00:00)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="hoursWorked" className={styles.label}>
                          Total Hours Logged <span className={styles.requiredStar}>*</span>
                        </label>
                        <input
                          id="hoursWorked"
                          type="number"
                          min="1"
                          max="24"
                          step="0.5"
                          required
                          className={styles.input}
                          placeholder="12"
                          value={closeoutForm.hoursWorked}
                          onChange={(e) =>
                            setCloseoutForm({
                              ...closeoutForm,
                              hoursWorked: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="incidents" className={styles.label}>
                          Incidents Documented
                        </label>
                        <select
                          id="incidents"
                          className={styles.select}
                          value={closeoutForm.incidents}
                          onChange={(e) =>
                            setCloseoutForm({
                              ...closeoutForm,
                              incidents: e.target.value,
                            })
                          }
                        >
                          <option value="No Incidents">No Incidents</option>
                          <option value="AI Threat Alert Confirmed">
                            AI Threat Alert Confirmed
                          </option>
                          <option value="Trespasser Deterred">Trespasser Deterred</option>
                          <option value="Vandalism/Property Damage">
                            Vandalism/Property Damage
                          </option>
                          <option value="Equipment Malfunction / Power Loss">
                            Equipment Malfunction / Power Loss
                          </option>
                        </select>
                      </div>
                    </div>

                    {closeoutForm.incidents !== "No Incidents" && (
                      <div className={styles.formGroupFull}>
                        <label htmlFor="incidentDetails" className={styles.label}>
                          Incident Report Details <span className={styles.requiredStar}>*</span>
                        </label>
                        <textarea
                          id="incidentDetails"
                          required
                          className={styles.textarea}
                          placeholder="Describe the incident, exact times, dispatcher responses, and final resolution..."
                          value={closeoutForm.incidentDetails}
                          onChange={(e) =>
                            setCloseoutForm({
                              ...closeoutForm,
                              incidentDetails: e.target.value,
                            })
                          }
                        />
                      </div>
                    )}

                    <div className={styles.formGroupFull}>
                      <label htmlFor="tasksCompleted" className={styles.label}>
                        Tasks & Checklist Items Completed <span className={styles.requiredStar}>*</span>
                      </label>
                      <textarea
                        id="tasksCompleted"
                        required
                        className={styles.textarea}
                        placeholder="E.g., verified camera feeds, checked system power metrics, completed patrol rounds, secured perimeter gates..."
                        value={closeoutForm.tasksCompleted}
                        onChange={(e) =>
                          setCloseoutForm({
                            ...closeoutForm,
                            tasksCompleted: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className={styles.formGroupFull}>
                      <label htmlFor="handoverNotes" className={styles.label}>
                        Handover Notes / Upcoming Shift Reminders
                      </label>
                      <textarea
                        id="handoverNotes"
                        className={styles.textarea}
                        placeholder="Detail any open issues, pending deliveries, or targeted monitoring request zones..."
                        value={closeoutForm.handoverNotes}
                        onChange={(e) =>
                          setCloseoutForm({
                            ...closeoutForm,
                            handoverNotes: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className={styles.checkboxGroup}>
                      <input
                        id="confirmCheck"
                        type="checkbox"
                        required
                        className={styles.checkbox}
                        checked={closeoutForm.confirmCheck}
                        onChange={(e) =>
                          setCloseoutForm({
                            ...closeoutForm,
                            confirmCheck: e.target.checked,
                          })
                        }
                      />
                      <label htmlFor="confirmCheck" className={styles.checkboxLabel}>
                        I certify that all shift patrol tasks have been carried out and documented accurately.
                      </label>
                    </div>
                  </div>

                  <div className={styles.modalFooter}>
                    <button className={styles.cancelBtn} type="button" onClick={handleCloseModal}>
                      Cancel
                    </button>
                    <button type="submit" className={styles.submitBtn}>
                      Submit Log Verification
                    </button>
                  </div>
                </form>
              )
            ) : (
              /* ================= SUCCESS STATE ================= */
              <div className={styles.modalBody}>
                <div className={styles.successContainer}>
                  <div className={styles.successIcon}>✓</div>
                  <h4 className={styles.successTitle}>Report Logged Successfully</h4>
                  <p className={styles.successDesc}>
                    Your operational data has been saved and records synchronized. Below is a summary of the transmission.
                  </p>

                  <div className={styles.summaryBox}>
                    {activeModal === "visit" ? (
                      <>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Report Type:</span>
                          <span className={styles.summaryVal}>Site Assessment (GHL Sync)</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Full Name:</span>
                          <span className={styles.summaryVal}>{visitForm.visitorName}</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Job Title:</span>
                          <span className={styles.summaryVal}>{visitForm.title}</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Phone Number:</span>
                          <span className={styles.summaryVal}>{visitForm.phone}</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Email Address:</span>
                          <span className={styles.summaryVal}>{visitForm.email}</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Contact Role:</span>
                          <span className={styles.summaryVal}>{visitForm.role}</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Decision-Maker:</span>
                          <span className={styles.summaryVal}>{visitForm.decisionMaker}</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Site Address:</span>
                          <span className={styles.summaryVal}>{visitForm.address}</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Industry:</span>
                          <span className={styles.summaryVal}>{visitForm.industry}</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Site Type:</span>
                          <span className={styles.summaryVal}>{visitForm.siteType}</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Pain Points:</span>
                          <span className={styles.summaryVal}>{visitForm.painPoints}</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Current Security:</span>
                          <span className={styles.summaryVal}>{visitForm.currentSecurity}</span>
                        </div>
                        {visitForm.photoAttach && (
                          <div className={styles.summaryRow}>
                            <span className={styles.summaryLabel}>Attached Files:</span>
                            <span className={styles.summaryVal}>{visitForm.photoAttach}</span>
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Report Type:</span>
                          <span className={styles.summaryVal}>Daily Close Out Log</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Officer:</span>
                          <span className={styles.summaryVal}>{closeoutForm.officerName}</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Site Location:</span>
                          <span className={styles.summaryVal}>{closeoutForm.siteName}</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Shift Date:</span>
                          <span className={styles.summaryVal}>{closeoutForm.shiftDate}</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Shift timing:</span>
                          <span className={styles.summaryVal}>{closeoutForm.shiftTiming}</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Total Hours:</span>
                          <span className={styles.summaryVal}>{closeoutForm.hoursWorked} hrs</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span className={styles.summaryLabel}>Incidents:</span>
                          <span className={styles.summaryVal}>{closeoutForm.incidents}</span>
                        </div>
                      </>
                    )}
                  </div>

                  <button className={styles.successCloseBtn} onClick={handleCloseModal}>
                    Dismiss & Back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
