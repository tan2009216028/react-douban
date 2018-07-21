module.exports = {
    apps: [{
        name: 'reactDouban',
        script: './build/onlineServer.js',
        log_date_format: 'YYYY-MM-DD HH：mm Z',
        max_memory_restart: '100M',
        exec_mode: 'cluster',
        output: "./logs/data_out.log",
        error: "./logs/data_error.log",
        merge_logs: true,
        instances: "max",
        watch: './react',
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }]
};
