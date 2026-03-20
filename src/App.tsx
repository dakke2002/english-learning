import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { LearningPage } from './components/LearningPage';
import { SubCourseList } from './components/HomePage/SubCourseList';
import { LoginPage } from './components/Login/LoginPage';
import { AdminPage } from './components/Admin/AdminPage';
import { allCourses } from './data/courses';

// 受保护的路由组件
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/" element={<HomePage />} />
      {/* 动态课程列表路由 */}
      {allCourses.map((course) => (
        <Route
          key={course.id}
          path={`/courses/${course.id}`}
          element={
            <ProtectedRoute>
              <SubCourseList
                subCourses={course.subCourses}
                mainTitle={course.title}
                mainTitleEn={course.titleEn}
              />
            </ProtectedRoute>
          }
        />
      ))}
      <Route path="/learn" element={
        <ProtectedRoute>
          <LearningPage />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
