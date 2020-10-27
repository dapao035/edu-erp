<?phpnamespace app\common\model;use think\Db;class H5 extends BaseModel{    protected $table = 'h5';    function knowledge()    {        return $this->belongsToMany(Knowledge::class, 'knowledge_h5', 'knowledge_id', 'h5_id');    }    static function saveSingleKnowledgeRel($h5_id, $knowledge_id)    {        $map = compact('knowledge_id','h5_id');        Db::name('knowledge_h5')->where($map)->delete();        Db::name('knowledge_h5')->insert($map);    }    static function findRelKnowledgeIds($knowledge_id)    {        $map = compact('knowledge_id');        return Db::name('knowledge_h5')->where($map)->column('h5_id');    }    // 保存关联    static function saveKnowledgeRel(int $h5_id, array $knowledge_ids)    {        Db::name('knowledge_h5')->where(compact('h5_id'))->delete();        $insert = [];        foreach ($knowledge_ids as $id) {            $insert[] = [                'h5_id' => $h5_id,                'knowledge_id' => $id,            ];        }        Db::name('knowledge_h5')->insertAll($insert);    }    static function getList($where)    {        return self::where($where)->order('edit_time desc')->select();    }    static function getByKnowledge($knowledge)    {        if(empty($knowledge)) return [];        $k_ids = [];        foreach ($knowledge as $v) {            $k_ids[] = $v->id;        }        $h5_ids = Db::name('knowledge_h5')->where('knowledge_id','in', $k_ids)->column('h5_id');        if(empty($h5_ids)) return [];        return H5::where('id', 'in', $h5_ids)->select();    }}