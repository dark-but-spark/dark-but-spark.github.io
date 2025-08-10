import os

def generate_cover_links(directory):
    """
    遍历指定目录并生成相应格式的字符串序列。
    
    :param directory: 要遍历的目录路径
    """
    # 检查目录是否存在
    if not os.path.exists(directory):
        print(f"目录 {directory} 不存在")
        return
    
    # 获取目录下的所有文件名（不递归子目录）
    try:
        files = os.listdir(directory)
    except PermissionError:
        print(f"无法访问目录 {directory}")
        return
    
    # 筛选出文件（排除子目录）
    files = [f for f in files if os.path.isfile(os.path.join(directory, f))]
    
    # 根据文件名生成所需的输出序列
    for file_name in files:
        print(f"- ./covers/{file_name}")

if __name__ == "__main__":
    # 定义要遍历的目录，默认为当前目录下的 'covers' 文件夹
    covers_directory = 'source/_data/covers'
    generate_cover_links(covers_directory)