import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { LearningPage } from './components/LearningPage';
import { SubCourseList } from './components/HomePage/SubCourseList';
import { LoginPage } from './components/Login/LoginPage';
import { AdminPage } from './components/Admin/AdminPage';
import { allCourses } from './data/courses';

function App() {
  return <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/admin" element={<AdminPage />} />
    <Route path="/" element={<HomePage />} />
    {allCourses.map(course => <Route key={course.id} path={`/courses/${course.id}`} element={<SubCourseList subCourses={course.subCourses} mainTitle={course.title} mainTitleEn={course.titleEn} />} />)}
    <Route path="/learn" element={<LearningPage />} />
  </Routes>;
}

export default App;
