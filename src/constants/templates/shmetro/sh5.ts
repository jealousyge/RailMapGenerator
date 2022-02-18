const params = {
    style: 'shmetro',
    svg_height: 450,
    padding: 8.750201061605276,
    y_pc: 40,
    branch_spacing: 45,
    theme: ['shanghai', 'sh5', '#AC4FC6', '#fff'],
    direction: 'r',
    current_stn_idx: 'iwf6',
    platform_num: false,
    stn_list: {
        linestart: {
            parents: [],
            children: ['iwf6'],
            name: ['路綫右端', 'RIGHT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            num: '00',
            facility: '',
            secondaryName: false,
        },
        lineend: {
            parents: ['951r', 'sd6y'],
            children: [],
            name: ['路綫左端', 'LEFT END'],
            branch: { left: ['through', '951r'], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            num: '00',
            facility: '',
            secondaryName: false,
        },
        l1mz: {
            parents: ['iwf6'],
            children: ['qzjx'],
            name: ['春申路', 'Chunshen Road'],
            branch: { left: [], right: [] },
            num: '02',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        iwf6: {
            children: ['l1mz'],
            parents: ['linestart'],
            name: ['莘庄', 'Xinzhuang'],
            branch: { left: [], right: [] },
            num: '01',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['shanghai', 'sh1', '#e4002b', '#fff', '1号线', 'Line 1']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        jsat: {
            parents: ['qzjx'],
            children: ['srpy'],
            branch: { left: [], right: [] },
            name: ['颛桥', 'Zhuanqiao'],
            num: '00',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        srpy: {
            parents: ['jsat'],
            children: ['x9gu'],
            branch: { left: [], right: [] },
            name: ['北桥', 'Beiqiao'],
            num: '00',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        x9gu: {
            parents: ['srpy'],
            children: ['k9k5'],
            branch: { left: [], right: [] },
            name: ['剑川路', 'Jianchuan Road'],
            num: '00',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        k9k5: {
            parents: ['x9gu'],
            children: ['6pzd', 'j2kn'],
            branch: { left: [], right: ['through', '6pzd'] },
            name: ['东川路', 'Dongchuan Road'],
            num: '00',
            services: ['local'],
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            facility: '',
            secondaryName: false,
        },
        j2kn: {
            parents: ['k9k5'],
            children: ['lcgp'],
            branch: { left: [], right: [] },
            name: ['江川路', 'Jiangchuan Road'],
            num: '00',
            services: ['local'],
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            facility: '',
            secondaryName: false,
        },
        kaxg: {
            parents: ['wbtv'],
            children: ['7x7k'],
            branch: { left: [], right: [] },
            name: ['环城东路', 'Huanchengdong Road'],
            num: '00',
            services: ['local'],
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            facility: '',
            secondaryName: false,
        },
        sd6y: {
            parents: ['qnbj'],
            children: ['lineend'],
            branch: { left: [], right: [] },
            name: ['奉贤新城', 'Fengxian Xincheng'],
            num: '00',
            services: ['local'],
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [['車站名', 'Stn Name']], info: [[], []] },
            facility: '',
            secondaryName: false,
        },
        jjh7: {
            children: ['wbtv'],
            parents: ['lcgp'],
            branch: { left: [], right: [] },
            name: ['萧塘', 'Xiaotang'],
            num: '00',
            services: ['local'],
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            facility: '',
            secondaryName: false,
        },
        '7x7k': {
            children: ['qnbj'],
            parents: ['kaxg'],
            branch: { left: [], right: [] },
            name: ['望园路', 'Wangyuan Road'],
            num: '00',
            services: ['local'],
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            facility: '',
            secondaryName: false,
        },
        qnbj: {
            name: ['金海湖', 'Jinhai Lake'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['7x7k'],
            children: ['sd6y'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        lcgp: {
            name: ['西渡', ' Xidu'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['j2kn'],
            children: ['jjh7'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        wbtv: {
            name: ['奉浦大道', 'Fengpu Avenue'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['jjh7'],
            children: ['kaxg'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        qzjx: {
            name: ['银都路', 'Yindu Road '],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['l1mz'],
            children: ['jsat'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        '6pzd': {
            name: ['金平路', 'Jinping Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['k9k5'],
            children: ['xz8y'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        '951r': {
            name: ['闵行开发区', 'Minhang Development Zone'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['a7x9'],
            children: ['lineend'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        xz8y: {
            name: ['华宁路', 'Huaning Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['6pzd'],
            children: ['a7x9'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        a7x9: {
            name: ['文井路', 'Wenjing Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['xz8y'],
            children: ['951r'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
    },
    line_name: ['5号线', 'Line 5'],
    psd_num: '1',
    line_num: '5',
    info_panel_type: 'sh',
    direction_gz_x: 50,
    direction_gz_y: 70,
    customiseMTRDest: { isLegacy: false, terminal: false },
    svgWidth: { destination: 1500, runin: 1500, railmap: 1500, indoor: 1500 },
    notesGZMTR: [],
    namePosMTR: { isStagger: true, isFlip: false },
    coline: [],
};

export default params;
