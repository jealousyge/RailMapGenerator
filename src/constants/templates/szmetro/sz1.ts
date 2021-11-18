const params = {
    style: 'mtr',
    svg_height: 300,
    padding: 1.6100436053476448,
    y_pc: 40,
    branch_spacing: 45,
    theme: ['shenzhen', 'sz1', '#00B140', '#fff'],
    direction: 'l',
    current_stn_idx: 'tsu5',
    platform_num: '2',
    stn_list: {
        linestart: {
            parents: [],
            children: ['2n3c'],
            name: ['路綫左端', 'LEFT END'],
            branch: { left: [], right: [] },
            num: '00',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        lineend: {
            parents: ['tsu5'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            branch: { left: [], right: [] },
            num: '31',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '4yoy': {
            branch: { left: [], right: [] },
            parents: ['e5aw'],
            children: ['tsu5'],
            name: ['后瑞', 'Hourui'],
            num: '29',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        e5aw: {
            branch: { left: [], right: [] },
            parents: ['5hy5'],
            children: ['4yoy'],
            name: ['固戍', 'Gushu'],
            num: '28',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '5hy5': {
            branch: { left: [], right: [] },
            parents: ['9bwm'],
            children: ['e5aw'],
            name: ['西乡', 'Xixiang'],
            num: '27',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '9bwm': {
            branch: { left: [], right: [] },
            parents: ['huco'],
            children: ['5hy5'],
            name: ['坪洲', 'Pingzhou'],
            num: '26',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        huco: {
            branch: { left: [], right: [] },
            parents: ['bmk1'],
            children: ['9bwm'],
            name: ['宝体', "Bao'an Stadium"],
            num: '25',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        bmk1: {
            branch: { left: [], right: [] },
            parents: ['6uin'],
            children: ['huco'],
            name: ['宝安中心', 'Bao‘an Centre'],
            num: '24',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['shenzhen', 'sz5', '#A05EB5', '#fff', '5号线', 'Line 5']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '6uin': {
            branch: { left: [], right: [] },
            parents: ['6zky'],
            children: ['bmk1'],
            name: ['新安', 'Xingan'],
            num: '23',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '6zky': {
            branch: { left: [], right: [] },
            parents: ['9l7g'],
            children: ['6uin'],
            name: ['前海湾', 'Qianhaiwan'],
            num: '22',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['shenzhen', 'sz5', '#A05EB5', '#fff', '5号线', 'Line 5'],
                        ['shenzhen', 'sz11', '#672146', '#fff', '11号线', 'Line 11'],
                    ],
                ],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '9l7g': {
            branch: { left: [], right: [] },
            parents: ['un8f'],
            children: ['6zky'],
            name: ['鲤鱼门', 'Liyumen'],
            num: '21',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        un8f: {
            branch: { left: [], right: [] },
            parents: ['svif'],
            children: ['9l7g'],
            name: ['大新', 'Daxing'],
            num: '20',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        svif: {
            branch: { left: [], right: [] },
            parents: ['k6p4'],
            children: ['un8f'],
            name: ['桃园', 'Taoyuan'],
            num: '19',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['shenzhen', 'sz12', '#A192B2', '#fff', '12号线', 'Line 12']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        k6p4: {
            branch: { left: [], right: [] },
            parents: ['3yow'],
            children: ['svif'],
            name: ['深大', 'Shenzhen University'],
            num: '18',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['shenzhen', 'sz13', '#DE7C00', '#fff', '13号线', 'Line 13']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '3yow': {
            branch: { left: [], right: [] },
            parents: ['6qq5'],
            children: ['k6p4'],
            name: ['高新园', 'Hi-Tech Park'],
            num: '17',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '6qq5': {
            branch: { left: [], right: [] },
            parents: ['oeq6'],
            children: ['3yow'],
            name: ['白石洲', 'Baishizhou'],
            num: '16',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        oeq6: {
            branch: { left: [], right: [] },
            parents: ['45g2'],
            children: ['6qq5'],
            name: ['世界之窗', 'Window of the World'],
            num: '15',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['shenzhen', 'sz2', '#B94700', '#fff', '2号线', 'Line 2']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '45g2': {
            branch: { left: [], right: [] },
            parents: ['3ik5'],
            children: ['oeq6'],
            name: ['华侨城', 'OCT'],
            num: '14',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '3ik5': {
            branch: { left: [], right: [] },
            parents: ['inj5'],
            children: ['45g2'],
            name: ['侨城东', ' Qiaocheng East '],
            num: '13',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        inj5: {
            branch: { left: [], right: [] },
            parents: ['qfar'],
            children: ['3ik5'],
            name: ['竹子林', 'Zhuzilin'],
            num: '12',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        qfar: {
            branch: { left: [], right: [] },
            parents: ['hcfi'],
            children: ['inj5'],
            name: ['车公庙', 'Chegongmiao'],
            num: '11',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['shenzhen', 'sz7', '#0033A0', '#fff', '7号线', 'Line 7'],
                        ['shenzhen', 'sz9', '#7B6469', '#fff', '9号线', 'Line 9'],
                        ['shenzhen', 'sz11', '#672146', '#fff', '11号线', 'Line 11'],
                    ],
                ],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        hcfi: {
            branch: { left: [], right: [] },
            parents: ['x4wt'],
            children: ['qfar'],
            name: ['香蜜湖', 'Xiangmihu'],
            num: '10',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        x4wt: {
            branch: { left: [], right: [] },
            parents: ['l1z2'],
            children: ['hcfi'],
            name: ['购物公园', 'Shopping Park '],
            num: '09',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['shenzhen', 'sz3', '#00A9E0', '#fff', '3号线', 'Line 3']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        l1z2: {
            branch: { left: [], right: [] },
            parents: ['dul8'],
            children: ['x4wt'],
            name: ['会展中心', 'Convention Exhibition Center'],
            num: '08',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['shenzhen', 'sz4', '#DA291C', '#fff', '4号线', 'Line 4']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        dul8: {
            branch: { left: [], right: [] },
            parents: ['7m99'],
            children: ['l1z2'],
            name: ['岗厦', 'Gangxia'],
            num: '07',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['shenzhen', 'sz10', '#F8779E', '#fff', '10号线', 'Line 10']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '7m99': {
            branch: { left: [], right: [] },
            parents: ['dz4j'],
            children: ['dul8'],
            name: ['华强路', 'Huaqiang Rd'],
            num: '06',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        dz4j: {
            branch: { left: [], right: [] },
            parents: ['z1lf'],
            children: ['7m99'],
            name: ['科学馆', 'Science Museum'],
            num: '05',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['shenzhen', 'sz6', '#00C7B1', '#fff', '6号线', 'Line 6']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        z1lf: {
            branch: { left: [], right: [] },
            parents: ['dc3p'],
            children: ['dz4j'],
            name: ['大剧院', 'Grand Theater'],
            num: '04',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['shenzhen', 'sz5', '#A05EB5', '#fff', '5号线', 'Line 5']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        dc3p: {
            branch: { left: [], right: [] },
            parents: ['wzas'],
            children: ['z1lf'],
            name: ['老街', 'Laojie'],
            num: '03',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['shenzhen', 'sz3', '#00A9E0', '#fff', '3号线', 'Line 3']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        wzas: {
            branch: { left: [], right: [] },
            parents: ['2n3c'],
            children: ['dc3p'],
            name: ['国贸', 'Guomao'],
            num: '02',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '2n3c': {
            branch: { left: [], right: [] },
            parents: ['linestart'],
            children: ['wzas'],
            name: ['罗湖', 'Luohu'],
            num: '01',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['hongkong', 'eal', '#61B4E4', '#fff', '香港东铁线', 'HK East Rail Line']]],
            },
            services: ['local'],
            facility: 'hsr',
            secondaryName: false,
        },
        tsu5: {
            name: ['机场东', 'Airport East'],
            secondaryName: false,
            num: '30',
            services: ['local'],
            parents: ['4yoy'],
            children: ['lineend'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['shenzhen', 'sz12', '#A192B2', '#fff', '12号线', 'Line 12']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: 'disney',
        },
    },
    line_name: ['1号线', 'Line 1'],
    psd_num: '1',
    line_num: '1',
    info_panel_type: 'gz28',
    direction_gz_x: 50,
    direction_gz_y: 70,
    customiseMTRDest: { isLegacy: false, terminal: false },
    svgWidth: { destination: 1000, runin: 1000, railmap: 2500 },
    notesGZMTR: [],
    namePosMTR: { isStagger: true, isFlip: true },
};

export default params;
