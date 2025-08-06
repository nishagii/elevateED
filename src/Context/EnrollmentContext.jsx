import React, { createContext, useState, useContext } from 'react';

const EnrollmentContext = createContext();

export function EnrollmentProvider({ children }) {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const enrollInCourse = (course) => {
        setEnrolledCourses([...enrolledCourses, course]);
    };

    return (
        <EnrollmentContext.Provider value={{ enrolledCourses, enrollInCourse }}>
            {children}
        </EnrollmentContext.Provider>
    );
}

export function useEnrollment() {
    return useContext(EnrollmentContext);
}
