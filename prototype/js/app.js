/**
 * QuadTask - 应用主逻辑
 * 处理应用的全局状态、存储和交互
 */

class QuadTaskApp {
    constructor() {
        this.tasks = [];
        this.currentView = 'home';
        this.selectedTask = null;
        this.init();
    }

    /**
     * 初始化应用
     */
    init() {
        this.loadTasks();
        this.setupEventListeners();
        this.render();
    }

    /**
     * 从LocalStorage加载任务
     */
    loadTasks() {
        const stored = localStorage.getItem('quadtask_tasks');
        if (stored) {
            try {
                this.tasks = JSON.parse(stored);
            } catch (e) {
                console.error('Failed to load tasks:', e);
                this.tasks = [];
            }
        } else {
            // 加载示例数据
            this.tasks = this.getDefaultTasks();
            this.saveTasks();
        }
    }

    /**
     * 保存任务到LocalStorage
     */
    saveTasks() {
        localStorage.setItem('quadtask_tasks', JSON.stringify(this.tasks));
    }

    /**
     * 获取默认任务数据
     */
    getDefaultTasks() {
        return [
            {
                id: '1',
                title: '完成项目提案',
                description: '完成Q4季度项目提案文档',
                quadrant: 'urgent-important',
                priority: 1,
                dueDate: new Date(Date.now() + 86400000).toISOString(),
                completed: false,
                createdAt: new Date().toISOString(),
                tags: ['工作', '紧急'],
                estimatedTime: 120,
                subtasks: []
            },
            {
                id: '2',
                title: '学习ArkTS框架',
                description: '深入学习HarmonyOS ArkTS开发',
                quadrant: 'not-urgent-important',
                priority: 2,
                dueDate: new Date(Date.now() + 604800000).toISOString(),
                completed: false,
                createdAt: new Date().toISOString(),
                tags: ['学习', '技能'],
                estimatedTime: 180,
                subtasks: []
            },
            {
                id: '3',
                title: '回复客户邮件',
                description: '回复待处理的客户邮件',
                quadrant: 'urgent-not-important',
                priority: 3,
                dueDate: new Date(Date.now() + 3600000).toISOString(),
                completed: false,
                createdAt: new Date().toISOString(),
                tags: ['客户', '沟通'],
                estimatedTime: 30,
                subtasks: []
            },
            {
                id: '4',
                title: '整理文件',
                description: '整理桌面和文件夹',
                quadrant: 'not-urgent-not-important',
                priority: 4,
                dueDate: new Date(Date.now() + 1209600000).toISOString(),
                completed: false,
                createdAt: new Date().toISOString(),
                tags: ['日常'],
                estimatedTime: 60,
                subtasks: []
            }
        ];
    }

    /**
     * 添加新任务
     */
    addTask(taskData) {
        const task = {
            id: Date.now().toString(),
            ...taskData,
            completed: false,
            createdAt: new Date().toISOString(),
            subtasks: []
        };
        this.tasks.push(task);
        this.saveTasks();
        return task;
    }

    /**
     * 更新任务
     */
    updateTask(taskId, updates) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            Object.assign(task, updates);
            this.saveTasks();
        }
        return task;
    }

    /**
     * 删除任务
     */
    deleteTask(taskId) {
        const index = this.tasks.findIndex(t => t.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            this.saveTasks();
        }
    }

    /**
     * 完成任务
     */
    completeTask(taskId) {
        const task = this.updateTask(taskId, { completed: true });
        this.showToast('任务已完成！', 'success');
        return task;
    }

    /**
     * 获取按象限分组的任务
     */
    getTasksByQuadrant(quadrant) {
        return this.tasks.filter(t => t.quadrant === quadrant && !t.completed);
    }

    /**
     * 获取所有象限的任务统计
     */
    getQuadrantStats() {
        return {
            'urgent-important': this.getTasksByQuadrant('urgent-important').length,
            'not-urgent-important': this.getTasksByQuadrant('not-urgent-important').length,
            'urgent-not-important': this.getTasksByQuadrant('urgent-not-important').length,
            'not-urgent-not-important': this.getTasksByQuadrant('not-urgent-not-important').length
        };
    }

    /**
     * 获取完成率
     */
    getCompletionRate() {
        if (this.tasks.length === 0) return 0;
        const completed = this.tasks.filter(t => t.completed).length;
        return Math.round((completed / this.tasks.length) * 100);
    }

    /**
     * 获取今日任务
     */
    getTodayTasks() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        return this.tasks.filter(t => {
            const dueDate = new Date(t.dueDate);
            dueDate.setHours(0, 0, 0, 0);
            return dueDate.getTime() === today.getTime() && !t.completed;
        });
    }

    /**
     * 获取本周任务
     */
    getWeekTasks() {
        const today = new Date();
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay());
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 7);

        return this.tasks.filter(t => {
            const dueDate = new Date(t.dueDate);
            return dueDate >= weekStart && dueDate < weekEnd && !t.completed;
        });
    }

    /**
     * 导出任务为JSON
     */
    exportTasks() {
        const data = {
            version: '1.0.0',
            exportDate: new Date().toISOString(),
            tasks: this.tasks
        };
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `quadtask-backup-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
        this.showToast('任务已导出', 'success');
    }

    /**
     * 导入任务从JSON
     */
    importTasks(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            if (data.tasks && Array.isArray(data.tasks)) {
                this.tasks = data.tasks;
                this.saveTasks();
                this.showToast('任务已导入', 'success');
                return true;
            }
        } catch (e) {
            this.showToast('导入失败，请检查文件格式', 'error');
            return false;
        }
    }

    /**
     * 显示吐司提示
     */
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    /**
     * 设置事件监听
     */
    setupEventListeners() {
        // 页面卸载时保存数据
        window.addEventListener('beforeunload', () => {
            this.saveTasks();
        });

        // 监听存储变化（多标签页同步）
        window.addEventListener('storage', (e) => {
            if (e.key === 'quadtask_tasks') {
                this.loadTasks();
                this.render();
            }
        });
    }

    /**
     * 渲染应用
     */
    render() {
        // 这个方法由各个页面独立实现
    }
}

// 创建全局应用实例
const app = new QuadTaskApp();

// 导出到全局作用域
window.QuadTaskApp = QuadTaskApp;
window.app = app;

