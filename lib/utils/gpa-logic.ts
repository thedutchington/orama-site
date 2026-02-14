export type Grade = 'A' | 'B' | 'C' | 'D' | 'F';
export type ClassType = 'Regular' | 'Honors' | 'AP' | 'IB';

export interface CourseEntry {
    id: string;
    name: string;
    grade: Grade;
    type: ClassType;
}

const GRADE_POINTS: Record<Grade, number> = {
    'A': 4,
    'B': 3,
    'C': 2,
    'D': 1,
    'F': 0,
};

const WEIGHT_BONUS: Record<ClassType, number> = {
    'Regular': 0,
    'Honors': 1,
    'AP': 1,
    'IB': 1,
};

export function calculateGPA(courses: CourseEntry[]) {
    if (courses.length === 0) return { unweighted: 0, weighted: 0 };

    let totalPointsUnweighted = 0;
    let totalPointsWeighted = 0;

    courses.forEach((course) => {
        const basePoints = GRADE_POINTS[course.grade];
        totalPointsUnweighted += basePoints;
        totalPointsWeighted += basePoints + WEIGHT_BONUS[course.type];
    });

    return {
        unweighted: Number((totalPointsUnweighted / courses.length).toFixed(2)),
        weighted: Number((totalPointsWeighted / courses.length).toFixed(2)),
    };
}
